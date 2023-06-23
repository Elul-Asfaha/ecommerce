import { useContext, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";
import SignUpError from "./SignUpError";
import { TextField } from "@mui/material";

const SignUp = () => {
    const providedData = useContext(ContextProvider);
    const [first, setFirst] = useState("");
    const [Last, setLast] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signUpErrorMsg, setSignUpErrorMsg] = useState("");

    const checkPasswordEqual = (e) => {
        e.preventDefault();

        password === confirmPassword
            ? handleSignUp()
            : setSignUpErrorMsg("passwords do not match");
    };
    const handleSignUp = () => {
        const auth = getAuth();
        providedData.setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                providedData.setUser(user.email);
                providedData.setUserLoggedIn(true);
                sessionStorage.setItem("user", JSON.stringify(user.email));
                providedData.setLoading(false);
            })
            .catch((err) => {
                setSignUpErrorMsg(err.message);
                providedData.setLoading(false);
            });
        setPassword("");
        setEmail("");
        setPhone("");
        setLast("");
        setConfirmPassword("");
        setFirst("");
    };

    return (
        <div className='flex flex-col gap-5'>
            {signUpErrorMsg && (
                <SignUpError
                    signUpErrorMsg={signUpErrorMsg}
                    setSignUpErrorMsg={setSignUpErrorMsg}
                />
            )}
            <div>
                <p className='text-3xl text-bold text-center text-green-600'>
                    Create your account
                </p>
            </div>
            <form
                onSubmit={checkPasswordEqual}
                className='grid gap-3 sm :gap-5'
            >
                <div className='flex flex-col justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='First Name'
                        variant='outlined'
                        value={first}
                        onChange={(e) => setFirst(e.target.value)}
                    />
                </div>
                <div className='flex flex-col min-w-[320px] sm:min-w-[400px] justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='Last Name'
                        variant='outlined'
                        value={Last}
                        onChange={(e) => setLast(e.target.value)}
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='Phone Number'
                        variant='outlined'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                <div className='flex flex-col justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='Email'
                        type='email'
                        variant='outlined'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='Password'
                        variant='outlined'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex flex-col justify-between'>
                    <TextField
                        id='outlined-basic'
                        label='Confirm Password'
                        variant='outlined'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button
                    className='flex items-center justify-center outline-none w-full bg-green-600 text-white text-xl rounded-md px-4 py-2 mt-3'
                    disabled={providedData.loading}
                >
                    {" "}
                    {providedData.loading ? (
                        <div className='p-3 animate-spin border-2 rounded-full border-white border-t-black'></div>
                    ) : (
                        <span>Sign in</span>
                    )}
                </button>
            </form>
        </div>
    );
};
export default SignUp;
