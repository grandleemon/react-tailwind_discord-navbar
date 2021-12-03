import React from 'react';
import { RiHome2Line, RiChat1Line, RiTranslate, RiShoppingBagLine } from "react-icons/ri";

const Sidebar = () => {
    return (
        <div className="
        fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-primary text-secondary shadow-lg">
            <SidebarIcon icon={<RiHome2Line size="30" />}/>
            <SidebarIcon icon={<RiChat1Line size="30" />}/>
            <SidebarIcon icon={<RiTranslate size="30" />}/>
            <SidebarIcon icon={<RiShoppingBagLine size="30" />}/>
        </div>
    );
};

const SidebarIcon = ( { icon, text = 'tooltip' } ) => {
    return  <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
}

export default Sidebar;