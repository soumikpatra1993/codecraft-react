import React, { Component } from 'react'
import Sidebar from '../sidebar/sidebar'
import './dashboard.css';
import Roundy from 'roundy';

class dashboard extends Component {
    state = {
        value : 50 , 
        arr : [] ,
        focus : 1 ,
    }

    getData = (context) => {
  console.log(context);
  this.setState({
      arr : context
  })
    }
    highLight =(val , percentage) => {
this.setState({
    focus : val ,
    value : percentage
})

    }

    render() {
        return (
            <div className="content">
                <Sidebar action = {this.getData} />
                <div className="section">
                    <div className="devices">
                        <div className="device">DEVICES</div>
                        <div className="plus">
                            <img src={require('../../assets/plus-dk.png')} className="icon" />
                        </div>
                    </div>
                    <div className="devicesnxt">
                        <div className="lamp">{this.state.arr.title}</div>
                        <div className="rounder">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="shades">
                        <div>SHADES</div>
                        <div className="line"></div>

                    </div>
                    <div className="box">
                        <label className="contain">
                            <input type="checkbox" checked="checked" />
                            <span className="checkmark red"></span>
                        </label>
                        <label className="contain">
                            <input type="checkbox" />
                            <span className="checkmark purple"></span>
                        </label>
                        <label className="contain">
                            <input type="checkbox" />
                            <span className="checkmark green"></span>
                        </label>
                        <label className="contain">
                            <input type="checkbox" />
                            <span className="checkmark blue"></span>
                        </label>
                        <label className="contain">
                            <input type="checkbox" />
                            <span className="checkmark pink"></span>
                        </label>

                    </div>
                    <div className="shades">
                        <div>MODE</div>
                        <div className ="line"></div>

                    </div>
                    <div className="lists">
                        <div className ={"item" + `${this.state.focus === 1 ? " active" : "" }`}  onClick = {this.highLight.bind(this, 1, 50)}>
                            <div className="innerbar">
                                <img src= {require('../../assets/morning-wh.png')} alt="morning" />
                                <div className="time" >Morning</div>
                            </div>
                            <div className="percent">50%</div>
                            <div className="tick">
                                <img src= {require('../../assets/tick-wh.png')}  />
                            </div>
                        </div>
                        <div className ={"item" + `${this.state.focus === 2 ? " active" : "" }`}  onClick = {this.highLight.bind(this, 2, 30)}>
                            <div className="innerbar">
                                <img src= {require("../../assets/day-dk.png")} alt="" />
                                <div className="time">Day</div>
                            </div>
                            <div className="percent">30%</div>
                            <div className="tick">
                            <img src= {require('../../assets/tick-wh-lt.png')}  />
                            </div>
                        </div>
                        <div className ={"item" + `${this.state.focus === 3 ? " active" : "" }`}  onClick = {this.highLight.bind(this,3,  100)}>
                            <div className="innerbar">
                                <img src= {require("../../assets/night-dk.png")}  alt="" />
                                <div className="time">Night</div>
                            </div>
                            <div className="percent">100%</div>
                            <div className="tick">
                            <img src= {require('../../assets/tick-wh-lt.png')}  />
                            </div>
                        </div>
                    </div>
                    <div className="shades">
                        <div>INTENSITY</div>
                        <div className="line"></div>

                    </div>
                    <div className="ranged">
                        <Roundy
                            arcSize={180}
                            min={0}
                            max={100}
                            value = {this.state.value}
                            color = '#AD6BFF'
                            thumbSize = {20}
                            strokeWidth = {3}  
                            onChange={value => this.setState({value})}
                        />
                       <div className = "num" > {this.state.value}</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default dashboard