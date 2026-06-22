import { portfolioImage } from "@/data/portfolio/utils";
import type { PortfolioCollection } from "@/types/portfolio";

const img = (
  filename: string,
  width: number,
  height: number,
  alt?: string,
) => portfolioImage("events", filename, width, height, alt);

export const eventsCollection: PortfolioCollection = {
  id: "events",
  title: "Events",
  label: "Events",
  description: "The emotions, details, and memories that made the day.",
  prev: "portraits",
  next: "personal",
  blocks: [
    {
      type: "featured",
      image: img(
        "IMG_1697.jpg",
        6000,
        4001,
        "Spotlights cutting through the stage haze",
      ),
    },
    {
      type: "pair",
      images: [
        img(
          "Prom_2026-40.jpg",
          3893,
          5840,
          "Pinning a boutonniere before prom",
        ),
        img(
          "Prom_2026-50.jpg",
          3701,
          5552,
          "Walking together before the evening",
        ),
      ],
    },
    {
      type: "wide",
      image: img(
        "Prom_2026-15.jpg",
        6000,
        4000,
        "A quiet moment before heading out",
      ),
    },
    {
      type: "wide",
      image: img(
        "Prom_2026-24.jpg",
        5187,
        3458,
        "Raising a glass before the night begins",
      ),
    },
    {
      type: "pair",
      images: [
        img(
          "Prom_2026-46.jpg",
          3384,
          5076,
          "Walking down the street together",
        ),
        img(
          "Prom_2026-56.jpg",
          3281,
          4922,
          "Dressed for prom, smiling at the camera",
        ),
      ],
    },
    {
      type: "wide",
      image: img(
        "IMG_1646.jpg",
        6000,
        4001,
        "A performer seen through the crowd",
      ),
    },
    {
      type: "wide",
      image: img(
        "IMG_1602.jpg",
        6000,
        4001,
        "Light and smoke on stage",
      ),
    },
    {
      type: "wide",
      image: img(
        "IMG_1603.jpg",
        6000,
        4001,
        "Crossing the stage in purple light",
      ),
    },
    {
      type: "pair",
      images: [
        img(
          "1.jpg",
          3499,
          5248,
          "Playing guitar under stage lights",
        ),
        img(
          "12-IMG_3298.jpg",
          3854,
          4375,
          "Celebrating behind the bar",
        ),
      ],
    },
    {
      type: "wide",
      image: img(
        "15-IMG_3359.jpg",
        5526,
        3684,
        "Raising cups in a backyard toast",
      ),
    },
    {
      type: "wide",
      image: img(
        "16-IMG_3354.jpg",
        5825,
        3883,
        "Pouring drinks for the table",
      ),
    },
    {
      type: "wide",
      image: img(
        "17-IMG_3362.jpg",
        5202,
        3468,
        "A toast among friends",
      ),
    },
    {
      type: "wide",
      image: img(
        "11-IMG_3280.jpg",
        4993,
        3329,
        "Laughter at an all-white gathering",
      ),
    },
    {
      type: "wide",
      image: img(
        "39-IMG_3021.jpg",
        4509,
        3006,
        "A backyard party in full swing",
      ),
    },
    {
      type: "wide",
      image: img(
        "9-IMG_3260.jpg",
        6000,
        4000,
        "Two friends at the gathering",
      ),
    },
    {
      type: "wide",
      image: img(
        "2.jpg",
        4362,
        3416,
        "Playing bass under the lights",
      ),
    },
    {
      type: "wide",
      image: img(
        "2-IMG_3223.jpg",
        5295,
        3530,
        "A group gathered in white",
      ),
    },
    {
      type: "wide",
      image: img(
        "4-IMG_3229.jpg",
        5619,
        3746,
        "Friends together in white",
      ),
    },
    {
      type: "wide",
      image: img(
        "Prom_2026-61.jpg",
        5895,
        3930,
        "Family portrait on prom night",
      ),
    },
  ],
};
