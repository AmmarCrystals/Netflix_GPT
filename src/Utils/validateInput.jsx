const validateInput =(email, password)=>{
    const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const password = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)


    if(!email){
        "Entered Wrong Email"
    }
    if(!password){
        "Entered Wrong Password"
    }


}