import ImageGallery from "./ImageGallery"


export default function Desenhos(){
    return(
        <div className='h-auto bg-zinc-900 bg-cover bg-no-repeat bg-[center_top_-9rem] bg-fixed py-20 px-20 '>
            <div id="nav" className="text-red-800 text-6xl font-adamcg items-center mb-20 flex gap-10 justify-center">
               <button>Coloridos</button>
               <button>Sketchs</button>
               <button>Splash Arts</button>
            </div>
                
            <div className="grid grid-cols-3 gap-10">
                <ImageGallery/>
            </div>
        </div>
    )
}