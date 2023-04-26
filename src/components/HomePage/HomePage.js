import './HomePage.scss'
import { Link } from 'react-router-dom';
function HomePage() { 
    return ( 
        <>
            <div className='outerDiv'>
                <div className='div1'>
                    <p>Welcome to London's finest Ice Cream Store!</p>
                </div>
                <div className='div2'>
                    <img
                        src={"https://images.pexels.com/photos/749102/pexels-photo-749102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                        alt="ice-cream"
                        height="200"
                    />
                    <p>Feel the Coolness in the Summer's Heat.</p>
                </div>
                <div className='div3'>
                    <img
                        src={require('../../image.png')}
                        alt="ice-cream"
                        height="200"
                    />
                    <div className='article'>
                        <h3>Keep in Touch!</h3>
                        <p>We have been improving our products for a while. Now you can easily check them on our website. It is our duty to serve you the best!</p>
                        <Link to={'/menu'} className='menuRoute'>Check the Menu</Link>
                    </div>
                </div>
            </div>
        </>
    ); 

} 

export default HomePage;