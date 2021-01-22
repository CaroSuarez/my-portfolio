import React, {Fragment} from 'react';
import styled from 'styled-components';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';



const Wrapper = styled.div`
    background-color : #F02098;
    display : flex;
    flex-direction : row;
    justify-content : space-around;
    height : 40px;
`

const Text = styled.p`
    font-family : 'Red Hat Display', sans-serif;
    font-size : 20px;
    color : #FFFFFF;

`


const Footer = () => {

    return (
        <Wrapper>

            <Text> I developed this website from scratch. 2021.</Text>

        <img src = {github} alt = 'github logo' height = '35px' width = '35px' />
        <img src = {linkedin} alt = 'linkedin logo' height = '35px' width = '35px' />

        </Wrapper>
    )


}


export default Footer;