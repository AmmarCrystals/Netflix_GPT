export const validateInput = (email, password) => {
    const isEmailValid  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPasswordValid  = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password)


    if (!isEmailValid ) {
    return      "Entered Wrong Email"
    }
    if (!isPasswordValid ) {
       return "Entered Wrong Password"
    }

// return {isNameValid, isEmailValid, isPasswordValid}
// return isNameValid
return isEmailValid
return isPasswordValid
}