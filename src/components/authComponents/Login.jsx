import { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";
import { stringify } from "postcss";

const Login = () => {
    const providedData = useContext(ContextProvider);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        !(!email || !password);

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                providedData.setUser(user.email);
                providedData.setUserLoggedIn(true);
                sessionStorage.setItem("user", JSON.stringify(user.email));
            })
            .catch((err) => console.error(err));
        setPassword("");
    };

    return (
        <div className='flex flex-col gap-5 '>
            <div>
                <p className='text-3xl text-bold text-center text-green-600'>
                    Welcome back
                </p>
                <p className='text-center text-gray-500'>
                    Please enter your details
                </p>
            </div>
            <form onSubmit={handleLogin} className='grid gap-5'>
                <div className='flex flex-col gap-1 justify-between'>
                    <label htmlFor='userEmail' className='flex-1 pe-5'>
                        Email :
                    </label>
                    <input
                        type='email'
                        name='userEmail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='outline-none min-w-[320px] border-2 border-gray-200 rounded-md px-3 py-1  flex-1'
                        placeholder='Enter your email'
                        required
                    />
                </div>
                <div className='flex flex-col gap-1 justify-between'>
                    <label htmlFor='userPassword' className='flex-1 pe-5'>
                        Password :
                    </label>
                    <input
                        type='password'
                        name='userPassword'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none min-w-[320px] border-2 border-gray-200 rounded-md px-3 py-1  flex-1'
                        placeholder='enter your password'
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
export default Login;
