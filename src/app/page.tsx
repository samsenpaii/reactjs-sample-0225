import { AddList } from "@/components/AddList/AddList";
import Navbar from "@/components/Navbar/Navbar";
import TaskList from "@/components/TaskList/TaskList";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[#FEFFFE]">
        <Navbar></Navbar>
        <TaskList></TaskList>
        <AddList></AddList>
      </div>
    </>   
  );
}
