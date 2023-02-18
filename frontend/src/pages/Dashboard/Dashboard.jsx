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

  return (
    <div className="relative flex h-screen flex-1 flex-col justify-between overflow-hidden">
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
      {/* 
      <MessageContent
        setOpenSideBar={setOpenSideBar}
        setOpenDetailSideBar={setOpenDetailSideBar}
      />
      <MessageDetailSideBar
        openDetailSideBar={openDetailSideBar}
        setOpenDetailSideBar={setOpenDetailSideBar}
      /> */}
    </div>
  );
}
