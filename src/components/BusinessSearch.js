import React, {Component} from 'react';
import axios from 'axios';

 class BusinessSearch extends Component{
     constructor(props){
         super(props)
         this.state = {
             posts : [
                
             
             ]
         
        }
    
     }
     componentDidMount(){
         //const token = '3RiPRT-xv5Dbp67NuIzp43JNWsep0Ee7v2HXFstyKW1cnGyn9dQOaT2QJvFj-6WNaK5dJvm67C5aG080nqIsqY61DgIp_EP6YjM17PoADxa4GVt3cABgskTwOY52XXYx';
         //const api = "https://api.yelp.com/v3/businesses/search?term=icecream&location=Alpharetta";
        // axios.defaults.headers["content-type"] = "application/json";
      //  axios.defaults.headers.common.authorization = `Bearer ${token}`;         axios.get(api)
    //  axios.get("http://localhost:3000/api/posts")  
    axios.get("https://api.yelp.com/v3/businesses/search?term=icecream&location=Alpharetta")
      .then(res =>{
             //this.setState({posts : Response.business})
             //console.log("res is ::",res);
         })
         .catch()
     }
    render(){
        const { posts} = this.state;
        return(
            <div>
                List of BusinessSearch
               
                posts.map(post => <div key={posts.id}>{posts.name}</div>):null
            </div>
        )
    }
}
export default BusinessSearch