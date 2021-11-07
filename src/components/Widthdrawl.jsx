import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Activation from "./Activation";
import axios from "axios";
function Widthdrawl() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userInfo, setUserInfo] = useState();
    const onSubmit = (data) => {
        setUserInfo(data);
        console.log(data);
        console.log(errors);
    };
    const changePassword = () => {
        axios({
            method: "POST",
            data: {
                usenname: "Arnab Biswas",
                //amount: 525
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/withdraw_from_name",
        }).then((response) => {
            console.log(response);
        });
    };
    return (
        <div className="withdrawl-container">
            <h1 className="withd-head">Withdrawal Balance</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Available Balance</Form.Label>
                    <Form.Control
                        type="text"
                        name="abalance"
                        placeholder="Enter your Current Password "
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Withdrawal Amount</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your new password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount</Form.Label>
                    <Form.Control
                        type="text"
                        name="famount"
                        placeholder="Enter your new password"
                    />
                </Form.Group>
                <Button variant="success" type="submit">
                    Withdrawal
                </Button>
            </Form>
            <br />
            <br />
            <Activation />
        </div>
    );
}

export default Widthdrawl;
