import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import axios from "../utils/axios";
//import personList from "../data/users.json";
import PersonRow from "../components/PersonRow";
import PersonForm from "../components/PersonForm";
import { useEffect, useState } from "react";
import { PersonContext } from "../context/PersonContext";

function Persons() {
  const [persons, setPersons] = useState([]);
  const [editPerson, setEditPerson] = useState({});

  const getPersons = async () => {
    try {
      const response = await axios.get("/persons");
      setPersons(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersons();
  }, []);

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

    if (person.id === "") {
      person.id = Math.random().toString(36).substring(2, 9);
      //personsTmp.push(person);
      try {
        axios.post("/persons", person).then((response) => {
          if (response.status)
            getPersons();
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        axios.put("/persons/" + person.id, person).then((response) => {
          if(response.status)
            getPersons();
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = (person) => {
    //setPersons(persons.filter((p) => p.id != person.id));
    try {
      axios.delete("/persons/" + person.id)
      .then((res) => {
        if(res.status === 200)
          getPersons();
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (person) => {
    setEditPerson(person);
  };

  return (
    <PersonContext.Provider value={{editPerson, setEditPerson}}>
      <PersonForm addPerson={addPerson} />
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
    </PersonContext.Provider>
  );
}

export default Persons;
