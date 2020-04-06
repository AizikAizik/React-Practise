import React from 'react'

const HOC = (OriginalComponent, counter) =>{
        class NewComponent extends React.Component{
                constructor(props) {
                        super(props)
                
                        this.state = {
                                 count : 0
                        }
                }
        
                handleMouse = () =>{
                        this.setState(prev => {
                               return {count : prev.count + counter };
                        })
                }

                render(){
                        return <OriginalComponent count ={this.state.count} handleMouse ={this.handleMouse}  { ...this.props }/>
                }
        }
        return NewComponent
}

export default HOC