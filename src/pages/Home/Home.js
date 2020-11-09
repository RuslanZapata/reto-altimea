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
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FormFilter from "../../components/FormFilter";
import LayoutPrimary from "../../components/layout";
import TableCountries from "../../components/TableCountries";

import ServiceAllCountry from "../../services/ServiceAllCountry";

const HomePage = () => {
  const [filterLenguaje, setFilterLenguaje] = useState({
    name: "Idioma",
    value: "",
  });
  const [filterCurrency, setFilterCurrency] = useState({
    name: "Moneda",
    value: "",
  });
  const [filterRegion, setFilterRegion] = useState({
    name: "Región",
    value: "",
  });

  const [inputCountry, setInputCountry] = useState("");
  const [inputAlpha2Code, setInputAlpha2Code] = useState("");

  useEffect(() => {
    console.log({ filterLenguaje, filterCurrency, filterRegion });
    serviceAllCountry();
  }, [filterLenguaje, filterCurrency, filterRegion]);

  const serviceAllCountry = () => {
    const params = {
      name_contains: inputCountry,
      alpha2Code_in: inputAlpha2Code,
    };

    if (!inputCountry) delete params["name_contains"];
    if (!inputAlpha2Code) delete params["alpha2Code_in"];

    const response = ServiceAllCountry(params);
    console.log({ response });
    response.then((result) => {
      console.log({ result });
    });
  };

  return (
    <>
      <LayoutPrimary>
        <br />
        <hr />
        <Button variant="contained">Todos</Button>
        <FormFilter
          name={filterLenguaje.name}
          handleClick={setFilterLenguaje}
        />
        <FormFilter
          name={filterCurrency.name}
          handleClick={setFilterCurrency}
        />
        <FormFilter name={filterRegion.name} handleClick={setFilterRegion} />
        <hr />
        <Button variant="contained">Buscar</Button>
        <TextField
          id="standard-basic"
          label="País"
          value={inputCountry}
          onChange={(event) => setInputCountry(event.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Alpha2Code"
          value={inputAlpha2Code}
          onChange={(event) => setInputAlpha2Code(event.target.value)}
        />
        <hr />
        <TableCountries />
      </LayoutPrimary>
    </>
  );
};

export default HomePage;
