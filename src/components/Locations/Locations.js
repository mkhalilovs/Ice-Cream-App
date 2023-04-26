import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import './Location.scss'

function Locations() { 
    return ( 
        <>
            <div className="bigDiv">
                <div className="innerDiv">
                    <h2>Here's our locations:</h2>
                    <div>
                       <h3>London North</h3>
                       <p><IoLocationSharp />832 Diamond Street</p>
                       <p><BsFillTelephoneFill />(123) 345-6789</p>
                       <hr />
                    </div>
                    <div>
                        <h3>London West</h3>
                        <p><IoLocationSharp />77 Fletcher Avenue</p>
                        <p><BsFillTelephoneFill />(987) 654-3210</p>
                        <hr />
                    </div>
                    <div>
                        <h3>South London</h3>
                        <p><IoLocationSharp />1012 Silent Hill Drive</p>
                        <p><BsFillTelephoneFill />(222) 222-2222</p>
                        <hr />
                    </div>
                    <div>
                        <h3>Argyle</h3>
                        <p><IoLocationSharp />831 McMahan Street</p>
                        <p><BsFillTelephoneFill />(555) 555-5555</p>
                        <hr />
                    </div>
                    <div>
                        <h3>Carling</h3>
                        <p><IoLocationSharp />1100 Winsdor Street</p>
                        <p><BsFillTelephoneFill />(777) 777-7777</p>
                        <hr />
                    </div>
                </div>
                <img
                    src={'https://www.google.com/maps/d/thumbnail?mid=11xKGPn1vuCx2qhXJZtNbXAOMn94&hl=en'}
                    alt="location"
                />
            </div> 
        </>
    ); 

} 

export default Locations;