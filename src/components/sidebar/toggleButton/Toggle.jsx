import React from 'react'

const Toggle = ({setOpen}) => {
    return (
        <button onClick={() => setOpen((prev) => !prev)}>Button</button>
    )
}

export default Toggle