/* THE PEOPLE BEHIND THE WORK — the personal archive.
 *
 * ⚠ SOURCING: every frame is one of Gireesh's own supplied photographs,
 * in the order he numbered them (Gallery 1 → 14). Nothing is stock,
 * generated, substituted or repeated. He supplied 14 of the 15 he listed —
 * Gallery 15 never arrived; add it to the end of this array when it does.
 *
 * `ar` is each file's TRUE aspect ratio, so a frame is only ever cropped by
 * object-fit, never scaled non-uniformly. The variety in frame widths comes
 * from the photographs themselves rather than from arbitrary sizing.
 *
 * `scale` and `y` are the curation: a little rhythm so the rail reads as a
 * hung archive rather than a filmstrip. Frames 9 and 10 — the two team
 * photographs Gireesh marked as belonging in the middle — sit at the centre
 * of the sequence and carry the largest scale. */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "g01", src: "/images/gallery/g01.jpg", ar: 1.5, scale: 0.8, y: 0 },
  { id: "g02", src: "/images/gallery/g02.jpg", ar: 0.7, scale: 0.9, y: 20 },
  { id: "g03", src: "/images/gallery/g03.jpg", ar: 1.3, scale: 0.7, y: -10 },
  { id: "g04", src: "/images/gallery/g04.jpg", ar: 1.0, scale: 0.85, y: 10 },
  { id: "g05", src: "/images/gallery/g05.jpg", ar: 1.6, scale: 0.75, y: -20 },
  { id: "g06", src: "/images/gallery/g06.jpg", ar: 0.8, scale: 0.9, y: 30 },
  { id: "g07", src: "/images/gallery/g07.jpg", ar: 1.4, scale: 0.8, y: 0 },
  { id: "g08", src: "/images/gallery/g08.jpg", ar: 1.1, scale: 0.85, y: -15 },
  { id: "g09", src: "/images/gallery/g09.jpg", ar: 1.5, scale: 1.0, y: 0, hero: true },
  { id: "g10", src: "/images/gallery/g10.jpg", ar: 1.3, scale: 1.0, y: 10, hero: true },
  { id: "g11", src: "/images/gallery/g11.jpg", ar: 0.9, scale: 0.8, y: -5 },
  { id: "g12", src: "/images/gallery/g12.jpg", ar: 1.4, scale: 0.75, y: 20 },
  { id: "g13", src: "/images/gallery/g13.jpg", ar: 1.2, scale: 0.85, y: -10 },
  { id: "g14", src: "/images/gallery/g14.jpg", ar: 0.8, scale: 0.9, y: 15 }
];
