import React, { Component } from 'react'

class Calculation extends Component {

        constructor(props) {
                super(props)
        
                this.ref1 = React.createRef()
                this.ref2 = React.createRef()
        }
        

        handleCalculate = () =>{
                let val1 = parseInt(this.ref1.current.value);
                let val2 = parseInt(this.ref2.current.value);

               

                let total = val1 + val2;

                console.log(`The sum of ${val1} and ${val2} is ${total}`)

                this.ref1.current.value = "";
                this.ref2.current.value = "";
        }

        render() {
                return (
                        <div>
                                <input type = "Number" placeholder="Enter First value" style = {{margin: "20px"}}
                                ref = {this.ref1} />

                                <input type = "Number" placeholder="Enter Second value" style = {{margin: "20px"}}
                                ref = {this.ref2} />
                                <br />
                                <button onClick = {this.handleCalculate}>Calculate Sum</button>
                        </div>
                )
        }
}

export default Calculation


