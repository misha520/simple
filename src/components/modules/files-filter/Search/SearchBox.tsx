import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Select,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import SearchDropdown from "../../../elements/dropDowns/Search";
import SearchIcon from "../../../elements/icons/Search";
import { useStyles } from "./styles";

const SearchBox: React.FC = () => {
  const classes = useStyles();
  const [searchSelect, setSearchSelect] = useState("number");
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchSelect = (event: any) => {
    setSearchSelect(event.target.value);
  };
  const optionsSearchSelect = [
    { value: "number", title: "Loan Number" },
    { value: "owner", title: "Owner" },
    { value: "borrowers", title: "Borrowers" },
  ];
  return (
    <>
      <Box className={classes.rootSearchBox}>
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            value={searchSelect}
            onChange={handleSearchSelect}
            classes={{
              root: classes.select,
            }}
          >
            {optionsSearchSelect.map((option, index) => (
              <MenuItem
                key={index}
                classes={{
                  root: classes.itemDropdown,
                  selected: classes.itemSelected,
                }}
                value={option.value}
              >
                {option.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box position="relative" width="90%">
          <InputBase
            className={classes.box}
            placeholder="Search here"
            startAdornment={
              <IconButton classes={{ root: classes.iconButton }}>
                <SearchIcon />
              </IconButton>
            }
            onClick={handleOpen}
          />
          {open && (
            <>
              <Box onClick={handleClose} className={classes.overlay} />
              <SearchDropdown option={searchSelect} />
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default SearchBox;
