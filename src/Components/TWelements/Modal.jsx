"use client"
import { useEffect } from "react"



async function init() {
    const {Modal, Ripple, initTE } = await import("tw-elements");
    initTE({ Modal,Ripple });
}

function OpenButtonModal({children,target,className}){

    useEffect(() => {
        init();
    }, []);

    return (
        <>
        <button
            type="button"
            className={className}
            data-te-toggle="modal"
            data-te-target={`#${target}`}
            data-te-ripple-init
            data-te-ripple-color="light">
            {children}
        </button>
        </>
    )
}

function CloseButtonModal({children,className}){
    return(
        <>
        <button
            type="button"
            className={className}
            data-te-modal-dismiss
            aria-label="Close">
            {children}
        </button>
        </>
    )
}


 function Modal({children, target,className}) {
    useEffect(() => {
        init();
    }, []);
    return (
        <>
            <div data-te-modal-init  className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id={target} tabIndex="-1" aria-labelledby={`${target}label`} aria-hidden="true">
                <div data-te-modal-dialog-ref  className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                    <div className={`pointer-events-auto ${className}`} data-te-modal-body-ref>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export {Modal,CloseButtonModal,OpenButtonModal}
