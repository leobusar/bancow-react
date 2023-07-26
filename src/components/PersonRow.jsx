import React from "react";
import { TableRow, TableCell, Button } from "@mui/material";

function PersonRow({ person, handleDelete, handleEdit }) {
  return (
    <TableRow key={person.id}>
      <TableCell>{person.name}</TableCell>
      <TableCell>{person.email}</TableCell>
      <TableCell>{person.phone}</TableCell>
      <TableCell>
        <Button
          onClick={() => handleEdit(person)}
          color="info"
          variant="contained"
        >
          Edit
        </Button>
        &nbsp;
        <Button
          onClick={() => handleDelete(person)}
          color="error"
          variant="contained"
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default PersonRow;
