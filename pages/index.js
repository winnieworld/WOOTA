import React , { useEffect }from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

import Tabs from '../src/components/tabs';
import {  brandState, popularState, modalState } from '../state/index';
import { useRecoilState } from 'recoil';
import bgImg from '../public/images/UnicornVectorGradient_8.jpg'
import Modal from '../src/components/modal';



const WootaContainer = styled.div`
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

export default function Index({ children }) {
  
  const [brandName, setBrandName] = useRecoilState(brandState);
  const [modal, setModal] = useRecoilState(modalState);
  const [popularSongs, setPopularSongs] = useRecoilState(popularState);
  useEffect(() => {
    const fetchPopular = async (brand) => {
      try {
        const { data } = await axios.get(
          `https://api.manana.kr/karaoke/popular/${brand}/monthly.json`
        );

        setPopularSongs(data);
      } catch (e) {
        console.error(e);
      }
    };
    const brand =brandName === 'TJ' ? 'tj' : 'kumyoung'
    fetchPopular(brand);

}, [setPopularSongs,brandName]);

  return (
    <>
      <Head>
        <title>WooTa | 당신의 노래방 메이트</title>
        <meta name='description' content='WooTa 홈 입니다'></meta>
      </Head>
      <WootaContainer>
       {modal&& <Modal setModal={setModal}/>}
        <h1>
          <Link href={'/'}>
            <span>woota.</span>
          </Link>
          <span
            style={{ paddingLeft: '0.5rem', fontSize: '1rem' }}
            onClick={() => {
              setBrandName(brandName==='TJ' ? 'KY' : 'TJ');
            }}
          >
            {brandName}
          </span>
        </h1>
        <Tabs />
        {children}
      </WootaContainer>
    </>
  );
}
