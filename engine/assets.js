import { findAsset } from "../data/asset-library.js";
import { getTemplateSpec } from "./templates.js";

export function selectAsset(work, projectSpec){
  const template=getTemplateSpec(work.template);
  if(template.visualType!=="photo") return null;
  const asset=findAsset(work.intent);
  return asset || null;
}

export function assetIsAllowed(work, asset){
  const template=getTemplateSpec(work.template);
  if(template.visualType==="photo") return Boolean(asset);
  return asset===null;
}
