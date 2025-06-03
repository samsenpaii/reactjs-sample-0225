import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import PlusIconSvg from "@/lib/PlusIconSvg"
import { Textarea } from "../ui/textarea"
import { DatePicker } from "../DatePicker/DatePicker"

export function AddTask() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            <div className="flex flex-row items-center hover:cursor-pointer">
                <div className="bg-[#1C427D] rounded-full text-white">
                    <PlusIconSvg height={20} width={20}></PlusIconSvg>
                </div>
                <p className="text-xl ml-2">Add Task</p>
            </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Task</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Task</Label>
              <Input id="name-1" name="name" placeholder="Task 1" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Description</Label>
              <Textarea placeholder="write task desription here"></Textarea>
            </div>
            <div className="flex flex-row">
              <Label htmlFor="username-1" className="mr-2">Add date</Label>
              <DatePicker></DatePicker>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Add task</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
