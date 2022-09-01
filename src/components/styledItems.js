import styled, { keyframes } from 'styled-components';



const rotate = keyframes` 
0%{
    background-color: rgba(0,0,0,0)
}
50%{ 
  background-color: rgba(225,225,225,0.5)
  
}
100%{
  background-color: rgba(0,0,0,0)

}
`;
export const Button = styled.li`
  display: block;
  font-size: 1rem;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  padding: 0.4rem;
  white-space: nowrap;
  width: 100%;

  &:hover {
    border-bottom: 1px solid white;
    transition: 0.5s;
    animation: ${rotate} 0.5s linear;
  }
  &:focus {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
`;