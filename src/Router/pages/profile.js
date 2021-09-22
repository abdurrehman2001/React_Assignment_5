import './style.css'
import PROFILE from "../../assets/image/profile.png"
function Profile (){
    return(
        <div className="details"> 
        <img src={PROFILE} alt="" />
        <h3>My name is abdur rehman</h3>
        <h4>I am student in saylani</h4>
        </div>
    )
}
export default Profile; 