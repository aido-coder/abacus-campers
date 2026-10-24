export interface Project {
  slug: string;
  title: string;
  categories: [string, string];
  description: string;
  work: string[];
  gallery: { src?: string; alt: string; caption: string }[];
}
// Supplied preview images are not evidence of verified completed workshop jobs.
// Descriptions and work items remain examples until genuine job details are supplied.
const previewImages: Record<string, { src: string; alt: string }> = {
  'motorhome-body-habitation-repair': { src: 'motorhome-body-habitation-repair.png', alt: 'Example image of a motorhome with an open side door and exposed bodywork on a workshop lift' },
  'engine-repair-service': { src: 'engine-repair-service.png', alt: 'Example image of a mechanic leaning into a motorhome engine bay beneath an open bonnet' },
  'solar-electrical-upgrade': { src: 'solar-electrical-upgrade.png', alt: 'Example image of solar panels mounted on a motorhome roof beside a roof vent' },
  'habitation-refurbishment': { src: 'habitation-refurbishment.png', alt: 'Example image of a motorhome interior with wooden cupboards, kitchen worktops and seating' },
  'full-respray-restoration': { src: 'full-body-respray.png', alt: 'Example image of a motorhome exterior with windows and bodywork masked for repainting' },
};
export const projects: Project[] = [
  { slug: 'motorhome-body-habitation-repair', title: 'Motorhome Body & Habitation Repair', categories: ['Bodywork', 'Habitation'], description: 'Example only: a proposed layout for documenting body and habitation repairs.', work: ['Example: inspect affected body panels', 'Example: repair interior framing', 'Example: check repaired seals'] },
  { slug: 'engine-repair-service', title: 'Engine Repair & Service', categories: ['Mechanical', 'Servicing'], description: 'Example only: a proposed layout for an engine repair and service story.', work: ['Example: investigate an engine fault', 'Example: replace service items', 'Example: complete operational checks'] },
  { slug: 'solar-electrical-upgrade', title: 'Solar & Electrical Upgrade', categories: ['Electrical', 'Upgrades'], description: 'Example only: a proposed layout for a solar and leisure electrical upgrade.', work: ['Example: assess electrical requirements', 'Example: install solar charging equipment', 'Example: test the upgraded system'] },
  { slug: 'habitation-refurbishment', title: 'Habitation Refurbishment', categories: ['Habitation', 'Interior'], description: 'Example only: a proposed layout for an interior refurbishment.', work: ['Example: assess the interior', 'Example: refurbish fittings and finishes', 'Example: check the completed interior'] },
  { slug: 'full-respray-restoration', title: 'Full Respray Restoration', categories: ['Bodywork', 'Restoration'], description: 'Example only: a proposed layout for a bodywork restoration and respray.', work: ['Example: prepare exterior panels', 'Example: repair bodywork', 'Example: apply and inspect the finish'] },
].map(project => ({ ...project, categories: project.categories as [string, string], gallery: [
  { ...previewImages[project.slug], caption: 'Supplied layout image — not a verified completed Abacus Campers project' },
  { alt: 'Work in progress photograph placeholder', caption: 'Work in progress — placeholder' },
  { alt: 'Completed work photograph placeholder', caption: 'Completed work — placeholder' },
] }));
