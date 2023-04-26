import * as database from "../../database";
import { useState, useEffect } from "react";
import './Menu.scss'

function Menu() { 

    const [items, setItems] = useState([]);


    useEffect(() => {
        database.loadFromFirebase().then((data) => {
          setItems(data);
        }).catch((error) => {
          console.log(error);
        });
    }, []);

    
    return ( 
        <>
            <div className="outerD">
                <div className="header">                
                    <h2>Discover our menu!</h2>
                </div>
                <div className="items">
                    {items.map((item) => (
                        <div key={item.id}>
                            <img
                                src={item.picLink}
                                alt="ice-cream"
                            />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>$ {item.price}</p>
                            
                        </div>     
                    ))}
                </div>
            </div>
        </>
    ); 

} 


export default Menu;