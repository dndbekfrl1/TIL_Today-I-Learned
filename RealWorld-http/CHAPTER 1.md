# 1.4 Http의 조상 (1) 전자메일

## client to server
* User-Agent: 클라이언트가 자신의 애플리케이션 이름을 넣는 곳. 

    curl 커맨드를 사용시 curl/7.48.0과 같은 문자열이 들어감

    서버는 이곳의 이름을 보고 응답을 전환하기도 함

    브라우저의 종류나 버전을 구분할 수 있음
    User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36

* Referer: 서버에서 참고하는 추가 정보

    클라이언트가 요청을 보낼 때 보고 있던 페이지의 URL을 보냄

    페이지의 참조원을 서버가 참조하는데 이용

* Authorization: 
  
  특별한 클라이언트에만 통신을 허가할 때 인증 정보를 서버에 전달

## server to client
* Content-Type: 파일 종류 지정

    MIME 식별자 타입은 전자메일을 위해 만들어짐
* Content-Length: 바디 크기
    만약 다음 헤더에서 소개하는 압축이 이루어지는 경우 압축 후의 크기다 들어감

* Content-Encoding: 압축이 이루어진 경우 압축 형식 설명
* Date: 문서 날짜

## 헤더의 전송

```terminal

# 독자헤더 X-Text
curl --http1.0 -H "X-Text: Hello" http://localhost:18888

GET / HTTP/1.0
Host: localhost:18888
Connection: close
Accept: */*
User-Agent: curl/7.78.0
X-Text: Hello

```
curl 커맨드는 기본적으로 User-Agent와 Accept헤더를 전송하는 것을 알 수 있음
## MINE타입
파일의 종류를 구별하는 문자열
전자메일을 위해 만들어짐 

text/plain image/jpeg등의 포맷 식별자는 여기에서 정의됨

현재 웹 서버에서 HTML 보낼 시 서버의 응답 헤더에 다음과 같은 MINE타입 설정
```terminal
Content-Type: text/html; charset-utf-8
```

## Content-Type과 보안
콘텐츠 스니핑: MINE타입이 아닌 내용을 보고 파일 형식 추측

단점: 텍스트로만 표시돼야 하는 text/plain파일이 HTML과 자바스크립트가 적혀있으면 브라우저가 파일을 실행해버릴 가능성이 있음
-> 보안의 구멍이 됨

```terminal
X-Content-Type-Options: nosniff
```
서버가 위 헤더를 전송해 브라우저가 추측하지 않도록 방지 

## HTTP와 전자메일과의 차이
* 헤더+본문 구조는 같음
* HTTP 요청에는 선두에 '메서드+패스'행이 추가
* HTTP 응답에는 선두에 스테이터스 코드가 추가

간단히 말하면 HTTP통신은 고속으로 전자 메일이 왕복하는 것


# 1.5 Http의 조상 (2) 뉴스그룹
NNTP프로토콜으로부터 메서드와 스테이터스 코드 두 가지 기능을 도입함 

# 1.5.1 메서드 
HTTP는 파일 시스템 같은 설계 철학으로 만들어짐 
* GET
* HEAD
* POST
* PUT
* DELETE

HTML 폼에서는 GET과 POST만 지원

# 1.5.2 스테이터스 코드 
* 100 번대 - 처리가 계속 됨 
* 200 번대 - 성공했을 때의 응답 200은 OK로 정상 종료
* 300 번대 - 서버에서 클라이언트로의 명령. 오류는 아니고 정상 처리의 범주. 리다이렉트나 캐시 이용을 지시
* 400 번대 - 클라이언트가 보낸 요청에 오류
* 500 번대 - 서버 내부에서 오류 발생 

# 1.6 리디렉트 
서버가 브라우저에 대해 리디렉트하도록 지시하는 코드 

