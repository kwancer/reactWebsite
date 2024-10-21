import { FaReact } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer" style={{marginTop:"2%", textAlign: "center"}}>
            <hr />
            <a href="/about" style={{textDecoration: "none", color: "inherit"}}>
                <p>Made by Krzysztof Wancerski in 2024 |<FaReact style={{marginLeft: "10px"}} /></p>
            </a>
        </div>
    )
}

export default Footer;