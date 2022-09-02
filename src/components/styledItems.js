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
  text-align: center;
  box-sizing: border-box;
  border-bottom: 1px solid transparent;
  padding: 0.4rem;
  white-space: nowrap;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  color: #383838;

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

export const StyledModal = styled.div`
z-index: 1000;
position: absolute;
top:50%;
left:50%;
transform: translate3d(-50%, -50%, 0);  
text-align: center;
padding: 1rem 3rem;
background: white;
border-radius: 1rem;
`

export const ModalButton = styled(Button)`
background-color: transparent;
border-color: transparent;
&:hover {
  border-bottom: 1px solid gray;
}
`

export const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 1rem;
  text-align: left;
  background: ${(props) => props.selected && 'rgba(255,255,255,0.5)'};
  font-size:0.8rem;
  font-weight: 100;
  color:#424242;



  &:hover {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
  &:focus {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
`;