import sketch1 from "../Desenhos/artebw3.jpg"
import sketch2 from "../Desenhos/artebw4.jpg"
import sketch3 from "../Desenhos/artebw5.jpg"
import sketch4 from "../Desenhos/artebw6.jpg"
import sketch5 from "../Desenhos/artebw7.jpg"
import sketch6 from "../Desenhos/artebw8.jpg"




const splashListData = [
    {sketch: sketch1},
    {sketch: sketch2},
    {sketch: sketch3},
    {sketch: sketch4},
    {sketch: sketch5},
    {sketch: sketch6},
 
]

export default function ImageIlustraçaoSketch(){
    return(
            <div className="">
                <h3 className="text-red-800 text-center p-12 font-bold font-adamcg text-7xl">Sketchs</h3>

                <div className="text-white flex flex-1 overflow-x-auto gap-9 p-12 mx-20 overflow-y-hidden">
                   
                
                    {splashListData.map(function(item){
                        return(
                            <img src={item.sketch} alt="Arte splash Raza" className="rounded-2xl w-[400px] shadow-black shadow-xl hover:scale-125 transition ease-in-out"/>    
                        )})}              
                </div>
                <div className="text-white flex gap-5 text-4xl mt-8 justify-center">
                        <button className="bg-red-800 p-3 w-36 rounded-3xl rotate-180">➤</button>
                        <button className="bg-red-800 p-3 w-36 rounded-3xl">➤</button>
                </div>
                
            </div>
     
        )}