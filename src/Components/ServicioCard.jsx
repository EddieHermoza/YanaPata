import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {LiaBoneSolid} from "react-icons/lia";

const ServicioCard = ({ title, desc, img}) => {
  return (
      <div className="cursor-default relative group w-full items-center justify-center overflow-hidden " data-aos="zoom-in">
        <div className="relative">
          <Image className="object-cover object-center brightness-75 group-hover:scale-110 group-hover:brightness-50 transform duration-300" src={img} alt={title} width={800} height={500}/>
          <div className='absolute inset-0 w-full h-full filter saturate-200'>
          <h2 className='z-20 absolute top-1/2 -translate-y-1/2 group-hover:top-[25%] max-sm:text-3xl text-4xl text-white text-shadow-lg shadow-black text-center w-full transform duration-200 group-hover:text-verde-rgb filter saturate-200 '>{title}</h2>
          <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transform duration-200">
            <p className='absolute max-sm:text-base sm:text-xl text-white top-1/2 -translate-y-1/2 text-center px-2 w-full'>{desc}</p>
            <Link className=' absolute top-[75%] left-1/2 -translate-x-1/2 text-xl rounded-full px-5 py-2 bg-verde-rgb bg-opacity-75 filter saturate-150 hover:bg-opacity-100 hover:text-white tranform duration-200 flex items-center justify-center gap-1' 
            href={`Servicios/${title}`}> Ver mas <LiaBoneSolid size={28}/> </Link>
          </div>
          </div>
        </div>
      </div>
  );
};

ServicioCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ServicioCard;