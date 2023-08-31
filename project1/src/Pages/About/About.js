import Nav from "../../Component/Navigation/Navigate"
import AboutDetails from "./Sub/AboutDetails/AboutDetails"
import Team from "./Sub/Team/Team"
import Mission from "./Sub/Mission/Mission"
import Future from "./Sub/Future/Future"
function About()
{
    return (
        <div>
         <Nav pagetype='about' />
         <AboutDetails/>
         <Team/>
         <Mission/>
         <Future/>
        </div>
    )
}
export default About