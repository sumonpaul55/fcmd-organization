import React from 'react'

function Buttton({ children, styles }) {
    return (
        <button className={`px-3 md:px-5 lg:px-7 py-2 md:py-3 rounded-md duration-300 ${styles ? styles : ""}`}>{children}</button>
    )
}

export default Buttton