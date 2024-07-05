import React from "react";
import Profile from "./Profile/Profile";
import userData from "../assets/userData.json";
import FriendList from "./Friends/FriendList";
import friends from "../assets/friends.json";
import transactionData from "../assets/transactionData.json";
import Transaction from "./Transactionhistory/Transaction";

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <FriendList friends={friends} />
      <Transaction items={transactionData} />
    </>
  );
};

export default App;
