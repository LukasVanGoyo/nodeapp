import '../styles/Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return(
    <nav className="nav-container">
      <ul className="nav">

           <li className="nav-item"><Link to={'/'} className="nav-link"> Sklep </Link></li>
            <li className="nav-item"><Link to={'/blog'} className="nav-link">Blog</Link></li>
            <li className="nav-item"><Link to={'/przepisy'} className="nav-link">Przepisy</Link></li>
            <li className="nav-item"><Link to={'/quiz'} className="nav-link">Quiz</Link></li>
            <li className="nav-item"><Link to={'/o_nas'} className="nav-link">O nas</Link></li>

      </ul>
    </nav>
    )



}

export default Nav;