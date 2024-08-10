import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, TextField, Alert } from '@mui/material';

const Add = ({ product = {} }) => {
  const [form, setForm] = useState({
    Name: product.Name || '',
    Email: product.Email || '',
    Contact: product.Contact || '',
    Password: product.Password || '',
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');

  const showData = () => {
    if (!termsAccepted) {
      setError('You must accept the terms and conditions.');
      return;
    }
    if (!form.Name || !form.Email || !form.Contact || !form.Password) {
      setError('All fields are required.');
      return;
    }
    setError('');
    alert('Registeration Completed');
    console.log(form);
  };

  const valueCap = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        backgroundColor: '#f4f4f4', 
        p: 2, 
        borderRadius: '8px', 
      }}
      noValidate
      autoComplete="off"
    >
      <br />
      <div>
        <TextField
          required
          id="name"
          label="Name"
          name="Name"
          value={form.Name}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }} 
        />
        <br />
        <TextField
          required
          id="email"
          label="Email"
          name="Email"
          type="email"
          value={form.Email}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="contact"
          label="Contact Number"
          name="Contact"
          type="tel"
          value={form.Contact}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          name="Password"
          type="password"
          value={form.Password}
          onChange={valueCap}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />

        <FormControlLabel
          control={<Checkbox checked={termsAccepted} onChange={handleCheckboxChange} />}
          label="I agree to the terms and conditions"
        />
        <br />
        {error && <Alert severity="error">{error}</Alert>}
        

        <Button
  variant="contained"
  sx={{
    backgroundColor: '#008080',
    '&:hover': {
      backgroundColor: '#004d40', 
    }
  }}
  onClick={showData}
>
  Register
</Button>

      </div>
    </Box>
  );
};

export default Add;

