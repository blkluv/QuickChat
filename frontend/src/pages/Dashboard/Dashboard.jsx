import React from "react";
import SideBar from "./SideBar";
import MessageContent from "./MessageContent";
import { connectWithSocketServer } from "../../socketClient/socketConnection";
import MessageDetailSideBar from "./MessageDetailSideBar/MessageDetailSideBar";

export default function Dashboard() {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const [openDetailSideBar, setOpenDetailSideBar] = React.useState(false);
  const [height, setHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    connectWithSocketServer();
  }, []);

  React.useEffect(() => {
    // function handleResize() {
    //   setHeight(window.innerHeight);
    // }
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
    // function appHeight() {
    //   const doc = document.documentElement;
    //   doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
    // }
    // window.addEventListener("resize", appHeight);
    // appHeight();
  }, []);

  return (
    <div className="relative flex h-screen flex-1 overflow-hidden">
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      <MessageContent
        setOpenSideBar={setOpenSideBar}
        setOpenDetailSideBar={setOpenDetailSideBar}
      />
      <MessageDetailSideBar
        openDetailSideBar={openDetailSideBar}
        setOpenDetailSideBar={setOpenDetailSideBar}
      />
    </div>
  );
}
