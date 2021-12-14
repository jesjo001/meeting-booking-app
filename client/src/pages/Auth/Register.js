import React from 'react';
import styled from 'styled-components'
import { SubmitButton } from "../styles"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';


export default function Register() {
    const [age, setAge] = React.useState('job-seeking');

    const styles = {
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        sideSection: {
            backgroundColor: '#6EE2CB'
        }
    }

    const handleChange = (value) => {
        console.log(`selected ${value}`);
        setAge(value)
    }
    return (
        <Container>
            <HorizontalContainer style={styles.sideSection}>

                <LogoTitle>Job Board</LogoTitle>
                <Title style={{ marginBottom: '0px', marginTop: '0px', color: 'grey' }}>Welcome to Job Board</Title>

            </HorizontalContainer>

            <HorizontalContainer>
                <Title >Sign up to start applying</Title>


                <form style={styles.form} >
                    <FormContainer style={{ marginBottom: '30px', color: 'white' }}>
                        <FormControl fullWidth >
                            <ToggleButtonGroup

                                color="success"
                                value={age}
                                exclusive
                                onChange={(e) => handleChange(e.target.value)}
                            >
                                <ToggleButton value="job-seeker" style={{ color: "white" }}>Job Seeker</ToggleButton>
                                <ToggleButton value="recruiter" style={{ color: "white" }} >Recruiter</ToggleButton>

                            </ToggleButtonGroup>
                        </FormControl>
                    </FormContainer>
                    <FormContainer>
                        <FormLabel>Email:</FormLabel>
                        <Input placeholder="Enter your email" /><br />
                    </FormContainer>
                    <FormContainer>
                        <FormLabel>Password</FormLabel>
                        <Input placeholder="Enter your password" />
                    </FormContainer>

                    <ActionButton >Sign Up</ActionButton>
                </form>
            </HorizontalContainer>
        </Container>
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 250px;
    color: white;
    text-transform: uppercase;
`

const HorizontalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    align-content: space-around;
    width: 50%;
    background-color: #374961;
`

const Input = styled.input`
    width: 250px;
    height: 40px;
    margin-bottom: 30px;
    border-radius: 8px;
    background-color:transparent;
    border:none;
    border-bottom: 1px solid #F5F7F7;
`

const ActionButton = styled(SubmitButton)`
    width: 250px;
    background-color: #69DBC7;
`

const FormLabel = styled.label`
    text-align: justify
`
const CustomSelect = styled(Select)`
    border-radius: 18px;
    background-color: #69DBC7;
    width: 250px;
    height: 50px;
    margin-bottom: 30px;
    border: 1px solid #F5F7F7;
    color: white;
`

const Title = styled.h3`
    font-size: 1.5em;
    color: #DCDFEC;
    font-style: bold;
    margin-bottom: 50px;
    font-family: 'Courgette', cursive;
`

const LogoTitle = styled.h3`
    font-size: 4.5em;
    color: white;
    font-style: bold;
    margin-bottom: 0px;
    font-family: 'Lobster', cursive;
`