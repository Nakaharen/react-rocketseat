import { Button } from "./ui/button";
import { Check, X } from 'lucide-react'

export function CreateTagForm() {
  return(
    <form className="w-full space-y-6 mt-10" >
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="name">Tag name</label>
        <input 
          id="name" 
          type="text"
          className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full" 
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="slug">Slug</label>
        <input 
          id="slug" 
          type="text"
          className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full" 
          readOnly
        />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button>
          <X className="size-3" />
          Cancel
        </Button>
        <Button className="bg-teal-400 text-teal-950" type="submit">
          <Check className="size-3"/>
          Save
        </Button>
      </div>
    </form>
  )
}