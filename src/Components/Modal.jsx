"use client"
import { useEffect,useState } from "react";
import {AiOutlineClose} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import Login from "./Forms/FormLogin";
import Register from "./Forms/FormRegister";


function Modal() {

    const [ModalEstado, setModalEstado] = useState("login");

    const CambiarEstado = () => {
        // Cambiar entre "login" y "register" al hacer clic en el botón
        setModalEstado(ModalEstado === "login" ? "register" : "login");
    };

    useEffect(() => {
        init();
      }, []);
    
      async function init() {
        const { Modal,Ripple, initTE } = await import("tw-elements");
        initTE({ Modal,Ripple });
      }
  return (
    <div>
        <div data-te-modal-init className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModalCenter" tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div data-te-modal-dialog-ref  className="relative flex max-[576px]:h-screen w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:m-auto  min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[600px]">
                <div className="relative flex w-full h-full flex-col items-center bg-white py-5">
                    <div className="flex w-full items-center justify-end px-5">
                        <button type="button" className="" data-te-modal-dismiss  aria-label="Close">
                            <AiOutlineClose className=" filter saturate-200 transform duration-200 hover:text-verde-rgb hover:rotate-180" size={30}/>
                        </button>
                    </div>
                    {ModalEstado === "login" ? <Login /> : <Register />}
                    
                    <div className="flex space-x-1 justify-center items-center mt-5">
                    <span className="text-base text-black">
                        {ModalEstado === "login" ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}
                        </span>
                    <button onClick={CambiarEstado} className="relative group text-base text-verde-rgb filter transform duration-200 hover:saturate-200 hover:underline">
                        {ModalEstado === "login" ? "Regístrate" : "Inicia Sesión"}
                    </button>
                    </div>
                    <button className="border-2 border-verde-rgb filter transform duration-200 hover:saturate-200 rounded flex items-center justify-center gap-1 w-2/3 my-5 px-2">
                        <span className="text-xl text-black">Inicia Sesión con</span>
                        <FcGoogle size={32}/>
                    </button>
                </div>
            </div>
        </div>
    </div>
    


  )
}

export default Modal