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
        <div>
            <form onSubmit={handleSignUp} className='grid gap-3 sm:gap-5'>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userFirstName'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        First Name:
                    </label>
                    <input
                        type='text'
                        name='userFirstName'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userLastName'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        Last Name:
                    </label>
                    <input
                        type='text'
                        name='userLastName'
                        value={Last}
                        onChange={(e) => setLast(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userPhone'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        Phone Number:
                    </label>
                    <input
                        type='text'
                        name='userPhone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userEmail'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        Email:
                    </label>
                    <input
                        type='email'
                        name='userEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userPassowrd'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        Password:
                    </label>
                    <input
                        type='password'
                        name='userPassowrd'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='confirmPassword'
                        className='flex-1 text-right pe-2 sm:pe-5'
                    >
                        Confirm passowrd:
                    </label>
                    <input
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>

                <button className='outline-none ring-2 ring-black mx-auto rounded-md w-fit px-4 py-1'>
                    Sign Up
                </button>
            </form>
        </div>
    );
};
export default SignUp;
