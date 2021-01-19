import React, { Component } from 'react'
import firebase from "firebase"
import {rewardRef} from "../firebase/firebase";
  
export class Page4 extends Component {
    constructor(props) {
        super(props);
      
        this.onDataChange = this.onDataChange.bind(this);
    
        this.state = {
       data: [],
       
        };
      }

      componentDidMount(){
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser){

                rewardRef.on("value", this.onDataChange);
            }
        })
      }


      onDataChange(items) {
        let posts = [];
    
      items.forEach((item) => {
          let key = item.key;
          let data = item.val();
        posts.push({
            key: key,
            title: data.title,
          
          });
        });
    
        this.setState({
       data: posts,
        });
      }
    render() {
        console.log(this.state.data)

        return (
            <div>
                 {this.state.data&&
             this.state.data.map((data, index) => (
<h1>{data.title}</h1>
             ))}
            </div>
        )
    }
}

export default Page4
