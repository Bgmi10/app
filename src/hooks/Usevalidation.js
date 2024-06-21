import { useEffect } from "react"

const Usevalidation = (name ) =>{

   

   useEffect(() =>{
      if(name.current) {
        console.log(name.current.value)

      }
      else{
        return 'not defined'
      }

   } , [])
 
  

  
}


export default Usevalidation


























// it is responsiable for manage the  state of form input 