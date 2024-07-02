import { useEffect, useState } from 'react';
import { questionList } from './constants/QuestionList';
import NextButton from './components/main/NextButton';
import ResultBox from './components/result/ResultBox';
import ResultPic from './components/result/ResultPic';
import Character from './components/main/Character';
import DownloadButton from './components/Download';
import ReloadButton from './components/Reload';
import HeaderBox from './components/HeaderBox';
import Title from './components/main/Title';
import './css/reset.css';
import './css/App.css';
import './css/Question.css';

function App() {


  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh',`${vh}px`)
  }
  
  // 화면 맞추기
  useEffect(() => {
    setVh();

    function onResize(){
      setVh();
    }

    window.addEventListener('resize',onResize);

  },[])
  
  // 페이지 설정
  const [page,setPage] = useState(0)

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
        <Character />
      </div>
      ): page <= questionList.length ? (
      // 질문&답변 페이지
      <div className='questionLayout'>
        {questionList.map((val,idx)=>
          <div className='questionList' style={{display:page===idx+1?'flex':'none'}} key={idx}>
            {/* 이미지 */}
            <img src={val.i} alt=' ' className='questionImage' />
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
          <ResultPic type={petContents.name} />
          <ResultBox type={petContents.name} />
          <div>더 자세한 결과가 궁금하다면?</div>
            <ReloadButton onClick={()=>window.location.reload()} />
            <DownloadButton onClick={()=>window.location.download()} />
        </div>
      }
    </div>
  );
}

export default App;
