import React from 'react'
import {
  Container,
  Row,
  
  Card,
  CardBody
} from "shards-react";
import Slider from "react-slick";
  import PageTitle from "../components/common/PageTitle";
import RadioButtons from '../components/components-overview/RadioButtons';

class Bank extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
  PostsListOne: [
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "Business",
      categoryTheme: "dark",
      author: "Anna Kunis",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019"
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "Business",
      categoryTheme: "dark",
      author: "Anna Kunis",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019"
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      category: "Business",
      categoryTheme: "dark",
      author: "Anna Kunis",
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Conduct at an replied removal an amongst",
      body:
        "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
      date: "28 February 2019"
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      category: "Travel",
      categoryTheme: "info",
      author: "James Jamerson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Off tears are day blind smile alone had ready",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019"
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      category: "Technology",
      categoryTheme: "royal-blue",
      author: "Jimmy Jackson",
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Difficult in delivered extensive at direction",
      body:
        "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
      date: "29 February 2019"
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      category: "Business",
      categoryTheme: "warning",
      author: "John James",
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "It so numerous if he may outlived disposal",
      body:
        "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
      date: "29 February 2019"
    }
  ],

 
};
}
    render() {
      const {
        PostsListOne,
       
      } = this.state;
      const settings = {
        className: "center",
        infinite: true,
        marginLeft: "-46px",
    
        slidesToShow: 3,
        slidesToScroll: 1,
      
        swipeToSlide: true, autoplay:true,
        
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              swipeToSlide: true, autoplay:true, 
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2,
              
              
        swipeToSlide: true, autoplay:true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              swipeToSlide: true, autoplay:true,
            }
          }
        ]
      };
        return (
            <Container style={{backgroundColor:"#e5e5e5" }}fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Marketplace" className="text-sm-left title-maine" />
            </Row>
    <div style={{display:"flex"}}>
          
    <RadioButtons/>
    <div style ={{display: 'block'}}>
    <span className="text-bank"> Trending Rewards in Hong Kong</span>
    <Slider style ={{width:"1132px",marginLeft:"59px",height:"343px" ,borderRadius:"10px",borderBottom:"none"}}{...settings}>
  
        {PostsListOne.map((post, idx) => (
        
              <Card   small className="card-pose card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})`}}
                >
                  
                
                </div>
                <CardBody style={{height:window.innerWidth<768?"126px":null,paddingTop:window.innerWidth?"2px":null}}>
                  <h5 className="card-title" style={{fontSize:window.innerWidth<768?"13px":null}}>
                   
                    1. Buy a yearly subscription at Armor Fitness & receive 40% cashback
                   
                  </h5>
                 
                </CardBody>
              </Card>
          
          ))}
        
        </Slider>
<div className="divider"></div>
        <span className="text-bank" style={{width:"370px"}}>Recommended Rewards for Delta Bank</span>
    <Slider style ={{width:"1132px",marginLeft:"59px",height:"343px" ,borderRadius:"10px",borderBottom:"none"}}{...settings}>
  
        {PostsListOne.map((post, idx) => (
        
              <Card   small className="card-pose card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})`}}
                >
                  
                
                </div>
                <CardBody style={{height:window.innerWidth<768?"126px":null,paddingTop:window.innerWidth?"2px":null}}>
                  <h5 className="card-title" style={{fontSize:window.innerWidth<768?"13px":null}}>
                  
                    1. Buy a yearly subscription at Armor Fitness & receive 40% cashback
                   
                  </h5>
                 
                </CardBody>
              </Card>
          
          ))}
        
        </Slider>
        </div>
        </div>
           </Container>
       
        )
    }
}

export default Bank;
