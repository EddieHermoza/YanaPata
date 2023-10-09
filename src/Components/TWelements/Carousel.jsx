"use client"
import { useEffect } from "react";

function Carousel({children,id, className}) {
    useEffect(() => {
        init();
    }, []);
    
    async function init() {
        const { Carousel, initTE } = await import("tw-elements");
        initTE({ Carousel });
    }
    return (
    <div id={id} className={`relative ${className}`} data-te-carousel-init data-te-ride="carousel" data-te-interval="4000">      
        {children}              
    </div>
    )
}

function CarouselBody({children}){
    return(
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            {children}              
        </div>
    )
}

function PrevButton({children,className,idCarousel}){
    return(
        <button className={`flex ${className}`} type="button" data-te-target={idCarousel} data-te-slide="prev"> 
        {children}
        </button>
    )
}

function NextButton({children,className,idCarousel}){
    return(
        <button className={`flex ${className}`} type="button" data-te-target={idCarousel} data-te-slide="next"> 
            {children}
        </button>
    )
}

function ItemActiveCarousel({children,className}) {
    const itemActiveClassName=`relative float-left -mr-[100%] w-full transition-transform duration-[1000ms] overflow-hidden ease-in-out motion-reduce:transition-none ${className}`
    return(

        <div className={itemActiveClassName} style={{ backfaceVisibility: 'hidden' }}  data-te-carousel-item data-te-carousel-active>
            {children}
        </div>

    )
}

function ItemCarousel({ children, className }) {
    const itemClassName = `relative float-left -mr-[100%] hidden w-full transition-transform duration-[1000ms] ease-in-out motion-reduce:transition-none ${className}`;
  
    return (
      <div className={itemClassName} style={{ backfaceVisibility: 'hidden' }} data-te-carousel-item>
        {children}
      </div>
    );
}

export { Carousel, ItemActiveCarousel,ItemCarousel,PrevButton,NextButton,CarouselBody };
