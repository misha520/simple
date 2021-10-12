import * as React from "react";

import { Select, FormControl, MenuItem } from "@material-ui/core";

import { useStyles } from "./styles";

interface Props {
  name?: string;
  value?: string | number;
  options: {
    value: string | number;
    title: string | number;
  }[];
  disabled?: boolean;
  onChange?: (event: any) => void;
}

const SelectOptions: React.FC<Props> = ({ name, value, options, onChange }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined">
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value || ""}
        onChange={onChange}
        classes={{
          root: classes.root,
          select: ` ${name === "fileOverTime" && classes.fileOverTime} ${
            name === "processors" && classes.processors
          } ${name === "fileOverTimeButton" && classes.fileOverTimeButton}`,
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            classes={{
              selected: `${
                name === "fileOverTime" && classes.ItemFileOverTimeSelected
              } ${name === "processors" && classes.ItemProcessorSelected}`,
            }}
            value={option.value}
          >
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectOptions;
