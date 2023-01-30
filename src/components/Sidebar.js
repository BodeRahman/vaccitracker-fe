import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/sidebar-logo.png'

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#054689" width="">
        <CDBSidebarHeader >
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            <img src={logo} alt="Vaccitracker logo" style={{ height: '40px', width: '110' }}  />
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/tables" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Children</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="plus">Vaccitracker wiki</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bell">Reminders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/hero404" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Log out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;