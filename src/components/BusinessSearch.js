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
        return (
            <div>
                List of BusinessSearch
                posts.map(post => <span key={posts.id}>{posts.name}
                    {posts.name}
                    {posts.rating}
                    {posts.location.city}
                    {posts.display_address}
                    {posts.review_count}
                    {posts.coordinates.latitude}
                    {posts.coordinates.longitude}
                    {posts.phone}
                    {posts.display_phone}
                    {posts.distance})</span>
                 Review By Person: {reviews.user.name}
            </div>
        );
    }
}
export default BusinessSearch