
import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
        
        constructor(props) {
                super(props)
        
                this.state = {
                         name : "Isaac Ogunleye"
                }

                console.log("LifeCycle A --Constructor")
        }

        // Mounting Lifecycle Method
        static getDerivedStateFromProps(props,state){
                console.log("LifeCycle A --getDerivedStateFromProps")
                return null;
        }

        // Mounting Lifecycle Method
        componentDidMount(){
                console.log("LifeCycle A --ComponentDidMount")
        }
        
        // Updating Lifecycle Method
        shouldComponentUpdate(){
                console.log("LifeCycle A --ShouldComponentUpdate")
                return true;
        }

        // Updating Lifecycle Method
        getSnapshotBeforeUpdate(prevprops, prevstate){
                console.log("LifeCycle A -- getSnapshotBeforeUpdate")
                return null;
        }

        // Updating Lifecycle Method
        componentDidUpdate(){
                console.log("LifeCycle A -- componentDidUpdate")
        }

        changeState = () => {
                this.setState({ name : "David Ogunleye" })
        }

        // Mounting and Updating Lifecycle Methods
        render() {
                console.log("LifeCycle A --render")
                return (
                        <div>
                                <button onClick = { this.changeState }>Change State</button>
                                <LifeCycleB />
                        </div>
                )
        }
}
