# 🐶내게 맞는 반려동물을 알아보자!
> 이지선다를 골라 나에게 맞는 반려동물을 확인해볼까요?
>
> 어플 코펫에서 파생된 나에게 맞는 반려동물 선택하기


<br />

### DATE
```
🐱 2024.6.27 ~ 2024.7.11
```

<br />

### USE TOOL  🐰
- node.js
- React
- styled-component
- Figma
- photoshop

<br />

### BLUEPRINT 🐹
<img src =https://github.com/HAECHAN66/petrecommend/assets/81950147/fd5d91a7-ef34-4dac-90ba-b5982bbf1aec />

<br />
<br />
<br />
<br />

<details>
<summary>REVIEW📑 </summary>

<br />

#### 배운 것 정리

<br />

- `components` 분리에 대해 좀 더 감을 잡았다. 순서를 정하자면
 1. 전체코드 완성하기
 2. 컴포넌트 분리파일에 정리하기
 3. `App.js` 파일의 스크립트 코드를 `constants` 파일로 분리 가능
 4. 스크립트 코드를 가져올 때는

```js
improt { 이름 } from '파일위치'
```

- `type`의 대해 이해도가 높아졌다.
``` js
<ResultPic type={petContents.name} />

/// 지정된 petContents의 이름을 가져와 components에서 type을 비교해 알맞는 값을 호출하는 식으로 이용할 수 있다.
```

- `reduce`를 사용해 최다선택 된 값을 가져오는 것을 배웠다.
  
```js
  function setPet() {
      setPetContents( // 최고값은 = accmulatror(누산값), 현재값 = currentValue
        petList.reduce((최고값, 현재값) =>{
          if(최고값.count < 현재값.count) 최고값 = 현재값;
          return 최고값;
        }, petList[0])
      );
  }
```

<br />

#### 아쉬운 +개선할 것 정리

<br />

1. css 용어에 대해 아는 것이 부족함을 느꼈다. 특히 애니메이션과 도형 넣기에 어려움을 겪어서 아쉬웠다.
 - 라이브러리를 활용해서 효과를 적극적으로 활용할 기회를 만들어보자.
   
2. `constants` 코드를 짤때 `data`를 기져오고 응용할 때 이해가 더뎠다.
 - javascript deepdive 교재 실습 복습 {.map} 같은
 - API 공부

3. 2-3일 정도 공백을 두고 다시 코드르 봤을 때 내 코드를 이해 못 했다...
 - 다시 읽고 천천히 이해하면서 하는데 내가 짠 코드인데 왜 내가 한 번에 이해 못하고 기억이 나지 않을까.
 - 커밋 시 상세하게 적어 어디까지 했고, 어떤 코드를 만들었는지 구체적으로 하면 도움이 될 듯 하다.

<img src = https://github.com/HAECHAN66/petrecommend/assets/81950147/ade7bd32-91e4-4c6f-8916-e67997dfddf7 />


<br />

</details>
