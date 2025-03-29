import axios from "axios";
import { useFormik } from "formik"; 
import {useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export function UserRegister(){
    let navigate = useNavigate();   // why we are using this part but in the video it is not used --- when we were not using it it was showing eror
    
    const formik=useFormik({
        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Email:'',
            Mobile:''
        },
        onSubmit:(user=>{
            axios.post('http://127.0.0.1:3040/register-user',user).then(()=>{
                alert('Registred Succesfully...');
                navigate('/login');
            })
        })
    })
    function VerifyUserId(e){
        axios.get('http://127.0.0.1:3040/get-users').then(response=>{
            for(var user of response.data)
            {
                if(user.UserId===e.target.value){

                }
            }
        })
    }
    return(
        <div> 
            <form onSubmit={formik.handleSubmit}>
            <h1>User Register</h1>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyup={VerifyUserId} name="UserId" onChange={formik.handleChange}/></dd>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName" onChange={formik.handleChange}/></dd>
                <dt>Password</dt>
                <dd><input type="password" name="password" onChange={formik.handleChange}/></dd>
                <dt>Email</dt>
                <dd><input type="email" name="Email" onChange={formik.handleChange}/></dd>
                <dt>Mobile</dt>
                <dd><input type="text" name="mobile" OnChange={formik.handleChange}/></dd>
            </dl>
            <button>Register</button>
            </form> 
        </div>
    )
}