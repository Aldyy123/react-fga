import React, {useContext, useReducer} from "react";
import {useParams} from 'react-router-dom'
import { News} from '../theme/reducer'
import {reducer} from '../theme/reducer'

export default function Detail(props){
    const news = useContext(News)
    const params = useParams()
    const [data] = useReducer(reducer)
    console.log(news);
    return(
        <>
            <h3>Detail id {params.id}</h3>
        </>
    )
}