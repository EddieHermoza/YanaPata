"use client"
import Image from "next/image"
import NavRouter from "./NavRouter"
import {useState,useEffect} from "react"


function PortadaServicios({titulo,desc,img}) {

    const [isInSection, setIsInSection] = useState(false);

    useEffect(() => {
        handleScroll(); 

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const tittle = document.getElementById('tittle');
        const present = document.getElementById('present');
    
        if (tittle && present) {
            const tittleRect = tittle.getBoundingClientRect();
            const presentRect = present.getBoundingClientRect();
            const isTittleVisible = tittleRect.top >= 0 && tittleRect.bottom <= window.innerHeight;
            const isPresentVisible = presentRect.top >= 0 && presentRect.bottom <= window.innerHeight;
    
            setIsInSection(isTittleVisible && isPresentVisible);
        }
    };

    const tittleEffect ='animate-fade-down animate-duration-[1500ms] '
    const presentEffect = 'animate-fade-up animate-duration-[1500ms] ';

    const effectTittle = isInSection ? tittleEffect : 'opacity-0 ';
    const effectPresent = isInSection ? presentEffect : 'opacity-0 ';

    const backgroundStyle = {
        backgroundImage: `url(${img})`, 
      };
  return (
    <>
        <section className="relative h-[calc(100vh-200px)] w-full overflow-hidden bg-fixed  bg-center bg-cover bg-no-repeat " id="SectPortada" style={backgroundStyle}>
            <div className="bg-black bg-opacity-50 absolute w-full h-full"></div>
            <div className="absolute w-full h-full items-center justify-center inset-0 flex flex-col gap-3">
                <h2 id="tittle" className={`text-white max-sm:text-3xl text-5xl lg:text-6xl xl:text-7xl text-center text-shadow-lg shadow-black ${effectTittle}`}>{titulo}</h2>
                <p id="present" className={`text-white max-sm:text-base text-shadow-lg shadow-black max-md:text-xl md:text-2xl xl:text-4xl text-center ${effectPresent}`}>« {desc} »</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full flex items-center justify-center h-[60px]">
                <NavRouter/>
            </div>
        </section>
        <div className="bg-white" id="DivPortada">
            <Image src="/images/YanaPata.png" width={200} height={200} alt="Logo" className="mx-auto filter saturate-200"/>
        </div>
    </>
  )
}

export default PortadaServicios