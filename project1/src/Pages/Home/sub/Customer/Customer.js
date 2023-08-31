import "./Customer.css"
function Customer()
{
return(
    <div className="Customer">
      <h1 className="PagesHeader">What Customers Say About Us</h1>
      <p className="Pagespara">These are the opinions of our customers about our service.</p>
      <div className="CustomerContent">
        <div className="CustomerOpinion">
            <div className="CustomerStar">
               <img src="https://i.pinimg.com/564x/dc/08/fa/dc08fac50192da8a9a427eb1d2c5bd76.jpg" width="60" height="60" className="CustomerImg"/>
                <div className="nameandStar">
                    <h6>Mariam</h6>
                    <img src="https://brookevillepressurecleaning.com/wp-content/uploads/2019/09/5-stars.png"width="70" height="25"/>
                </div>
              </div>
              <p>I am so glad to use this Resume Builder .It is very easy and I made my Resume in 15 minutes.</p>

        </div>
        <div className="CustomerOpinion">

           <div className="CustomerStar">
                <img src="https://i.pinimg.com/564x/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg"width="60" height="60" className="CustomerImg"/>
                    <div className="nameandStar"> 
                    <h6>Daniel</h6>
                    <img src="https://th.bing.com/th/id/R.087e87a9be56f68f3f7fa5272525c16e?rik=HZ830DcE6%2b2iVw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-yweCgC7E_BM%2fVoNMHXaKdTI%2fAAAAAAAAKnc%2f3WWAOKc8tMU%2fs200%2f4-out-of-5-stars.jpg&ehk=pm8wIO8eyVkKzQOhf2EGg6AAiRyHawtNQnnDeY0Y8kE%3d&risl=&pid=ImgRaw&r=0"width="70" height="25"/>
                    </div>
            </div>
            <p>I received positive comments on my Resume and my Cover Letter. I certainly recommend MonsReact!</p>
        </div>
         <div className="CustomerOpinion">

            <div className="CustomerStar">      
                <img src="https://i.pinimg.com/564x/7c/1b/46/7c1b461a97c9e8d93fc25807074cf2e9.jpg" width="60" height="60" className="CustomerImg"/>
                    <div className="nameandStar">
                    <h6>Laila</h6>
                    <img src="https://th.bing.com/th/id/R.886d100c367a231b648d7f4f9c9a7b09?rik=eHvJVmYIArPHnA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-JaBy4CXjPY0%2fVoNWDWswdEI%2fAAAAAAAAKoE%2fWilLfPx3pk4%2fs200%2ffour_quarter-stars_0.jpg&ehk=miIFCz2q6b%2bQgik1kJQZQOiPLK4LIJkqal%2fFPNQkKN4%3d&risl=&pid=ImgRaw&r=0" width="70" height="25"/>
                    
                    </div>
                </div>
                <p>Thank MonsReact, I was finding it difficult to make my own Resume, but with your help, I made it in a very easy way. </p>
                </div>
            </div>
        </div>
    )
}
export default Customer
