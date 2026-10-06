export const PROJECT_SPECS = {
  "poster-001": {
    id: "poster-001",
    category: "poster",
    name: "Everyday Editorial",
    description: "한글 편집 포스터·초대장·정보 그래픽을 일상 소재로 재구성하는 프로젝트",
    canvas: { width: 1080, height: 1350, ratio: "4:5" },
    palette: {
      paper: ["#F2E5D2","#E9E4F1","#EEF0E4","#F6F1E8","#EFE5E2","#F7F3ED","#E7D45E"],
      accent: ["#3650BF","#284D3F","#B44D3F","#6F4D92","#F0B949"]
    },
    typography: {
      sans: "Pretendard, Apple SD Gothic Neo, Malgun Gothic, sans-serif",
      serif: "Noto Serif KR, Nanum Myeongjo, Batang, serif",
      headlineTracking: "-0.03em ~ -0.06em",
      headlineLineHeight: "1.02 ~ 1.12",
      bodyLineHeight: "1.45 ~ 1.65",
      maxHeadlineLines: 3,
      rules: [
        "한글 제목은 의미 단위로 줄바꿈한다.",
        "한 글자만 다음 줄로 떨어지는 고아 글자를 금지한다.",
        "현대적·정보형은 고딕, 초대장·감성 편집은 명조를 우선한다."
      ]
    },
    imagePolicy: {
      photoTemplates: ["photo-editorial","receipt-layout"],
      noPhotoTemplates: ["information-grid","invitation-frame","motif-poster","newsletter-typography"],
      maxMainVisuals: 1,
      rule: "사진은 주제와 직접 연결되는 오브제만 사용하고 장식용 이미지는 금지한다."
    },
    allowedTemplates: [
      "photo-editorial",
      "information-grid",
      "invitation-frame",
      "motif-poster",
      "receipt-layout",
      "newsletter-typography"
    ],
    banned: [
      "title/image overlap",
      "main visual more than one",
      "random decorative image",
      "single orphan syllable",
      "heavy drop shadow",
      "generic SaaS cards"
    ],
    projectPrompt: "한글 중심 1080x1350 편집 포스터. 큰 제목, 작은 메타데이터, 넓은 여백, 실제 인쇄물 같은 정보 밀도를 유지한다. 사진형은 사진 하나만 메인 비주얼로 사용하고, 그래픽형은 이미지 없이 구조적 SVG/타이포를 사용한다. 제목은 의미 단위로 줄바꿈하며 요소끼리 safe area를 침범하지 않는다.",
    referenceSources: [
      { title: "Opening the Storerooms — DOTS / National Gugak Center", url: "https://www.behance.net/gallery/134490105/Opening-the-Storerooms-Initial-Showing-of-Donations" },
      { title: "Ancient Futures, Whang Chongnye — Chuigraf", url: "https://www.behance.net/gallery/48581689/Ancient-Futures-Whang-Chongnye" },
      { title: "Monami: Concept store invitation", url: "https://www.behance.net/gallery/63155499/Monami-Concept-store-invitation" },
      { title: "Pinterest — 한글 포스터 디자인", url: "https://in.pinterest.com/rayouo47/%ED%95%9C%EA%B8%80-%ED%8F%AC%EC%8A%A4%ED%84%B0-%EB%94%94%EC%9E%90%EC%9D%B8/" },
      { title: "Pinterest — Typography_Korean_한글", url: "https://www.pinterest.com/design_x/typography_korean_%ED%95%9C%EA%B8%80/" }
    ]
  }
};
