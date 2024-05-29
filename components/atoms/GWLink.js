import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const GWLink = ({ children, target = "", onClick, skipLocaleHandling, rel="", ...rest }) => {
    const router = useRouter()
    const locale = rest.locale || router.query.locale || ''

    let href = rest.href || router.asPath
    if (href.indexOf('http') === 0) skipLocaleHandling = true
    if (locale && !skipLocaleHandling) {
        href = href
            ? `/${locale}${href}`
            : router.pathname.replace('[locale]', locale)
    }

    return (
        <>
            <Link target={target} rel={rel} href={href} style={{ textDecoration: "none" }} onClick={onClick}>
                {children}
            </Link>
        </>
    )
}

export default GWLink