import React from 'react'
import firebase from "firebase"
import {rewardRef} from "../firebase/firebase";
  
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
        image_url: data.image_url,
        desc : data.description
      });
    });

    this.setState({
   data: posts,
    });
  }

    render() {
      const {
    data
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
              slidesToShow: 3,
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
          <PageTitle  sm="4" title="Marketplace" className="text-sm-left title-maine " />

        </Row>
        <hr style={{ width: '141px', border: '1px solid rgba(0, 0, 0, 0.4)', marginLeft: '1.5%', marginTop: '0px' }}></hr>
    <div style={{display:"flex"}}>
          
    <RadioButtons/>
    <div style ={{display: 'block'}}>
   
      <span className="text-bank"> Trending Rewards in Hong Kong</span>
     
     
    <Slider style ={{width:"1050px",marginLeft:"59px",height:"343px" ,borderRadius:"10px",borderBottom:"none"}}{...settings}>
  
        {data.map((post, idx) => (
        
              <Card   small className="card-pose card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.image_url}')` }}
                >


                </div>
                <CardBody style={{ height: window.innerWidth < 768 ? "126px" : null, paddingTop: window.innerWidth ? "10px" : null }}>
                  <h5 className="card-title" style={{ fontSize: window.innerWidth < 768 ? "13px" : null }}>
                    <a href="#" className="text-fiord-blue">
                     {post.title}
                    </a>
                    <p>{post.desc}</p>
                  </h5>

                </CardBody>
              </Card>
          
          ))}
        
        </Slider>
<div className="divider"></div>
        <span className="text-bank" style={{width:"370px"}}>Recommended Rewards for Delta Bank</span>
    <Slider style ={{width:"1050px",marginLeft:"59px",height:"343px" ,borderRadius:"10px",borderBottom:"none"}}{...settings}>
  
    {data.map((post, idx) => (
        
        <Card   small className="card-pose card-post--1">
          <div
            className="card-post__image"
            style={{ backgroundImage: `url('${post.image_url}')` }}
          >


          </div>
          <CardBody style={{ height: window.innerWidth < 768 ? "126px" : null, paddingTop: window.innerWidth ? "10px" : null }}>
            <h5 className="card-title" style={{ fontSize: window.innerWidth < 768 ? "13px" : null }}>
              <a href="#" className="text-fiord-blue">
               {post.title}
              </a>
              <p>{post.desc}</p>
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
