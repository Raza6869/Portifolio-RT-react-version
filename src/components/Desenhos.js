import ImageIlustraçaoEstilizado from "./ImageIlustEst"
import ImageIlustraçaoSketch from "./ImageIlustSketchs"
import ImageIlustraçaoSplash from "./ImageIlustSplash"


export default function Desenhos(){
    return(
        <div className='h-auto bg-zinc-900 bg-cover bg-no-repeat bg-[center_top_-9rem] bg-fixed py-20 px-20 '>
            <ImageIlustraçaoEstilizado/>                   
            <ImageIlustraçaoSplash/>   
            <ImageIlustraçaoSketch/>                
        </div>
    )
}