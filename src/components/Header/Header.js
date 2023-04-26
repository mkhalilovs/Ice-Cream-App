import { Link } from 'react-router-dom';
import './Header.scss';

function Header() { 
    return ( 
        <>
            
            <header>
                <Link to="/">
                    <div className='innerDiv'>
                        <img src={require('../../logo.png')} alt="logo" style={{width: 100, height: 100}}/>
                        <h2>The Grand Ice Cream</h2>
                    </div>
                </Link>
                
                <nav className="menuNav">  
                    <Link to="/menu">Menu</Link> 
                    <Link to="/locations">Locations</Link> 
                    <Link to="/contact-us">Contact Us</Link> 
                </nav> 
            </header> 
        </>
    ); 

} 

export default Header;