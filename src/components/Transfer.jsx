import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
function Transfer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userInfo, setUserInfo] = useState();
    const onSubmit = (data) => {
        setUserInfo(data);
    };
    return (
        <div className="trans-container">
            <h1 className="trans-head">
                Transfer: Main Wallet to Activation Wallet{" "}
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Main Wallet Balance:</Form.Label>
                    <Form.Control type="text" name="wallet" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Amount: </Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Button variant="success" type="submit">
                    Withdrawal
                </Button>
            </Form>
        </div>
    );
}

export default Transfer;
