import React, { useState } from "react";
import { MyContext } from "./Contexts";

const MyProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  const [recentRefetch, setRecentRefetch] = useState(false);
  const categoryInfo = {
    category,
    setCategory,
    recentRefetch,
    setRecentRefetch,
  };
  return <MyContext value={categoryInfo}>{children}</MyContext>;
};

export default MyProvider;
