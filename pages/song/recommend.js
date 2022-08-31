import React, { useState,useEffect } from 'react';
import Index from '../index';
import {  useRecoilValue } from 'recoil';
import {  popularState } from '../../state';

export default function Recommend() {
  const popularSongs = useRecoilValue(popularState)
 
  const [number, setNumber] = useState(
    Math.floor(Math.random() * popularSongs.length)
  );
  return (
    <Index>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * popularSongs.length));
        }}
      >
        랜덤 인기곡을 뽑아보세요
      </button>
      <br />
      제목:{popularSongs[number]?.title}
      <br />
      가수: {popularSongs[number]?.singer}
      <br />
      번호: {popularSongs[number]?.no}
    </Index>
  );
}
