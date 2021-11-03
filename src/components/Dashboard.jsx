import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
function Dashboard() {
    return (
        <div>
            <div className="grid-container">
                <NavLink
                    exact
                    to="/dashboard/refarel-income"
                    activeClassName="activeClicked"
                >
                    <div className="grid-item">Refarel Income</div>
                </NavLink>

                <div className="grid-item">Joing Income</div>
                <div className="grid-item">Level Income</div>
                <div className="grid-item">Total Income </div>
                <div className="grid-item">Main Income </div>
                <div className="grid-item">Active Income</div>
                <div className="grid-item">Offer Income</div>
                <div className="grid-item">Global Income</div>
            </div>
        </div>
    );
}

export default Dashboard;
