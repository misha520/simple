import { Box } from "@material-ui/core";
import React from "react";
import Status from "../../../modules/files-filter/Status";
import { useStyles } from "./styles";

interface SearchDropdownProps {
  option: string;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ option }) => {
  const classes = useStyles();
  return (
    <>
      {option === "owner" ? (
        <Box className={classes.root}>
          <Box className={classes.coverHeader}>
            <Box className={classes.header}>
              <img
                src="/images/boy.png"
                alt=""
                className={classes.avatarImg}
              />
              <span className={classes.name}>Brad Simmons</span>
            </Box>
          </Box>

          <Box className={classes.body}>
            <span className={classes.titleBody}>More Suggestion</span>
            <span className={classes.textGray}>Braf altra</span>
            <span className={classes.textGray}>Bruc Clyeren</span>
            <span className={classes.textGray}>Bgruc Anthom</span>
            <span className={classes.textGray}>Bohtc Jotham</span>
          </Box>
        </Box>
      ) : (
        <Box className={classes.root}>
          <Box className={classes.coverHeader}>
            <Box className={classes.header} justifyContent="space-around">
              <Box className={classes.headerLeft}>
                <Box className={classes.containerHeaderLeft}>
                  <span className={classes.titleBody}>Loan Number:</span>
                  <span className={classes.textGray}> 165000132340</span>
                </Box>
                <Status status="Processing" />
              </Box>
              <Box className={classes.headerRight}>
                <Box className={classes.headerRightTitle}>
                  <span
                    className={classes.titleBody}
                    style={{ marginBottom: "20px" }}
                  >
                    Borrower Name:
                  </span>
                  <span className={classes.titleBody}>Closing:</span>
                </Box>
                <Box className={classes.headerRightChild}>
                  <span style={{ marginBottom: "20px" }}>Ilhan Suproadi</span>
                  <span>26th March, 2020</span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className={classes.body}>
            <span className={classes.titleBody}>More Suggestion</span>
            <span className={classes.textGray}>165000132340</span>
            <span className={classes.textGray}>165000132340</span>
            <span className={classes.textGray}>165000132340</span>
            <span className={classes.textGray}>165000132340</span>
          </Box>
        </Box>
      )}
    </>
  );
};
export default SearchDropdown;
