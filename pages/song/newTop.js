import React, { useState, useEffect } from 'react';
import Index from '../index';
import axios from 'axios';
import styled from 'styled-components';
import { useRecoilValue, useRecoilState } from 'recoil';
import { brandState, popularState, modalState, SelectedState } from '../../state/index';
import {selectSong} from '../../src/selectSong';

// TODO: 값이 없을때 안내,  로딩중일때 안내
const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 1rem;
  text-align: left;
  background: ${(props) => props.selected && 'rgba(255,255,255,0.5)'};
  &:hover {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
  &:focus {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
`;
export default function NewTop() {

  const [newSongs, setNewSongs] = useState([]);

  const [category, setCategory] = useState('');

  const brandName= useRecoilValue(brandState);
  const popularSongs= useRecoilValue(popularState);
  const [modal,setModal] = useRecoilState(modalState);
  const [selected,setSelected] = useRecoilState(SelectedState);
  
  
  const fetchNew = async (brand) => {
    try {
      const { data } = await axios.get(
        `https://api.manana.kr/karaoke/${brand}.json`
      );

      setNewSongs(data);
    } catch (e) {
      // error
      console.error(e);
    }
  };
  console.log()
  
  useEffect(() => {
    fetchNew(brandName === 'TJ' ? 'tj' : 'kumyoung');
  }, [brandName]);
  
  
  return (
 

    <Index >
      <CategoryButton
        onClick={() => {
          category !== 'new' ? setCategory('new') : setCategory('');
        }}
      >
        NEW
      </CategoryButton>
      <ul style={{ height: category === 'new' && '15rem', overflowY: 'auto' }}
      onClick={(e) => { setModal(!modal); selectSong(e, setSelected)}}>
        {category === 'new' &&
          newSongs.map((song, index) => (
            <li key={index}>
              <span className="title">{song.title}</span>
                <span className="singer"> {song.singer}</span>
                <span className="no">{song.no} </span>
            </li>
          ))}
      </ul>
      <CategoryButton
        onClick={() => {
          category !== 'popular' ? setCategory('popular') : setCategory('');
        }}
      >
        Popular
      </CategoryButton>
      <ul
        style={{ height: category === 'popular' && '15rem', overflowY: 'auto' }}
        onClick={(e) => { setModal(!modal); selectSong(e, setSelected)}}>

        {category === 'popular' &&
          popularSongs.map((song, index) => {
            return (
              <li key={index}>
                <span className="title">{song.title}</span>
                <span className="singer"> {song.singer}</span>
                <span className="no">{song.no} </span>
              
              </li>
            );
          })}
      </ul>
    </Index>
  );
}
