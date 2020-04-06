import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import HOC from './HOC'

class Hover extends Component {
        
        render() {
                const { count, handleMouse } = this.props;
                return ReactDOM.createPortal(
                        <div>
                                <h3 onMouseOver = {handleMouse}>
                                {this.props.name} has hovered here { count } time(s)
                                </h3>
                        </div>, document.getElementsByTagName('div')[0]
                )

        }
}

export default HOC(Hover, 2)
