import '../styles/TopNav.css';
import { Nav } from 'react-bootstrap';
import z from '../assets/logozielone.png'
import c from '../assets/logoczarne.png'
import b from '../assets/logobiale.png'
const TopNav = () => {
	return(
		<div className="top_nav">
		
		<Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>

<img src={b} className="logo" />
<img src={c} className="logo" />
<img src={z} className="logo" />


<div className="jadzia"> Jadzia </div>
		</div>
		);
}

export default TopNav;