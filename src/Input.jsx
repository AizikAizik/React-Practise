import React, { Component } from 'react'

export class Input extends Component {

        constructor(props) {
                super(props)
        
                this.inputRefs = React.createRef()
        }

        focusInput(){
                this.inputRefs.current.focus()
        }
        
        render() {
                return (
                        <div>
                                <input type ="text" ref = { this.inputRefs } />
                        </div>
                )
        }
}

export default Input
