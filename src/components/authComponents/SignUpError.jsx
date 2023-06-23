import { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SignUpError = ({ signUpErrorMsg, setSignUpErrorMsg }) => {
    const [dispError, setDispError] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        switch (signUpErrorMsg) {
            case "Firebase: Error (auth/email-already-in-use).":
                setDispError("Email is already in use");
                setOpen(true);
                break;
            case "Firebase: Error (auth/invalid-email).":
                setDispError("Email is invalid");
                setOpen(true);

                break;
            case "Firebase: Error (auth/wrong-password).":
                setDispError("Password is wrong");
                setOpen(true);

                break;
            case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                setDispError("password should be at least 6 characters ");
                setOpen(true);

                break;
            case "Firebase: Error (auth/user-not-found).":
                setDispError("Email is not in use");
                setOpen(true);

                break;
            case "Firebase: Error (auth/network-request-failed).":
                setDispError("Check your connection please");
                setOpen(true);

                break;
            default:
                setDispError(signUpErrorMsg);
                setOpen(true);
        }

        const timeout = setTimeout(() => {
            setSignUpErrorMsg("");
            setOpen(false);
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
