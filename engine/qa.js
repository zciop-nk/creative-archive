import { getTemplateSpec } from "./templates.js";

export function staticQA(model){
  const issues=[];
  const {work,asset,titleLayout}=model;
  const template=getTemplateSpec(work.template);

  if(!work.title) issues.push("TITLE_MISSING");
  if(!work.meta || work.meta.length===0) issues.push("META_MISSING");
  if(titleLayout.lines.some(line => [...line.trim()].length===1)) issues.push("ORPHAN_TITLE_LINE");

  const visualCount=(asset?1:0)+(work.motif?1:0);
  if(visualCount>template.maxMainVisuals) issues.push("TOO_MANY_MAIN_VISUALS");
  if(template.visualType==="photo" && !asset) issues.push("PHOTO_REQUIRED");
  if(template.visualType!=="photo" && asset) issues.push("PHOTO_NOT_ALLOWED");

  return {pass:issues.length===0,issues};
}

function boxesOverlap(a,b,pad=4){
  return !(a.right+pad<=b.left || b.right+pad<=a.left || a.bottom+pad<=b.top || b.bottom+pad<=a.top);
}
export function domQA(root){
  const issues=[];
  const poster=root.querySelector(".poster");
  if(!poster) return {pass:false,issues:["POSTER_MISSING"]};

  const title=poster.querySelector("[data-zone='title']");
  if(title && (title.scrollWidth>title.clientWidth+2 || title.scrollHeight>title.clientHeight+2)){
    issues.push("TITLE_OVERFLOW");
  }

  const zones=[...poster.querySelectorAll("[data-zone]")].filter(el=>el.offsetParent!==null);
  for(let i=0;i<zones.length;i++){
    for(let j=i+1;j<zones.length;j++){
      const a=zones[i], b=zones[j];
      if(a.dataset.allowOverlap==="true" || b.dataset.allowOverlap==="true") continue;
      const ra=a.getBoundingClientRect(), rb=b.getBoundingClientRect();
      if(boxesOverlap(ra,rb,1)) {
        const pair=[a.dataset.zone,b.dataset.zone].sort().join("+");
        if(!["copy+title","footer+meta"].includes(pair)) issues.push("OVERLAP:"+pair);
      }
    }
  }
  return {pass:issues.length===0,issues};
}
