import axios from "axios";
import { InputBox } from "../component/Input"
import { BACKEND_URL } from "../config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
   
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    
    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        const email = emailRef.current?.value;

        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username: username,
            email: email,
            password: password
        })
        const jwtToken = response.data.token;

        localStorage.setItem("token", jwtToken);
        navigate("/dashboard")    
    }
    return <div className="h-screen w-screen bg-gray-100  flex items-center justify-center">
        <div className="border shadow-md border-gray-200 rounded-2xl p-4"> 
            <div className="font-bold text-2xl text-gray-700 pb-8 flex items-center justify-center underline underline-offset-8"> Signin </div>
            <InputBox reference={usernameRef} placeholder="username"/>
            <InputBox reference={emailRef} placeholder="Email"/>
            <InputBox reference={passwordRef} placeholder="password"/>
            <div className="flex items-center p-2 pt-7">
                <button onClick={signin} className="bg-purple-600 w-full p-4 rounded-md cursor-pointer text-white">Submit</button>
            </div>
        </div>
    </div>
}