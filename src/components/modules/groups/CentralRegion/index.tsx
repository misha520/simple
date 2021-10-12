import { Box } from "@material-ui/core";
import AppButton from "../../../elements/Button";
import AppTypography from "../../../elements/Typography";
import { useStyles } from "./styles";
import { useScreenSizeDown } from "../../../../hooks";
import SearchOnGroups from "../elements/SearchOnGroups";
import MoreIcon from "../../../elements/icons/MoreIcon";
import BranchCard from "./BranchCard";

export interface BranchCardData {
  name: string;
  description: string;
  numUsers: number;
}

const data: BranchCardData[] = [
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
  {
    name: "Branch Name",
    description: " About Branch choose a theme that looks good with Branch",
    numUsers: 225624,
  },
];

const CentralRegion = () => {
  const classes = useStyles();
  const isMobile = useScreenSizeDown(900);

  return (
    <Box className={classes.paper}>
      {!isMobile && (
        <Box className={classes.titleWrapper}>
          <AppTypography className={classes.title}>
            Central Region (45)
          </AppTypography>
          <Box width="300px" display="flex">
            <SearchOnGroups />
            <AppButton className={classes.MoreBtn}>
              <MoreIcon />
            </AppButton>
          </Box>
        </Box>
      )}
      <Box className={classes.coverBranchCard}>
        {data.map((item, index) => (
          <BranchCard key={index} data={item} />
        ))}
      </Box>
    </Box>
  );
};

export default CentralRegion;
