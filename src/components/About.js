import User from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props)
    {
        super(props)
        console.log('Parent constructor');
        
    }
    componentDidMount(){
        // It is called when the component is rendered and DOM is updated
        /*   
            Constructor
               | 
            Render
               |
            DOM update
                |
            ComponentDidMount()           
        */
        console.log('Parent componentDidMount');
        //Api Calls
    }

    componentDidUpdate(){
        // printing after every minute
        this.timer = setInterval(()=>{
            console.log('Namaste React');
            
        }, 1000);
        // this will keep on printing even if we change the page 
        // we need to clear this setInterval before leaving this component , so we clear it in componentWillUnmount
        // This is called after components is updated each time
        console.log('Parent componentDidUpdate');
    }

    componentWillUnmount(){

        clearInterval(this.timer);
        // This is called when we move to a new page 
    }
    render(){
        console.log('Parent Render');
        
        return (
            <div>
                <h1>About us page</h1>
                <h2> learning react router concept </h2>
                <User name={'hello From class'} />
            </div>
        )

        // return (

        //     <div>
        //         <h1>About us page</h1>
        //         <h2> learning react router concept </h2>
        //         <User name={'First'} />
        //         <User name={'Second'} />
        //         <User name={'Third'} />
        //     </div>
        // )
/* React first renders all the components and updates the DOM first then the componentDidMount is called 
 Parent constructor
 Parent Render

 First child constructor
 First child render

 Second child constructor
 Second child render

 Third child constructor
 Third child render
 
 DOM UPDATES

 First child componentDidMount
 Second child componentDidMount
 Third child componentDidMount
 Parent componentDidMount
*/
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>About us page</h1>
//             <h2> learning react router concept </h2>
//             <User name={'hello From class'} />
//         </div>
//     )
// }

export default About;