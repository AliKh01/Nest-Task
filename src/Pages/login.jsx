import React, { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
    const mail = useRef()
    const pass = useRef()
    const back = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const eMail = mail.current?.value.trim();
        const password = pass.current?.value.trim();
        if (eMail && password) {
            back("/")
        } else toast.error("Please Complete Your Information", {
            duration: 3000,
            position: "top-center",
        });

    }
    return (
        <div className="bg-gray-200 w-96 min-h-72 m-auto text-center py-4 px-5 border-8 border-primary rounded-2xl dark:bg-black">
            <Toaster />
            <p className="text-4xl text-primary font-bold pb-8">TaskNest</p>
            <form>
                <div className="flex flex-col">
                    <input ref={mail} type="email" name="mail" placeholder="Username Or Email" className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                    <input ref={pass} type="password" name="pass" placeholder="Password" className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                    <button className="bg-blue-500 text-white py-1 px-2 w-fit font-bold rounded-3xl self-center hover:shadow-md hover:shadow-blue-950 hover:bg-blue-700" onClick={handleLogin}>Login</button>
                </div>
            </form>
            <div className="flex justify-between underline text-sm mt-4">
                <Link to={"/signup"} className="transition duration-300 hover:text-primary dark:text-white  dark:hover:text-primary">Create New Account</Link>
                <Link to={"/forgetPassword"} className="transition duration-300 hover:text-primary dark:text-white dark:hover:text-primary ">Forget Password ?</Link>
            </div>
        </div>
    );
}

export default Login;