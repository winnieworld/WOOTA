<h1>WooTa Project.</h1>
Save your favorite song's NUMBER
<br/>
Don't find the number when you visit the karaoke every time.
<br/>
<br/>
<b>you can test this files</b>
<br/>
<code>$ npm run dev</code>
<br/>
<b>you can visit this site here!</b> 
<br/>
https://woota.vercel.app/

<h2>Use Recoil</h2>
리코일을 이용하여 브랜드 정보를 전역에서 관리할 수 있도록 하였습니다.
<br/>
당신이 브랜드를 바꿀때 마다 당신이 원하는 정보로 자동 리렌더링 됩니다.
<br/>

<h2>Use Axios</h2>
Axios 를 사용하여서 api 요청을 통해 인기곡과 새로운 곡들의 정보를 가져옵니다.
<br/>
async await 으로 데이터를 받아오며 try catch 문을 통해서 error관리를 하고 있습니다.
<br/>
또한 데이터를 받아오는 중에는 'Loading' 을 프린트하여 사용자가 로딩중임을 알수 있도록 하였습니다.
<img src="./public/images/testingRecoil.gif" alt="testingRecoil">
<h2>Let's save your songs</h2>
당신의 곡정보는 localstage에 저장됩니다.
<br/>
곡정보에 type 정보가 추가적으로 저장 되며
<br/>
사용자는 이를 통해 연습곡과 애창곡으로 나누어 사용할수 있습니다.
<br/> 
당연히 사용자는 기존곡을 삭제 할 수도 있습니다.
<br/>
<img src="./public/images/testingSaveRemove.gif" alt="testingRecoil">

<h2>Next version</h2>
<ul>
<li>더 강력한 정보보안과 혹시 모를 정보유실의 대비책으로 firebase 로그인을 통한 유저 개개인의 곡정보 관리를 준비하고 있습니다.</li>
<li>자신만의 곡 메들리를 만들수 있도록 곡 저장순서를 자유롭게 변경할 수 있도록 준비하고 있습니다.</li>
</ul>
