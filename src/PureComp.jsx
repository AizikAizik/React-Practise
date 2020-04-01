import React, { PureComponent } from 'react'

// Pure Components automatically initializes the shouldComponentUpdate lifecycle method
// It therefore performs a shallow comparison between the state objects
// if there is no difference then the component is not re-rendered hence improving performance
// Never mutate the state when working with pure components in React
class PureComp extends PureComponent {
        render() {
                console.log("Pure Component Render")
                return (
                        <div>
                                Pure Component { this.props.name }
                        </div>
                )
        }
}

export default PureComp
