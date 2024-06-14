import React from "react";
import "../styles/Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1756269548687196469"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Dee_RNners"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://t.co/dzfL7JIBiY"}
          options={{ text: "#reactjs is awesome", via: "Dee_RNners" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
