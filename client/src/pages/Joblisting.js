import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import Sidebar from '../components/common/Navbar/SideNav';
import { Input, Space } from 'antd';
import CustomInput from '../components/common/Input/CustomInput';
import TuneIcon from '@mui/icons-material/Tune';
import JobCard from "../components/common/Cards/JobsCard"
import PreviewModal from "../components/modal/PreviewModal"

const { Search } = Input;

const data = [
    {
        id: "0",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "1",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "2",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "3",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "4",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "5",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "6",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
    {
        id: "7",
        title: "Business Administrator",
        body: `Purus varius eros scelerisque morbi eget eget tempus nulla portaest molestie erat elit 
            maecenas molestie facilisis commodo facilisis elementum nunc pellentesque eget suspendisse euismod aliquam. 
            NullAdipiscing vel sed adipiscing nisl lorem rutrum molestie sollicitudin proin a 
            diam euismod ac eros eros pellentesque proin orci euismod amet a nec ipsum id.`

    },
]

export default function Joblisting() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [jobList, setJobList] = useState([...data]);

    console.log(jobList);

    const toggleModal = (job) => {
        console.log("toggleModal called")
        console.log("job called", job)
        setOpen(!open);
    }

    const styles = {
        searchArea: {
            height: "100px",
            backgroundColor: '#F4F6F6',
            width: "100%",
            borderBottom: "1px solid #AEF6C7",
        }
    }

    const onSearch = value => console.log(value);

    const displayData = () => {
        if (jobList.length > 0) {
            return (
                jobList.map((job, index) => (<JobCard key={job.id} toggleModal={toggleModal} job={job} />))

            )
        }
    }

    const submitForm = () => {
        if (email.length === 0 || password.length < 8) toast.error("Password must be at leasst 8 characters")
    }

    return (
        <PageContainer>
            <Sidebar />
            <Container>
                <SectionVertical style={styles.searchArea}>
                    {/* <Search placeholder="input search text" allowClear onSearch={onSearch} style={{ width: 200 }} bordered={false} /> */}

                    <CustomInput aria-label="Demo input" placeholder="Search Job listing..." />;
                    <CustomInput aria-label="Demo input" placeholder="Search Location." />;
                    <FilterButton><TuneIcon />Filter</FilterButton>
                    <SectionVertical style={{ justifyContent: 'space-between', width: '80px' }}>
                        <ActionButton><TuneIcon /></ActionButton>
                        <ActionButton><TuneIcon /></ActionButton>
                    </SectionVertical>
                </SectionVertical>
                <CardContainer>

                    {/* {jobList.length > 0 ?? jobList.map((job, index) => (<JobCard toggleModal={toggleModal} />))} */}
                    {displayData()}
                    {/* <JobCard toggleModal={toggleModal} />
                    <JobCard toggleModal={toggleModal} />
                    <JobCard toggleModal={toggleModal} /> */}



                </CardContainer>

            </Container>

            <PreviewModal toggleModal={toggleModal} open={open} />
        </PageContainer>
    );
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height:100vh;
    justify-content:space-between;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    justify-content:flex-start;
    align-content: center;
`

const SectionHorizontal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    margin: 10px;
`

const SectionVertical = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    margin: 10px;
    flex-wrap: wrap;
`
const CardContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content:space-around;
    align-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    flex-wrap: wrap;
    gap: 50px 0px;
    overflow: auto;
    padding-top: 30px;

    &::-webkit-scrollbar {
        width: 10px;              
    }

    &::-webkit-scrollbar-track {
        background: #FFFFFF;       
    }

    &::-webkit-scrollbar-thumb {
        background-color: #DFE1E1;    
        border-radius: 20px;       
        
    }
`

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

const LoginForm = styled.form`

`

const InputField = styled.input`
    margin:10px;
    width: 400px;
    border-radius: 10px;
    height: 50px;
    border: 1px solid grey;

    box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 1px 1px 5px 0px rgba(217,94,211,0.47);

::placeholder,
::-webkit-input-placeholder {
  color: grey;
  margin-left: 30px;
  font-size: 1.5em;
  padding-left: 50px;

}
:-ms-input-placeholder {
   color: red;
   margin-left: 40px;
   padding-left: 50px;
}
`

const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border:none;
    color: white;
    font-size: 1.5em;
    background-color: purple;

    box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-webkit-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);
-moz-box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.32);


    &:hover {
box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-webkit-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
-moz-box-shadow: 5px 5px 5px 0px rgba(217,94,211,0.47);
    }
`

const FilterButton = styled.button`
    width: 80px;
    border-radius: 15px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`

const ActionButton = styled.button`
    border-radius: 5px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`