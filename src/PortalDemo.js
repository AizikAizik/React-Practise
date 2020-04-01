import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
        return ReactDOM.createPortal(
                <div>
                        <h2>Portal Demo</h2>
                </div>,
                document.getElementById("portal-root")
        )
}

export default PortalDemo
