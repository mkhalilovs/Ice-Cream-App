import { db } from "../../database/config";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import "./ContactUs.scss"

function ContactUs() { 

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
     
    const saveData = async () => {
        try {
            await addDoc(collection(db, "senderDetails"), {
                name: name,
                email: email,
                message: message
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        setName('');
        setEmail('');
        setMessage('');
    }



    return ( 
        <>  
            <div className="biggerDiv">
                <div className="headerDiv">
                   <h2>Contact methods</h2>
                   <p>Please feel free to contact us at any time you want. Our customers' opinions matter for us. We are here to serve you. Please choose the suitable method to contact!</p>
                    <div>
                        <h3>Our phone number for customer service:</h3>
                        <p><BsFillTelephoneFill />(223) 123-1234</p>
                    </div>
                    <div>
                        <h3>Email:</h3>
                        <p><TfiEmail />thegrandice@email.ca</p>
                    </div>
                </div>
                <hr />
                <div className="formDiv">
                    <form>
                        <h3>You can also send a message directly to our system by filling the form!</h3>
                
                            <label>
                                Name:
                                <input 
                                    type="text" 
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required />
                            </label>
                        
                        
                            <label>
                                Email:
                                <input 
                                    type="text" 
                                    name="email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required />
                            </label>
                        
                        
                            <label>
                                Your message:
                                <textarea 
                                    type="text" 
                                    name="message" 
                                    rows="2" 
                                    columns="70"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required />
                            </label>
                            
                        </form>
                        <input type="submit" className="submit" value="Submit" onClick={saveData} />
                    </div>
            </div>

        </>
    ); 

} 

export default ContactUs;