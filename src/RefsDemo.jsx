import React, { Component } from 'react'

class RefsDemo extends Component {

        constructor(props) {
                super(props)
        
                this.inputRefs = React.createRef()
        }

        componentDidMount(){
                this.inputRefs.current.focus()
                console.log(this.inputRefs)
        }

        handleClick = () =>{
                console.log(this.inputRefs.current.value)
        }
        
        render() {
                return (
                        <div>
                                <input type = "text" ref = { this.inputRefs }/>
                                <br />
                                <button onClick = { this.handleClick }>Print value</button>
                        </div>
                )
        }
}

export default RefsDemo
