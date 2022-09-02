// TODO: brand 추가
export function selectSong(e,setSelected,brand){
   if(e.target.tagName!== 'LI' &&e.target.tagName!=='svg'   &&e.target.tagName !== 'SPAN') return 
   let selected={};
   
   let targetNode =e.target.tagName==='svg'? e.target.parentNode.parentNode:e.target.closest('li');
   [...targetNode.children].forEach(element => {
    selected[`${element.classList.value}`]=element.textContent 
   });
   console.log({...selected,brand})
   setSelected({...selected,brand})
}

//brand 와 번호로 삭제

