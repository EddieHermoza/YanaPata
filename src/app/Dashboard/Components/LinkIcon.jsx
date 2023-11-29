import { MdDashboard } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { RiShieldUserLine } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { MdOutlinePets } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import Link from "next/link";
const iconComponents = {
    Dashboard: MdDashboard,
    Servicios:FaHandHoldingHeart,
    Comentarios:FaRegCommentDots,
    Solicitudes:GoBell,
    Administradores: RiShieldUserLine,
    Clientes:RiUserFollowLine,
    Mascotas:MdOutlinePets,
};


function LinkIcon({icon,text,href,className,onClick}) {
    let IconComponent=iconComponents[icon]
    return (
        <Link href={href} className={className} onClick={onClick}>
            {IconComponent && <IconComponent size={24} className="" />}
            {text} 
        </Link>
    )
}

export default LinkIcon