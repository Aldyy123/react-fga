import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import {Container} from '../theme/theme'

export default function Blog(props) {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=40ac9c4d52ff4e0b890e1bd47a2bf9de')
            .then(result => result.json())
            .then(data => setNews(data.articles))
            .catch(err => console.log(err))        
    }, [])
    return (
        <>
            <Container>
                <h2>Blog</h2>
                <div style={{
                    display: "flex",
                    justifyContent: 'space-evenly',
                    flexWrap: 'wrap'
                }}>
                    {news.map((berita, i) => (
                        <Card link={`/blog/${i}`} news={berita} key={i} />
                    ))}
                </div>
            </Container>
        </>
    )
}