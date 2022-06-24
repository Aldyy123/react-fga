import React, { useState } from "react";
import Modal from "./Modal";
import { Zoom } from "react-reveal";

const styles = {
    card: {
        width: '200px',
        margin: '15px'
    },
    img: {
        width: '100%'
    }
}

export default function Card(props) {
    const [view, setView] = useState(false)
    const closeTab = () => {
        setView(false)
    }

    return (
        <>
            <Zoom center>
                <div style={styles.card}>
                    <div className="head">
                        <img style={styles.img} onClick={() => setView(true)} src={props.news.thumbnailUrl} alt={props.news.title} />
                    </div>
                    <div
                    >
                        <div className="body">
                            <h3>{props.news.title}</h3>
                            {/* <p>{props.news.description}</p> */}
                        </div>
                    </div>
                </div>
            </Zoom>
            {/* <Modal view={view} data={props.news} onClick={closeTab} /> */}

        </>
    )
}
