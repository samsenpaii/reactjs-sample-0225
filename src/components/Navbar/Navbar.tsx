import { Profile } from "../Profile/Profile";

export default function Navbar(){
    return(
        <>
            <div className="w-screen h-20 bg-[#1C427D] text-white flex flex-row justify-between">
                <h1 className="text-4xl font-bold m-5 ml-14">TaskBord</h1>
                <Profile></Profile>
            </div>
        </>
    )
}