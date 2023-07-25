import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function PersonRow({person}) {
  return (
    <TableRow key={person.id}>
    <TableCell>{person.name}</TableCell>
    <TableCell>{person.email}</TableCell>
    <TableCell>{person.phone}</TableCell>
    </TableRow>)
}

export default PersonRow