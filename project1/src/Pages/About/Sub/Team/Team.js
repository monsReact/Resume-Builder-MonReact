import "./Team.css"
function Team()
{
return(
    <div className="Team">  
        <h1 className="PagesHeader"> Our Team</h1>                                                                                                                                
        <div className="TeamSection">
            <img src="https://i.pinimg.com/564x/bb/51/28/bb5128e4e6d470be53a6969070715481.jpg"/>
            <p >We’re a team of 4 people studying at Cairo University Faculty of Engineering in the Computer Department. </p> 
        </div>
        <div className="TeamMember">
            <div>
                <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/371114164_1343760403212235_248104660622103035_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=X1UlEKZ0PA4AX_1zf-Z&_nc_ht=scontent.fcai19-6.fna&oh=03_AdRsEiqGpd547YfqZIKWlmn8UMZo1yq-4rDv2n-8rYTnKQ&oe=651471DF"/>
                <h4 className="TeamName">Abd Elrahman Ahmed</h4>
            </div>
            <div>
                <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/372416249_150652351416019_8284488951894729335_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aG0hBj3JP_sAX-Imb7f&_nc_ht=scontent.fcai19-6.fna&oh=03_AdQbA6oad00JV6XH81cmcTUB8PFleSP7LDUZrdQqQq9vnw&oe=651494F2"  />
                <h4 className="TeamName">Mohamed Nabil</h4>
            </div>
            <div>
                <img src="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.15752-9/372209065_842433157397380_2372756487572595457_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=OD8WqaXHpeIAX-GGAjN&_nc_ht=scontent-hbe1-1.xx&oh=03_AdQElxocQzCawI0NTs-HMb7PZ_1lNC75l15qYtowAPVHRQ&oe=65148F63" style={{marginTop:-6}} />
                <h4 className="TeamName" style={{marginTop:"2.1rem"}} >Nesma Osama</h4>
            </div>
            <div>
            <img src="https://scontent.fcai19-6.fna.fbcdn.net/v/t1.15752-9/371454225_2399606463552605_131291163807565589_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=SCstOKbHMwcAX_Q5q4D&_nc_ht=scontent.fcai19-6.fna&oh=03_AdTjwEaTofi_IL-ZL0x6-kEqQu_goK2i3srHUjg0AaQ8Hg&oe=6514918E" />
            <h4 
            className="TeamName">Kenzy Ragab</h4>
            </div>
        </div>
    </div>
)
}
export default Team