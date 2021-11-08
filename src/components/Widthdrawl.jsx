import React from "react";
import { useState, useEffect } from "react";
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
    const [dataset, setData] = useState();
    const onSubmit = (data) => {
        setUserInfo(data);
        withdrawl();
    };
    const withdrawl = () => {
        axios({
            method: "POST",
            data: {
                username: "Arnab Biswas",
                amount: 10,
                //amount: 525
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/withdraw_from_main",
        }).then((response) => {
            console.log(response);
        });
    };
    useEffect(() => {
        axios
            .get("https://stormy-ridge-27884.herokuapp.com/balance")
            .then((data) => console.log(data))
            .catch((err) => console.error("API not found", err));
        console.log(dataset);
    }, []);
    return (
        <div className="withdrawl-container">
            <h1 className="withd-head">Withdrawal Balance</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Available Balance</Form.Label>
                    <Form.Control type="text" value={dataset} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Withdrawal Amount</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount</Form.Label>
                    <Form.Control type="text" name="famount" />
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
