import { portfolioImage } from "@/data/portfolio/utils";
import type { PortfolioCollection } from "@/types/portfolio";

const img = (
  filename: string,
  width: number,
  height: number,
  alt?: string,
) => portfolioImage("personal", filename, width, height, alt);

export const personalCollection: PortfolioCollection = {
  id: "personal",
  title: "Personal Work",
  label: "Personal Work",
  description:
    "The world as I see it when nobody is asking me to photograph it.",
  prev: "events",
  next: "portraits",
  blocks: [

    {
      type: "wide",
      image: img(
        "IMG_3718.jpg",
        6000,
        4000,
        "A quiet night by the water",
      ),
    },

    {
      type: "wide",
      image: img(
        "IMG_2473 (1).jpg",
        6000,
        4000,
        "A crowded beach at golden hour",
      ),
    },
    {
      type: "featured",
      image: img(
        "IMG_2420.jpg",
        5039,
        3293,
        "Silhouettes against a hazy sunset sky",
      ),
    },


    {
      type: "pair",
      images: [
        img("IMG_2113.jpg", 3759, 5593, "Evening light on a city street"),
        img("IMG_4056.jpg", 3729, 5593, "A train at sunset"),
      ],
    },
    {
      type: "wide",
      image: img("IMG_6274.jpg", 5349, 3565, "A red boat at the dock"),
    },
    {
      type: "sequence",
      images: [
        img("IMG_4610.jpg", 2727, 3636, "Snow falling through lamplight"),
        img("IMG_5478.jpg", 2621, 3495, "A streetcar at dusk"),
        img("IMG_8181.jpg", 2835, 3780, "The CN Tower at night"),
      ],
    },
    {
      type: "wide",
      image: img("IMG_5991.jpg", 5312, 2987, "A Blue Jay perched on a branch"),
    },
  ],
};
