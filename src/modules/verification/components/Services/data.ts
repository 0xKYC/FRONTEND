export const servicesData = [
  {
    title: "Hinkal",
    description:
      "Get verified to access private yield farming and swaps on Hinkal Protocol, access Curve and Beefy finance with 0xKYC",
    tags: ["0xKYC"],
    href: "/0xkyc",
    img: "/img/logo-hinkal1.png",
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
    description: "Web3 Gaming Platform",
    tags: ["API"],
    href: "insert-stonks",
    img: "/img/IS-logo-nobg.png",
    biggerImg: true,
  },
  {
    title: "Sunscreen Bot",
    description:
      "Get rid of bots and duplicate accounts with Sunscreen Discord Bot",
    tags: ["Sunscreen"],
    href: "/discord-bot",
    img: "/img/sunscreen-black.png",
  },
  {
    title: "Aragon OSx",
    description: "DAO creation and management platform with no coding required",
    tags: ["0xKYC", "Sunscreen"],
    href: "https://github.com/0xKYC/0xkyc-1vote-aragon-plugin",
    img: "/img/aragon-bg.png",
    redirect: true,
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

const tags = ["Sunscreen", "0xKYC", "API"];
const uniqueTags = [...new Set(tags)];
export const TagsOptions = ["All", ...uniqueTags];
