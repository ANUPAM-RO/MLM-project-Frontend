import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
function ChangPass() {
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
    return (
        <div className="change-container">
            <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
            <h1 className="change-head">Change Password</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Current Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your Current Password "
                        {...register("cpassword", {
                            required: "Current password is required",
                        })}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="cpassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your new password"
                        {...register("npassword", {
                            required: "Enter your new password",
                            maxLength: {
                                value: 12,
                                message: "password maximum 10 character",
                            },
                        })}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="npassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Comfirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Comfirmation Password"
                        {...register("compassword", {
                            required: "Re-enter your password",
                        })}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="compassword"
                    render={({ message }) => <p className="error">{message}</p>}
                />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default ChangPass;
