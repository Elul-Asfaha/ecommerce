import { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";
import ReactIcons from "../ReactIconsImport";
import SignUpError from "./SignUpError";

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
            <form onSubmit={handleLogin} className='grid gap-5'>
                <div className='flex flex-col gap-1 justify-between'>
                    <label htmlFor='userEmail' className='flex-1 pe-5'>
                        Email :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='email'
                            name='userEmail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='outline-none py-1 text-xl flex-1 bg-gray-100'
                            required
                        />
                        <ReactIcons.HiOutlineAtSymbol className='text-2xl' />
                    </div>
                </div>
                <div className='flex flex-col gap-1 justify-between'>
                    <label htmlFor='userPassword' className='flex-1 pe-5'>
                        Password :
                    </label>
                    <div className='flex min-w-[320px] sm:min-w-[400px] border-2 border-gray-200 bg-gray-100 rounded-md items-center px-3'>
                        <input
                            type='password'
                            name='userPassword'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='outline-none py-1 text-xl flex-1 bg-gray-100'
                            required
                        />
                        <ReactIcons.HiOutlineLockClosed className='text-2xl' />
                    </div>
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
