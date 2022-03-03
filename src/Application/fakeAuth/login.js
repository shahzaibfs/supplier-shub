
   export const fakeAuth = (email,password) =>
   new Promise((resolve, reject) => {
    if(email === "admin@gmail.com" && password === "admin"){
        resolve("asdbasdiabdquwduqwdbwbduq27381673617wq77d");
    }else{
        reject(
            "wrong email and password "            
        )
    } 

     
   });

  