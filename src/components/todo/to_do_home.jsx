import { Link } from "react-router-dom";


export function ToDoHome(){
    return(
        <div> 
            <h1>Your Appointments - To-Do Login page</h1>
            <main style={{height:'800px'}}>
                <Link to='/register'>  User Register</Link>
                &nbsp; &nbsp;
                <Link to='/login'> User Login</Link>
            </main>

        </div>
    )
}