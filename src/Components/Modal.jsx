import React from "react";
import Slide from 'react-reveal/Slide';


export default function Modal(props) {
    return (
        <>
            {props.view && (
                <section className="modal">
                    <Slide left>
                        <div>
                            <div>
                                <h2>{props?.data?.title}</h2>
                                <p>{props?.data?.description}</p>
                            </div>
                            <div>
                                <button onClick={props.onClick}>Close</button>
                            </div>
                        </div>
                    </Slide>
                </section>
            )}
        </>
    )
}