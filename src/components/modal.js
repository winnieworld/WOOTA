import React from "react"
import { StyledModal, ModalButton} from "./styledItems"
import { useRecoilState, useRecoilValue } from "recoil"
import { selectedState,  brandState } from "../../state/index"
import  LocalStorage from "../localStorage"
import DeleteButton from "./DeleteButton"
export default function Modal({setModal}){

    // TODO: 중복으로 추가했을때 처리
    const [selected,setSelected] = useRecoilState(selectedState);
    const brand=useRecoilValue(brandState)
 
   
     
     const addSong = (type)=>{
        const newSong ={...selected, type,brand}
        setSelected(newSong)
         const mySongs = LocalStorage.getItem('mySongs');
         if (!mySongs) LocalStorage.setItem('mySongs', JSON.stringify([newSong]));
         else {
        const newList =[...JSON.parse(mySongs),newSong]
        LocalStorage.setItem('mySongs', JSON.stringify(newList));}
        setModal(false)
     }
     
    return (
    <StyledModal>
        <div style={{fontSize:'1rem', marginTop:'1rem', whiteSpace: 'nowrap'}}>어디에 저장할까요?</div>
        <div className="Category"  style={{display: 'flex',marginTop:'1.5rem'}}>
            <ModalButton as="button" style={{fontSize:'0.8rem'}} onClick={()=>{addSong("favorite"); }}>애창곡</ModalButton>
            <ModalButton as="button" style={{fontSize:'0.8rem'}} onClick={()=>{addSong("practice"); }}>연습곡</ModalButton>
        </div>
        <button onClick={()=>{setModal(false)}} style={{position: 'absolute', right: '0.3rem', top: '0.3rem', backgroundColor:'transparent' , borderColor:'transparent'}}><DeleteButton /></button>
    </StyledModal>)
}