import React from 'react'

function SectionTitle({ sectionTitle, coloredTittle, styles }) {
    return (
        <h1 className={`text-base sm:text-xl md:text-3xl lg:text-4xl font-bold ${styles && styles}`}>
            {sectionTitle}
            <span className='text-primary'> {coloredTittle}</span>
        </h1>
    )
}

export default SectionTitle

