// TODO: brand 추가
export function selectSong(e,setSelected){
  
   if(e.target.tagName!== 'LI' && e.target.tagName !== 'SPAN') return 
   let selected={};
   
   [...e.target.closest('li').children].forEach(element => {
    selected[`${element.classList.value}`]=element.textContent 
   });

  
   setSelected(selected)
}