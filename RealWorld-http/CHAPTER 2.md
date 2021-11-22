브라우저가 기본 요소들을 어떻게 응용하고 기본 기능을 실현하는지 알아보자!

# 2.1 단순한 폼 전송(x-222-form-urlencode)
HTTP/1.0에서 바디 수신은 특별히 어렵지 않았다.

클라이언트가 지정한 콘텐츠가 그대로 저장될 뿐이다.

기본적으로 HTTP가 응답할 때마다 한 파일밖에 반환하지 못하기 때문

즉 응답의 본체를 지정한 바이트 수만큼 읽으면 됨

HTTP/1.1에는 범위 엑세스라는 특수한 요청 방법이 생김.


```html
<form method="POST">
    <input name="title">
    <input name="author">
    <input type="submit">
</form>
```
일반적인 웹에서 볼 수 있는 폼

```terminal 
curl --http1.0 -d title="The Art of Community" -d author="Jono Bacon" http://localhost:18888
```
이렇게 curl를 사용하면 폼과 같은 형식으로 전송할 수 있음

curl -d 옵션을 사용해 폼으로 전송할 데이터를 설정할 수 있음

curl -d 옵션은 브라우저와 똑같은 헤더로 Content-Type:application/x-www-form-urlencoded를 설정함

바디는 다음과 같은 형식이 됨
키와 값이 '='로 연결되고 각 항목이 &으로 연결된 문자열이 된다!
```terminal
title=The Art of Community&author=John Bacon
```
curl로 생성한 바디는 -d 옵션에서 보낼 문자열을 그대로 연결한다
그래서 구분 문자인 &와 =이 있어도 그대로 연결해서 읽는 쪽에서 바르게 원래 데이터 세트로 복원할 수 없다!
예를들어 ⌜Head First PHP & MySQL⌟ 이라는 서적명은 어디서 구분해야 할지 알기 어려워진다.

