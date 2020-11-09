import {
  AppBar,
  Button,
  FormControl,
  Grid,
  InputLabel,
  ListSubheader,
  makeStyles,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FormFilter = ({ name, handleClick }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-select">{name}</InputLabel>
      <Select defaultValue="" id="grouped-select" onChange={(event) => handleClick(event.target.value)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <ListSubheader>Category 1</ListSubheader>
        <MenuItem value={1}>Option 1</MenuItem>
        <MenuItem value={2}>Option 2</MenuItem>
        <ListSubheader>Category 2</ListSubheader>
        <MenuItem value={3}>Option 3</MenuItem>
        <MenuItem value={4}>Option 4</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FormFilter;
