import React from "react";
import SideBar from "./SideBar";
import MessageContent from "./MessageContent";
import { connectWithSocketServer } from "../../socketClient/socketConnection";
import MessageDetailSideBar from "./MessageDetailSideBar/MessageDetailSideBar";

export default function Dashboard() {
  const [openSideBar, setOpenSideBar] = React.useState(false);
  const [openDetailSideBar, setOpenDetailSideBar] = React.useState(false);
  const [height, setHeight] = React.useState(window.innerHeight - 200);

  React.useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    connectWithSocketServer();
  }, []);

  return (
    <div
      className="relative flex h-screen flex-1 overflow-hidden"
      style={{ height: height }}
    >
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
