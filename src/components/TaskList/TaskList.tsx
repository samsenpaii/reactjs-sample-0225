import { AddTask } from "../AddTask/AddTask";

export default function TaskList(){
    return(
        <>
            <div className="w-screen h-fit">
                <div className="h-fit w-48 border border-[#1C427D] m-5">
                    <div className="p-5">
                        <p className="text-2xl font-medium mb-5">My Task</p>
                        <AddTask></AddTask>
                    </div>
                </div>
            </div>
        </>
    )
}