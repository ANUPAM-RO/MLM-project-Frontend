import { useState, useEffect, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { userContext } from "../App"

function Transfer() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        // setUserInfo(data);
    };

    const user = useContext(userContext);

    return (
        <div className="trans-container">
            <h1 className="trans-head">
                Transfer: Main Wallet to Activation Wallet{" "}
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Main Wallet Balance:</Form.Label>
                    <Form.Control type="text" name="wallet" value={user.user.wallet.activation_wallet} />
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
