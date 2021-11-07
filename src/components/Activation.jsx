import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
function Activation() {
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
        <div className="active-container">
            <h1 className="active-head">Activation Wallet Recharge</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Number Of ID: </Form.Label>
                    <Form.Control
                        type="text"
                        name="id"
                        placeholder="Enter number of id "
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Per ID: </Form.Label>
                    <Form.Control type="text" value="650" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Final Amount: </Form.Label>
                    <Form.Control type="text" name="famount" />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Activation;