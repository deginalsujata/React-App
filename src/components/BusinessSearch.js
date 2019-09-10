import React, { Component } from 'react';
import axios from 'axios';

class BusinessSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [
            ],
            reviews:[]
        }    

    }
    componentDidMount() {
        const token = '3RiPRT-xv5Dbp67NuIzp43JNWsep0Ee7v2HXFstyKW1cnGyn9dQOaT2QJvFj-6WNaK5dJvm67C5aG080nqIsqY61DgIp_EP6YjM17PoADxa4GVt3cABgskTwOY52XXYx';
        //const api = "https://api.yelp.com/v3/businesses/search?term=icecream&location=Alpharetta";
        axios.defaults.headers["content-type"] = "application/json";
        axios.defaults.headers.common.authorization = `Bearer ${token}`;
        //  axios.get("http://localhost:3000/api/posts")  
        axios.get("https://api.yelp.com/v3/businesses/search?term=icecream&location=Alpharetta&limit=5")
            .then(res => {
                let result = res.slice(0, 5); // if not in query parameter
                this.setState({ posts: result.businesses })
                
            })
            .catch()

         axios.get("https://api.yelp.com/v3/businesses/AOG6RgzwBFqn8doIeID6zQ/reviews")
         .then(data=>{
             this.setState({reviews : data.reviews})
         }) 
         .catch()  
    }
    render() {
        const { posts } = this.state.posts;
        const { reviews } = this.state.reviews;
        const listItems = this.props.posts.map((d) => <li key={d.id}>{d.name}
          {d.name}
                    {d.rating}
                    {d.location.city}
                    {d.display_address}
                    {d.review_count}
                    {d.coordinates.latitude}
                    {d.coordinates.longitude}
                    {d.phone}
                    {d.display_phone}
                    {d.distance}
        </li>);
        return (
            <div>
                List of BusinessSearch
                 {listItems}
                 Review By Person: {reviews.user.name}
            </div>
        );
    }
}
export default BusinessSearch