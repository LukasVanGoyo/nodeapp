import './App.css';
import HomePage from './pages/HomePage.js';
import Brand from './components/Brand.js'
import Nav from './components/Nav.js'
import TopNav from './components/TopNav.js'
import Quiz from './pages/Quiz.js'
import AddQuestionPage from './pages/AddQuestionPage.js'
import Blog from './pages/Blog.js'
import Shop from './pages/Shop.js'
import Recipes from './pages/Recipes.js'
import RegisterForm from './components/RegisterForm.js';
import Slider from './components/Slider.js'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
  	<Router>
      <div className="App">
        <TopNav />
        <Brand />
        <Nav />
        <Slider />
      <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/sklep' component={Shop} />
              <Route path='/przepisy' component={Recipes} />
              <Route path='/blog' component={Blog} />
              <Route path='/o_nas' component={AddQuestionPage} />
              <Route path='/quiz' component={AddQuestionPage} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
