import { motion } from "framer-motion"

import sketch1 from "../Desenhos/artebw3.jpg"
import sketch2 from "../Desenhos/artebw4.jpg"
import sketch3 from "../Desenhos/artebw5.jpg"
import sketch4 from "../Desenhos/artebw6.jpg"
import sketch5 from "../Desenhos/artebw7.jpg"
import sketch6 from "../Desenhos/artebw8.jpg"



const sketchData = [
    {sketch: sketch1},
    {sketch: sketch2},
    {sketch: sketch3},
    {sketch: sketch4},
    {sketch: sketch5},
    {sketch: sketch6},
]

export default function Sketch(){
    return(
            sketchData.map(function(item){
                return(
                    <motion.img 
                    initial={{ opacity: 0, translateX: 400}}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{opacity: 0, translateX: -400}}
                    transition={{
                        type: "spring",
                        duration: 1}} src={item.sketch} alt="arte do raza" className="rounded-2xl flex-none shadow-lg shadow-black"/>
                    )
                }
            )
    )
}