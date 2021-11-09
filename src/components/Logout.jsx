import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
function Logout() {
    let history = useHistory();
    useEffect(() => {
        localStorage.removeItem("token");
        axios.post("https://stormy-ridge-27884.herokuapp.com/logout", { token: localStorage.getItem("token") })
        history.push("/");
    }, []);
    return (
        <div>
            <h1>Log Out Successful</h1>
        </div>
    );
}

export default Logout;
