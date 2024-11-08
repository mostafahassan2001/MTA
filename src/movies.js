import axios from "axios";
import { Component } from "react";


export default class Movies extends Component {

    state = { movies: [] };
    async componentDidMount() {

        let x = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361')

        this.setState({ movies: x.data.results })
    }

    render() {
        return <div>

            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6">
                        <div className="brd w-50 "></div>
                        <h2>Trending<br/>Movies<br/>To watch now</h2>
                        <p>most wathed movies by days</p>
                        <div className="brd w-100  "></div>
                    </div>
                    {
                        this.state.movies.map((film, index) => {
                            return <div className="col-lg-3 col-md-3 col-sm-12">
                                <img src={"https://image.tmdb.org/t/p/original" + film.backdrop_path} className="img-fluid" />
                                <p>{film.title}</p>
                            </div>
                        }
                        )
                    }
                </div>
            </div>
        </div>
    }

}