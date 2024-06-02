import './Nav.scss'
import icon from '../../assets/Logo.svg'
import sign_in from '../../assets/Sign_In.svg'
import sign_up from '../../assets/Sign_Up.svg'

export default function Nav(){
    return(
        <>
        <div id='nav-login'>
            <img src={icon} alt="" />
                <div className='options-nav-login'>
                <img src={sign_in} alt="" />
                <img src={sign_up} alt="" />
            </div>
        </div>
        </>
    )
}