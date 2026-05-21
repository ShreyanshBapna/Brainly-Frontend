import type { ReactElement } from "react"

export const SidebarItem = ({text, icon, isActive, onClick}: {
    text: string, 
    icon: ReactElement, 
    isActive?: boolean,
    onClick?: () => void
}) => {
    return <div 
        className={`flex items-center pl-3 cursor-pointer hover:bg-gray-200 ${
            isActive ? 'bg-gray-200 border-r-2 border-purple-500' : ''
        }`}
        onClick={onClick}
    >
        <div className="p-2">
            {icon}
        </div>
        <div className="p-2 font-semibold">
            {text}
        </div>
         
    </div>
}