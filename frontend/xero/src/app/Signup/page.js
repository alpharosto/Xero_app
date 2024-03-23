"use client";
import styled from 'styled-components';
import { useState } from 'react';

const Main = styled.main`
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  width: 300px;
  padding: 20px;
  /* border-radius: 10px; */
  border: 2px solid black; /* Set border color to black */
  background-color: white; /* Set background color to white */
  backdrop-filter: blur(25px);
  position: relative;

  header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: white;
    border-radius: 0 0 10px 10px;
    color: black; /* Set text color to black */
  }
`;

const Form = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid black; /* Set border color to black */
  width: 100%;
  border-radius: 10px;
  outline: none;
  background-color: white;
  color: black;

  &:valid + label,
  &:focus + label {
    background-color: white;
    color: black;
    border-color: black;
    transform: translate(10px, -20px);
    padding: 2px 5px;
    font-size: 8px;
    border-radius: 4px;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 10px;
  font-size: 12px;
  color: black;
  transition: 0.2s;
`;

const Icon = styled.i`
  position: absolute;
  right: 10px;
  color: black;
  font-size: 15px !important;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  border-radius: 25px;
  cursor: pointer;
  width: 100%;
  color: white;
  background-color:#005cb9
`;

const ExistingAccount = styled.div`
  color: black; /* Set text color to black */
  a {
    color: blue; /* Set link color to blue */
    text-decoration: none; /* Remove default underline */
    font-weight: bold; /* Make the text bold */
  }
`;

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Main>
      <header>
        <h4>Sign Up</h4>
      </header>
      <Form>
        <InputWrapper>
          <Input 
            id="input" 
            type="text" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Label htmlFor="input">Username</Label>
          <Icon className="material-icons">person</Icon>
        </InputWrapper>
        <InputWrapper>
          <Input 
            id="email" 
            type="email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <Label htmlFor="email">Email</Label>
          <Icon className="material-icons">email</Icon>
        </InputWrapper>
        <InputWrapper>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Label htmlFor="password">Password</Label>
          <Icon className="material-icons">lock</Icon>
        </InputWrapper>
        <InputWrapper>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Label htmlFor="password">ConfirmPassword</Label>
          <Icon className="material-icons">lock</Icon>
        </InputWrapper>
        <InputWrapper>
          <Input 
            id="password" 
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <Label htmlFor="password">AdharNo.</Label>
          <Icon className="material-icons">Number</Icon>
        </InputWrapper>
        <Button>Sign Up</Button>
        <ExistingAccount>
          Already have an account? <a href="Login">Log in</a>
        </ExistingAccount>
      </Form>
    </Main>
  );
}
