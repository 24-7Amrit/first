import { useState } from "react";
import { useCookies } from "react-cookie";
import  axios  from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function UserDashboard(){
    
    const [cookies,setCookie,removeCookie]=useCookies('userid');
    
    let navigate=useNavigate();
    
    const [appointments,setAppointments]=useState([{Appointment_id:0,Title:'',description:'',date:Date(),UserId:''}]);
    // there was problem in 17th line case sensitive UserId was written but it should be userid
    // kindly check this problem coz it is very importnt that it should not get wrong next time
    function LoadAppointments(){
        axios.get(`http://127.0.0.1:3040/get-appointments/${cookies['userid']}`)
        .then(response=>{
                setAppointments(response.data);
                console.log("data received");
        })
        // })
        // if (response.data && Object.keys(response.data).length > 0) {
        //     console.log(" Data fetched:", response.data);
        // } else {
        //     console.log(" Data is empty!");
        // }
        // above lines helped in inding out wether data is comming or not with the help of chatgpt-date30-03-2025
        .catch(error => {
            console.error("Error fetching appointments:", error);
        });
    }
    useEffect(()=>{
        LoadAppointments();
    },[]);

    function handleSignout(){
        removeCookie('userid');
        navigate('/');
    }

    // return(
    //     <div> 
    //         <div>

    //         </div>
    //         <div>
    //             <h3>{cookies['userid']} - Dashboard<br/><button onClick={handleSignout}>Signout</button></h3>
                
    //             <div>
    //                 {
    //                    (appointments.map(appointment=>
    //                         <div key={appointment.Appointment_id}>
    //                         {/* <h2>{appointment.Title}</h2>
    //                         <p>{appointment.description}</p>   */}
    //                         </div>
    //                         ))
    //                     )}
                        
                    
    //             </div>
    //         </div>
    //     </div>
    // )

    return(
        <div className="row pt-4">
            <div className="col-7">

            </div>
            <div className="col-5">
                <h3> {cookies['Userid']} - Dashboard  <button onClick={handleSignout} className="btn btn-danger">Signout</button> </h3>
                <div className="mt-4">
                    {
                               appointments.map(appointment=>
                            <div key={appointment.Appointment_id} className="alert alert-success alert-dismissible">
                                <button className="btn btn-close"></button>
                                <h2 className="alert-title">{appointment.Title}</h2>
                                <p  className="alert-text">{appointment.description}</p>
                                <p>{appointment.date}</p>
                            </div>
                            )
                    }
                </div>
                
            </div>
        </div>
    )
}