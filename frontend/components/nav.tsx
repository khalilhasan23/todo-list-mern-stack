"use client"

import { CCollapse, CContainer, CImage, CNavbar, CNavbarNav, CNavbarToggler } from "@coreui/react";
import { useState } from "react";
import Link from 'next/link';


const Nav: React.FC<{buttenNames: Record<string, string>}> = ({buttenNames})=> {
    const [visible, setVisible] = useState(false)
    return (
        <>
            <CNavbar expand="lg" className="navContainer">
            <CContainer fluid>
            <CImage src="/book-03.jpg" alt="Book Image"/>
                <CNavbarToggler
                aria-label="Toggle navigation"
                aria-expanded={visible}
                onClick={() => setVisible(!visible)}
                />
                <CCollapse className="navbar-collapse d-flex justify-content-end" visible={visible}>
                <CNavbarNav as="nav">
                    {Object.keys(buttenNames).map((name) => (<Link href={buttenNames[name]} className="navLink" key={name}>{name}</Link>))}
                </CNavbarNav>
                </CCollapse>
            </CContainer>
            </CNavbar>
        </>
    )
}

export default Nav;