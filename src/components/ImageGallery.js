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
import splash1 from "../Desenhos/artesplash1.jpg"
import splash2 from "../Desenhos/artesplash2.jpg"
import splash3 from "../Desenhos/artesplash3.jpg"
import splash4 from "../Desenhos/artesplash4.png"
import splash5 from "../Desenhos/artesplashbw1.jpg"
import splash6 from "../Desenhos/artesplashbw2.jpg"
import splash7 from "../Desenhos/artesplashbw3.jpg"
import splash8 from "../Desenhos/artesplashbw10.jpg"
import sketch1 from "../Desenhos/artebw3.jpg"
import sketch2 from "../Desenhos/artebw4.jpg"
import sketch3 from "../Desenhos/artebw5.jpg"
import sketch4 from "../Desenhos/artebw6.jpg"
import sketch5 from "../Desenhos/artebw7.jpg"
import sketch6 from "../Desenhos/artebw8.jpg"

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
const splashData = [
    {splash: splash1},
    {splash: splash2},
    {splash: splash3},
    {splash: splash5},
    {splash: splash6},
    {splash: splash7},
    {splash: splash8},
    {splash: splash4},
];

const sketchData = [
    {sketch: sketch1},
    {sketch: sketch2},
    {sketch: sketch3},
    {sketch: sketch4},
    {sketch: sketch5},
    {sketch: sketch6},
]



export default function ImageGallery(){
    return(
        colorData.map( function(item){
            return(
                <img src={item.color} alt="arte do raza" className="rounded-2xl flex-none "/>
            )
        }),
        splashData.map( function(item){
            return(
                <img src={item.splash} alt="arte do raza" className="rounded-2xl flex-none "/>
            )
        }),
        sketchData.map( function(item){
            return(
                <img src={item.sketch} alt="arte do raza" className="rounded-2xl flex-none"/>
            )
        })
    )
}