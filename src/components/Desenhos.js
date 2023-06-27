import ImageGallery from "./ImageGallery"


export default function Desenhos(){
    return(
        <div className='h-auto bg-zinc-900 bg-cover bg-no-repeat bg-[center_top_-9rem] bg-fixed py-20 px-20 '>
            <div id="nav" className="text-red-800 text-5xl flex gap-5 -ml-9 font-adamcg items-center mb-20">
               <input type="radio" id="Color" name="color" value="color" className="invisible" defaultChecked/>
               <label for="color">Coloridos</label>
               <input type="radio" id="Sketchs" name="Sketchs" value="Sketchs" className="invisible"/>
               <label for="Sketchs">Sketchs</label>
               <input type="radio" id="Splash" name="Splash" value="Splash" className="invisible"/>
               <label for="Splash">Splash Arts</label>
            </div>
                
            <div className="grid grid-cols-3 gap-10">
                <ImageGallery/>
            </div>
        </div>
    )
}