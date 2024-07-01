import { useEffect, useState } from 'react';
import DownloadButton from './components/Download';
import NextButton from './components/NextButton';
import ReloadButton from './components/Reload';
import HeaderBox from './components/HeaderBox';
import Title from './components/Title';
import './css/reset.css';
import './css/App.css';
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
      a:[{type: '강아지', text:'헉 ㅜㅜ 왜 우울해?'},
        {type:'고양이', text:'...무슨 빵?'}]},
    
    {q:['친구가 먼저 재빠르게 뛰어가 날 재촉한다.'],
      a:[{type: '파충류', text:'조금만 천천히...'},
        {type:'페럿', text:'좋아! 누가 더 빠르나 대결이다!'}]},
        
    {q:['친구가 날 수 있으면 좋겠다'],
      a:[{type: '조류', text:'간지나는데.'},
        {type:'물고기', text:'혹시 친구가... 도라에몽이야?'}]},
        
    {q:['친구가 내 곁을 항상 지켜주면 좋겠다.'],
      a:[{type: '햄스터', text:'함께 있으면 좋지!'},
        {type:'고슴도치', text:'사생활은 중요해.'}]},
        
    {q:['나만 아는 신비한 매력이 있는 친구는 어떨까'],
      a:[{type: '파충류', text:'두근두근 비밀친구 같아.'},
        {type:'어류', text:'4차원은 좀...'}]},
        
    {q:['가는 말이 고우면?'],
      a:[{type: '토끼', text:'오는 말이 곱다.'},
        {type:'페럿', text:'오는 말은 Come!'}]},

    {q:['친구가 평소와 비슷한 모습으로 무엇이 달라졌는지 맞춰보라 한다'],
      a:[{type: '토끼', text:'내가 또 한 섬세함이 있지'},
        {type:'고슴도치', text:'사소한 거라 잘 모르겠어'}]},
        
    {q:['어느날 친구의 키와 덩치가 엄청나게 커져버렸어'],
      a:[{type: '강아지', text:'오히려 좋아.'},
        {type:'햄스터', text:'꿈인가..? 돌아와 친구야!'}]},
    
    {q:['사소한 일로 다투게 되었다. 먼저 연락이 오는 친구에게'],
      a:[{type: '조류', text:'바로 메시지를 읽어본다.'},
        {type:'고양이', text:'시간이 더 필요해 나중에 읽는다.'}]},
        
    {q:['나는 친구와의 우정에 책임을 다할 것이다.'],
      a:[{type: '1', text:'그렇다.'},
        {type:'2', text:'매우 그렇다.'}]}

  ];

  const [petList,setPetList] = useState([
    {name:'강아지',count:0}, {name:'고양이',count:0}, {name:'파충류',count:0}, {name:'토끼',count:0},
    {name:'햄스터',count:0}, {name:'고슴도치',count:0}, {name:'조류',count:0}, {name:'어류',count:0}, {name:'페럿',count:0}
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

  const [petContents,setPetContents] = useState(undefined);

  function setPet() {
      setPetContents( // 최고값은 = accmulatror(누산값), 현재값 = currentValue
        petList.reduce((최고값, 현재값) =>{
          if(최고값.count < 현재값.count) 최고값 = 현재값;
          return 최고값;
        }, petList[0])
      );
  }
  
  return (
    <div className='main-container'>
      {page=== 0? (
      // 첫페이지
      <div className='body-container'>
        <Title />
        <NextButton onClick={()=>setPage(1)} />
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
        <HeaderBox />
          <div className='result'> " {petContents.name} "</div>
          <div className='resultBox'>
          </div>
          <div>더 자세한 결과가 궁금하다면?</div>
            <ReloadButton onClick={()=>window.location.reload()} />
            <DownloadButton onClick={()=>window.location.download()} />
        </div>
      }
    </div>
  );
}

export default App;
