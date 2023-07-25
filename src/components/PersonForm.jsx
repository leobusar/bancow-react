
import {Box, Button, TextField} from '@mui/material'
import {useState} from 'react'

function PersonForm({addPerson}) {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const handleClick = () => {
        if(username!=""){
            addPerson({username: username, name: name, email: email, phone: phone})
            setUsername('')
            setName('')
            setEmail('')
            setPhone('')
        }
    }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '90ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
        <TextField fullWidth label="Username" variant="standard" value={username}
        onChange={(e)=>{setUsername(e.target.value)}}/>
    </div>
    <div>
        <TextField fullWidth label="Name" variant="standard" value={name}
        onChange={(e)=>{setName(e.target.value)}}/>
    </div>
    <div>
        <TextField fullWidth label="Email" variant="standard" value={email}
        onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div>
        <TextField fullWidth label="Phone" variant="standard" value={phone}
        onChange={(e)=>{setPhone(e.target.value)}}/>
    </div>
    <div>
        <Button variant="contained" color="success" onClick={handleClick}>Add</Button>
    </div>
    </Box>  )
}

export default PersonForm