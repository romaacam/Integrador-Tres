
import imagen from '../assets/img/logo.png';
import twitter from '../assets/img/Twitter.png';
import facebook from '../assets/img/Facebook.png';
import instagram from '../assets/img/Instagram.png';


const Footer = () => {

    return  (

        <>

            <footer className='footer'>

                <div className='footer__logo'>
                    <img src={imagen} alt='logo' />
                </div>

                <div className='redesSociales'>
                    <img src={facebook} alt='Facebook' />
                    <img src={instagram} alt='Instagram' />
                    <img src={twitter} alt='X' />
                </div>

                <div className='textoFinal'>
                    <h4>Copyright © Electronigencia 2024</h4>
                </div>
                    
            </footer>
        </>
    )
}
/*
*/

export default Footer;