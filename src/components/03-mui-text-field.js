import { InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";

const MuiTextField = () => {
  return (
    <Stack spacing={4}>
      <Stack
        spacing={2}
        direction="row"
      >
        <TextField
          label="name"
          variant="outlined"
        />
        <TextField
          label="name"
          variant="filled"
        />
        <TextField
          label="name"
          variant="standard"
        />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
      >
        <TextField
          label="small secondary"
          variant="outlined"
          size="small"
          color="secondary"
        />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
      >
        <TextField
          label="Form Input"
          required
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone!"
          disabled
        />
        <TextField
          label="Read Only"
          InputProps={{ readOnly: true }}
        />
      </Stack>
      <Stack
        spacing={2}
        direction="row"
      >
        <TextField
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        {/* endAdornment DOESN'T WORK!!!!! */}

        <TextField
          label="weight"
          color="success"
          inputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  );
};

export default MuiTextField;
