import React from "react";
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "auto",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader
                    prefix={<i className="fa fa-bars fa-large"></i>}
                >
                    <a
                        href="/"
                        className="text-decoration-none"
                        style={{ color: "inherit" }}
                    >
                        Logo
                    </a>
                </CDBSidebarHeader>

                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                        <NavLink
                            exact
                            to="/dashboard"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="columns">
                                Dashboard
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/referrals"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="user-friends">
                                Referrals
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/join-new-member"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="user-plus">
                                Join new Member
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/update-profile"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="users-cog">
                                Update Profile
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/widthdrawl"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="piggy-bank">
                                Widthdrawl
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/transfer"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="exchange-alt">
                                Transfer
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/report"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="chart-bar">
                                Report
                            </CDBSidebarMenuItem>
                        </NavLink>
                        <NavLink
                            exact
                            to="/log-out"
                            activeClassName="activeClicked"
                        >
                            <CDBSidebarMenuItem icon="power-off">
                                Log out
                            </CDBSidebarMenuItem>
                        </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};

export default Sidebar;
