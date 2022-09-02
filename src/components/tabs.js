import Link from 'next/link';
import styled from 'styled-components';
import { Button } from './styledItems';

const StyledTabs = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  margin: 20px auto;
  padding: 0;
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
          <Button
            id={`tab${index + 1}`}
            role={'tab'}
            aria-controls={`section${index + 1}`}
            aria-selected={'false'}
            tabIndex={'0'}>
            <a>{text}</a>
          </Button>
        </Link>
      ))}
    </StyledTabs>
  );
}
