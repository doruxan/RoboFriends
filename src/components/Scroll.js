import React from 'react'

const Scroll = ({children}) => {
    return(
        <div style={{ overflowY : 'scroll', border: '1px solid black', marginBottom:'100px'}}>
            {children}
        </div>
    )
}

export default Scroll