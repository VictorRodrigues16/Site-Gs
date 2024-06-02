import './Nav.scss'
import icon from '../../assets/Logo.svg'
import sign_in from '../../assets/Sign_In.svg'
import sign_up from '../../assets/Sign_Up.svg'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <>
        <div id='nav-login'>
            <img src={icon} alt="" />
                <div className='options-nav-login'>
                <Link className='link' to='/Login'><img src={sign_in} alt="" /></Link>
                <Link className='link' to='/Cadastro'><img src={sign_up} alt="" /></Link>
                
            </div>
        </div>
        </>
    )
}