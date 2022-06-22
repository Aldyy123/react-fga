import styled from "styled-components";
import {Link} from 'react-router-dom'


const ButtonLink = styled(Link)`
text-decoration: none;
color: white;
margin: 5px;
`

const Container = styled.section`
margin: 0 auto;
max-width: 1000px
`

export{
    ButtonLink,
    Container
}