
import splash1 from "../Desenhos/artesplash1.jpg"
import splash2 from "../Desenhos/artesplash2.jpg"
import splash3 from "../Desenhos/artesplash3.jpg"
import splash4 from "../Desenhos/artesplash4.png"
import splash5 from "../Desenhos/artesplashbw1.jpg"
import splash6 from "../Desenhos/artesplashbw2.jpg"
import splash7 from "../Desenhos/artesplashbw3.jpg"
import splash8 from "../Desenhos/artesplashbw10.jpg"

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

export default function Splash(){
    return(
            splashData.map(function(item){
                return(
                    <img src={item.splash} alt="arte do raza" className="rounded-2xl flex-none "/>
                    )
                }
            )
        
    )
}