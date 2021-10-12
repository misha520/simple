import { FormControl, MenuItem, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  coverSelectButton: {
    [breakpoints.down(1000)]: {
      width: "calc(33% - 12px)",
    },
   
  },
  select: {
    padding: "18px 41px 18px 21px !important",
    background: "#none ",
    color: palette.all.gray,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "21px",

    "& ~ svg": {
      color: palette.all.gray,
    },

    "& ~ fieldset": {
      border: "none",
      borderRadius: "14px",
    },
     [breakpoints.down(600)]: {
      fontSize: "12px"
    },
  },
  outlineSelect: {
    border: `1px solid rgba(156, 150, 158, 0.15)`,
    marginLeft: "0px",
  },
  itemDropdown: {
    fontSize: "14px",
    color: palette.all.gray,
  },
  itemSelected: {
    color: `${palette.all.black} !important`,
    background: "#fff !important",
  },
}));

interface SelectOptionProps {
  name?: string;
  value?: string | number;
  options?: {
    value: string | number;
    title: string | number;
  }[];
  handleChange?: (event: any) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  value,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.coverSelectButton} variant="outlined">
      <Select
        value={value}
        onChange={handleChange}
        classes={{
          root: classes.select,
          outlined: classes.outlineSelect,
        }}
        name={name}
      >
        <MenuItem
          classes={{
            root: classes.itemDropdown,
            selected: classes.itemSelected,
          }}
          value={value}
        >
          {value}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectOption;
