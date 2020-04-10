import React, { Component } from 'react';
import './app.css'
import Fade from 'react-reveal/Fade'



class App extends Component {
  state = {
      nums: [],
      name: [],
      date: [],
      OTP: []
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

  edithDate = (e) => {
    const date = []
    date.push(e.target.value)
    this.setState({
      date
    })
  }
 
  edithOTP = (e) => {
    const OTP = []
    OTP.push(e.target.value)
    this.setState({
      OTP
    })
  }

  rotate = (position) => {
    if (position==='back') {
      document.querySelector('.front').style='transform: rotateY(-180deg)'
      document.querySelector('.back').style='transform: rotateY(0)'
    } else if (position==='front') {
      document.querySelector('.front').style='transform: rotateY(0)'
      document.querySelector('.back').style='transform: rotateY(180deg)'
    }
  }


  render() {
    
    return (
      <div className="App">
        <div className="card">


        {/* //////////////////////////// Front side of the card /////////////////////////////// */}


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

            <div className="date">
              <span>date</span>
              {
                this.state.date.map(e=>{
                  return <Fade top duration={5000}>
                          <p>{e}</p>
                    </Fade>
                })
              }
            </div>
            
            <img className="logo" src={require('./img/master.png')}/>

          </div>



          {/* ///////////////////////////////// Back side of the card //////////////////////////////////////// */}


          <div className="side back">
            <div className="black"></div>
              <p style={{padding:0,margin:0, textAlign:'right', color:'white', fontSize: '.8rem', paddingRight: '1rem'}}>CVV</p>
              
               <div className="cvv">
               { this.state.OTP.map(e=>{
                  return <p className="cvv_child">{e}</p>
                })}
               </div>
          </div>
        </div>






        {/* ?///////////////////////////////////////  rendering form section ////////////////////////////////// */}


        <div className="form">
          <input onChange={this.edithNum} onFocus={()=>this.rotate('front')} type="number" placeholder="Card number"/>
          <input onChange={this.edithName} onFocus={()=>this.rotate('front')} placeholder="Enter name"/>
          <input onChange={this.edithDate} style={{width: '5rem'}} onFocus={()=>this.rotate('front')} type="date"/>
          <input onChange={this.edithOTP} onFocus={()=>this.rotate('back')} placeholder="CVV" className="otp" type="number"/>
        </div>
      </div>
    );
  }
}

export default App;
