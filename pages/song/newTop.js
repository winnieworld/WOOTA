import React, { useState, useEffect } from 'react';
import Index from '../index';
import axios from 'axios';
import { useRecoilValue, useRecoilState } from 'recoil';
import { brandState, popularState, modalState, selectedState } from '../../state/index';
import { selectSong } from '../../src/selectSong';
import { CategoryButton } from '../../src/components/styledItems';
// TODO: 값이 없을때 안내,  로딩중일때 안내

export default function NewTop() {
  const [newSongs, setNewSongs] = useState([]);

  const [category, setCategory] = useState('');

  const brandName = useRecoilValue(brandState);
  const popularSongs = useRecoilValue(popularState);
  const [modal, setModal] = useRecoilState(modalState);
  const [selected, setSelected] = useRecoilState(selectedState);

  const fetchNew = async brand => {
    try {
      const { data } = await axios.get(`https://api.manana.kr/karaoke/${brand}.json`);

      setNewSongs(data);
    } catch (e) {
      // error
      console.error(e);
    }
  };
  console.log();

  useEffect(() => {
    fetchNew(brandName === 'TJ' ? 'tj' : 'kumyoung');
  }, [brandName]);

  return (
    <Index>
      <CategoryButton
        onClick={() => {
          category !== 'new' ? setCategory('new') : setCategory('');
        }}>
        NEW
      </CategoryButton>
      <CategoryButton
        onClick={() => {
          category !== 'popular' ? setCategory('popular') : setCategory('');
        }}>
        Popular
      </CategoryButton>
      <ul
        style={{ height: '20rem', overflowY: 'auto', listStyle: 'none', paddingLeft: '8px' }}
        onClick={e => {
          setModal(!modal);
          selectSong(e, setSelected);
        }}>
        {category === 'popular'
          ? popularSongs.map((song, index) => {
              return (
                <li key={index} style={{ margin: '3px', display: 'flex', height: '1.2rem' }}>
                  <span className="no" style={{ display: 'inline-block', width: '4rem' }}>
                    {song.no}
                  </span>
                  <span
                    className="title"
                    style={{
                      display: 'inline-block',
                      width: '40%',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      margin: '0 10px',
                    }}>
                    {song.title}
                  </span>
                  <span
                    className="singer"
                    style={{ display: 'inline-block', width: '7rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                    {song.singer}
                  </span>
                </li>
              );
            })
          : newSongs.map((song, index) => (
              <li key={index} style={{ margin: '3px', display: 'flex', height: '1.2rem' }}>
                <span className="no" style={{ display: 'inline-block', width: '4rem' }}>
                  {song.no}
                </span>
                <span
                  className="title"
                  style={{
                    display: 'inline-block',
                    width: '40%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    margin: '0 10px',
                  }}>
                  {song.title}
                </span>
                <span
                  className="singer"
                  style={{ display: 'inline-block', width: '7rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>
                  {song.singer}
                </span>
              </li>
            ))}
      </ul>
    </Index>
  );
}
