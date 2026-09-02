import React, { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) =>{
        e.preventDefault()
        console.log("Email is", email)
        console.log("password is", password)

    }

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 rounded-xl border-emerald-600 p-20" >
                <form 
                    onSubmit={(e)=>{
                        submitHandler(e)
                    }}
                    className="flex flex-col items-center justify-center">
                    <input
                        required
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        className=" outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400" 
                        type="email"
                        placeholder="Enter your Email" />
                    <input 
                        required 
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        className="outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-gray-400 " 
                        type="password" 
                        placeholder="Enter your Password" />
                    <button
                        className="text-white border-none outline-none  bg-emerald-600 text-xl py-3 px-5 rounded-full mt-5 placeholder:text-white">
                        Log in
                        </button>
                </form>

            </div>

        </div>
    )
}

export default Login