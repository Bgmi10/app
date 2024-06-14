export const Validate = ( name ,email , password) =>{

    const name_eval = /^[a-zA-Z\s]{3,}$/.test(name)
    const email_eval = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const pass_eval = /^.{8,}$/.test(password)

    return{name_eval , email_eval , pass_eval}

}