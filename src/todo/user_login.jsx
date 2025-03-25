import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";



export function UserLogin(){
    const [cookies,setCookie,removeCookie]= useCookies('userid');
    // const[user,setUsers]=useState([{UserId:'',Password:''}])
    let navigate = useNavigate();

    const formik = useFormik({
            initialValues:{
                UserId:'',
                Password:''
            },                                                                          //http://127.0.0.1:3040/get-users
            onSubmit:(formdata)=>{
                axios.get('http://127.0.0.1:3040/get-users')
                .then((response)=>{
                    //console.log(response.data.find(user=>user.UserId===formdata.UserId));
                    //console.log(response.data.find(user=>user.password===formdata.Password));
                    var user = response.data.find(user=>user.UserId===formdata.UserId);
                    if(user.UserId===formdata.UserId && user.password===formdata.Password){         // user.UserId===formdata.UserId ||
                        setCookie('userid',formdata.UserId);
                        navigate('/dashboard');                                                         // user.UserId===formdata.UserId &&
                    } else {
                     navigate('/error');
                    }

                })
            }
    })

    return(
        <div> 
            <h1>User Login</h1>  
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" className="form" onChange={formik.handleChange} name="UserId"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form" name="Password" onChange={formik.handleChange}/></dd>
                </dl>
                <button  type="submit" className="button1">Log in</button><br/><br/>
                <Link to='/register'> New User ? Register</Link>


            </form>
        </div>
    )
}