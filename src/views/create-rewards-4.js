
import React, { Component } from 'react'
import {

  Form,



  Label,
  Checkbox, Grid,
  Button, Icon
} from "semantic-ui-react";
import "./create-rewards.css"
import "typeface-nunito";
import firebase from "firebase";
import rootRef from "../firebase/firebase";
import { rewardRef } from "../firebase/firebase";
import {Link} from 'react-router-dom';
export class Page4 extends Component {

  state = {
    Audience: "",
    gender: "",
    Age: "",
    terms: "",
    loyality: false,
    ownerEmail: "",
    ownerUid: "",
    ownerName: "",
    RewardObject: [],
    Purchasemethod: ""
  }



  handleChan = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })


  };
  handleChange = (e, { value }) => {
    this.setState({
      [e.target.id]: e.target.value
    })

    this.setState({ value })
  };



  sendingData = () => {
    this.setState({ loading: true })
    const autoRewardId = rewardRef.push().key;
    rewardRef.child(autoRewardId).set({
      owner_uid: this.state.ownerUid,
      owner_name: this.state.ownerName,
      owner_email: this.state.ownerEmail,
      Audience: this.state.Audience,
      gender: this.state.gender,
      Age: this.state.Age,
      terms: this.state.terms,
      loyality: this.state.loyality,






    }).then(() => {
      this.setState({ message: "Reward created successfully!" })
      console.log("message", this.state.message)
    });
    this.setState({ loading: false })
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
                RewardObject: snapshot.val()
              });

            }


          });
          // window.location.href="/marketplace/bank/"

        });

      }

    })
  }
  render() {
    console.log("purchasemethod", this.state.Purchasemethod);
    return (
      <div style={{ paddingLeft: '20px' }}>

        {/* <Header as="h2" color="black" textAlign="center" style={{ position: "relative", left: "28%" }}>About You</Header> */}
        <div class="ui breadcrumb" style={{ marginTop: '20px', marginLeft: '10px', background: 'none', fontFamily: 'Nunito', fontSize: '25px' }}><div style={{ fontWeight: 'bold' }} class="section">Rewards</div><Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'normal' }} class=" section">Create Reward</div> <Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'normal' }} class=" section">Scroll Offer</div></div>
        <hr style={{ width: '510px', border: '1.1px solid rgba(0, 0, 0, 0.4)', marginLeft: '25px', marginTop: '0px' }}></hr>
        <div class="ui tiny breadcrumb" style={{ marginTop: '20px', marginLeft: '20px', background: 'none', fontFamily: 'Nunito', fontSize: '17px' }}><div style={{ fontWeight: 'bold', textDecoration: 'underline' }} class="section">Add Details</div><Icon style={{ color: ' rgba(0, 0, 0, 0.7)', width: '50px' }} aria-hidden="true" name="chevron right" /><div style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#000000', fontSize: "17px" }} class=" section">Select Parameters</div></div>

        <Form >

          <div className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "440px", width: '91%' }}>


            <Form.Field>
              <Grid columns={4}>
                <Grid.Row style={{ marginTop: '10px' }}>
                  <Grid.Column style={{ marginTop: "8px", paddingLeft: '100px' }} >
                    <Label style={{ marginTop: "8px", background: 'none', color: 'black' }} for="Audience">Audience</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <select
                      style={{ marginTop: "8px", width: '100%', backgroundColor: '#e8e8e8', fontSize: '17px' }}
                      value={this.state.Audience}

                      onChange={this.handleChan}
                      id="Audience"
                    >
                      <option value="social">social</option>
                      <option value="public">public</option>
                      <option value="friends">friends</option>
                    </select>
                  </Grid.Column>
                </Grid.Row>
              </Grid>




            </Form.Field>

            <hr></hr>

            <Form.Field>
              <Grid columns={4}>
                <Grid.Row>
                  <Grid.Column style={{ marginTop: "8px", paddingLeft: '100px' }}>
                    <Label className="label" style={{ marginTop: "8px", background: 'none', color: 'black' }} for="gender">Gender</Label>

                  </Grid.Column>
                  <Grid.Column>
                    <select
                      style={{ marginTop: "8px", width: '100%', backgroundColor: '#e8e8e8', fontSize: '17px' }}
                      value={this.state.gender}

                      onChange={this.handleChan}
                      id="gender"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Not-Sure">Not-Sure</option>
                    </select>
                  </Grid.Column>
                </Grid.Row>
              </Grid>



            </Form.Field>
            <hr></hr>
            <Form.Field>
              <Grid columns={4}>
                <Grid.Row>
                  <Grid.Column style={{ marginTop: "8px", paddingLeft: '100px' }}>
                    <Label className="label" style={{ marginTop: "8px", background: 'none', color: 'black' }} for="Age">Age</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <select
                      style={{ marginTop: "8px", width: '100%', backgroundColor: '#e8e8e8', fontSize: '17px' }}
                      value={this.state.Age}

                      onChange={this.handleChan}
                      id="Age"
                    >
                      <option value="18-20">18-20</option>
                      <option value="25-30">25-30</option>
                      <option value="30-40">30-40</option>
                    </select>
                  </Grid.Column>
                </Grid.Row>
              </Grid>




            </Form.Field>
            <hr></hr>
            <Form.Field>
              <Grid columns={3}>
                <Grid.Row>
                  <Grid.Column style={{ marginTop: "8px", paddingLeft: '100px' }}>
                    <Label className="label" style={{ marginTop: "8px", background: 'none', color: 'black' }} >Terms & Conditions</Label>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Input className="newinput" transparent
                      onChange={this.handleChange}
                      style={{ marginTop: "15px", width: '100%' }}
                      id="terms"
                      fluid

                    />
                    <label className="under">Example: Maximum Capped Discount, Minimum Spend etc.</label>
                  </Grid.Column>
                </Grid.Row>
              </Grid>



            </Form.Field>
            <hr></hr>

            <Checkbox className="check" style={{ marginTop: "10px", paddingLeft: '70px', fontFamily: 'Nunito', fontSize: '17px' }} onChange={() => this.setState({ loyality: true })} label="Loyality Members" ></Checkbox>
          </div>

          <Form.Field>

            <p style={{ marginLeft: '30px', marginTop: '30px', fontWeight: 'normal', textDecoration: 'underline', color: '#000000', fontSize: '17px' }}>Method of purchase: </p>
            <div className="subdiv1" style={{ marginLeft: '2%', borderRadius: "20px", border: "1px solid #c4C4c4", height: "370px", width: '91%' }}>

              <Grid columns={5} style={{ marginLeft: '20px', marginTop: '90px' }}>
                <Grid.Row>
                  <Grid.Column>
                    <Form.Field>
                      <Icon onClick={() => this.setState({ Purchasemethod: "QR code" })} style={{ cursor: 'pointer', backgroundColor: "#EFEFF0", borderRadius: "50%", height: '120px', width: '120px', paddingTop: '14%', marginTop: '0px', marginLeft: '30px' }} name="qrcode" size="huge" />

                      <Label className="label2" style={{ background: 'none', marginTop: '20px', marginLeft: '40px' }} for="radioGroup">Qr code</Label>
                      <br />
                      {/* <Radio

                        name='radioGroup'
                        value='QR code'


                        checked={this.state.value === 'QR code'}
                        onChange={this.handleChange}
                      /> */}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Icon onClick={() => this.setState({ Purchasemethod: "QR code" })} style={{ backgroundColor: "#EFEFF0", borderRadius: "50%", height: '120px', width: '120px', paddingTop: '14%', marginTop: '0px', marginLeft: '30px' }} name="code" size="huge" />

                      <Label className="label2" style={{ background: 'none', color: 'black', marginTop: '20px', marginLeft: '20px' }} for="radioGroup">Voucher code</Label>
                      <br />
                      {/* <Radio

                        name='radioGroup'

                        value='Voucher code'

                        checked={this.state.value === 'Voucher code'}
                        onChange={this.handleChange}
                      /> */}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Icon onClick={() => this.setState({ Purchasemethod: "Booking System" })} style={{ backgroundColor: "#EFEFF0", borderRadius: "50%", height: '120px', width: '120px', paddingTop: '14%', marginTop: '0px', marginLeft: '30px' }} name="calendar outline" size="huge" />

                      <Label className="label2" style={{ marginX: "2px" }} style={{ background: 'none', color: 'black', marginTop: '20px', marginLeft: '15px' }} for="radioGroup">Booking System</Label>
                      <br />
                      {/* <Radio

                        name='radioGroup'
                        value='Booking System'

                        checked={this.state.value === 'Booking System'}
                        onChange={this.handleChange}
                      /> */}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Icon onClick={() => this.setState({ Purchasemethod: "External Link" })} style={{ backgroundColor: "#EFEFF0", borderRadius: "50%", height: '120px', width: '120px', paddingTop: '14%', marginTop: '0px', marginLeft: '30px' }} name="linkify" size="huge" />

                      <Label className="label2" style={{ marginX: "2px" }} style={{ background: 'none', color: 'black', marginTop: '20px', marginLeft: '20px' }} for="radioGroup">External Link</Label>
                      <br />
                      {/* <Radio

                        name='radioGroup'
                        value='External Link'

                        checked={this.state.value === 'External Link'}
                        onChange={this.handleChange}
                      /> */}
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Icon onClick={() => this.setState({ Purchasemethod: "Merchant Shop" })} style={{ backgroundColor: "black", color: "white", borderRadius: "50%", height: '120px', width: '120px', paddingTop: '14%', marginTop: '0px', marginLeft: '30px' }} name="home" size="huge" />

                      <Label className="label2" style={{ marginX: "2px" }} style={{ background: 'none', color: 'black', marginTop: '20px', marginLeft: '15px' }} for="radioGroup">Merchant Shop</Label>
                      <br />
                      {/* <Radio

                        name='radioGroup'
                        value='Merchant Shop'

                        checked={this.state.value === 'Merchant Shop'}
                        onChange={this.handleChange}
                      /> */}
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Form.Field>

        </Form>
        <Link to="/marketplace/bank/">

          <Button className="button" style={{
            backgroundColor: 'black', color: '#FFFFFF', fontSize: '17px', fontWeight: 'normal', fontStyle: 'normal', fontFamily: 'Nunito', marginLeft: '350px', width: '35%', marginTop: '80px', marginBottom: '20px', borderRadius: '10px',

          }}
            onClick={this.sendingData}>Create Reward</Button>

        </Link>
      </div>
    )
  }
}

export default Page4
