import React, { useEffect, useState } from 'react';
import Index from '../index';
import LocalStorage from '../../src/localStorage';


export default function MySongs() {
  const [list,setList] = useState(null);
 
  useEffect(()=>{
     setList(JSON.parse(LocalStorage.getItem('mySongs')))
  },[])

   return <Index>{
    list!==null&&(<ul style={{ height:'15rem', overflowY: 'auto' }}>
    {[...list].map((song, index) => {
        
        
        console.log(song)
        return(
        <li key={index}>
          <span className="title">{song.title}</span>
            <span className="singer"> {song.singer}</span>
            <span className="no">{song.no} </span>
            <span className="brand">{song.brand} </span>
        </li>
      )})}
  </ul>)||(<>
    <div> 저장된 곡이 없습니다. </div> 
  <div>곡을 추가해 주세요</div>
  </>
  )
    }
    
  </Index>;
}

