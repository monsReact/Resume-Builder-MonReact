import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState ,useRef} from "react";
import "./MobNav.css"
function MobNav()
{
    const [showMenu,setShowMenu]=useState(false)
  //if we load this page first useEffect and it change when also pagetype change it call change color 
    function change(event)
    {
     const arr=document.getElementsByClassName("Mobclicked")
     if(arr.length!==0)
     {
       
        arr[0].classList.remove("Mobclicked")
        event.target.classList.add("Mobclicked")
     }
    }
    return(
        <nav className='MobNav'>
             <FontAwesomeIcon icon={faBars} onClick={()=>setShowMenu(!showMenu)} 
    color="navy"/>
                {showMenu&&(
                <div className='MobNavContent'>
               <img src="https://i.pinimg.com/564x/9f/ed/b6/9fedb6684c3b442d9583724d08e1a14d.jpg" width='60' height='60'/>
               <div className='MobNavLinks'>
               <Link to="/" className='MobNavLink Mobclicked'id="home" onClick={change}>Home</Link> 
               <Link to="/Resume" className='MobNavLink' id="resume"onClick={change}>Resume</Link> 
               <Link to="/Cover" className='MobNavLink'id='cover'onClick={change}>Cover Letter</Link> 
               <Link to="/About" className='MobNavLink' id='about'onClick={change} >About</Link> 
            </div>
            </div>)}
        </nav>
    )

}
export default MobNav