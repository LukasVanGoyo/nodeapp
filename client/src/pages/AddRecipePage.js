import { useState, useEffect } from 'react';
import axios from 'axios';

const IngredientBatch = ({text, onClick, value}) => {
  return (

    <div className="add-recipe-ingredient-batch">{text}

    <button type="button" value={value} name={text} className="delete-ingredient-span" onClick={ onClick }>X</button>

    </div>
    )
}

const StepBatch =({text, onRemove, value})=>{
  return(
    <div className="add-recipe-preparation-batch">{text}<button type="button" value={value} name={text} className="delete-prep-span" onClick={onRemove}>X</button><span className="step-span">Krok {value + 1}: </span></div>
    )
}


const AddRecipePage = () => {

    const InitialState = {
      title: '',
      desc: '',
      category: ''
    }

    const[recipe, setRecipe] = useState(InitialState)
    const[ingredient, setIngredient] = useState('')
    const[ingredients, setIngredients] = useState([])
    const[prepStep, setPrepStep] = useState('')
    const[preparation, setPreparation] = useState([])


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRecipe(values => ({...values, [name]: value}))
      }

    const deleteIngredient = (e) => {
        let index = e.target.value
        const newArray = [...ingredients]
        newArray.splice(index, 1);
        setIngredients(newArray)
      }

    const deleteStep = (e) => {
      let index = e.target.value
        const newArray = [...preparation]
        newArray.splice(index, 1);
        setPreparation(newArray)
    }
    const addIng = () => {
      if(ingredient.trim() === ''){
        return;
      }
      else{
        setIngredients([...ingredients, ingredient])
      setIngredient('')
      }

    }

    const updateIngredient = (e) => {
      setIngredient(e.target.value)
    }


    const addPrepStep = () => {
      if(prepStep.trim() === ''){
        return;
      }
      else{
        setPreparation([...preparation, prepStep])
      setPrepStep('')
      }
    }

    const updatePreparation = (e) =>{
      setPrepStep(e.target.value)
    }
    const onSubmit = () => {

    let newRecipe = {
      title: recipe.title,
      description: recipe.desc,
      ingredients: ingredients,
      preparation: preparation
    }
      axios.post('http://localhost:3003/api/recipes/add', newRecipe)
        .then((response) => {
          console.log(response.data)
  		  }
      )}


        return(
          <div className="add-recipe-page-wrapper">

            <form className="add-recipe-form">
              <h3 className="add-recipe-page-title">Dodaj przepis</h3>
              <div className="add-recipe-form-group">
                <label className="add-recipe-label">Tytuł</label>
                <input name="title" onChange={handleChange} value={recipe.title} className="add-recipe-input" placeholder="Podaj tytuł swojego przepisu" />
              </div>

              <div className="add-recipe-form-group">
                <label className="add-recipe-label">Krótki opis</label>
                <textarea name="desc" onChange={handleChange} value={recipe.desc} className="add-recipe-input" placeholder="Napisz kilka zdań na temat Twojego przepisu." ></textarea>
              </div>


              <div className="add-recipe-form-group">
                <label  className="add-recipe-label"> Dodaj Składnik </label>
                <input onChange={updateIngredient} value={ingredient} className="add-recipe-input" />
                <button className="add-recipe-btn add-recipe-ingredient-btn" type="button" onClick={addIng}>Dodaj składnik</button>
              </div>

              <div className="add-recipe-form-group">
                {ingredients.map((ing, i) => {
                  return(
                    <IngredientBatch text={ing} onClick={deleteIngredient} value={i} />
                    )
                })}
              </div>

              <div className="add-recipe-form-group">
                <label  className="add-recipe-label"> Dodaj sposób przygotowania (krok {preparation.length +1}) </label>
                <input onChange={updatePreparation} value={prepStep} className="add-recipe-input" />
                <button className="add-recipe-btn add-recipe-preparation-btn" type="button" onClick={addPrepStep}>Dodaj krok</button>
              </div>

              <div className="add-recipe-form-group">
                {preparation.map((p, i) => {
                  return(
                    <StepBatch text={p} value={i} onRemove={deleteStep} />
                    )
                })}
              </div>

              <button className="add-recipe-btn add-recipe-submit-btn" onClick={onSubmit} type="button">Dodaj przepis</button>

            </form>


          </div>
  )


    }




export default AddRecipePage;