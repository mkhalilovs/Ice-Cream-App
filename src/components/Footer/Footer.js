import { AiOutlineFacebook, AiOutlineInstagram, AiFillTwitterSquare } from "react-icons/ai";
import "./Footer.scss"

function Footer() { 
    return ( 
        <>
            <div className="footerDiv">
                <div className="logos">
                    <AiOutlineFacebook />
                    <AiOutlineInstagram />
                    <AiFillTwitterSquare />
                </div>
                <div className="copyright">
                    <p>© 2023 The Grand Ice Cream</p>
                </div>
            </div>
        </>
    ); 

} 

export default Footer;