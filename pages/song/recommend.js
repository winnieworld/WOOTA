import React, { useState,useEffect } from 'react';
import Index from '../index';
import {  useRecoilValue,useRecoilState } from 'recoil';
import {  popularState, modalState, SelectedState } from '../../state';
import {selectSong} from '../../src/selectSong';

export default function Recommend() {
  const popularSongs = useRecoilValue(popularState)
  const [modal,setModal] = useRecoilState(modalState);
  const [selected,setSelected] = useRecoilState(SelectedState);
  
  
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
      <ul onClick={(e) => { setModal(!modal); selectSong(e, setSelected)}}>
        <li>
      <span className="title">{popularSongs[number]?.title}</span>
      <span className="singer">  {popularSongs[number]?.singer}</span>
       <span className="no">{popularSongs[number]?.no} </span>
        </li>
        </ul>
 
    </Index>
  );
}
