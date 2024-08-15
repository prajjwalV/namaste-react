import React from "react";
//Functional Component - FC
class User extends React.Component {
    constructor(props){
        
        //props with super constructore invokation is mandatory to access props throughout the class 
        super(props);
        console.log(props.name,'child constructor');
        // console.log(props);
        
        // to declare state variables , we declare state object in constructor . it contains all the 
        // state variables that will be used in the class 
        //this is how when we declare state variables in functional component are stored at the internal processing 
        this.state = {
            count:0,
            count2:1
        }
    }
    componentDidMount(){
        console.log(this.props.name, 'child componentDidMount');
        
    }
    render(){
        const { name } = this.props;
        const { count, count2 } = this.state;
        console.log(name, 'child render');
        return (
            <div>
                <p>Hi This is class based component !</p>
                <h2>Name :- { name }</h2>
                <h3>count :- { count }</h3>
                <button onClick={()=>{
                    // we have setCount function in FC to change the value of the state variable 
                    this.setState({count : this.state.count + 1})
                    // setState method will only update the keys mentioned in the setState method ,
                    // we can mention the as many required keys that are declared in the state object 
                }}> increase count by 1</button>
            </div>
        )
    }
}

export default User;