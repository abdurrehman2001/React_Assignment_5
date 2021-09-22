import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Experience, Profile , Contact} from "./index";


function AppRounter() {
    return (
        <div style={{marginTop : 20}}>
            <Router>
                <Link to="/experinces" >Experience</Link>
                <Link to="/" >Profile</Link>
                <Link to="/contact" >Contact</Link>
                <Route exact path="/" component={Profile} />
                <Route exact path="/experinces" component={Experience} />
                <Route exact path="/contact" component={Contact} />
            </Router>
        </div>
    )
}
export default AppRounter;