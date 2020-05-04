import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

export default class ComponentE extends Component {

        static contextType = UserContext

        render() {
                return (
                        <section>
                                <p>ComponentE context {this.context}</p>
                                 <ComponentF />
                        </section>
                      
                )
        }
}
