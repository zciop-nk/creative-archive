import { buildPosterModel } from "./generator.js";

const esc=s=>(s??"").toString().replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));

function toneClass(tone){ return "tone-"+(tone||"cream"); }
function titleMarkup(model){
  return model.titleLayout.lines.map(esc).join("<br>");
}
function metaMarkup(meta=[]){
  return meta.map(([k,v])=>`<div class="meta-key">${esc(k)}</div><div class="meta-value">${esc(v)}</div>`).join("");
}
function imageMarkup(asset, shape="rect"){
  if(!asset) return "";
  return `<div class="poster-image ${shape==="circle"?"is-circle":""}" data-main-visual data-zone="visual">
    <img src="${asset.src}" alt="${esc(asset.alt)}" crossorigin="anonymous" style="object-position:${esc(asset.crop||"center")}">
  </div>`;
}
function motifMarkup(name){
  if(name==="arrow") return `<svg viewBox="0 0 120 80" aria-hidden="true"><path d="M8 40H78" stroke="currentColor" stroke-width="10"/><path d="M68 14L104 40 68 66" fill="none" stroke="currentColor" stroke-width="10" stroke-linejoin="miter"/></svg>`;
  if(name==="flower") return `<svg viewBox="0 0 240 240" aria-hidden="true"><g transform="translate(120 120)"><circle cy="-52" r="38"/><circle cx="44" cy="-27" r="38"/><circle cx="44" cy="27" r="38"/><circle cy="52" r="38"/><circle cx="-44" cy="27" r="38"/><circle cx="-44" cy="-27" r="38"/><circle r="30" class="motif-accent"/></g></svg>`;
  if(name==="wave") return `<svg viewBox="0 0 260 130" aria-hidden="true"><path d="M15 55C50 30 78 33 110 58s72 24 135-2"/><path d="M15 73C50 48 78 51 110 76s72 24 135-2"/><path d="M15 91C50 66 78 69 110 94s72 24 135-2"/><circle cx="214" cy="24" r="11" class="motif-accent"/></svg>`;
  if(name==="window") return `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="12" y="12" width="76" height="76"/><line x1="50" y1="12" x2="50" y2="88"/><line x1="12" y1="50" x2="88" y2="50"/></svg>`;
  return `<svg viewBox="0 0 160 160" aria-hidden="true"><rect x="20" y="20" width="80" height="80"/><line x1="60" y1="20" x2="60" y2="100"/><line x1="20" y1="60" x2="100" y2="60"/><rect x="84" y="42" width="52" height="52" class="motif-accent"/></svg>`;
}
function footer(work){
  return `<footer class="poster-footer" data-zone="footer"><span>${esc(work.subtitle||"")}</span><span>${esc(work.id)}</span></footer>`;
}

function photoEditorial(model){
  const {work,asset}=model;
  const circle=work.intent==="wedding";
  return `
    <div class="poster-canvas template-photo-editorial ${toneClass(work.tone)} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <section class="poster-heading" data-zone="title">
        <h2>${titleMarkup(model)}</h2>
        <p>${esc(work.description||"")}</p>
      </section>
      ${imageMarkup(asset,circle?"circle":"rect")}
      <div class="poster-meta" data-zone="meta">${metaMarkup(work.meta)}</div>
      ${footer(work)}
    </div>`;
}
function informationGrid(model){
  const {work}=model;
  return `
    <div class="poster-canvas template-information-grid ${toneClass(work.tone)} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <section class="poster-heading" data-zone="title"><h2>${titleMarkup(model)}</h2><p>${esc(work.description||"")}</p></section>
      <div class="info-grid" data-zone="meta">${metaMarkup(work.meta)}</div>
      <div class="info-bar" aria-hidden="true"></div>
      ${footer(work)}
    </div>`;
}
function invitationFrame(model){
  const {work}=model;
  return `
    <div class="poster-canvas template-invitation ${toneClass(work.tone)} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <div class="invite-frame">
        <section class="poster-heading" data-zone="title"><h2>${titleMarkup(model)}</h2><p>${esc(work.description||"")}</p></section>
        <div class="poster-meta" data-zone="meta">${metaMarkup(work.meta)}</div>
        <div class="poster-motif motif-window" data-main-visual data-zone="motif">${motifMarkup(work.motif||"window")}</div>
      </div>
      ${footer(work)}
    </div>`;
}
function motifPoster(model){
  const {work}=model;
  return `
    <div class="poster-canvas template-motif ${toneClass(work.tone)} motif-${esc(work.motif||"grid")} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <section class="poster-heading" data-zone="title"><h2>${titleMarkup(model)}</h2><p>${esc(work.description||"")}</p></section>
      <div class="poster-motif" data-main-visual data-zone="motif">${motifMarkup(work.motif)}</div>
      <div class="poster-meta" data-zone="meta">${metaMarkup(work.meta)}</div>
      ${footer(work)}
    </div>`;
}
function receiptLayout(model){
  const {work,asset}=model;
  return `
    <div class="poster-canvas template-receipt ${toneClass(work.tone)} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <section class="poster-heading" data-zone="title"><h2>${titleMarkup(model)}</h2><p>${esc(work.description||"")}</p></section>
      ${imageMarkup(asset)}
      <div class="receipt-grid" data-zone="meta">${metaMarkup(work.meta)}</div>
      ${footer(work)}
    </div>`;
}
function newsletterTypography(model){
  const {work}=model;
  const labels=["01 THINK","02 SORT","03 EDIT","04 MAKE"];
  return `
    <div class="poster-canvas template-newsletter ${toneClass(work.tone)} ${model.titleClass}" style="--title-scale:${model.titleLayout.scale}">
      <div class="poster-eyebrow" data-zone="eyebrow">OUR ARCHIVE · ${esc(work.id)}</div>
      <section class="poster-heading" data-zone="title"><h2>${titleMarkup(model)}</h2><p class="korean-sub">${esc(work.koreanSubtitle||"")}</p></section>
      <div class="module-map" data-main-visual data-zone="structure">${labels.map(x=>`<span>${x}</span>`).join("")}</div>
      ${footer(work)}
    </div>`;
}

const RENDERERS={
  "photo-editorial":photoEditorial,
  "information-grid":informationGrid,
  "invitation-frame":invitationFrame,
  "motif-poster":motifPoster,
  "receipt-layout":receiptLayout,
  "newsletter-typography":newsletterTypography
};

export function renderPoster(work,projectSpec){
  const model=buildPosterModel(work,projectSpec);
  const render=RENDERERS[work.template]||informationGrid;
  return {model,html:render(model)};
}
