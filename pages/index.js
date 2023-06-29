import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';

import Tabs from '../src/components/tabs';
import { brandState, popularState, modalState } from '../state/index';
import { useRecoilState } from 'recoil';
// import bgImg from '../public/images/UnicornVectorGradient_8.jpg';
import bgImg from '../public/images/travel.png';
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
  font-weight: 100;
  color: #424242;
  font-family: sans-serif;
  font-size: 0.8rem;
`;
const BG = styled.div`
  background-image: url('${bgImg.src}');
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center top;
`;
export default function Index({ children }) {
  const [brandName, setBrandName] = useRecoilState(brandState);
  const [modal, setModal] = useRecoilState(modalState);
  const [popularSongs, setPopularSongs] = useRecoilState(popularState);
  useEffect(() => {
    const fetchPopular = async brand => {
      try {
        const { data } = await axios.get(`https://api.manana.kr/karaoke/popular/${brand}/monthly.json`);

        setPopularSongs(data);
      } catch (e) {
        console.error(e);
      }
    };
    const brand = brandName === 'TJ' ? 'tj' : 'kumyoung';
    fetchPopular(brand);
  }, [setPopularSongs, brandName]);

  return (
    <>
      <Head>
        <title>봄결 🎀 토롱 여행일지</title>
        <meta name="description" content="속초 여행일지"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <BG>
        <img src={bgImg.src} alt="" style={{ width: '100%', opercity: '0' }} />
        {/* <Head>
        <title>WooTa | 당신의 노래방 메이트</title>
        <meta name="description" content="WooTa 홈 입니다"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <WootaContainer>
        {modal && <Modal setModal={setModal} />}
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Link href={'/'}>
            <h1 style={{ margin: 0, fontWeight: '400' }}>WOOTA.</h1>
          </Link>
          <span
            style={{ paddingLeft: '0.5rem', fontSize: '1.2rem', lineHeight: '2rem' }}
            onClick={() => {
              setBrandName(brandName === 'TJ' ? 'KY' : 'TJ');
            }}>
            {brandName}
          </span>
        </div>
        <Tabs />
        <div style={{ paddingLeft: '1rem' }}>
          {children || (
            <div style={{ margin: '10%', fontSize: '1rem', display: 'inline-block' }}>
              <div>1. 사이트 상단의 노래방 브랜드를 눌러서 바꿀수 있어요!</div>
              <br />
              <div>2. 마음에 드는 곡을 눌러보세요! 애창곡 또는 연습곡으로 저장할 수 있어요!</div>
            </div>
          )}
        </div>
      </WootaContainer> */}
      </BG>
    </>
  );
}
