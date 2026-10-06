export const ASSET_LIBRARY = [
  {
    id: "coffee-01",
    intent: "coffee",
    src: "https://images.unsplash.com/photo-1769138886383-e0aabad94205?auto=format&fit=crop&w=1600&q=88",
    alt: "라테 아트 커피와 원두",
    credit: "sofia inductgroup / Unsplash",
    source: "https://unsplash.com/photos/a-cup-of-coffee-with-latte-art-and-scattered-beans-U6pgvTBezEc",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "brief-01",
    intent: "brief",
    src: "https://images.unsplash.com/photo-1643821042859-39fc6e13d2fd?auto=format&fit=crop&w=1600&q=88",
    alt: "책과 커피가 있는 미니멀 정물",
    credit: "Mary Skrynnikova / Unsplash",
    source: "https://unsplash.com/photos/a-table-topped-with-a-cup-of-coffee-and-two-candles-XqinY-iT6vo",
    license: "Unsplash License",
    crop: "center 55%"
  },
  {
    id: "flower-01",
    intent: "wedding",
    src: "https://images.unsplash.com/photo-1597768309312-97773de3239a?auto=format&fit=crop&w=1400&q=88",
    alt: "투명 유리병의 흰 꽃",
    credit: "Jessica Mangano / Unsplash",
    source: "https://unsplash.com/photos/white-flower-in-clear-glass-vase-DyCL-TWejdQ",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "bakery-01",
    intent: "bakery",
    src: "https://images.unsplash.com/photo-1658740877563-d4e3d31c2b4d?auto=format&fit=crop&w=1600&q=88",
    alt: "크루아상 정물 사진",
    credit: "kimia kazemi / Unsplash",
    source: "https://unsplash.com/photos/a-close-up-of-some-food-5bsV1L0o4Fw",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "tea-01",
    intent: "tea",
    src: "https://images.unsplash.com/photo-1600675331148-3a67adae048d?auto=format&fit=crop&w=1600&q=88",
    alt: "나무 테이블 위 흰 찻잔",
    credit: "Kate Laine / Unsplash",
    source: "https://unsplash.com/photos/white-ceramic-cup-on-brown-wooden-table-pT2zu7UsoX4",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "bookstore-01",
    intent: "bookstore",
    src: "https://images.unsplash.com/photo-1774070231417-4bf4d2025878?auto=format&fit=crop&w=1600&q=88",
    alt: "책장이 가득한 서점 내부",
    credit: "Christopher Stites / Unsplash",
    source: "https://unsplash.com/photos/interior-view-of-a-bookstore-with-shelves-full-of-books-lUVOWdpPEW4",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "desk-01",
    intent: "desk",
    src: "https://images.unsplash.com/photo-1675453987594-bd086730bc11?auto=format&fit=crop&w=1600&q=88",
    alt: "카메라와 노트, 펜이 놓인 나무 책상",
    credit: "Kawê Rodrigues / Unsplash",
    source: "https://unsplash.com/photos/a-wooden-desk-with-a-camera-notebook-and-pen-QOv93dCLego",
    license: "Unsplash License",
    crop: "center"
  },
  {
    id: "teaset-01",
    intent: "teaset",
    src: "https://images.unsplash.com/photo-1700320591123-ea7468643551?auto=format&fit=crop&w=1600&q=88",
    alt: "테이블 위 도자기 티포트와 찻잔",
    credit: "Patti Black / Unsplash",
    source: "https://unsplash.com/photos/a-tea-pot-and-two-cups-on-a-table-BFkL0bc7zFk",
    license: "Unsplash License",
    crop: "center"
  }
];

export function findAsset(intent){
  return ASSET_LIBRARY.find(asset => asset.intent === intent) || null;
}
