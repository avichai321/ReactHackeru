import React ,{useState} from "react";

export default class Listcomp extends React.Component
{
    constructor(props){
    super(props)
    this.state = {arr: [1,2,3] };
    };
   
    addNumber = () => {
        let x = this.state.arr.length+1
        let tempstate = [...this.state.arr,x]
        this.setState({ arr: tempstate})   
        
    };


    clearAll= () => {
            this.setState({arr :[]})
    };

    render()
    {
        return(
        <div>
        <ul>
            {this.state.arr.map(num => {
                return <li>{num}</li>;
            })}
        </ul>  
            <button onClick={this.addNumber}>add num</button>
            <button onClick={this.clearAll}>Erase everything</button>
        </div>);
    }
}




    
