export const servicesData = [
  {
    title: "Hinkal",
    description:
      "Blockchain protocol designed for private transactions and enhanced user privacy and security",
    tag: "0xKYC",
    href: "/0xkyc",
    img: "/img/hinkal-log.png",
  },
  // {
  //   title: "Soil",
  //   description: "Debt marketplace",
  //   tag: "Sunscreen",
  //   href: "/uniqueness",
  //   img: "/img/soil-logo2.png",
  // },

  // {
  //   title: "Januus",
  //   description: "Some description about the service",
  //   tag: "0xKYC",
  //   href: "/0xkyc",
  //   img: "/img/cryptum-logo-new.png",
  // },
  {
    title: "Insert Stonks",
    description: "Web3 gaming platform",
    tag: "API",
    href: "insert-stonks",
    img: "/img/IS-logo-nobg.png",
    biggerImg: true,
  },
  {
    title: "Aragon",
    description:
      "DAO creation and management platform with no coding required.",
    tag: "API",
    href: "https://aragon.org/",
    img: "/img/aragon.png",
  },
  // {
  //   title: "0xKYC Discord",
  //   description:
  //     "The most popular online community-building tool, supported by 0xKYC and our Discord bot ⚡️",
  //   tag: "Sunscreen",
  //   href: "/discord-servers",
  //   img: "/img/discord.png",
  // },
  // {
  //   title: "CodeMonk",
  //   description:
  //     "Effortlessly build your engineering team with fast, hassle-free hiring. Ensure compliance by only working with approved individuals.",
  //   tag: ["DeFi"],
  //   href: "https://www.codemonk.ai/",
  //   img: "/img/codemonk.png",
  // },
  // {
  //   title: "Lomads",
  //   description:
  //     "Secure your DAO with top-of-line management tools, including 0xKYC identity verification protocol to help you vouch for your members.",

  //   href: "https://www.lomads.xyz/",
  //   img: "/img/lomads.png",
  // },
  // {
  //   title: "Motherboard",
  //   description:
  //     "An easy to use, all-in-one platform that helps you run your DAO. Easily manage contributors, track your finances, and engage with your community.",

  //   href: "https://www.motherboard.fi",
  //   img: "/img/mthrbrd-logo.png",
  // },
];

const tags = servicesData.map((service) => service.tag);
const uniqueTags = [...new Set(tags)];
export const TagsOptions = ["All", ...uniqueTags];
