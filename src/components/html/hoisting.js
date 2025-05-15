// let promise = new promise((resolve,reject)=>{
//     console.log("I am a promise");
//     resolve("done");
// });

function getData(dataId,getNextData){
    return new Promise ((res,rej)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolvePath("success");
            if (getNextData){
                getNextData();
            }
        },4000);
        });
    }
// above 10:02:30








// console.log(myname);
// var myname="pikoo";
// show();

// function show(){
//     console.log('show',age);
//     var age = 90;
// } 


// random = "ac";
// console.log(window.random);


// function show(){
//     let abc="js";
//     let dept=
// }




