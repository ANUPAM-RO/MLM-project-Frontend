import {useEffect, useContext} from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { userContext } from "../App"

function Dashboard() {
    const user = useContext(userContext)
    useEffect(() => {
        console.log(user)
        console.log(localStorage.getItem("token"))
    }, []);
    return (
        <div>
            <div className="grid-container">
                <NavLink
                    exact
                    to="/dashboard/refarel-income"
                    activeClassName="activeClicked"
                ></NavLink>
            </div>

            <div className="d-flex flex-column">
                <div className="p-2">
                    <h5>Name:</h5>
                    <h5>ID:</h5>
                    <h5>Joining Date:</h5>
                </div>
            </div>

            <div className="d-flex flex-column">
                <div className="p-2 text-center">
                    <h4>
                        <b>Offers Provided By Company</b>
                    </h4>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div className="grid-container d-flex flex-wrap justify-content-center">
                            <div className="grid-item my-3 py-5 cardRem">
                                Refarel Income
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Joing Income
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Level Income
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Total Income
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="grid-container d-flex flex-wrap justify-content-center">
                            <div className="grid-item my-3 py-5 cardRem">
                                Main Income{" "}
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Active Income
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Offer Income
                            </div>
                            <div className="grid-item my-3 py-5 cardRem">
                                Global Income
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
