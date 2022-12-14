import React, { useEffect, useState } from 'react';
import Index from '../index';
import axios from 'axios';
import styled from 'styled-components';
import { brandState, modalState, selectedState } from '../../state/index';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectSong } from '../../src/selectSong';
// TODO: 검색결과 페이지로 쪼개기

const ModeButton = styled.button`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: left;
  background: ${props => props.selected && 'rgba(255,255,255,0.5)'};

  &:hover {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
  &:focus {
    border-bottom: 1px solid white;
    transition: 0.5s;
  }
`;
//
export default function Search() {
  const brandName = useRecoilValue(brandState);
  const [isLoading, setLoading] = useState(null);
  const [songs, setSongs] = useState({ mode: 'title', data: [], word: '' });
  const [modal, setModal] = useRecoilState(modalState);
  const [selected, setSelected] = useRecoilState(selectedState);

  useEffect(() => {
    if (!songs.word) return;
    getSongs(songs.mode, songs.word);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandName]);
  const getSongs = async (mode, word = songs.word) => {
    try {
      if (mode === undefined) return;
      setLoading(true);

      const { data } =
        mode === 'title'
          ? await axios.get(`https://api.manana.kr/karaoke/song/${word}/${brandName === 'TJ' ? 'tj' : 'kumyoung'}.json`)
          : await axios.get(
              `https://api.manana.kr/karaoke/singer/${word}/${brandName === 'TJ' ? 'tj' : 'kumyoung'}.json`
            );
      setSongs({ mode, data, word });
      setLoading(false);
    } catch (e) {
      // error
      console.error(e);
    }
  };
  return (
    <Index>
      <ModeButton
        selected={songs.mode === 'title'}
        onClick={() => {
          getSongs(songs.mode !== 'title' ? 'title' : 'title', songs.word);
        }}>
        제목 검색
      </ModeButton>
      <ModeButton
        selected={songs.mode === 'singer'}
        onClick={() => {
          getSongs(songs.mode !== 'singer' ? 'singer' : 'singer', songs.word);
        }}>
        가수 검색
      </ModeButton>
      <form
        style={{ marginBottom: '10px' }}
        onSubmit={e => {
          e.preventDefault();
          if (!e.target.firstElementChild.value.trim()) return;

          getSongs(songs.mode, e.target.firstElementChild.value);
        }}>
        <input type="text"></input>
        <button type="submit"> 확인</button>
      </form>
      {!songs.word ? (
        <div>검색어를 입력해주세요</div>
      ) : isLoading ? (
        'Loading'
      ) : !songs.data.length ? (
        <div>
          검색 결과가 없습니다. <br /> 검색어를 확인해주세요
        </div>
      ) : (
        <ul
          style={{ height: '20rem', overflowY: 'auto', listStyle: 'none', paddingLeft: '0' }}
          onClick={e => {
            setModal(!modal);
            selectSong(e, setSelected);
          }}>
          {songs.mode &&
            songs.data
              // .filter((v, i) => i < 10)
              .map((song, index) => (
                <li key={index} style={{ display: 'flex', margin: '3px', height: '1.2rem' }}>
                  <span className="no" style={{ display: 'inline-block', width: '5rem' }}>
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
      )}
    </Index>
  );
}
