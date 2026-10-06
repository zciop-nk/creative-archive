function isHangul(text=""){
  return /[가-힣]/.test(text);
}
function visibleLength(text=""){
  return [...text].reduce((n,ch)=>n+(ch===" "?0.45:/[A-Za-z0-9]/.test(ch)?0.62:1),0);
}
function partitions(words, lines){
  const out=[];
  function walk(start, cuts){
    if(cuts.length===lines-1){
      out.push([...cuts, words.length]);
      return;
    }
    for(let i=start+1;i<=words.length-(lines-cuts.length-1);i++){
      walk(i,[...cuts,i]);
    }
  }
  walk(0,[]);
  return out;
}
function buildLines(words,cuts){
  const lines=[]; let start=0;
  for(const cut of cuts){ lines.push(words.slice(start,cut).join(" ")); start=cut; }
  return lines;
}
function lineScore(lines){
  const lens=lines.map(visibleLength);
  const avg=lens.reduce((a,b)=>a+b,0)/lens.length;
  let score=lens.reduce((s,n)=>s+Math.pow(n-avg,2),0);
  if(lines.some(line=>visibleLength(line)<2)) score+=1000;
  if(lines.some(line=>/^[은는이가을를의와과에로도만요다]$/.test(line.trim()))) score+=1000;
  return score;
}
export function layoutTitle(title, options={}){
  const maxLines=options.maxLines||3;
  if(!title) return {lines:[""], scale:1};
  if(!isHangul(title) || !title.includes(" ")){
    return {lines:[title],scale: visibleLength(title)>24?0.82:1};
  }
  const words=title.trim().split(/\s+/);
  let best={lines:[title],score:Infinity};
  for(let lineCount=1; lineCount<=Math.min(maxLines,words.length); lineCount++){
    for(const cuts of partitions(words,lineCount)){
      const lines=buildLines(words,cuts);
      const score=lineScore(lines)+lineCount*0.4;
      if(score<best.score) best={lines,score};
    }
  }
  const longest=Math.max(...best.lines.map(visibleLength));
  const scale=longest>15?0.82:longest>11?0.9:1;
  return {lines:best.lines,scale};
}
export function typographyClass(work){
  return work.typeStyle==="serif" ? "kr-serif" : "kr-sans";
}
