import { Link } from "react-router-dom";

export function UserError(){
    return(
        <div> 
            <h1>User Error</h1>
             {/* <button component={Link} to="/Login"> Try again</button> */}
            <Link to="/Login" >Try again</Link>
        </div>
    )
}