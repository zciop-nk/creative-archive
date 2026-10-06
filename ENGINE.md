# Creative Archive Poster Engine

이 저장소의 포스터는 작품별 HTML 하드코딩으로 만들지 않습니다.

## Source of truth
- `data/project-specs.js`: 프로젝트별 디자인 규격
- `data/poster-content.js`: 작품 콘텐츠 데이터
- `data/asset-library.js`: 사진 자산과 출처
- `engine/templates.js`: 템플릿 허용 구조
- `engine/typography.js`: 한글 제목 자동 조판
- `engine/assets.js`: 자산 선택
- `engine/qa.js`: static / DOM QA
- `engine/generator.js`: 모델 생성
- `engine/renderer.js`: 템플릿 렌더링
- `styles/poster-system.css`: 공통 포스터 디자인 시스템

## 금지
- 새 작품을 위해 `index.html`에 작품별 조건문 추가 금지
- `renderer.js`에 id === "011" 같은 작품별 분기 금지
- 사진형과 모티프형 메인 비주얼 동시 사용 금지
- 한글 제목 음절 단위 줄바꿈 금지

## 새 작품 추가
1. 대상 프로젝트의 `PROJECT_SPECS`를 읽는다.
2. 허용 템플릿 중 하나를 선택한다.
3. `data/poster-content.js`에 데이터만 추가한다.
4. 사진형이면 `asset-library.js`에서 intent에 맞는 사진을 사용한다.
5. static QA 실패 데이터는 수정 후 등록한다.
6. review board는 동일 엔진으로 자동 렌더링된다.

## 대량 생성 명령 예
`Everyday Editorial 적용. 100개 ㄱㄱ`

의 의미:
- 다음 번호부터 100개 콘텐츠 데이터를 기획
- template을 한 유형에 몰지 않고 분산
- 기존 작품과 핵심 훅/소재/레이아웃 중복 방지
- photo template만 사진 사용
- 한글 제목은 typography engine에 맡김
- static QA 통과 후 poster-content.js에 등록
- index/review HTML은 수정하지 않음

## PPT 확장 시
PPT는 슬라이드 1장이 아니라 Deck 전체가 작품 1개입니다. Poster engine을 그대로 복사하지 말고
Deck Spec + Slide Template + Deck QA 구조로 별도 엔진을 만듭니다.
