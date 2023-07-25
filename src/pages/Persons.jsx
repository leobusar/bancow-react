import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import personList from "../data/users.json";
import PersonRow from "../components/PersonRow";
import PersonForm from "../components/PersonForm";
import { useState } from "react";

function Persons() {
    const[persons, setPersons] = useState(personList)
  const renderPersons = () => {
    return persons.map((person) => {
      return <PersonRow person={person} key={person.id} />;
    });
  };

  const addPerson = (person) => {
    //console.log(person);
    let personsTmp = [...persons];
    personsTmp.push(person);
    setPersons(personsTmp);
  }

  return (
    <>
      <PersonForm addPerson={addPerson}/>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderPersons()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Persons;
