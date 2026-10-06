import { layoutTitle, typographyClass } from "./typography.js";
import { selectAsset } from "./assets.js";
import { staticQA } from "./qa.js";

export function buildPosterModel(work, projectSpec){
  const titleLayout=layoutTitle(work.title,{maxLines:projectSpec.typography.maxHeadlineLines});
  const asset=selectAsset(work,projectSpec);
  const model={
    work,
    projectSpec,
    titleLayout,
    titleClass:typographyClass(work),
    asset
  };
  model.qa=staticQA(model);
  return model;
}
