import { createContext, useState } from "react";
import {ProjectData} from '../component/ProjectData'
const MenuContext = createContext();

export const MenuProvider =({children})=>{

const [isOpen, setIsOpen] =useState(false);
const [filter,setFilter] = useState('all');



    return(
        <MenuContext.Provider value={{isOpen, setIsOpen, filter, setFilter, ProjectData}}>
{children}
        </MenuContext.Provider>
    )
}
export default MenuContext;