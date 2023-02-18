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

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="relative flex h-screen flex-1 flex-col justify-between overflow-hidden"
      style={{ height: height }}
    >
      <div>a</div>
      <div>b</div>
      {/* <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
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
