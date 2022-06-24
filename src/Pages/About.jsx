import React, { useState } from "react";

export default function About() {
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [emptyEmail, setEmptyEmail] = useState(false)
    const [emptyMsg, setEmptyMsg] = useState(false)
    const [submited, isSubmited] = useState(false)

    const formSubmit = (e) => {
        console.log(e);
        setEmail(e.target[0].value)
        setMsg(e.target[1].value)
        isSubmited(true)
        e.preventDefault()
    }

    const SuccessMsg = () => (
        <section>
            <p style={{ color: 'green' }}>Message success to sending</p>
        </section>
    )

    const form = () => (
        <form className="form" onSubmit={formSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" onChange={(e) => {
                    const { value } = e.target
                    if (value.length <= 0) {
                        setEmptyEmail(true)
                    } else {
                        setEmptyEmail(false)
                    }
                }} />
                {emptyEmail && (
                    <span style={{ color: 'red' }}>Please Enter your email</span>
                )}
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="10" onChange={(e) => {
                    if (e.target.value.length <= 0) {
                        setEmptyMsg(true)
                    } else {
                        setEmptyMsg(false)
                    }
                }}></textarea>
                {emptyMsg && (
                    <span style={{ color: 'red' }}>Please Enter your message</span>
                )}
            </div>
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    )

    return (
        <>
            <section>
                <h2>About</h2>
                {submited? <SuccessMsg/> : form()}
                <section>
                    <p>{email}</p>
                    <p>{msg}</p>
                </section>
            </section>
        </>
    )
}