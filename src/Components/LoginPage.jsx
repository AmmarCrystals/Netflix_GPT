import { useState, useRef } from "react"
import {validateInput} from "../Utils/validateInput"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../Utils/Firebase";

const LoginPage = () => {
    const [form, setForm] = useState(false)
    const [errorMessage, seteErorMessage] = useState(null)
    const email = useRef()
    const password = useRef()
    const name = useRef()
    const validHandle = () => {


        
        const message = validateInput(email.current.value, password?.current?.value)
        seteErorMessage(message)
        if (!message) return
        if(form){
            console.log("ehfdgwyiu")
            createUserWithEmailAndPassword(auth, email.current.value, password?.current?.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
seteErorMessage(errorCode + " " + errorMessage)
            });
                  }else{
                    signInWithEmailAndPassword(auth, email.current.value, password?.current?.value)
                    .then((userCredential) => {
                      // Signed in 
                      const user = userCredential.user;
              console.log(user)

                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
seteErorMessage(errorCode + " " + errorMessage)

                    });
                          }

    }

    const handleclick = () => {
        setForm(!form)
    }
    return (
        <>
            <div className=" w-full h-64 ">
                <img className="w-full h-screen object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg
" alt="" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 text-white flex items-center justify-center gap-2">

                <div className="flex flex-col w-80 h-96 bg-black space-y-2 bg-opacity-80  pt-8 pb-8 gap-2" >
                    <p className=" text-3xl m-4 ml-8">{form ? "Sign Up" : "Sign In"}</p>
                    {form && <input ref={name} type="text" placeholder="Enter your Name" className="m-[2px] bg-opacity-20 ml-8 p-2 pl-2 text-white-500 bg-gray-700 w-64 rounded" />}
                    <input ref={email} type="email" placeholder="Enter your Email" className="m-[2px] bg-opacity-20 ml-8 p-2 pl-2 text-white-500 bg-gray-700 w-64 rounded" />
                    <input ref={password} type="password" placeholder="Password" className="bg-opacity-20 pl-2 ml-8 p-2 text-white-500 bg-gray-700 w-64 rounded" />
                    <p className="text-red-500 text-xs mt-4 ml-9 font-semibold	">{errorMessage}</p>
                    <button onClick={validHandle} className="bg-red-700 w-64 mb-8  p-2 ml-8 rounded hover:bg-red-600">{form ? "Sign Up" : "Sign In"}</button>
                    <p className=" text-xs mt-4 ml-8">New to Netflix? <button className="text-sm font-bold" onClick={handleclick} > Sign up now. </button></p>

                </div>
            </div>
        </>
    )
}


export default LoginPage