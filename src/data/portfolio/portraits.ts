import { portfolioImage } from "@/data/portfolio/utils";
import type { PortfolioCollection } from "@/types/portfolio";

const img = (
  filename: string,
  width: number,
  height: number,
  alt?: string,
) => portfolioImage("portraits", filename, width, height, alt);

export const portraitsCollection: PortfolioCollection = {
  id: "portraits",
  title: "Portraits",
  label: "Portraits",
  description: "Faces, expressions, and moments of presence.",
  prev: "personal",
  next: "events",
  blocks: [
    {
      type: "pair",
      images: [
        img(
          "Prom_2026-38.jpg",
          3601,
          5401,
          "Pinning a boutonniere before prom",
        ),
        img(
          "IMG_2602.jpg",
          4000,
          6000,
          "Golden light on the water",
        ),
      ],
    },
   
    {
      type: "wide",
      image: img(
        "31-IMG_3105.jpg",
        5084,
        3389,
        "An intimate portrait against a dark fence",
      ),
    },
    {
      type: "pair",
      images: [
        img(
          "6-IMG_5344.jpg",
          3801,
          4751,
          "A quiet moment on the stairs",
        ),
        img(
          "7-IMG_5327.jpg",
          3974,
          4968,
          "Headphones and warm light in a stairwell",
        ),
      ],
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
      type: "pair",
      images: [
        img(
          "Prom_2026-55.jpg",
          4000,
          6000,
          "A couple dressed for prom",
        ),
        img(
          "Prom_2026-52.jpg",
          3295,
          4943,
          "Walking together before the evening",
        ),
      ],
    },
    {
      type: "wide",
      image: img(
        "IMG_2202.jpg",
        5828,
        3955,
        "City lights behind a thoughtful portrait",
      ),
    },
    {
      type: "pair",
      images: [
        img(
          "1-IMG_5527.jpg",
          3712,
          4640,
          "Leaning into afternoon light",
        ),
        img(
          "IMG_3602.jpg",
          3186,
          4779,
          "Looking out from a high ledge",
        ),
      ],
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
        "40-IMG_2984.jpg",
        5122,
        3415,
        "Family gathered close",
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
          "3-IMG_5372.jpg",
          4000,
          6000,
          "Sitting by the waterfall",
        ),
      ],
    },
    {
      type: "wide",
      image: img(
        "41-IMG_3037.jpg",
        5133,
        3422,
        "Two people, one frame",
      ),
    },
    {
      type: "wide",
      image: img(
        "6-IMG_3241.jpg",
        5279,
        3519,
        "A couple at an evening gathering",
      ),
    },
    {
      type: "wide",
      image: img(
        "IMG_6346.jpg",
        4493,
        3330,
        "Three friends at the overlook",
      ),
    },
    {
      type: "wide",
      image: img(
        "Prom_2026-60.jpg",
        5872,
        3915,
        "Family portrait on prom night",
      ),
    },
    {
      type: "featured",
      image: img(
        "IMG_1646.jpg",
        6000,
        4001,
        "A performer seen through the crowd",
      ),
    },
  ],
};
