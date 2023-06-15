import { useEffect, useState } from "react";
import ReactIcons from "../ReactIconsImport";

const SignUpError = ({ signUpErrorMsg, setSignUpErrorMsg }) => {
    const [dispError, setDispError] = useState("");
    useEffect(() => {
        switch (signUpErrorMsg) {
            case "Firebase: Error (auth/email-already-in-use).":
                setDispError("Email is already in use");
                break;
            case "Firebase: Error (auth/wrong-password).":
                setDispError("password is wrong");
                break;
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                setDispError("password should be at least 6 characters ");
                break;
            case "Firebase: Error (auth/user-not-found).":
                setDispError("Email is not in use");
                break;
            case "Firebase: Error (auth/network-request-failed).":
                setDispError("Check your connection please");
                break;
            default:
                setDispError(signUpErrorMsg);
        }

        const timeout = setTimeout(() => {
            setSignUpErrorMsg("");
        }, 5000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='flex text-red-700 justify-between items-center gap-5 text-xl inset-x-0 absolute top-10 border w-[90%] sm:w-fit sm:max-w-[800px] mx-auto px-5 py-2 rounded-md bg-white '>
            <ReactIcons.AiOutlineWarning
                className='text-xl'
                style={{ fontSize: "40px" }}
            />
            <p>{dispError && dispError}</p>

            <div
                onClick={() => setSignUpErrorMsg("")}
                className='cursor-pointer'
            >
                <ReactIcons.AiOutlineClose />
            </div>
        </div>
    );
};
export default SignUpError;
