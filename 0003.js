
const  generatePromise = function(){
    const friedRice = ["vegetables","salt","oil"];
return new Promise((resolve,reject)=>{
    if(friedRice.includes("vegetables")&& friedRice.includes("salt")&&
    friedRice.includes("oil")){
        resolve("Now! You can eat Yummy!! Friedrice");
    }else{
        reject("You Cannot Eat Friedrice Beacuse because Item is Not Present");
    }
})    
}


const fried = generatePromise();


fried.then((mes)=>{
  mes += " Wooo majedaar hai yeh toh ek Number Fried Rice";
  return mes;
}).then((mes)=>{
    console.log(mes);
}).catch((err)=>{
    console.log(err);
})



