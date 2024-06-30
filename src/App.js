import { useEffect, useState } from 'react';
import { ReactComponent as Next } from './images/next.svg';
import { ReactComponent as Reload } from './images/reload.svg';
import './css/App.css';
import './css/Main.css';
import './css/Result.css';
import './css/Question.css';

function App() {

  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }

  // 화면 맞추기
  useEffect(() => {
    setVh()

    function onResize(){
      setVh()
    }

    window.addEventListener('resize',onResize)
  },[])
  
  // 페이지 설정
  const [page,setPage] = useState(0)

  // Q&A
  const questionList =[
    
    {q:[`친구가 나에게 우울해서 빵 샀다는 말을 한다.`],
      a:[{type: 'Dog', text:'헉 ㅜㅜ 왜 우울해?'},
        {type:'Cat', text:'...무슨 빵?'}]},
    
    {q:['친구가 먼저 재빠르게 뛰어가 날 재촉한다.'],
      a:[{type: 'Reptile', text:'조금만 천천히...'},
        {type:'ferret', text:'좋아! 누가 더 빠르나 대결이다!'}]},
        
    {q:['친구가 날 수 있으면 좋겠다'],
      a:[{type: 'Bird', text:'간지나는데.'},
        {type:'Fish', text:'혹시 친구가... 도라에몽이야?'}]},
        
    {q:['친구가 내 곁을 항상 지켜주면 좋겠다.'],
      a:[{type: 'H', text:'함께 있으면 좋지!'},
        {type:'Hedgehog', text:'사생활은 중요해.'}]},
        
    {q:['나만 아는 신비한 매력이 있는 친구는 어떨까'],
      a:[{type: 'Reptile', text:'두근두근 비밀친구 같아.'},
        {type:'Fish', text:'4차원은 좀...'}]},
        
    {q:['가는 말이 고우면?'],
      a:[{type: 'Rabbit', text:'오는 말이 곱다.'},
        {type:'ferret', text:'오는 말은 Come!'}]},

    {q:['친구가 평소와 비슷한 모습으로 무엇이 달라졌는지 맞춰보라 한다'],
      a:[{type: 'Rabbit', text:'내가 또 한 섬세함이 있지'},
        {type:'Hedgehog', text:'사소한 거라 잘 모르겠어'}]},
        
    {q:['어느날 친구의 키와 덩치가 엄청나게 커져버렸어'],
      a:[{type: 'Dog', text:'오히려 좋아.'},
        {type:'H', text:'꿈인가..? 돌아와 친구야!'}]},
    
    {q:['사소한 일로 다투게 되었다. 먼저 연락이 오는 친구에게'],
      a:[{type: 'Bird', text:'바로 메시지를 읽어본다.'},
        {type:'Cat', text:'시간이 더 필요해 나중에 읽는다.'}]},
        
    {q:['나는 친구와의 우정에 책임을 다할 것이다.'],
      a:[{type: '1', text:'그렇다.'},
        {type:'2', text:'매우 그렇다.'}]}

  ];

  const [petList,setPetList] = useState([
    {name:'Dog',count:0}, {name:'Cat',count:0}, {name:'Reptile',count:0}, {name:'Rabbit',count:0},
    {name:'H',count:0}, {name:'Hedgehog',count:0}, {name:'Bird',count:0}, {name:'Fish',count:0}, {name:'ferret',count:0}
  ]);

  // 답변을 클릭했을 때 실행할 함수
  const handleCkAnswer = (type,idx) => {
    let ls = petList
    for(let i = 0; i < ls.length; i++){
      if(ls[i].name===type){
        ls[i].count = ls[i].count + 1
      }
    }

    setPetList(ls)
    setPage(page + 1)

    if(idx+1 === questionList.length){
      setPet()
    }
  }

  const [petContents,setPetContents] = useState([])

  function setPet() {

    let mc = [
      {pet:'강아지', constents:['','','']},
      {pet:'고양이', constents:['독립지향','신중한','영민한']},
      {pet:'파충류', constents:['','','']},
      {pet:'토끼', constents:['','','']},
      {pet:'햄스터', constents:['','','']},
      {pet:'고슴도치', constents:['','','']},
      {pet:'조류', constents:['','','']},
      {pet:'어류', constents:['','','']},
      {pet:'페럿', constents:['','','']},
    ]

    let DogorCat = 
        petList.find(function(data){return data.name ==='Dog'}).count >
        petList.find(function(data){return data.name ==='Cat'}).count? 'Dog':'Cat'
        let Reptileorferret =
        petList.find(function(data){return data.name ==='Reptile'}).count >
        petList.find(function(data){return data.name ==='ferret'}).count? 'Reptile':'ferret'
        let BirdorFish =
        petList.find(function(data){return data.name ==='Bird'}).count >
        petList.find(function(data){return data.name ==='Fish'}).count? 'Bird':'Fish'
        let HorHedgehog =
        petList.find(function(data){return data.name ==='H'}).count >
        petList.find(function(data){return data.name ==='Hedgehog'}).count? 'H':'Hedgehog'
        let ReptileorFish =
        petList.find(function(data){return data.name ==='Reptile'}).count >
        petList.find(function(data){return data.name ==='Fish'}).count? 'Reptile':'Fish'
        let Rabbitorferret =
        petList.find(function(data){return data.name ==='Rabbit'}).count >
        petList.find(function(data){return data.name ==='ferret'}).count? 'Rabbit':'ferret'
        let RabbitorHedgehog =
        petList.find(function(data){return data.name ==='Rabbit'}).count >
        petList.find(function(data){return data.name ==='Hedgehog'}).count? 'Rabbit':'Hedgehog'
        let DogorH =
        petList.find(function(data){return data.name ==='Dog'}).count >
        petList.find(function(data){return data.name ==='H'}).count? 'Dog':'H'
        let Birdorferret =
        petList.find(function(data){return data.name ==='Bird'}).count >
        petList.find(function(data){return data.name ==='Cat'}).count? 'Bird':'Cat'

        let pet = DogorCat + Reptileorferret + BirdorFish + HorHedgehog + ReptileorFish + Rabbitorferret
        + RabbitorHedgehog + DogorH + Birdorferret

        setPetContents(mc.filter(val=>val.pet === pet)[0])
  }

  return (
    <div className='main-container'>
      {page=== 0? (
      // 첫페이지
      <div className='body-container'>
        <div className="Title">
            나와 <br />
            잘 맞는 <br />
            반려동물  <br />
            찾기
        </div>
      <button onClick={()=>setPage(1)} className="NextButton" ><Next /></button>
      </div>
      ): page <= questionList.length ? (
      // 질문&답변 페이지
      <div className='questionLayout'>
        {questionList.map((val,idx)=>
          <div className='questionList' style={{display:page===idx+1?'flex':'none'}} key={idx}>
            {console.log(petList)}
            {/* 질문*/}
            <div className='questionItem'>
              {val.q.map((qval,qidx)=>
                <div key={qidx} className='quest'>
                  <div>{qval}</div>
                </div>)}
              <div>
            </div>
            {/* 답변*/}
            <div className='anserItem'>
              {val.a.map((aval,aidx)=> 
                <div key={aidx} className="Button" onClick={()=>handleCkAnswer(aval.type,idx)}>
                  {aval.text}
                </div>
              )}
              {/* 쪽번호*/}
              <div className='page'>
                <div>{`${page} / ${questionList.length}`}</div>
              </div>
            </div>
            </div>
          </div>
        )}
      </div>
      ) :
      // 결과페이지
      <div className='resultLayout'>
          <div className='headerBox'>
            당신에게 어울리는 반려동물은 ...
          </div>
          <div className='result'> " {petContents.pet} "</div>
          <div className='resultBox'>

          </div>
          <div>더 자세한 결과가 궁금하다면?</div>
            <div onClick={()=>window.location.reload()}className='returnButton' >
              <div className='reloadtext'><Reload /> 다시하기</div>
            </div>
            <div onClick={()=>window.location.download()}className='returnButton' >
              코펫 다운로드
            </div>
    </div>
      }
    </div>
  );
}

export default App;
