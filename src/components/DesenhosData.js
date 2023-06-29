import { useState } from "react";
import Sketch from "../pages/Sketch";
import Splash from "../pages/Splash";
import Color from "../pages/Color";


export default function DesenhosData(){
    const [artData, setArtData] = useState('color');
   

    const changeArtData = (artData) => {
        setArtData(artData);
    };

   
    function artGallery(){
        if(artData === 'color'){
            return(
                <Color/>
            )
        }else if(artData === 'sketch'){
            return(
                <Sketch/>
            )
        }else if(artData === 'splash'){
            return(
                <Splash/>
            )
        }
    }

    return(
        <div className='h-auto bg-zinc-900 bg-cover bg-no-repeat bg-[center_top_-9rem] bg-fixed py-20 px-20'>
            <nav id="nav" className="text-red-800 text-6xl font-adamcg items-center mb-20 flex gap-10 justify-center">
               <input type="radio" id="color" name="color" onClick={() => changeArtData('color')} className="sr-only peer"/>
               <label for="color" className="peer-checked:text-white peer-checked:underline">Coloridos</label>
               <input type="radio" id="sketch" name="sketch" onClick={() => changeArtData('sketch')} className="sr-only peer"/>
               <label for="color" className="peer-checked:text-white peer-checked:underline">Sketchs</label>
               <input type="radio" id="splash" name="splash" onClick={() => changeArtData('splash')} className="sr-only peer"/>
               <label for="color" className="peer-checked:text-white peer-checked:underline">Splash Arts</label>
            </nav>
                
            <div className="grid grid-cols-3 gap-10 text-white">
                {artGallery()}
            </div>
        </div>
    )
}