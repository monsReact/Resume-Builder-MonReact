import {Link} from "react-router-dom"
import './Button.css'
 function PageButton()
 {
    return(
       <div className="PageButton">
        <h1 className="PagesHeader">Services We Offer</h1>
        <p className="Pagespara">We offer these Services for you.</p>
        <div className="Service">
        <div className="ServiceContent">
            <img src="https://bomstart.my/wp-content/uploads/2020/06/17.png" width="100%" height="250"/>
            <h3>Building Resumes</h3>
            <p>We help you to build your own Resume by doing a quiz about your information. </p>
        </div>
        <div  className="ServiceContent">
        <img src="https://i.pinimg.com/736x/89/3b/0f/893b0fc6853b81befa2c221218e9ea47.jpg" width="100%" height="250"/>
        <h3> Building Cover Letters</h3>
        <p>We also offer to build your own Cover Letter by doing a samll quiz. </p>
        </div>
        <div  className="ServiceContent">
        <img src="https://i0.wp.com/smashresume.com/wp-content/uploads/edd/2018/01/Creative-Clean-Resume.jpg?resize=1000%2C750&ssl=1" width="100%" height="250"/>
        <h3>Coming Soon</h3>
        <p>we are planning to make more templates for Resume and Cover Letters. </p>
        </div>
        </div>
       </div>
    )
 }
 export default PageButton
