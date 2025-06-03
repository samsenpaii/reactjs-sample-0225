import { AddList } from "@/components/AddList/AddList";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#FEFFFE]">
        <Navbar></Navbar>
        <AddList></AddList>
      </div>
    </>   
  );
}
