import React, { Component } from 'react'
import HOC from './HOC'

class ClickCounter extends Component {
        
        render() {
                const { count, handleMouse } = this.props;
                return (
                        <div>
                                <button onClick= {handleMouse}>
                                {this.props.name} has clicked here { count } time(s)
                                </button>
                        </div>
                )

        }
}

export default HOC(ClickCounter, 1)
