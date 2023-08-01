import Image from "next/image"
import HomeTrees from "@/Images/homeTrees.png"

export default function HomeComp(){
    return(
        <div className="">
            <div className="flex flex-col text-center items-center  py-28">
                <h1 className="text-[60pt] font-gothic font-thin -mb-14 -ml-4">RAFAEL</h1>
                <h1 className="text-[98pt] font-gothic font-bold -mb-11 -ml-5">THUMAZA</h1>
                <h2 className="text-[30pt] font-delaGothic text-red">FRONT-END DEVELOPER</h2>
            </div>
            <Image src={HomeTrees} alt="trees" width={2778} height={1379} className="-mt-80"/>
      </div>
    )
}