import React from "react";
import { NavLink} from 'react-router-dom';
import './Timer.css';

class Timer extends React.Component{
    state(){
        time:0
    }

    handleChange= (event) => {
        event.preventDefault();
        this.setState(
          {[event.target.name] : event.target.value}
          )
      }

   
    render(){
        return <div className='timerBackground'>
            <h2>在线倒计时器</h2>
            <div>
                设置时间 <input type="text" name="time" onChange={this.handleChange} className='input' />
                <button className='start' >Start</button>
            </div>

            <div className='timeWindow'>
                {this.state.time} Seconds
            </div>

        
        </div>
    }
}

export default Timer;