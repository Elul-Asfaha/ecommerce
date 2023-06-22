import { useEffect, useState } from "react";
import ReactIcons from "../ReactIconsImport";
import { Alert, Snackbar } from "@mui/material";

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
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={() => setSignUpErrorMsg("")}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
            <Alert
                onClose={() => setSignUpErrorMsg("")}
                severity='error'
                sx={{ width: "100%" }}
            >
                {dispError && dispError}
            </Alert>
        </Snackbar>
    );
};
export default SignUpError;
