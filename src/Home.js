
import { Component } from "react";
import Movies from "./movies";
import Tv from "./Tv";


export default class Home extends Component {

  

    render() {
        return <div>
   <Movies/>
   <Tv/>
         </div>
    }

}