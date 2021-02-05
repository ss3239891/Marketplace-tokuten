/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,

  Card,
  CardBody,

  Button
} from "shards-react";
import Slider from "react-slick";

import "./create-rewards.css"
import { Icon } from 'semantic-ui-react';

import PageTitle from "../components/common/PageTitle";

class Rewards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
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
      centerPadding: "10px",
      slidesToShow: 4,
      slidesToScroll: 1,

      swipeToSlide: true, autoplay: true,

      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            swipeToSlide: true, autoplay: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,


            swipeToSlide: true, autoplay: true,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide: true, autoplay: true,
          }
        }
      ]
    };

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Marketplace" className="text-sm-left title-maine " />

        </Row>
        <hr style={{ width: '141px', border: '1px solid rgba(0, 0, 0, 0.4)', marginLeft: '1.5%', marginTop: '0px' }}></hr>
        {/* First Row of Posts */}


        <div>
          <div style={{ display: 'flex' }}>
            <h5 style={{ marginLeft: '2%' }} className="subtit">Live Rewards</h5>


            <Button style={{ color: "rgba(0, 0, 0, 0.7)", backgroundColor: "white", borderRadius: "1rem", borderColor: "gray", position: "relative", right: window.innerWidth < 768 ? "-56%" : "-67%", fontWeight: "700", fontSize: window.innerWidth < 768 ? "0.7rem" : "1rem", marginTop: window.innerWidth < 768 ? "30px" : null }}><svg className="plus" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5 5.5H6.25V0.25H5.25V5.5H0V6.5H5.25V11.75H6.25V6.5H11.5V5.5Z" fill="black" fill-opacity="0.7" />
            </svg>
View All</Button>
          </div>
          <Slider {...settings}>
            {PostsListOne.map((post, idx) => (

              <Card style={{ marginRight: "12px" }} small className="card-pos card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >


                </div>
                <CardBody style={{ height: window.innerWidth < 768 ? "126px" : null, paddingTop: window.innerWidth ? "10px" : null }}>
                  <h5 className="card-title" style={{ fontSize: window.innerWidth < 768 ? "13px" : null }}>
                    <a href="#" className="text-fiord-blue">
                      1. Buy a yearly subscription at Armor Fitness & receive 40% cashback
                    </a>
                  </h5>

                </CardBody>
              </Card>

            ))}

          </Slider>
        </div>
        {window.innerWidth < 768 ? <div className="maindivmob" >
          <h5 style={{ fontWeight: "900", color: "black", zIndex: "2", position: "absolute", marginTop: "-30px", marginLeft: "38px" }}>Insights</h5>
          <Button style={{ color: "gray", backgroundColor: "white", borderRadius: "1rem", borderColor: "gray", position: "absolute", marginTop: "-38px", marginLeft: "142px", fontWeight: "700", fontSize: "0.7rem" }}><b>+</b> View All</Button>
          <div className="subdiv1mob" >

          </div>
          <h5 style={{ fontWeight: "900", color: "black", zIndex: "2", position: "absolute", marginTop: "23px", marginLeft: "38px" }}>Recommendations</h5>
          <div className="subdiv2mob" >
            <div className="subdivchild1" style={{ width: "100%", height: "46%", border: "1px solid", borderRadius: "3rem" }}></div>
            <div className="subdivchild2" style={{ width: "100%", height: "46%", marginTop: "12px", border: "1px solid", borderRadius: "3rem" }}></div>

          </div>
        </div> :
          <div className="maindiv" style={{ display: "flex" }}>
            <h5 style={{ fontFamily: 'Nunito', fontWeight: "bold", zIndex: "2", fontSize: "25px", color: "rgba(0, 0, 0, 0.7)", position: "absolute", marginTop: "-39px", marginLeft: "2%" }}>Insights</h5>
            {/* <Button style={{ fontFamily: 'Nunito', color: "gray", backgroundColor: "white", borderRadius: "20px", borderColor: "gray", position: "absolute", marginTop: "-45px", marginLeft: "142px", fontWeight: "700", fontSize: "0.7rem" }}><b>+</b> Expand</Button> */}
            <div className="subdiv1" style={{ borderRadius: "20px", border: "1px solid #c4C4c4", height: "540px", marginLeft: '1%' }}>
              <Icon style={{ marginLeft: '47%', marginTop: '50%', color: "#d4d1cb" }} name="lock" size="big" />

            </div>
            <h5 style={{ fontFamily: 'Nunito', fontWeight: "bold", zIndex: "2", fontSize: "25px", color: "rgba(0, 0, 0, 0.7)", position: "absolute", marginTop: "-39px", marginLeft: '52%' }}>Recommendations</h5>
            <div className="subdiv2" style={{ dispaly: "block", marginLeft: "24px" }} >
              <div className="subdivchild1" style={{ width: "102%", height: "251px", border: "1px solid #c4C4c4", borderRadius: "20px" }}>            <Icon style={{ marginLeft: '47%', marginTop: '25%', color: "#d4d1cb" }} name="lock" size="big" />
              </div>
              <div className="subdivchild2" style={{ width: "102%", height: "273px", marginTop: "12px", border: "1px solid #c4C4c4", borderRadius: "20px" }}>            <Icon style={{ marginLeft: '47%', marginTop: '25%', color: "#d4d1cb" }} name="lock" size="big" />
              </div>
            </div>
          </div>

        }

      </Container>
    );
  }
}

export default Rewards;
