import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Sketch from "../pages/Sketch";
import Splash from "../pages/Splash";
import Color from "../pages/Color";


export default function DesenhosData(){

    return(
        <div className='h-auto bg-zinc-900 bg-cover bg-no-repeat bg-[center_top_-9rem] bg-fixed py-20 px-20'>
            <Router> 
                <ul id="nav" className="text-red-800 text-6xl font-adamcg items-center mb-20 flex gap-10 justify-center">
                    <li>
                        <Link to='/Color' className="">Coloridos</Link>
                    </li>
                    <li>
                        <Link to='/Sketch' className="">Sketchs</Link>
                    </li>
                    <li>
                        <Link to='/Splash' className="">Splashs Arts</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Color">
                        <Color/>
                    </Route>
                    <Route path="/Sketch">
                        <Sketch/>
                    </Route>
                    <Route path="/Splash">
                        <Splash/>
                    </Route>
                </Switch>
            </Router>        
          
        </div>
    )
}