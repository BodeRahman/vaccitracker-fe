import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/sidebar-logo.png";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/")
  };

  return (
    <div style={{ display: "flex", height: "100%" }}>
      <CDBSidebar textColor="#fff" backgroundColor="#054689" width="">
        <CDBSidebarHeader>
          <NavLink
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <img
              src={logo}
              alt="Vaccitracker logo"
              style={{ height: "40px", width: "110" }}
            />
          </NavLink>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/temphome" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/children" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Children</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/vaccination-wiki"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="plus">
                Vaccitracker wiki
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/reminders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bell">Reminders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <div>
              <CDBSidebarMenuItem icon="exclamation-circle" onClick={onLogout}>
                Log out
              </CDBSidebarMenuItem>
            </div>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
