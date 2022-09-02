import React, { useState } from 'react';
import Index from '../index';
import {  useRecoilValue,useRecoilState } from 'recoil';
import {  popularState, modalState, selectedState } from '../../state';
import {selectSong} from '../../src/selectSong';

export default function Recommend() {
  const popularSongs = useRecoilValue(popularState)
  const [modal,setModal] = useRecoilState(modalState);
  const [selected,setSelected] = useRecoilState(selectedState);
  
  const [number, setNumber] = useState(
    Math.floor(Math.random() * popularSongs.length)
  );
  return (
    <Index>
      <div style={{ width:'60%', margin:'3rem auto'}}>
      <button
        onClick={() => {
          setNumber(Math.floor(Math.random() * popularSongs.length));
        }}
        style={{ borderRadius:'8px', border:'1px solid #424242', color: '#424242',backgroundColor:'transparent', padding:'0.5rem'}}
      >
        랜덤 인기곡을 뽑아보세요
      </button>
      <ul style={{listStyle:'none', padding:'0px', marginTop:'1rem'}}onClick={(e) => { setModal(!modal); selectSong(e, setSelected)}}>
        <li style={{margin:'3px'}}>
          <span className="no" style={{display:'block'}}>{popularSongs[number]?.no}</span>
          <span className="title" style={{display:'block' , margin:'3px 0', whiteSpace: 'nowrap', overflow: 'hidden'}}>{popularSongs[number]?.title}</span>
          <span className="singer" style={{display:'block', whiteSpace: 'nowrap', overflow: 'hidden'}}>{popularSongs[number]?.singer}</span>
        </li>
      </ul>

      </div>
 
    </Index>
  );
}
