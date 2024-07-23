// import React from "react";
import { useState, useEffect } from "react";

const UseInternetStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function isOnline() {
      setIsOnline(true);
    }

    function isOffline() {
      setIsOffline(false);
    }

    window.addEventListener("online", isOnline);
    window.addEventListener("offline", isOffline);

    return () => {
      window.removeEventListener("online", isOnline);
      window.removeEventListener("offline", isOffline);
    };
  }, []);

  return isOnline;
};

export default UseInternetStatus;
