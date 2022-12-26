import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
// styling material ui components using styled()
const Header = styled(AppBar)`
  background: #111111;
`;

// styling
const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 30px;
  color: inherit;
  text-decoration: none;
`;
const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Code for Interview </Tabs>
        <Tabs to="/all"> All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
