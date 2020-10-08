import React from "react";
import './Calculator.less';

const options = {
    "+": (num1,num2) => num1 + num2,
    "-": (num1,num2) => num1 - num2,
    "x": (num1,num2) => num1 * num2,
}
class Calculator extends React.Component{
    state={
        result: ""
    }

    calcuClick = (event) => {
        console.log(event.target.textConent)
        this.setState({
            result: this.state.result + event.target.textContent
          })
    }

    clear = () => {
        this.setState({
            result:"",
        })
    }

    calculate= () => {
        const match = this.state.result.match(/(\d+)([+-x])(\d+)/);
        if(!match) return this.clear();
        const num1 = match[1]
        const option = options[match[2]]
        const num2 = match[3]
        const numResult = option(num1,num2)
        this.setState({
            result: numResult
        })
    }

    render(){
        return <div className='timerBackground'>
            <h2>在线计算器</h2>
            <div className="calcu-pad">
                <div className="display">{this.state.result || 0}</div>
                <div onClick={this.calcuClick} className="option">
                    +
                </div>
                <div onClick={this.calcuClick} className="option">
                    -
                </div>
                <div onClick={this.calcuClick} className="option">
                    x
                </div>
                <div onClick={this.calcuClick} className="number">
                    7
                </div>
                <div onClick={this.calcuClick} className="number">
                8
                </div>
                <div onClick={this.calcuClick} className="number">
                9
                </div>
                <div onClick={this.calcuClick} className="number">
                    4
                </div>
                <div onClick={this.calcuClick} className="number">
                    5
                </div>
                <div onClick={this.calcuClick} className="number">
                    6
                </div>
                <div onClick={this.calcuClick} className="number">
                    1
                </div>
                <div onClick={this.calcuClick} className="number">
                    2
                </div>
                <div onClick={this.calcuClick} className="number">
                    3
                </div>
                <div onClick={this.calcuClick} className="number">
                    0
                </div>
                <div onClick={this.clear} className="option">
                    clear
                </div>
                <div onClick={this.calculate} className="option">
                    =
                </div>
            </div>

        
        </div>
    }
}

export default Calculator;