import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    FacebookShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
} from "react-share";
import "../App.css";

function Refferl() {
    const [value, setValue] = useState("");
    const [copied, setCopied] = useState(false);
    const [dataset, setData] = useState("");
    const shareUrl = ""; // TODO: Give Your Personalised URL To Share
    useEffect(() => {
        axios
            .get("https://stormy-ridge-27884.herokuapp.com/balance")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.error("API not found", err));
    });
    return (
        <div className="">
            <div className="grid-container">
                <NavLink
                    exact
                    to="/dashboard/refarel-income"
                    activeClassName="activeClicked"
                ></NavLink>
            </div>

            <div className="d-flex p-2 flex-column">
                <div className="p-2 text-center">
                    <h3>
                        <b>
                            Total Referrel Count: <span>0</span>
                        </b>
                    </h3>
                </div>
                <h5 className="p-3">
                    Your Referral Link: &nbsp;
                    <span>
                        <input
                            type="text"
                            value={value}
                            onChange={({ target: { value } }) =>
                                setValue(value)
                            }
                        />
                        <CopyToClipboard
                            text={value}
                            onCopy={() => setCopied(true)}
                        >
                            <button>Copy</button>
                        </CopyToClipboard>
                        {copied ? (
                            <span style={{ color: "red" }}>Copid</span>
                        ) : null}
                    </span>
                </h5>
            </div>

            <div
                style={{
                    background: "#fff",
                    height: "100vh",
                    width: "100%",
                }}
            >
                <h3 className="px-5">Share Now:</h3>
                <div className="d-flex px-5 py-3 mx-5 flex-row">
                    <FacebookShareButton
                        url={shareUrl}
                        quote={"Your friend wants to share MLM refferl link."}
                        hashtag={"#MLM4Life"}
                    >
                        <FacebookIcon size={40} round={true} />
                        &nbsp;
                    </FacebookShareButton>

                    <WhatsappShareButton
                        url={shareUrl}
                        quote={"Your friend wants to share MLM refferl link."}
                        hashtag={"#MLM4Life"}
                    >
                        <WhatsappIcon size={40} round={true} />
                        &nbsp;
                    </WhatsappShareButton>

                    <LinkedinShareButton
                        url={shareUrl}
                        quote={"Your friend wants to share MLM refferl link."}
                        hashtag={"#MLM4Life"}
                    >
                        <LinkedinIcon size={40} round={true} />
                        &nbsp;
                    </LinkedinShareButton>

                    <TwitterShareButton
                        url={shareUrl}
                        quote={"Your friend wants to share MLM refferl link."}
                        hashtag={"#MLM4Life"}
                    >
                        <TwitterIcon size={40} round={true} />
                        &nbsp;
                    </TwitterShareButton>
                </div>
            </div>
        </div>
    );
}

export default Refferl;
