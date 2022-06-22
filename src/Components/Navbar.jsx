import React from "react";
import {ButtonLink} from '../theme/theme'
const styles = {
    header: {
        background: '#4C3A51',
    },
    nav : {
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        padding: '10px'
    },
    a: {
        color: 'white',
        margin: '5px'
    }
}

export default function Navbar(){
    return(
        <>
            <header style={styles.header}>
                <nav style={styles.nav}>
                    <div className="brand">
                        <ButtonLink to={'/'}>Home</ButtonLink>
                    </div>
                    <div className="navigation">
                        <ButtonLink to={'/about'}>About</ButtonLink>
                        <ButtonLink to={'/blog'}>Blog</ButtonLink>
                    </div>
                </nav>
            </header>
        </>
    )
}