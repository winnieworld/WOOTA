import React from "react"
import styled from "styled-components"
import {Button}from "./styledItems"
import { useRecoilState } from "recoil"
import { SelectedState } from "../../state/index"
import  LocalStorage from "../localStorage"

export default function Modal({setModal}){

    // TODO: 중복으로 추가했을때 처리
const [selected,setSelected] = useRecoilState(SelectedState);
 
console.log(selected)
    const StyledModal = styled.div`
    z-index: 1000;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate3d(-50%, -50%, 0);  
    text-align: center;
    width:30%;
    padding: 2rem;
    background: white;
    `
    const StyledButton = styled(Button)`
    background-color: transparent;
    border-color: transparent;
    &:hover {
        border-bottom: 1px solid gray;
      }
    `
    const Cancel = ()=>(
        <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{display: 'block',
        width: 24,
        height: 24}}>
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"  />
        </svg>
     )
     
     const setStorage = (type)=>{
        const newSong ={...selected, type}
        setSelected(newSong)
         const mySongs = LocalStorage.getItem('mySongs');
         if (!mySongs) LocalStorage.setItem('mySongs', JSON.stringify([newSong]));
         else {
        const newList =[...JSON.parse(mySongs),newSong]
        LocalStorage.setItem('mySongs', JSON.stringify(newList));}
        setModal(false)
     }
    return <StyledModal>
        <div>
        어디에 저장할까요?
        </div>
        <div className="Category"  style={{display: 'flex',marginTop:'1.5rem'}}>
        <StyledButton as="button" onClick={()=>{setStorage("practice"); }}>연습곡</StyledButton>
        <StyledButton as="button" onClick={()=>{setStorage("favorite"); }}>애창곡</StyledButton>
        </div>
        <button onClick={()=>{setModal(false)}} style={{position: 'absolute', right: '1rem', top: '1rem', backgroundColor:'transparent' , borderColor:'transparent'}}><Cancel /></button>
        </StyledModal>
}