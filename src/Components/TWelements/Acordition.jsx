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


 function Acordition({ id, children,className }) {
    useEffect(() => {
        initTE() 
    }, []);

    return (
        <div id={id} className={className}>
            {children}
        </div>
    )
}


function Colapsable({ children, IDCollapse, IDAcordition, Title, label, customClasses }) {
    const containerClasses = `${customClasses.container || ''}`;
    const buttonClasses = `group ${customClasses.button || ''}`;
    const iconClasses = `group-[[data-te-collapse-collapsed]]:rotate-0 [&:not([data-te-collapse-collapsed])]:rotate-180 transform duration-300 ${customClasses.icon || ''}`;
    const underlineClasses = `group-[[data-te-collapse-collapsed]]:scale-x-0 ${customClasses.underline || ''}`;
    const collapseClasses = `!visible hidden ${customClasses.collapse || ''}`;
  
    return (
        <div className={containerClasses}>
            <button
                className={buttonClasses}
                type="button"
                data-te-collapse-init
                data-te-collapse-collapsed
                data-te-target={`#${IDCollapse}`}
                aria-expanded="false"
                aria-controls={IDCollapse}
            >
                {Title}
                <BsChevronUp className={iconClasses} />
                <span className={underlineClasses}></span>
            </button>
            <div id={IDCollapse} className={collapseClasses} data-te-collapse-item data-te-collapse-collapsed aria-labelledby={label} data-te-parent={`#${IDAcordition}`}>
                {children}
            </div>
        </div>
    );
  }

export { Acordition, Colapsable };
