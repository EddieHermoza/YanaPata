"use client"
import { useEffect } from "react"
import{BsChevronUp} from "react-icons/bs"



async function initTE() {
    try {
      const { Collapse, initTE } = await import("tw-elements");
      initTE({ Collapse });
    } catch (error) {
      console.error("Error al importar/inicializar tw-elements:", error);
    }
  }


 function Acordition({ id, children }) {
    useEffect(() => {
        initTE() 
    }, []);

    return (
        <div id={id} className=" w-full flex flex-col gap-5">
            {children}
        </div>
    )
}


function Colapsable({children, IDCollapse,IDAcordition,Title,label}) {
    return (
        <div className="filter saturate-200 w-full border-black ">
            <h2 className="text-2xl text-center text-black w-full bg-gray-100  hover:bg-gray-200 hover:saturate-200  transform duration-200 filter" id={label}>
                <button className="group relative flex w-full items-center justify-center p-3" type="button" data-te-collapse-init data-te-target={`#${IDCollapse}`}  aria-expanded="false" aria-controls={IDCollapse}>
                    {Title}
                    <BsChevronUp className="rotate-180 mx-3 transform duration-200 group-[[data-te-collapse-collapsed]]:rotate-0"/>
                    <span className="ani-underline bg-verde-rgb duration-500 group-[[data-te-collapse-collapsed]]:scale-x-0"></span>
                </button>
            </h2>
            <div id={IDCollapse} className="!visible hidden " data-te-collapse-item data-te-collapse-collapsed aria-labelledby={label} data-te-parent={`#${IDAcordition}`}>
                <div className="p-8 shadow-lg ">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Acordition, Colapsable };
