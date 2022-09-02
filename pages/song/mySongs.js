import React, { useEffect, useState } from 'react';
import Index from '../index';
import LocalStorage from '../../src/localStorage';
import { CategoryButton, StyledModal, ModalButton }from "../../src/components/styledItems"
import DeleteButton from "../../src/components/DeleteButton"
import {useRecoilValue, useRecoilState} from 'recoil'
import { brandState, selectedState } from '../../state';
import {selectSong} from '../../src/selectSong'



export default function MySongs() {
  const [list,setList] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false)
  const brandName = useRecoilValue(brandState)
  const [selected, setSelected] = useRecoilState(selectedState)
  const [category, setCategory] = useState("favorite")
  
  useEffect(()=>{
     setList(JSON.parse(LocalStorage.getItem('mySongs')))
  },[])
  const deleteSong = ()=>{
    const newList = list.filter(({brand,no})=>brand!==selected.brand||no!==selected.no)
    setList(newList)
    LocalStorage.setItem('mySongs', JSON.stringify(newList));
    
  }


   return <Index>
    
      {deleteModal&&<StyledModal  style={{fontSize:'1rem'}}>정말로 삭제하시겠습니까? <div className="Category"  style={{display: 'flex',marginTop:'1.5rem'}}>
            <ModalButton as="button" style={{fontSize:'0.8rem'}} onClick={()=>{ deleteSong(); setDeleteModal(false)}}>예</ModalButton>
            <ModalButton as="button" style={{fontSize:'0.8rem'}} onClick={()=>{setDeleteModal(false) }}>아니요</ModalButton>
        </div></StyledModal>}

    {
    list!==null&&(
    <>
    <CategoryButton  onClick={() => {
          category !== 'favorite' ? setCategory('favorite') : setCategory('');
        }}>애창곡</CategoryButton>
    <CategoryButton  onClick={() => {
          category !== 'practice' ? setCategory('practice') : setCategory('');
        }}>연습곡</CategoryButton>
    
    <ul style={{ height:'20rem', overflowY: 'auto', padding:"0", listStyle: "none" }} >
    {[...list].filter(({brand, type})=>brand===brandName&&category===type).map((song, index) => {
      
        return(
          <>
              <li key={index} style={{display: 'flex', height:'1.2rem'}}>
                <span className="no" style={{display:'inline-block' ,width:'4rem'}}>{song.no}</span>
                <span className="title" style={{display:'inline-block' ,width:'40%', whiteSpace:"nowrap",overflow:'hidden', margin:'0 10px'}}>{song.title}</span>
                <span className="singer" style={{display:'inline-block', width:'7rem', whiteSpace:"nowrap",overflow:'hidden'}}>{song.singer}</span>
                <button style={{backgroundColor:'transparent', borderColor:'transparent',padding:'0 0 0 1rem', boxSizing:'border-box', display:'inline'}} onClick={(e)=>{selectSong(e, setSelected, brandName); setDeleteModal(true)}} >
                  <DeleteButton></DeleteButton>  
                </button>
              </li>
          </>
      )})}
  </ul>
    </>
  )||(
  <>
    <div> 저장된 곡이 없습니다.</div> 
    <div>곡을 추가해 주세요</div>
  </>
  )
    }
    
  </Index>;
}

