import { useEffect } from "react"

const Usevalidation = (name , email ,phonenumber , password , confirmpassword , address) =>{

   const valdatename = /^(?=.{2,50}$).+$/.test(name)
   const validemail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
   const validphone = /^\+?[0-9\s\-()/.]{6,15}$/.test(phonenumber)
   const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$%*?&])[A-Za-z\d@$%*?&]{8,}$/.test(password)
   const validconfirmpassword = password === confirmpassword ? true : false
   const validaddress = /[A-Za-z0-9'\.\-\s\,]/.test(address)


   return {valdatename , validemail , validphone , validpassword , validconfirmpassword , validaddress}
  
}


export default Usevalidation




  //https://tamilvip.app/link/?74aqvw9oi07b
      //https://tamilvip.app/link/?rx97me4n8143
      //https://tamilvip.app/link/?fwmvg858op19
      //https://tamilvip.app/link/?i84cvnz4a3u9
      //https://tamilvip.app/link/?k6m17uk4m9wd
      // 18.50 sec 






















// it is responsiable for manage the  state of form input 