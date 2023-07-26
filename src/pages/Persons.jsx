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
  const [persons, setPersons] = useState(personList);
  const [editPerson, setEditPerson] = useState({});

  const renderPersons = () => {
    return persons.map((person) => {
      return (
        <PersonRow
          person={person}
          key={person.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      );
    });
  };

  const addPerson = (person) => {
    //console.log(person);
    
    let personsTmp = [...persons];
    if(person.id === ""){
        person.id = Math.random().toString(36).substring(2,9);
        personsTmp.push(person);
    }else{
        let index = personsTmp.findIndex((p)=>p.id == person.id);
        personsTmp[index] = person;
    }
    setPersons(personsTmp);
  };

  const handleDelete = (person) => {
    setPersons(persons.filter((p) => p.id != person.id));
  };

  const handleEdit = (person) => {
    setEditPerson(person);
  };

  return (
    <>
      <PersonForm addPerson={addPerson} editPerson={editPerson} />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderPersons()}</TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Persons;
