import React, { Component } from 'react';
import './app.css'
import Fade from 'react-reveal/Fade'



class App extends Component {
  state = {
      nums: [],
      name: [],
      price: [],
      OTP: []
  }

  componentDidMount(){
    
  }
  edithNum = (e) => {
    const num = []
    num.push(e.target.value)
    this.setState({
      nums: num
    })
  }

  edithName = (e) => {
    const name = []
    name.push(e.target.value)
    this.setState({
      name
    })
  }
  edithPrice = (e) => {
    const price = []
    price.push(e.target.value)
    this.setState({
      price
    })
  }
  edithOTP = (e) => {
    const OTP = []
    OTP.push(e.target.value)
    this.setState({
      OTP
    })
  }
  render() {
    
    return (
      <div className="App">
        <div className="card">
          <div className="side front">
            <img className="chip" src={require('./img/chip.png')}/>
            <div className="card_num">
              {
                this.state.nums.map((e,i)=>{
                  return <p>{e}</p>
                })
              }
            </div>
            <div className="name">
              <span>Name</span>
              {
                this.state.name.map(e=>{
                  return <Fade top duration={5000}>
                          <p>{e}</p>
                    </Fade>
                })
              }
            </div>
            
            <img className="logo" src={require('./img/master.png')}/>
          </div>
          <div className="side back">
            <div className="OTP">
              <span>OTP</span>
              {
                this.state.OTP.map(e=>{
                  return <Fade top duration={5000}>
                          <p>{e}</p>
                    </Fade>
                })
              }
            </div>
          </div>
        </div>
        <div className="form">
          <input onChange={this.edithNum} type="number" placeholder="Card number"/>
          <input onChange={this.edithName} placeholder="Enter name"/>
          <input onChange={this.edithPrice} placeholder="Enter price" type="number"/>
          <input onChange={this.edithOTP} placeholder="OTP" type="number"/>
        </div>
      </div>
    );
  }
}

export default App;
