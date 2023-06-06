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
        password === confirmPassword && console.log("success");

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                providedData.setUser(user.email);
                providedData.setUserLoggedIn(true);
            })
            .catch((err) => console.log("email already in use"));
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className='flex flex-col gap-5 '>
            <div>
                <p className='text-3xl text-bold text-center text-green-600'>
                    Create your account
                </p>
            </div>
            <form onSubmit={handleSignUp} className='grid gap-3 sm :gap-5'>
                <div className='flex flex-col justify-between gap-2'>
                    <label
                        htmlFor='userFirstName'
                        className='flex-1 pe-2 sm :pe-5'
                    >
                        First Name :
                    </label>
                    <input
                        type='text'
                        name='userFirstName'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <label
                        htmlFor='userLastName'
                        className='flex-1 pe-2 sm :pe-5'
                    >
                        Last Name :
                    </label>
                    <input
                        type='text'
                        name='userLastName'
                        value={Last}
                        onChange={(e) => setLast(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <label htmlFor='userPhone' className='flex-1 pe-2 sm :pe-5'>
                        Phone Number :
                    </label>
                    <input
                        type='text'
                        name='userPhone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>

                <div className='flex flex-col justify-between gap-2'>
                    <label htmlFor='userEmail' className='flex-1 pe-2 sm :pe-5'>
                        Email :
                    </label>
                    <input
                        type='email'
                        name='userEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <label
                        htmlFor='userPassowrd'
                        className='flex-1 pe-2 sm :pe-5'
                    >
                        Password :
                    </label>
                    <input
                        type='password'
                        name='userPassowrd'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>
                <div className='flex flex-col justify-between gap-2'>
                    <label
                        htmlFor='confirmPassword'
                        className='flex-1 pe-2 sm :pe-5'
                    >
                        Confirm passowrd :
                    </label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='outline-none border-2 min-w-[320px] border-gray-200 rounded-md px-3 py-1  flex-1'
                        required
                    />
                </div>

                <button className='outline-none w-full bg-green-600 text-white text-xl rounded-md px-4 py-1 mt-3'>
                    Sign in
                </button>
            </form>
        </div>
    );
};
export default SignUp;
