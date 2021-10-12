import { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import AppButton from "../../../../../../elements/Button";
import ArrowDownIcon from "../../../../../../elements/icons/ArrowDown";
import { useScreenSizeDown } from "../../../../../../../hooks";

const filterButton = ["Status", "Action", "Loan Changes"];

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  btnWrapper: {
    whiteSpace: "nowrap",
    width: "100%",
  },
  filterBtn: {
    padding: "14px 32px",
    marginBottom: "12px",
    marginRight: "8px",
    fontSize: "14px",
    fontWeight: 500,
    borderRadius: "8px",
    [breakpoints.down("sm")]: {
      margin: "0",
      width: "100%",
    },
  },
  activeBtn: {
    color: palette.all.blue,
    background: `${palette.all.blue}33`,
  },
  downIcon: { display: "flex", position: "absolute", right: "21px" },
  dropDown: {
    position: "absolute",
    top: "100%",
    background: "#fafafa",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    zIndex: 1,
    border: "1px solid #c1c1c1",
    borderRadius: "8px",
    boxShadow: "0px 7px 15px rgba(38, 105, 93, 0.04)",
  },
}));

const FilterButtons = () => {
  const [activeButton, setActiveButton] = useState("Status");
  const [modal, setModal] = useState(false);

  const handleActive = (label: string) => {
    setActiveButton(label);
    setModal(false);
  };
  const isSmallSizeDown = useScreenSizeDown("sm");

  const classes = useStyles();

  return (
    <Box className={classes.btnWrapper}>
      {isSmallSizeDown ? (
        <Box position="relative">
          <AppButton
            onClick={() => setModal(!modal)}
            className={`${classes.filterBtn} ${classes.activeBtn}`}
          >
            {activeButton}
            <Box className={classes.downIcon}>
              <ArrowDownIcon />
            </Box>
          </AppButton>
          {modal && (
            <Box className={classes.dropDown}>
              {filterButton.map((label: string, index: number) => (
                <AppButton
                  key={index}
                  className={
                    activeButton === label
                      ? `${classes.filterBtn} ${classes.activeBtn}`
                      : classes.filterBtn
                  }
                  onClick={() => handleActive(label)}
                >
                  {label}
                </AppButton>
              ))}
            </Box>
          )}
        </Box>
      ) : (
        filterButton.map((label, index) => (
          <AppButton
            key={index}
            className={
              activeButton === label
                ? `${classes.filterBtn} ${classes.activeBtn}`
                : classes.filterBtn
            }
            onClick={() => handleActive(label)}
          >
            {label}
          </AppButton>
        ))
      )}
    </Box>
  );
};

export default FilterButtons;
