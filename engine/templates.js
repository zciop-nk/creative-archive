export const TEMPLATE_SPECS = {
  "photo-editorial": {
    visualType: "photo",
    zones: ["eyebrow","title","copy","visual","meta","footer"],
    maxMainVisuals: 1
  },
  "information-grid": {
    visualType: "none",
    zones: ["eyebrow","title","copy","meta","footer"],
    maxMainVisuals: 0
  },
  "invitation-frame": {
    visualType: "motif",
    zones: ["eyebrow","title","meta","motif","footer"],
    maxMainVisuals: 1
  },
  "motif-poster": {
    visualType: "motif",
    zones: ["eyebrow","title","copy","motif","meta","footer"],
    maxMainVisuals: 1
  },
  "receipt-layout": {
    visualType: "photo",
    zones: ["eyebrow","title","copy","visual","meta","footer"],
    maxMainVisuals: 1
  },
  "newsletter-typography": {
    visualType: "structure",
    zones: ["eyebrow","title","subtitle","structure","footer"],
    maxMainVisuals: 1
  }
};

export function getTemplateSpec(name){
  return TEMPLATE_SPECS[name] || TEMPLATE_SPECS["information-grid"];
}
