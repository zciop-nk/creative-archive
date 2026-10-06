# Creative Archive

ChatGPT 일반 채팅을 명령창으로 쓰는 개인 디자인 아카이브입니다.

## 메뉴
- 인물 / 애니메이션
- 포스터
- PPT — 슬라이드 낱장이 아니라 **Deck 전체가 작품 1개**
- UI / UX

## 핵심 사용법
1. ChatGPT에서 GitHub 연결을 사용할 수 있게 둡니다.
2. 신규 프로젝트를 만들 때 참고 이미지/자료를 Chat에 첨부합니다.
3. 예: `신규 프로젝트 개설. 포스터 / Korean Editorial. 이 자료로 규격 만들고 테스트 10개 ㄱㄱ`
4. 이후: `Korean Editorial 적용. 100개 ㄱㄱ`
5. ChatGPT는 `index.html`의 `ARCHIVE_DATA`를 읽고 다음 번호부터 추가한 뒤 main에 커밋합니다.
6. GitHub Pages가 활성화되어 있으면 push 직후 사이트가 자동 갱신됩니다.

## 출력
작품 상세에서 PNG/PDF를 생성합니다. PPT는 전체 Deck PDF로 출력합니다.

## 중요
- 사이트에 GitHub 토큰을 넣지 않습니다.
- 쓰기 작업은 ChatGPT의 GitHub 연결을 통해 수행합니다.
- 프로젝트별 디자인 규칙은 `designSystem`에 저장해 대화 기억이 아니라 저장소를 기준으로 재사용합니다.
