import ChangPass from "./ChangPass";
import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
function UpdatePro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userInfo, setUserInfo] = useState();
    const [regsiterBankname, setRegisterBankname] = useState("");
    const [regsiterAcountNo, setRegisterAccountNo] = useState("");
    const [regsiterIfsc, setRegisterIfsc] = useState("");
    const [regsiterHolder, setRegisterHolder] = useState("");
    const [regsiterBankbranch, setRegisterBankbranch] = useState("");
    const update = () => {
        axios({
            method: "POST",
            data: {
                bankname: regsiterBankname,
                account: regsiterAcountNo,
                IFSC: regsiterIfsc,
                holder: regsiterHolder,
                bankbranch: regsiterBankbranch,
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/info/bank",
        }).then((response) => {
            console.log(response);
        });
    };
    const onSubmit = (data) => {
        setUserInfo(data);
        update();
        // console.log(data);
        // console.log(errors);
    };

    return (
        <div className="join-container">
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <h1 className="update-head">Update Your Bank Information</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bank Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="SBI/AXIS/PNB/HDFC"
                        {...register("bank-name", {
                            required: "Bank Name is required",
                        })}
                        onChange={(e) => setRegisterBankname(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="bank-name"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Account Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your bank account no"
                        {...register("account", {
                            required: "Account no is required",
                        })}
                        onChange={(e) => setRegisterAccountNo(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="account"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>IFSC Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter IFSC code"
                        {...register("ifsc", {
                            required: "IFSC code is required",
                        })}
                        onChange={(e) => setRegisterIfsc(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="ifsc"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Account Holder Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="holder-name"
                        {...register("holder-name", {
                            required: "Holder-name is required",
                        })}
                        onChange={(e) => setRegisterHolder(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="holder-name"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Bank Branch</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Branch name"
                        {...register("branch", {
                            required: "Branch name is required",
                        })}
                        onChange={(e) => setRegisterBankbranch(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="branch"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br />
            <ChangPass></ChangPass>
        </div>
    );
}

export default UpdatePro;
