//Displaying all the users from backend to the UI
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  styled,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../service/api";
import React from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 95%;
  margin: 50px auto 0 auto;
`;

const TRow = styled(TableRow)`
  background: #000000;
  & > th {
    color: #fff;
    font-size: 19px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 17px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
    console.log(response.data);
  };

  const deleteAllUser = async (id) => {
    await deleteUser(id);
    //once deleted the page should bring the updated data
    getAllUsers();
  };
  return (
    <StyledTable>
      <TableHead>
        <TRow>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TRow>
      </TableHead>
      <TableBody>
        {users.map((user) => {
          return (
            <TBody key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  style={{ marginRight: 10 }}
                  component={Link}
                  // this to path matched the one we define in App.js -- this is for routing on the front end
                  // for routing on the backend
                  to={`/edit/${user._id}`}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => deleteAllUser(user._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TBody>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
