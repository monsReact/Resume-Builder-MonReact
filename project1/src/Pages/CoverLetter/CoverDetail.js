import './CoverDetail.css';
import Nav from '../../Component/Navigation/Navigate'
import CoverInputForm from '../../Component/PersonalInfo/ShowCover';

function CoverScreen() {
   
    return (
          
        <div className="CoverDetail">
          <Nav pagetype='cover' />
          <h1 class="HeadCover">Create your Cover Letter</h1>
          <p class="bodyCover">Let's start</p>
          <CoverInputForm/>
        </div>
    )
};

export default CoverScreen