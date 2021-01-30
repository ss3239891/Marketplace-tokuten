import React, { Component } from 'react'
import {
  Button,
  Form,
  Grid,
  Input,
  Header,
  TextArea,
  Segment,
  Label,
  Checkbox, Icon
} from "semantic-ui-react";
import 'react-day-picker/lib/style.css';
import firebase from "firebase";
import rootRef from "../firebase/firebase";
import { rewardRef } from "../firebase/firebase";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import "./create-rewards.css"



export class Page3 extends Component {
  state = {
    title: "",
    description: "",
    end_date: "",
    image_url: "",
    loading: false,
    ownerEmail: "",
    ownerUid: "",
    ownerName: "",
    StudentObjects: [],
    message: "",
    limitedtime: false,
    socialReward: false,
    details: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  sendingData = () => {
    this.setState({ loading: true })
    const autoRewardId = rewardRef.push().key;
    rewardRef.child(autoRewardId).set({
      owner_uid: this.state.ownerUid,
      owner_name: this.state.ownerName,
      owner_email: this.state.ownerEmail,
      title: this.state.title,

    }).then(() => {
      this.setState({ message: "Reward created successfully!" })
    });
    this.setState({ loading: false })
  }

  handleImageChange = e => {
    this.setState({
      [e.target.id]: e.target.files[0]

    })
  }


  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser)

        rootRef.child(firebaseUser.uid).on('value', snapshot => {
          this.setState({ ownerName: snapshot.child('first_name').val() + " " + snapshot.child('last_name').val() })
          this.setState({ ownerEmail: snapshot.child('email').val() })
          this.setState({ ownerUid: firebaseUser.uid });


          rewardRef.on('value', snapshot => {
            if (snapshot.val() != null) {
              this.setState({
                StudentObjects: snapshot.val()
              });

            }


          });

        });

      }

    })
  }


  //Adding 'create' event




  render() {
    console.log(this.state)
    return (


      <>

        {/* <Header as="h2" style={{ color: "black" }} textAlign="center">
          Create Rewards
          </Header> */}
        <div class="ui breadcrumb" style={{ marginTop: '20px', marginLeft: '30px', background: 'none', fontFamily: 'Nunito', fontSize: '25px' }}><div style={{ fontWeight: 'bold' }} class="section">Rewards</div><Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'normal' }} class=" section">Create Reward</div> <Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'normal' }} class=" section">Scroll Offer</div></div>
        <hr style={{ width: '510px', border: '1.1px solid rgba(0, 0, 0, 0.4)', marginLeft: '45px', marginTop: '0px' }}></hr>
        <h6 style={{ color: "green", textAlign: "center" }}>{this.state.message}</h6>

        <div class="ui tiny breadcrumb" style={{ marginTop: '20px', marginLeft: '30px', background: 'none', fontFamily: 'Nunito', fontSize: '17px' }}><div style={{ fontWeight: 'bold', textDecoration: 'underline' }} class="section">Add Details</div><Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'normal', textDecoration: 'underline', color: 'rgba(0, 0, 0, 0.3)', fontSize: "17px" }} class=" section">Select Parameters</div></div>

        <React.Fragment>
          <Form size="large" onSubmit={this.handleSubmit} >
            <Segment style={{ border: 'none' }} stacked>
              <div className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "120px", width: '95%', background: '#FCFCFC' }}>


                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Label className='label' style={{ marginLeft: '40px', marginTop: '30px', background: 'none', color: 'black' }} >Add Rewards Headline</Label>
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }}>
                      <Form.Input className="newinput" transparent
                        onChange={this.handleChange}
                        style={{ marginTop: '35px' }}
                        name="title"
                        fluid

                      />
                      <label className="under">Try to add the highlight of your reward in the headline, such as the discount percentage, or product name.</label>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

              </div>
              <div className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "120px", width: '95%', marginTop: '10px', background: '#FCFCFC' }}>

                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Label style={{ marginLeft: '40px', marginTop: '30px', background: 'none', color: 'black' }} > Add Rewards Description</Label>
                    </Grid.Column>
                    <Grid.Column style={{ width: '60%' }}>
                      <TextArea rows="1" className="textarea" style={{ textDecoration: 'underline', marginTop: '20px', minHeight: '45px' }} name="description"
                        fluid


                        onChange={this.handleChange} placeholder='Description' />

                    </Grid.Column>
                  </Grid.Row>
                  <label className="under" style={{ marginLeft: '32%' }}>Try to explain further about your business and the benefits of the reward offered.</label>

                </Grid>
              </div>



              <div style={{ display: 'flex' }}>
                <div className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "110px", width: '47%', marginTop: '10px', marginRight: '1%', background: '#FCFCFC' }}>

                  <Grid.Row>

                    <Grid.Column>
                      <Label style={{ marginLeft: '40px', marginTop: '30px', background: 'none', color: 'black' }} for="end_date"> Reward end_date:</Label>
                    </Grid.Column>
                    <Grid.Column style={{ width: '40%', borderBottom: '1px solid #C4C4C4' }}>
                      <DayPickerInput inputProps={{ className: 'daypicker' }} style={{ marginTop: '20px', width: '60%', marginLeft: '80px' }} onDayChange={day => this.setState({ end_date: day })} />


                    </Grid.Column>
                  </Grid.Row>
                </div>
                <div className="subdiv1" style={{ borderRadius: "20px", border: "1px solid #c4C4c4", height: "110px", width: '47%', marginTop: '10px', background: '#FCFCFC' }}>

                  <Grid.Row>
                    <Grid.Column>
                      <Label style={{ marginLeft: '40px', marginTop: '30px', background: 'none', color: 'black' }} for="image_url">Upload Image:</Label>

                    </Grid.Column>
                    <Grid.Column style={{ borderBottom: ' 0.1px solid #C4C4C4', width: '50%' }}>
                      <Input className='newinput' transparent style={{ marginTop: '35px', width: '60%', marginLeft: '20px' }} type="file" className="imag" id="image_url" accept="image/png, image/jpeg" onChange={this.handleImageChange} required />

                    </Grid.Column>
                  </Grid.Row>
                </div>
              </div>





              <div style={{ display: "block" }} className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "150px", width: '47%', marginTop: '10px', background: '#FCFCFC' }}>
                <Checkbox className="check" style={{ marginTop: '40px', marginLeft: '20px', fontSize: '17px', fontWeight: 'bold' }} onChange={() => this.setState({ limitedtime: true })} label="Limited Time offer" ></Checkbox> <br></br>
                <Checkbox  className="check" style={{ marginTop: '30px', marginLeft: '20px' }} onChange={() => this.setState({ socialReward: true })} label="Social Reward" ></Checkbox>
              </div>
              <Button
                style={{ backgroundColor: 'black', color: '#FFFFFF', fontSize: '17px', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'Nunito', marginLeft: '420px', width: '35%', marginTop: '80px', marginBottom: '20px', borderRadius: '10px' }}
                fluid
                size="large"
                onClick={() => { this.setState({ details: true }) }}
                loading={this.state.loading}

              >
                Save Details
                </Button>
            </Segment>
          </Form>



        </React.Fragment>



      </>

    )
  }
}

export default Page3
