import React from 'react';
import {Link} from 'react-router-dom'
import './home.less';

const Home = () => {
  return (<div className="home">
    <div className='showPage'>
    <div className='picture'>
      <div className='title'>在线实用工具</div>
    </div>
    </div>
    <div className='tools'>
      <div className='tool'>
      <Link className='calculator' to='/calculator'>
      <img src={require('./../images/calculator.png')} />
        <div >计算器</div>
      </Link>
      </div>
      <div className='tool'>
      <Link className='timer' to='/timer'>
      <img className='timer' src={require('./../images/timer.png')} />
        <div >倒计时器</div>
      </Link>
      </div>
      
    </div>
  </div>);
};

export default Home;