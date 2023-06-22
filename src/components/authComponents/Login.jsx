import { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";
import SignUpError from "./SignUpError";
import { TextField } from "@mui/material";

const Login = () => {
    const providedData = useContext(ContextProvider);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signUpErrorMsg, setSignUpErrorMsg] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        providedData.setLoading(true);
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
                    Welcome back
                </p>
            </div>
            <form
                onSubmit={handleLogin}
                className='grid gap-5'
                noValidate
                autoComplete='off'
            >
                <div className='flex flex-col justify-between min-w-[320px] sm:min-w-[400px] gap-5'>
                    <TextField
                        id='outlined-basic'
                        label='Email:'
                        variant='outlined'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        id='outlined-basic'
                        label='Password:'
                        variant='outlined'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className='flex items-center justify-center outline-none w-full bg-green-600 text-white text-xl rounded-md px-4 py-2 mt-3'
                    disabled={providedData.loading}
                >
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
export default Login;
