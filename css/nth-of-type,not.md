## NTH OF TYPE 
[타입](태그이름) 과 동일한 타입인 형제 요소 중 e 가 n번째 요소라면 선택
태그를 기준으로 찾는 개념 

## 부정선택자
S가아닌 e
```html
<ul class="fruits">
  <li>딸기</>
  <li class="apple">사과</>
  <li>망고</>
  <li>오렌지</>
</ul>
```
```css
.fruits li:not(.apple){
  color: red;
}
```
--> 사과 이외의 요소들만 빨강색
