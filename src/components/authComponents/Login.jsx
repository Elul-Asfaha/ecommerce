import { useContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ContextProvider } from "../../App";

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
            })
            .catch((err) => console.error(err));
        setPassword("");
    };
    return (
        <div>
            <form onSubmit={handleLogin} className='grid gap-5'>
                <div className='flex items-center justify-between'>
                    <label
                        htmlFor='userEmail'
                        className='flex-1 text-right pe-5'
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
                        htmlFor='userPassword'
                        className='flex-1 text-right pe-5'
                    >
                        Password:
                    </label>
                    <input
                        type='password'
                        name='userPassword'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='outline-none border-2 px-3 py-1 border-black flex-1'
                        required
                    />
                </div>
                <button className='outline-none ring-2 ring-black mx-auto rounded-md w-fit px-4 py-1'>
                    Login
                </button>
            </form>
        </div>
    );
};
export default Login;
