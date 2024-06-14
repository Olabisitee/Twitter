import React from "react";
import SideOption from "./SideOption";
import "../styles/Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { Button } from "@material-ui/core";
import { Button } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SideOption active Icon={HomeIcon} text="Home" />
      <SideOption Icon={SearchIcon} text="Explore" />
      <SideOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SideOption Icon={MailOutlineIcon} text="Messages" />
      <SideOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SideOption Icon={ListAltIcon} text="Lists" />
      <SideOption Icon={PermIdentityIcon} text="Profile" />
      <SideOption Icon={MoreHorizIcon} text="More" />

      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Post
      </Button>
    </div>
  );
}

export default Sidebar;
