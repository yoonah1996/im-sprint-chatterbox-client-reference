# Chatterbox - Client

## 이번 Sprint의 학습 목표

- `클라이언트`, `서버`가 무엇 인지 정의 내릴 수 있다.
- 웹 서비스의 전체적인 아키텍처에서 `클라이언트`와 `서버`가 어떤 역할을 하는지 이해 할 수 있다.
- `클라이언트`가 가지고 있지 않은 리소스를 `서버`에 요청해서 브라우저에 보여줄 수 있다.
- `서버`에서 정의한`API문서`를 읽고, 리소스를 이용 할 수 있다.
- `ajax call`을 이용하여, 페이지를 전환 시키지 않더라도, 브라우저에 보이는 부분만 변환 할 수 있다.
- 테스트 케이스를 바탕으로 그에 상응하는 DOM구조를 작성 할 수 있다.

## Sprint를 시작하기 전 알고있어야 하는 것들

- [ ] DOM
- [ ] 비동기 호출
- [ ] twittler

## Pair programming에서 해볼 것들

- [ ] fetch API를 이용한 GET/POST 사용

## Sprint Office Hour 시간에 발표해볼 과제들

- HTTP methods (GET, POST, PUT, DELETE) 사용 예
- 주요 HTTP Header 알아보기 (특히 Content-type과 그 종류 )
- Postman 사용법

## Sprint 진행 방법

1. 현재 repo를 자신의 Github으로 fork 합니다.
2. fork된 repo를 git clone 명령어로 자신의 local 환경으로 다운로드합니다.
3. Ternimal에 `npm install --only=prod`을 입력해 dependency들을 설치합니다.
4. Leanco에서 Pair Programming 전에 혼자서 진행할 부분을 확인합니다.
5. Pair분과 함께 Programming을 하며 재밌게 coding합니다.

## APIs
GET Messages
GET /messages

POST Messages
POST /messages body { "username": "koo", "roomname": "1", "text": "hello world" }

Clear Messages
POST /messages/clear body { "password": "202050" }

## 제출 방법

1. student.json 파일에 필요한 정보를 입력합니다.
2. REVIEW.md 파일에 이번 Sprint를 마무리하며 review를 작성합니다.
3. 자신의 remote repo로 push 합니다.
4. Upstream repo에서 pull request를 만듭니다.
