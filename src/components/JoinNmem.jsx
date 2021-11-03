import { useState } from "react";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
function JoinNmem() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [userInfo, setUserInfo] = useState();
    const [regsiterUsername, setRegisterUsername] = useState("");
    const [regsiterPassword, setRegisterPassword] = useState("");
    const [regsiterName, setRegisterName] = useState("");
    const [regsiterPhone, setRegisterPhone] = useState("");
    const [regsiterEmail, setRegisterEmail] = useState("");
    const [regsiterAddar, setRegisterAddar] = useState("");
    const [regsiterHeadmem, setRegisterHeadmem] = useState("");

    const joinMem = () => {
        console.log(regsiterName);
        axios({
            method: "POST",
            data: {
                username: regsiterUsername,
                password: regsiterPassword,
                name: regsiterName,
                phone: regsiterPhone,
                email: regsiterEmail,
                addar: regsiterAddar,
                head: regsiterHeadmem,
            },
            withCredentials: true,
            url: "https://stormy-ridge-27884.herokuapp.com/register",
        }).then((response) => {
            console.log(response);
        });
    };
    const onSubmit = (data) => {
        setUserInfo(data);
        joinMem();
        console.log(regsiterName);
        // console.log(errors);
    };

    return (
        <div className="join-container">
            {/*  <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> */}
            <h1 className="join-head">Join Members</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="username"
                        {...register("uname", {
                            required: "Username is required",
                        })}
                        onChange={(e) => setRegisterUsername(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="uname"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        {...register("pass", {
                            required: "password is required",
                        })}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="pass"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: "Name is required" })}
                        onChange={(e) => setRegisterName(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="phone no"
                        {...register("phone", {
                            required: "phone no is required",
                            minLength: {
                                value: 10,
                                message: "Phone number minimum 10 character",
                            },
                            maxLength: {
                                value: 10,
                                message: "Phone number maximum 10 character",
                            },
                        })}
                        onChange={(e) => setRegisterPhone(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="phone"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your Email"
                        {...register("email", {
                            required: "Email number is required",
                        })}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Aadhar No</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Addhar"
                        {...register("addhar", {
                            required: "Addhar number is required",

                            minLength: {
                                value: 12,
                                message: "Addhar number minimum 12 character",
                            },
                            maxLength: {
                                value: 16,
                                message: "Addhar numbe maximum 16 character",
                            },
                        })}
                        onChange={(e) => setRegisterAddar(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="addhar"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Head Member</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Head member"
                        {...register("head", {
                            required: "Head Member is required",
                        })}
                        onChange={(e) => setRegisterHeadmem(e.target.value)}
                    />
                </Form.Group>
                <ErrorMessage
                    errors={errors}
                    name="head"
                    render={({ message }) => <p className="error">{message}</p>}
                />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default JoinNmem;
