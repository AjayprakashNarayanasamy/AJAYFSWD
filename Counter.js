import React from 'react';
import CounterDispaly from '../CounterDisplay'
/*function Counter()
{
    var count ="3";
    return(
        <div>
            <h4>Counter</h4>
            <button>-</button>
        <CounterDispaly count = {count}id ="1"></CounterDispaly>
        <button>
            +</button>
            </div>
    )
}
export default Counter*/
class Counter extends React.Component{
constructor(props){
super(props)
this.state={
count:0
}


}
/*handlePlus=(e)=>
    {
        console.log(e);
        this.setState({count:this.state.count+1})
    }
handleMinus=(event)=>
{
    if (this.state.count>1){
    this.setState({count:this.state.count-1})
}*/
handleCounterAction=(action)=>
{
if (action==="plus")
{
    this.setState({count:this.state.count+1})
}
else if (action==="minus")
{
    if(this.state.count>0)
    {
        this.setState({count:this.state.count-1})
    }
}
else if(action==="reset")
{
this.setState({count:0})
}
}
render(){
    return(
        <div className="container">
            
            <button className="btn btn-outline-secondary" onClick={()=>this.handleCounterAction("minus")}>-</button>
        <CounterDispaly count = {this.state.count}></CounterDispaly>
        <button className="btn btn-outline-warning" onClick={()=>this.handleCounterAction("plus")}>
            +</button>
            
            <button className="btn btn-dark"  onClick={()=>this.handleCounterAction("reset")}>Reset</button>
            
            </div>
            
    )

}}
export default Counter