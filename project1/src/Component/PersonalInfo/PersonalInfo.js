import React, { useEffect, useRef} from 'react';
import './PersonalInfo.css';
import ReactToPrint from 'react-to-print';
function CoverTemplate({generateNew}) {
	const componentRef = useRef();
	const formData = JSON.parse(localStorage.getItem('formData'));
	useEffect(() => {
		document.getElementById('profileImage').style.backgroundImage = `url(data:image/png;base64,${formData[0]?.image})`;
	}, [])

  return (
    <div className="wrapper">
      <div className="download">
        <button className="generateNew" onClick={() => {
			generateNew();
			window.location.reload(false)
		}}>Generate New</button>
		<ReactToPrint trigger={() => <button className="generateNew">Download</button>
		}content={() => componentRef.current}/>
      </div>
		<div className="cover" id="cover" ref={componentRef}>
			<div className="left">
				<div className="img_holder">
					<img className="imageClass" id="profileImage" alt="" />  
				</div>
				<div className="contact_wrap pb">
					<div className="title" style={{ color: '#fff' }}>
						Contact
					</div>
					<div className="contact">
						<ul>
							<li>
								
									<div className="icon"><label>Phone: </label></div>
									<div className="text">{formData[0].phone}</div>
							</li>
							<li>
									<div className="icon"><label>Email: </label></div>
									<div className="text">{formData[0].email}</div>
							</li>
							<li>
									<div className="icon"><label>Address: </label></div>
									<div className="text">{formData[0].address}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="right">
				<div className="header">
					<div className="name_role">
						<div className="name" style={{ color: '#e0ffff' }}>
						 	{formData[0].fname} {formData[0].lname}
						</div>
						<div className="role">
							{formData[0].role}
						</div>
					</div>
                </div>
					<div className="about">
						{formData[0].Greeting}
					</div>
                    <div className="Intro1">
                        {formData[0].Intro}
                    </div>
                    <div className="Detail1">
                        {formData[0].Detail}
                    </div>
                    <div className="Conc1">
                        {formData[0].Conc}
                    </div>
                    <div className="about">
                        {formData[0].Yours}
                    </div>
			</div>
		</div>
	</div>
  );
}

export default CoverTemplate;