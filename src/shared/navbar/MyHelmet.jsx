import React from 'react'
import { Helmet } from 'react-helmet-async'

function MyHelmet({ siteTitle }) {
    return (
        <Helmet>
            <title>FCMD || {siteTitle}</title>
        </Helmet>
    )
}

export default MyHelmet