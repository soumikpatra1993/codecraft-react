import React, { Component } from 'react'
import './sidebar.css'
 class sidebar extends Component {
     constructor (props) {
   super(props);
   this.state = {
       sideData : [{title : 'THERMOSTAT' , desc : 'in Bedroom', },
       {title : 'BED LAMP' , desc : 'in Bedroom', },
       {title : 'NORIA AC' , desc : 'in Bedroom', },
       {title : 'DOOR LOCK' , desc : 'in Bedroom', },
       {title : 'LG TV' , desc : 'in Living room', },
       {title : 'THERMOSTAT' , desc : 'in Bedroom', } ],
       selected : 1
   }
     }
     componentDidMount =()=> {
        this.props.action(this.state.sideData[1])
     }

   show = (val,key) => {
this.setState({
    selected : key
})
       this.props.action(val)
   } 

    render() {
        return (
            <div className="sidebar">
            <div className=" back">
                <img src  = {require('../../assets/back-wh.png')} />
            </div>
            <div className="arrow"></div>
            <div className="prodWrap">
                 {
                       this.state.sideData.map((item ,key) => {
                        return(
                       <div className=" card" key = {key} onClick = {this.show.bind(this , item,key)}>
                       <div className= {"imgside" + `${this.state.selected === key ? " image" : "" }`}>
                               <img src ={require(`../../assets/${key}.png`)} className = "imge"/>
                       </div>
                       <div className= {"details" + `${this.state.selected === key ? " current" : "" }`}>
                               <div className="title">{item.title}</div>
                               <div className="innertxt">{item.desc}</div>
                       </div>
                       <div className = {"right" + `${this.state.selected === key ? " show" : "" }`}>

                           <img src = {require('../../assets/chevron-right.png')}/>
                       </div>
                   </div> 
                        )
                    })
                 }
            </div>
            <div className = "topcover">

            </div>
        </div>
        )
    }
}
export default sidebar