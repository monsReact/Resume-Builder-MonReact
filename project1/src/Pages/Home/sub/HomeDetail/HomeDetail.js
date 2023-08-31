import './HomeDetail.css'
import Nav from '../../../../Component/Navigation/Navigate'
import {Link} from "react-router-dom"

function HomeDetail()
{
   return ( 

   <div className="HomeDetail">
   <Nav pagetype='home' />
   <h1 className="HomeLogo">MonsReact</h1>
    <h1 className="HomeHeader">Online Resume Builder</h1>
    <div className="HomeSection">
        <div className="HomeParag"><p>Are you want to make a professional Resume?</p>
            <p>You are in the right way. We can help you to build your own Resume and also a cover letter. It is Free</p>   
            
            </div>
        <img src="https://www.mobildev.com/admin/images/ivt-musterilerinize-ulasirken-cezalardan-korkmayin.png" className="HomeImage"/>
    </div>
    <Link to='/Resume' className="ResumeButton" title='Clich here to create your own resume'>Create Your Resume</Link>
</div>)
}
export default HomeDetail
