import styled from "styled-components";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height:100vh;
    justify-content:space-between;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    justify-content:flex-start;
    align-content: center;
`

export const SectionHorizontal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items:center;
    margin: 10px;
`

export const SectionVertical = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items:center;
    margin: 10px;
    flex-wrap: wrap;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-content: flex-start;
    align-items: flex-start;
    margin: 10px;
    flex-wrap: wrap;
   gap: 50px 0px;
   overflow: auto;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`

export const LoginForm = styled.form`

`

export const InputField = styled.input`
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

export const SubmitButton = styled.button`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border:none;
    color: white;
    font-size: 1.5em;
    background-color: purple;

`

export const FilterButton = styled.button`
    width: 80px;
    border-radius: 15px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`
export const ActionButton = styled.button`
    border-radius: 5px;
    background-color: white;
    border: none;
    display: flex;
    flex-direction:row;
    justify-content: center;
    padding: 5px;
`