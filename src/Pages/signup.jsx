import React, { useState, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = () => {

    const [next, setNext] = useState(true);
    const fname = useRef()
    const lname = useRef()
    const isMale = useRef()
    const isFemale = useRef()
    const country = useRef()
    const age = useRef()
    const mail = useRef()
    const pass = useRef()
    const rePass = useRef()
    const back = useNavigate();
    const handleNext = (e) => {
        e.preventDefault();
        const firstName = fname.current?.value.trim();
        const lastName = lname.current?.value.trim();
        const male = isMale.current?.checked;
        const female = isFemale.current?.checked;
        const theLocation = country.current?.value.trim();
        const theAge = age.current?.value.trim();
        if (firstName && lastName && (male || female) && theLocation && theAge) {
            if (theAge >= 5) {
                setNext(false)
            } else toast.error("Please Write A Vaild Age (Above 5)", {
                duration: 3000,
                position: "top-center",
            });
        } else toast.error("Please Complete Your Information", {
            duration: 3000,
            position: "top-center",
        });
    }
    const handleFinish = (e) => {
        e.preventDefault();
        const eMail = mail.current?.value.trim();
        const password = pass.current?.value.trim();
        const rePassword = rePass.current?.value.trim();
        if (eMail && password && rePassword) {
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
                <div>
                    {next ? (<div className="section-1 flex flex-col">
                        <div className="flex justify-between mb-4">
                            <input ref={fname} type="text" name="first-name" placeholder="Your First Name" className="w-40 px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                            <input ref={lname} type="text" name="last-name" placeholder="Your Last Name" className="w-40 px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                        </div>
                        <label className="self-start mb-1 dark:text-white"><input ref={isMale} type="radio" name="gender" value="Male" /> Male</label>
                        <label className="self-start mb-4 dark:text-white"><input ref={isFemale} type="radio" name="gender" value="Female" /> Female</label>
                        <input ref={country} className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" type="text" name="country" placeholder="Your Country" />
                        <input ref={age} className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" type="number" name="age" placeholder="Your Age" />
                        <button className="bg-blue-500 text-white py-1 px-2 w-fit font-bold rounded-3xl self-end hover:shadow-md hover:shadow-blue-950 hover:bg-blue-700" onClick={handleNext}>Next &gt; </button>
                    </div>) : (
                        <div className="section-2 flex flex-col">
                            <input ref={mail} type="email" name="mail"  placeholder="Username Or Email" className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                            <input ref={pass} type="password" name="pass"  placeholder="Password" className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                            <input ref={rePass} type="password" name="confirm-pass" placeholder="Confirm Your Password" className="self-center mb-4  px-2 py-1 border-2 border-blue-400 focus:outline-0 focus:shadow-sm focus:shadow-orange-800" />
                            <div className="flex justify-between">
                                <button className="bg-blue-500 text-white py-1 px-2 w-fit font-bold rounded-3xl self-end hover:shadow-md hover:shadow-blue-950 hover:bg-blue-700" onClick={() => setNext(true)}>Previous &lt; </button>
                                <button className="bg-blue-500 text-white py-1 px-2 w-fit font-bold rounded-3xl self-end hover:shadow-md hover:shadow-blue-950 hover:bg-blue-700" onClick={handleFinish}>Finish &gt;</button>
                            </div>
                        </div>)}
                </div>
            </form>
            <div className="flex justify-between underline text-sm mt-4">
                <Link to={"/login"} className="transition duration-300 hover:text-primary dark:text-white dark:hover:text-primary">Have Account ?</Link>
            </div>
        </div>
    );
}

export default Signup;