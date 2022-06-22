import React, { useState, useEffect } from "react";
import '../styles/counter.css'

const styles = {
    btn: {
        borderRadius: '10px',
        color: 'white',
        outline: 'none',
        border: 'none',
        padding: '5px',
        margin: '10px',
        cursor: 'pointer'
    }
}

export default function Counter(props) {
    const [name, setName] = useState('Ninja Ken')
    const [count, setCount] = useState(0)

    useEffect(() => {
        new Date()
    }, [])

    return (
        <>
            <section>
                <h2>Haloo, {name} dan {props.name}</h2>
                <div>
                    <button style={styles.btn} className={name === 'Guru Domba' ? 'btn-red' : 'btn-blue'} onClick={() => setName('Guru Domba')}>
                        Guru Domba
                    </button>
                    <button className={name === 'Guru Domba' ? 'btn-blue' : 'btn-red'} style={styles.btn} onClick={() => setName('Ninja Ken')}>
                        Ninja Ken
                    </button>
                </div>
                <button onClick={() => setCount(count + 1)}>Countert</button>
                <div>
                    {count}
                </div>
            </section>
        </>
    )
}