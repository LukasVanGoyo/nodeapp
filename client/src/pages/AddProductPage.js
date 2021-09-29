import { useForm } from "react-hook-form";
import { useState, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

const AddProductPage = () => {
	

	const [data, setData]  = useState([]);
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
  	const onSubmit = (data) => {
  		axios.post('http://localhost:3003/api/products/add', data)
  		.then((response) => {
			console.log(response.data)
			setData(response.data)
		})
  		
  		reset();
  	};

	return(
		<>
<h2>Dodaj nowy produkt</h2>
{ data.name }
<Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group>
    <Form.Label>Nazwa produktu</Form.Label>
    <Form.Control type="text"  {...register("name", { required: true})} />
    {errors.name?.type === 'required' && "To pole jest wymagane"}
  </Form.Group>

    <Form.Group>
    <Form.Label>Opis</Form.Label>
    <Form.Control type="text"  {...register("description")} />
  </Form.Group>

    <Form.Group>
    <Form.Label>Kategoria</Form.Label>
    <Form.Control as="select"  {...register("category")} >
    <option default >Konfitury</option>
    <option>Nalewki</option>
    <option>Dżemy</option>
    <option>Wina</option>
    <option>Warzywa</option>
</Form.Control>
  </Form.Group>

<Form.Group>
    <Form.Label>Cena</Form.Label>
    <Form.Control type="number" step="any"   {...register("prize")} />     
  </Form.Group>

   <Form.Group>
    <Form.File label="Example file input"  type="file" {...register("image")}/>
  </Form.Group>


<Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
		
		</>
		)
}

export default AddProductPage;