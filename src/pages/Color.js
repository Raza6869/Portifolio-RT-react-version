import { motion } from "framer-motion"

import color2 from "../Desenhos/arte2.jpg"
import color4 from "../Desenhos/arte4.jpg"
import color5 from "../Desenhos/arte5.jpg"
import color6 from "../Desenhos/arte6.jpg"
import color7 from "../Desenhos/arte7.jpg"
import color8 from "../Desenhos/arte8.jpg"
import color10 from "../Desenhos/arte10.jpg"
import color11 from "../Desenhos/arte11.jpg"
import color12 from "../Desenhos/arte12.jpg"
import color13 from "../Desenhos/arte13.jpg"
import color14 from "../Desenhos/arte14.jpg"
import color15 from "../Desenhos/arte15.jpg"
import color17 from "../Desenhos/arte17.jpg"
import color18 from "../Desenhos/arte18.jpg"

const colorData = [
    {color: color2},
    {color: color4},
    {color: color5},
    {color: color6},
    {color: color7},
    {color: color8},
    {color: color10},
    {color: color11},
    {color: color12},
    {color: color13},
    {color: color14},
    {color: color15},
    {color: color17},
    {color: color18}, 
];

export default function Color(){
    return(
            colorData.map(function(item){
                return(
                    <motion.img 
                    initial={{ opacity: 0, translateX: 400}}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{opacity: 0, translateX: -400}}
                    transition={{
                        type: "spring",
                        duration: 1.4}} src={item.color} alt="arte do raza" className="rounded-2xl flex-none shadow-lg shadow-black"/>
                    )
                }
            )
    )
}