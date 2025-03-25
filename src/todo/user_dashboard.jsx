import { useState } from "react";
import { useCookies } from "react-cookie";
import  axios  from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function UserDashboard(){
    
    const [cookies,setCookie,removeCookie]=useCookies('userid');
    let navigate=useNavigate();
    const [appointments,setAppointments]=useState([{Appointment_id:'',Title:'',Description:'',Date:Date(),UserId:'',}]);
    function LoadAppointments(){
        axios.get(`http://127.0.0.1:3040/get-appointments/${cookies['UserId']}`)
        .then(response=>{
            setAppointments(response.data);
        })
    }
    useEffect(()=>{
        LoadAppointments();
    },[]);

    function handleSignout(){
        removeCookie('userid');
        navigate('/');
    }

    return(
        <div> 
            <div>

            </div>
            <div>
                <h3>{cookies['userid']} - Dashboard<br/><button onClick={handleSignout}>Signout</button></h3>
                
                <div>
                    {
                        console.log(appointments.map(appointment=>
                            <div key={appointment.Appointment_id}>
                                {/* <p>{appointment.Title}</p>
                                {/* console.log(appointment.Title) */}
                                {/* <p>{appointment.Description}</p>
                                <p>{appointment.Date}</p> */}
                                 */}
                            </div>)
                        )
                    }
                </div>
            </div>
        </div>
    )
}