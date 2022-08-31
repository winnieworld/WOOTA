import Link from 'next/link';
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

const StyledTabs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
`;
const Tab = styled.li`
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

const titles = [
  { href: '/song/newTop', text: 'NEW / Top100' },
  { href: '/song/search', text: 'Search' },
  { href: '/song/recommend', text: 'Recommend' },
  { href: '/song/mySongs', text: 'My Songs' },
];

export default function Tabs() {
  return (
    <StyledTabs>
      {titles.map(({ href, text }, index) => (
        <Link href={href} key={index}>
          <Tab
            id={`tab${index + 1}`}
            role={'tab'}
            aria-controls={`section${index + 1}`}
            aria-selected={'false'}
            tabIndex={'0'}
          >
            <a>{text}</a>
          </Tab>
        </Link>
      ))}
    </StyledTabs>
  );
}
