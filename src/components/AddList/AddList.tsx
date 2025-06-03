import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import PlusIconSvg from "@/lib/PlusIconSvg"

export function AddList() {
  return (
  <div className="fixed bottom-4 right-4">
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="bg-[#1C427D] text-white rounded-full font-extrabold p-3 hover:cursor-pointer">
            <PlusIconSvg height={40} width={40}></PlusIconSvg>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] p-12">
          <DialogTitle>
            Add List
          </DialogTitle>
          <div className=" flex flex-row justify-between">
            <Input id="name-1" name="name" placeholder="List 1" />
            <Button className="ml-1 mr-1 hover:cursor-pointer bg-[#1C427D]">Save List</Button>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  </div>
    
  )
}
