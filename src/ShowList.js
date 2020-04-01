import React from 'react'
import Person from './Person'

const ShowList = ({ props }) => {
    const userData =
        [
            {
                id: 1,
                name: "Isaac"
            },
            {
                id: 2,
                name: "Faith"
            },
            {
                id: 3,
                name: "David"
            }
        ]

    const newList = userData.map(user => <Person person={user} key={user.id} />)

    return (
        <div>
            {newList}
        </div>
    )
}

export default ShowList