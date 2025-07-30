import { BrainIcon } from "../icons/BrainIcon"
import { DocumentIcon } from "../icons/DocumentIcon"
import { XIcon } from "../icons/XIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import { SidebarItem } from "./SidebarItem"

export const Sidebar = () => {
    return <div className="h-screen bg-white w-65 fixed left-0 top-0 text-gray-700 shadow-sm">
        <div className="font-bold text-2xl  flex item-center p-4"> 
            <div className="pr-4 text-purple-500">
                <BrainIcon/> 
            </div>
            Second Brain
        </div>
        <SidebarItem text="X" icon={<XIcon/>}/>
        <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
        <SidebarItem text="Document" icon={<DocumentIcon/>}/>
    </div>
} 