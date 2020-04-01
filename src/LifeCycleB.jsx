import React, { Component } from 'react'

export default class LifeCycleB extends Component {

        // initialize state here
        constructor(props) {
                super(props)
        
                this.state = {
                         
                }
                console.log("LifeCycle B --Constructor")
        }

        // Mounting Lifecycle Method
        static getDerivedStateFromProps(props,state){
                console.log("LifeCycle B --getDerivedStateFromProps")
                return null;
        }

        //Mounting Lifecycle Method
        componentDidMount(){
                console.log("LifeCycle B --ComponentDidMount")
        }

         // Updating Lifecycle Method
         shouldComponentUpdate(){
                console.log("LifeCycle B --ShouldComponentUpdate")
                return true;
        }

        // Updating Lifecycle Method
        getSnapshotBeforeUpdate(prevprops, prevstate){
                console.log("LifeCycle B -- getSnapshotBeforeUpdate")
                return null;
        }

        // Updating Lifecycle Method
        componentDidUpdate(){
                console.log("LifeCycle B -- componentDidUpdate")
        }
        
        render() {
                console.log("LifeCycle B --render")
                return (
                        <div>
                                <h2>Welcome To React Life Cycle Methods</h2>
                        </div>
                )
        }
}
