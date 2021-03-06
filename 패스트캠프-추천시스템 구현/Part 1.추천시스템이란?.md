# Ch 01. 추천 시스템이란?

**정보** 추천 

추천 서비스는?
* 사용자가 요구하기 전 작동
* 사용자 원하는 바를 정확이 모름 

- 사용자와 아이템 사이의 관계를 분석하고 연관관계를 찾는다
- 해당 연관 관계 점수화 
- 사용자의 정보와 아이템의 정보를 활용 

사용자 정보? 
- 사용자 고유 정보(나이, 성별, 지역)
- 사용자 로그 분석(행동 패턴 등)

아이템 정보?
- 아이템 고유 정보(가격, 색상 등)

사용자 프로필
- 사용자 또는 사용자 그룹을 분석 가능한 요소로 프로파일링
- 사용자르 ㄹ구분할 수 있는 정보를 활용
  - 사용자 ID: 나이 성별 지역 학력 등 개인 신상정보
  - 쿠키
  - 인터넷 주소
  - 웹 페이지 방문 기록, 클릭 패턴 등 사용자 행동 정보 
- 사용자 정보를 수집하기 위한 방법
  - 직접적인 방법: 설문조사, 평가, 피드백
  - implicit 방법: 웹페이지 머무는 시간, 검색 로그
- 개인별 추천 또는 사용자 그룹별 추천 가능 

아이템 프로필
- 플랫폼마다 정의하는 아이템의 종류가 다름; 영화 플랫폼은 영화, 쇼핑 풀랫폼은 쇼핑 항목이 될 것임
- 아이템 ID, 아이템 고유 정보, 아이템을 좋아하거나 구매한 사용자 정보 
  
추천 점수를 바탕으로 사용자와 아이템을 적절히 추천한다.
- 분석된 사용자와 아이템 정보를 바탕으로 추천점수 계싼
- 사용자 또는 아이템을 추천하기 위해 각각의 아이템 또는 사용자에 대한 정량화된 기준 필요 
- 추천 알고리즘 목적은 점수화 하는 것

<hr/>

데이터의 종류
- Items
  - low: 책, 뉴스
  - high: 금융상품
- Users
  - 행동 패턴으로 모델링 가능
- Transactions
  - 유저와 아이템간의 상호작용
  - 유저가 인터넷에 남긴 로그에서 중요 정보 추출
  - 해시태그, 평점, implicit한 정보 모두 활용 가능

## 추천 시스템이 풀고자 하는 문제
1. 랭킹 문제
   - 특정 유저가 아이템에 대한 평점을 정확히 예측할 필요 없음
   - 특정 아이템을 좋아할만한 Top-K 유저 선정 필요
   - 특정 유저가 좋아할만한 Top-K 아이템 선정 필요
2. 예측 문제
   - 유저-아이템 행렬을 채우는 문제
   - 관측값과 결과값을 계산
     - Ovserved value -> 모델 학습에 사용
     - Missing value -> 모델 평가에 사용
  
