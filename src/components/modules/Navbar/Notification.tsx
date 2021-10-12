import { Box } from "@material-ui/core";
import { useState, useRef } from "react";
import * as React from "react";
import { useClickOutside } from "../../../hooks";
import { getRefElement } from "../../../utils/helpers";
import NotificationDropDown from "../../elements/dropDowns/Notifications";
import NotificationIcon from "../../elements/icons/Notification";

const Notification: React.FC = () => {
  const [open, setOpen] = useState(false);
  const notRef = useRef<HTMLDivElement>(null);
  const refSwitcher = useRef<HTMLDivElement>(null);

  useClickOutside(notRef, (e: MouseEvent) => {
    if (
      !getRefElement<HTMLDivElement>(refSwitcher)?.contains(
        e.target as HTMLDivElement
      )
    ) {
      setOpen(false);
    }
  });

  const handleToggle = () => setOpen((prevState) => !prevState);

  return (
    <div ref={refSwitcher} onClick={handleToggle}>
      <Box display="flex" position="relative" style={{ cursor: "pointer" }}>
        <NotificationIcon />
      </Box>
      <div ref={notRef}>{open && <NotificationDropDown />}</div>
    </div>
  );
};

export default Notification;
