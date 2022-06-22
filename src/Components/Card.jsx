import React, { useState, useReducer } from "react";
import { NavLink, useNavigate } from 'react-router-dom'
import Modal from "./Modal";
import { Zoom } from "react-reveal";
import { reducer, initial } from '../theme/reducer'

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
    const [newsReducer, dispatch] = useReducer(reducer, initial)
    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const closeTab = () => {
        setView(false)
    }

    return (
        <>
            <Zoom center>
                <div style={styles.card}>
                    <div className="head">
                        <img style={styles.img} onClick={() => setView(true)} src={props.news.urlToImage} alt={props.news.title} />
                    </div>
                    <div to={{
                        pathname: props.link,
                        state: props.news
                    }}
                        onClick={() => {
                            dispatch({ type: 'DETAIL', news: props.news })
                            navigate(props.link)
                        }
                        }

                    >
                        <div className="body">
                            <h3>{props.news.title}</h3>
                            <p>{props.news.description}</p>
                        </div>
                    </div>
                </div>
            </Zoom>
            <Modal view={view} data={props.news} onClick={closeTab} />

        </>
    )
}