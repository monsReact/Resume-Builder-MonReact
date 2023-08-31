import {Link} from 'react-router-dom'
import './Navigate.css'
import { useRef,useEffect } from 'react'
import { getActiveElement } from '@testing-library/user-event/dist/utils'
function Nav({pagetype})
{
  const relink=useRef()
  const Navigate=useRef()

  //if we load this page first useEffect and it change when also pagetype change it call change color 
  useEffect(()=>{
       changeColor(document.getElementById(`${pagetype}`))
    
  },[pagetype])
    function changeColor(target)
    {
       relink.current.classList.remove('clicked')  
         relink.current= target
         relink.current.classList.add('clicked') 
         if(pagetype==="home")
             Navigate.current.style.backgroundImage=`url("https://th.bing.com/th/id/R.f218e4064c3cca1c562e56b10d7ad406?rik=mXu%2fRW5Q5D2N4Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f04%2fBlue-simple-wallpaper-nackgrounds-download.jpg&ehk=cmjUMBBlPx2x0nW9TpdoxK88a%2bdHPljL7d7Gaxuur5A%3d&risl=&pid=ImgRaw&r=0")`
        else if(pagetype==="about")
             Navigate.current.style.backgroundImage=`url("https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/371375531_609438221372465_1240514591318611165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=-lROUIW3zC4AX83R3lf&_nc_ht=scontent.fcai19-6.fna&oh=03_AdTiudYd-r9H8fVapLABnE-e1awIE-0whmwn_li_M8y6SA&oe=6515B5F4")`
         else
             Navigate.current.style.backgroundImage=`url("https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/372165214_622578979996861_6221465436537748411_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=z-wqEaKdf78AX-bYRzA&_nc_ht=scontent.fcai19-6.fna&oh=03_AdQSs7aw1K5a0wEIJ0ieOI9BHdngjIwWWV6qOWM04kb_rg&oe=65146F1D")`

    }
    return(
        <nav className='NavContent' ref={Navigate}>
            <img src="https://i.pinimg.com/564x/9f/ed/b6/9fedb6684c3b442d9583724d08e1a14d.jpg" width='60' height='60'/>
            <div className='NavLinks'>
               <Link to="/" className='NavLink clicked 'id="home" ref={relink} >Home</Link> 
               <Link to="/Resume" className='NavLink ' id="resume">Resume</Link> 
               <Link to="/Cover" className='NavLink 'id='cover'>Cover Letter</Link> 
               <Link to="/About" className='NavLink ' id='about' >About</Link> 
            </div>
        </nav>
    )
}
export default Nav