import styled from "styled-components"
import Link from 'next/link';
import bgImg from '../public/images/UnicornVectorGradient_12.jpg'

const BackgroundImg = styled.div`
  background-image: url('${bgImg.src}');
  background-repeat: no-repeat;
  background-size: cover;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background-position: 50% 0;
`;


export default function Error404(){
    return <BackgroundImg>
            <h1>404</h1>
            <div>where are you going</div>
            <div>come and play with us</div>
            <Link href={'/'}>
            follow me 
            </Link>
          </BackgroundImg>
}