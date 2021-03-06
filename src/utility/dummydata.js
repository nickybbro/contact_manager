export const isEven = (number) => {
  if (number % 2 === 0) {
    return "is even";
  } else {
    return "is not even";
  }
};

export const testData = [
  {
    _id: "6008ea664f6296b392f381f1",
    index: 0,
    guid: "5fffb559-bc75-4070-bcc8-b34a624de934",
    isActive: true,
    balance: "$2,903.23",
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "brown",
    name: {
      first: "Tara",
      last: "Garcia",
    },
    company: "GLUID",
    email: "tara.garcia@gluid.com",
    phone: "+1 (931) 507-2944",
    address: "717 Story Street, Twilight, Maine, 4680",
    about:
      "Anim pariatur laboris veniam irure cillum. Mollit sunt enim voluptate ut ad aute consequat. Incididunt excepteur aliquip reprehenderit enim aliquip officia excepteur culpa et incididunt culpa. Velit Lorem ullamco quis nostrud aliquip enim enim.",
    registered: "Wednesday, February 5, 2020 8:41 PM",
    latitude: "-37.18422",
    longitude: "-114.20551",
    tags: ["commodo", "adipisicing", "aliqua", "sit", "sunt"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Fern Joyce",
      },
      {
        id: 1,
        name: "Walsh Morrow",
      },
      {
        id: 2,
        name: "Rita Delacruz",
      },
    ],
    greeting: "Hello, Tara! You have 9 unread messages.",
    favoriteFruit: "apple",
 
  },
  {
    _id: "6008ea66dfa7e267c26b7f3e",
    index: 1,
    guid: "51bca2a6-1d91-420d-8859-e00f76369e34",
    isActive: false,
    balance: "$2,159.20",
    picture: "http://placehold.it/32x32",
    age: 32,
    eyeColor: "brown",
    name: {
      first: "Duncan",
      last: "Travis",
    },
    company: "VIDTO",
    email: "duncan.travis@vidto.name",
    phone: "+1 (921) 476-3610",
    address: "855 Overbaugh Place, Glenville, Rhode Island, 8577",
    about:
      "Labore culpa nulla do voluptate sunt et do commodo deserunt magna. Ut laboris veniam ullamco magna nostrud. Eiusmod ut ea amet laboris velit est ipsum tempor laboris esse magna. Ea occaecat nulla excepteur et exercitation ullamco cupidatat tempor voluptate aliqua.",
    registered: "Tuesday, December 31, 2019 8:42 AM",
    latitude: "-69.835856",
    longitude: "125.717784",
    tags: ["sunt", "quis", "cillum", "occaecat", "ut"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Caroline Lester",
      },
      {
        id: 1,
        name: "Avery Warren",
      },
      {
        id: 2,
        name: "Rosario Franco",
      },
    ],
    greeting: "Hello, Duncan! You have 6 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "6008ea66c9280e345e051113",
    index: 2,
    guid: "02316e17-f9bd-4ff3-ab92-2315e3d03609",
    isActive: true,
    balance: "$1,422.16",
    picture: "http://placehold.it/32x32",
    age: 33,
    eyeColor: "brown",
    name: {
      first: "Kristen",
      last: "Hoffman",
    },
    company: "GEOFARM",
    email: "kristen.hoffman@geofarm.io",
    phone: "+1 (865) 571-3482",
    address: "686 Grafton Street, Neahkahnie, Mississippi, 9839",
    about:
      "Adipisicing qui cillum sint mollit nostrud ipsum eiusmod duis nostrud. Do excepteur dolore fugiat dolore Lorem ullamco sit. Sint cillum ad cillum excepteur in. Commodo incididunt aute cupidatat et cillum et incididunt duis adipisicing voluptate ut commodo occaecat veniam. Pariatur aliquip eu eiusmod labore officia do ad sint esse. Nisi exercitation voluptate occaecat magna amet Lorem esse excepteur cupidatat deserunt. Minim ullamco non cillum quis cillum.",
    registered: "Tuesday, July 28, 2015 12:12 AM",
    latitude: "39.111969",
    longitude: "24.815982",
    tags: ["sunt", "dolore", "laborum", "culpa", "pariatur"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Earline Mcbride",
      },
      {
        id: 1,
        name: "Simon Whitehead",
      },
      {
        id: 2,
        name: "Jackie Sims",
      },
    ],
    greeting: "Hello, Kristen! You have 6 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "6008ea66927f9ba91af354d0",
    index: 3,
    guid: "b3b7cab0-c216-4ea4-9c38-4691de26e844",
    isActive: true,
    balance: "$2,312.33",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: {
      first: "Bettie",
      last: "Daniel",
    },
    company: "OPTICOM",
    email: "bettie.daniel@opticom.me",
    phone: "+1 (811) 572-3687",
    address: "253 Lexington Avenue, Wescosville, Missouri, 5038",
    about:
      "Ex minim cupidatat cillum est eiusmod elit magna. Nisi sint in aliquip nostrud exercitation anim ea ipsum amet et. Esse exercitation enim est voluptate pariatur Lorem incididunt amet mollit.",
    registered: "Monday, July 15, 2019 11:25 AM",
    latitude: "-43.128567",
    longitude: "18.05371",
    tags: ["irure", "amet", "consectetur", "proident", "tempor"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Queen Richards",
      },
      {
        id: 1,
        name: "Becky Jordan",
      },
      {
        id: 2,
        name: "Bolton Weaver",
      },
    ],
    greeting: "Hello, Bettie! You have 6 unread messages.",
    favoriteFruit: "banana",
  },
  {
    _id: "6008ea66b40413e19548de74",
    index: 4,
    guid: "43ddceb1-2a0f-41d5-bfb8-62e398b83849",
    isActive: false,
    balance: "$2,656.03",
    picture: "http://placehold.it/32x32",
    age: 35,
    eyeColor: "brown",
    name: {
      first: "Valerie",
      last: "Wallace",
    },
    company: "RODEOMAD",
    email: "valerie.wallace@rodeomad.tv",
    phone: "+1 (818) 417-3858",
    address: "190 Frost Street, Knowlton, Kentucky, 1695",
    about:
      "Dolore minim nisi excepteur ad laboris exercitation dolor aute amet. Ut irure irure incididunt enim non nostrud. Dolor laborum dolore esse ullamco exercitation reprehenderit. Minim cupidatat eiusmod consequat cupidatat dolor tempor ex esse consectetur duis anim Lorem et nostrud. Ullamco adipisicing tempor eiusmod voluptate aliqua laboris aliqua elit cupidatat elit veniam consequat.",
    registered: "Saturday, August 6, 2016 6:38 AM",
    latitude: "41.706864",
    longitude: "-140.012867",
    tags: ["fugiat", "cupidatat", "officia", "est", "anim"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Gale Nolan",
      },
      {
        id: 1,
        name: "Garcia Gilbert",
      },
      {
        id: 2,
        name: "Regina Ware",
      },
    ],
    greeting: "Hello, Valerie! You have 8 unread messages.",
    favoriteFruit: "apple",
  },
  {
    _id: "6008ea6667c6ca384db42c04",
    index: 5,
    guid: "02f4f1c5-5661-478f-9447-a2623a7b98ae",
    isActive: false,
    balance: "$3,150.23",
    picture: "http://placehold.it/32x32",
    age: 34,
    eyeColor: "brown",
    name: {
      first: "Pearl",
      last: "Dotson",
    },
    company: "RETROTEX",
    email: "pearl.dotson@retrotex.biz",
    phone: "+1 (810) 484-2925",
    address: "862 Branton Street, Hendersonville, Idaho, 4446",
    about:
      "Exercitation cillum irure amet aute. Anim magna non nisi adipisicing mollit. Amet anim nisi aute in quis eiusmod laboris elit veniam. Sunt ex labore Lorem adipisicing anim pariatur nulla exercitation ut et anim mollit esse. Laborum cillum amet exercitation labore dolor nulla.",
    registered: "Sunday, June 23, 2019 2:28 AM",
    latitude: "87.302356",
    longitude: "-62.479174",
    tags: ["sunt", "nulla", "commodo", "veniam", "enim"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Eve Holder",
      },
      {
        id: 1,
        name: "Carroll Hendrix",
      },
      {
        id: 2,
        name: "Lancaster Berger",
      },
    ],
    greeting: "Hello, Pearl! You have 9 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "6008ea664060745e4f6f19bf",
    index: 6,
    guid: "2b979dc2-4c53-4eac-80c7-a890b3b4de0c",
    isActive: true,
    balance: "$1,243.44",
    picture: "http://placehold.it/32x32",
    age: 23,
    eyeColor: "green",
    name: {
      first: "Cox",
      last: "Wade",
    },
    company: "INRT",
    email: "cox.wade@inrt.biz",
    phone: "+1 (946) 478-3324",
    address: "755 Narrows Avenue, Freelandville, Northern Mariana Islands, 643",
    about:
      "Veniam ea exercitation ipsum pariatur ad deserunt exercitation fugiat anim proident ullamco enim. Aute sint mollit sit ut culpa amet occaecat et duis aliquip id. Eiusmod est aute veniam velit est Lorem. Ex ex non sint ullamco voluptate fugiat quis sint tempor proident minim.",
    registered: "Wednesday, October 14, 2015 3:02 PM",
    latitude: "-61.750216",
    longitude: "172.211619",
    tags: ["velit", "incididunt", "sunt", "do", "est"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Juarez Gomez",
      },
      {
        id: 1,
        name: "Battle Jones",
      },
      {
        id: 2,
        name: "Cobb Mcgee",
      },
    ],
    greeting: "Hello, Cox! You have 5 unread messages.",
    favoriteFruit: "strawberry",
  },
  {
    _id: "6008ea661405ff1d55245a65",
    index: 7,
    guid: "f626799b-f82d-4e6b-804c-b37403422474",
    isActive: true,
    balance: "$1,117.88",
    picture: "http://placehold.it/32x32",
    age: 21,
    eyeColor: "brown",
    name: {
      first: "Hart",
      last: "Downs",
    },
    company: "BEDLAM",
    email: "hart.downs@bedlam.us",
    phone: "+1 (833) 550-2606",
    address: "902 Moore Street, Fredericktown, New York, 4309",
    about:
      "Consequat sit ut veniam aliqua ex ipsum nostrud. Enim cupidatat ipsum officia dolore aliqua quis magna occaecat. Id incididunt voluptate quis qui sunt.",
    registered: "Saturday, December 28, 2019 6:54 PM",
    latitude: "-49.013825",
    longitude: "77.265047",
    tags: ["sit", "aliquip", "irure", "sint", "dolor"],
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    friends: [
      {
        id: 0,
        name: "Jeri Fernandez",
      },
      {
        id: 1,
        name: "Strickland Bates",
      },
      {
        id: 2,
        name: "Hattie Harrell",
      },
    ],
    greeting: "Hello, Hart! You have 10 unread messages.",
    favoriteFruit: "strawberry",
  },
];
