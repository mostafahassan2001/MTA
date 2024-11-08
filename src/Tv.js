import { Component } from "react";
import axios from 'axios';

export default class Tv extends Component{
     state = {tv:[]}
    async componentDidMount(){
        let x=await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361')
        this.setState({tv:x.data.results})

    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="brd w-50 "></div>
                        <h2>Trending<br/>TV<br/>To watch now</h2>
                        <p>most wathed tv by days</p>
                        <div className="brd w-100  "></div>
                    </div>
    { this.state.tv.map((item,index)=>{
                       return <div className="col-lg-3 col-md-3 col-sm-6">
                        <img className="img-fluid" src={"https://image.tmdb.org/t/p/original"+item.backdrop_path}/>
                        <p>{item.name}</p>
                    </div>
                    }
                    ) 
                }
                </div>
            </div>
        )
    }
}