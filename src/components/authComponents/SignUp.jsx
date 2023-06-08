import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";

const SignUp = () => {
    const providedData = useContext(ContextProvider);
    const [first, setFirst] = useState("");
    const [Last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        password != confirmPassword && console.log("password does not match");

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                providedData.setUser(user.email);
                providedData.setUserLoggedIn(true);
                sessionStorage.setItem("user", JSON.stringify(user.email));
            })
            .catch((err) => console.log("email already in use"));
        setPassword("");
        setEmail("");
        setPhone("");
        setLast("");
        setConfirmPassword("");
        setFirst("");
    };

    return (
        <div className='flex flex-col gap-5'>
            <div>
                <p className='text-3xl text-bold text-center text-green-600'>
                    Create your account
                </p>
            </div>
            <form onSubmit={handleSignUp} className='grid gap-3 sm :gap-5'>
                <div className='flex flex-col justify-between'>
                    <label
                        htmlFor='userFirstName'
                        className='flex-1 pe-2 sm:pe-5'
                    >
                        First Name :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='text'
                            name='userFirstName'
                            value={first}
                            onChange={(e) => setFirst(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <label
                        htmlFor='userLastName'
                        className='flex-1 pe-2 sm:pe-5'
                    >
                        Last Name :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='text'
                            name='userLastName'
                            value={Last}
                            onChange={(e) => setLast(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <label htmlFor='userPhone' className='flex-1 pe-2 sm:pe-5'>
                        Phone Number :
                    </label>{" "}
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='text'
                            name='userPhone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-between'>
                    <label htmlFor='userEmail' className='flex-1 pe-2 sm:pe-5'>
                        Email :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='email'
                            name='userEmail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <label
                        htmlFor='userPassowrd'
                        className='flex-1 pe-2 sm:pe-5'
                    >
                        Password :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='password'
                            name='userPassowrd'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <label
                        htmlFor='confirmPassword'
                        className='flex-1 pe-2 sm:pe-5'
                    >
                        Confirm passoword :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='password'
                            name='confirmPassword'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className='outline-none py-1 flex-1 text-xl bg-gray-100'
                            required
                        />
                    </div>
                </div>

                <button className='outline-none w-full bg-green-600 text-white text-xl rounded-md px-4 py-1 mt-3'>
                    Sign in
                </button>
            </form>
        </div>
    );
};
export default SignUp;
