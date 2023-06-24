import arte1 from "../Desenhos/arte1.jpg"
import arte2 from "../Desenhos/arte2.jpg"
import arte3 from "../Desenhos/arte3.jpg"
import arte4 from "../Desenhos/arte4.jpg"
import arte5 from "../Desenhos/arte5.jpg"
import arte6 from "../Desenhos/arte6.jpg"
import arte7 from "../Desenhos/arte7.jpg"
import arte8 from "../Desenhos/arte8.jpg"
import arte9 from "../Desenhos/arte9.jpg"
import arte10 from "../Desenhos/arte10.jpg"
import arte11 from "../Desenhos/arte11.jpg"
import arte12 from "../Desenhos/arte12.jpg"
import arte13 from "../Desenhos/arte13.jpg"
import arte14 from "../Desenhos/arte14.jpg"
import arte15 from "../Desenhos/arte15.jpg"
import arte16 from "../Desenhos/arte16.jpg"
import arte17 from "../Desenhos/arte17.jpg"
import arte18 from "../Desenhos/arte18.jpg"

const artListData = [
    {estilizado: arte1},
    {estilizado: arte2},
    {estilizado: arte3},
    {estilizado: arte4},
    {estilizado: arte5},
    {estilizado: arte6},
    {estilizado: arte7},
    {estilizado: arte8},
    {estilizado: arte9},
    {estilizado: arte10},
    {estilizado: arte11},
    {estilizado: arte12},
    {estilizado: arte13},
    {estilizado: arte14},
    {estilizado: arte15},
    {estilizado: arte16},
    {estilizado: arte17},
    {estilizado: arte18},
]

export default function ImageIlustraçao(){
    return(
        artListData.map(function(item){
            return(
                <img src={item.estilizado} alt="Arte Estilizada"/>
            )
        })
    )
}