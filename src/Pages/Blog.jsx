import React, { useEffect, useState, Suspense, lazy } from "react";
import { Container } from '../theme/theme'
import { Skeleton } from "@mui/material";
const Card = lazy(() => import("../Components/Card"));

export default function Blog(props) {
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(result => result.json())
            .then(data => setNews(data))
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
                        <Suspense fallback={
                            <div>
                                <Skeleton variant="rectangular" width={210} height={118} />
                                <Skeleton />
                                <Skeleton width="60%" />
                            </div>
                        } key={i}>
                            <Card news={berita} />
                        </Suspense>
                    ))}
                </div>
            </Container>
        </>
    )
}