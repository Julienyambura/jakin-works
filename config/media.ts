export const media = {
  hero: "/MAINPAGE.jpg",
  about: "/WORKSHOP.jpg",
  capabilities: {
    security: "/GATES.jpeg",
    doors: "/MILD_STEEL_DOOR.jpeg",
    windows: "/WINDOWS.jpeg",
    outdoorLiving: "/PERGOL_A.jpeg",
    interiorFeatures: "/INTERIOR RAILINGS.jpeg",
    structural: "/structural.jpg",
    cnc: "/CNC2.jpg",
    finishing: "/finishes.jpg",
    maintenance: "/repairs.jpg",
  },
  projects: {
    gates: "/SLIDING_GATES.jpeg",
    doors: "/MILD_STEEL_DOOR.jpeg",
    staircases: "/STAIRS.jpeg",
    screens: "/CNC_FACADES.jpeg",
    outdoorStructures: "/PERGOLA10.jpg",
    structural: "/STRUCTURAL55.jpg",
  },
  shop: {
    gates: "/GATES.jpeg",
    doors: "/MILD_STEEL_DOOR.jpeg",
    windows: "/WINDOWS_1.jpeg",
    hardware: "/RAILINGS.jpg",
    customPieces: "/WROUGHT_IRON_ARTS.jpg",
    finishing: "/finishes.jpg",
  },
  journal: "/CNC_FACADES.jpeg",
} as const;

export function mediaForSlug(slug: string) {
  const normalizedSlug = slug.toLowerCase();

  if (normalizedSlug.includes("gate")) return media.capabilities.security;
  if (normalizedSlug.includes("door")) return media.capabilities.doors;
  if (normalizedSlug.includes("window")) return media.capabilities.windows;
  if (normalizedSlug.includes("outdoor") || normalizedSlug.includes("pergola")) {
    return media.capabilities.outdoorLiving;
  }
  if (normalizedSlug.includes("interior") || normalizedSlug.includes("railing")) {
    return media.capabilities.interiorFeatures;
  }
  if (normalizedSlug.includes("structural")) return media.capabilities.structural;
  if (normalizedSlug.includes("cnc") || normalizedSlug.includes("screen")) {
    return media.capabilities.cnc;
  }
  if (normalizedSlug.includes("finish")) return media.capabilities.finishing;
  if (normalizedSlug.includes("repair") || normalizedSlug.includes("maintenance")) {
    return media.capabilities.maintenance;
  }
  if (normalizedSlug.includes("stair")) return media.projects.staircases;

  return media.about;
}
