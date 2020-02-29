const allMembers = [
  {
    image: "vicky",
    name: "Vicky Ly",
    year: "2020",
    portfolio: "vickyly.co",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "lucy",
    name: "Lucy Xu",
    year: "2020",
    portfolio: "lucylouxu.com/",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "brittany",
    name: "Brittany Newton",
    year: "2020",
    portfolio: "in/brittany-newton-648452133/",
    linkedin: "in/brittany-newton-648452133/",
    tags: ["UXDesigner", "UXEngineer", "ProdDesigner"]
  },
  {
    image: "steven",
    name: "Steven Chen",
    year: "2020",
    portfolio: "stevenychen.com/",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "jamin",
    name: "Jamin Capulong",
    year: "2020",
    portfolio: "/in/jamin-nick-capulong/",
    linkedin: "/in/jamin-nick-capulong/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "andrew",
    name: "Andrew Zhen",
    year: "2020",
    portfolio: "ajzhen.com",
    linkedin: "ajzhen.com",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "stella",
    name: "Stella Seki",
    year: "2021",
    portfolio: "/in/stella-seki-043051170/",
    linkedin: "/in/stella-seki-043051170/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "nhu",
    name: "Nhu Luong",
    year: "2021",
    portfolio: "nhu777.net",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "julia",
    name: "Julia Nguyen",
    linkedin: "/in/",
    portfolio: " nguyenjuliaa.com/",
    year: 2021,
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "paridhi",
    name: "Rosalinda Montoya Fiore",
    linkedin: "/in/",
    portfolio: "in/paridhi4699/",
    year: 2021,
    tags: ["VisDesigner", "UXEngineer"]
  },
  {
    image: "alison",
    name: "Alison Chen",
    linkedin: "/in/",
    portfolio: "in/ealisonchen/",
    year: 2021,
    tags: ["ProdDesigner"]
  },

  {
    image: "quinn",
    name: "Quinn Vu",
    linkedin: "/in/",
    portfolio: "thyvu.site/",
    year: 2021,
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "winson",
    name: "Winson Dieu",
    linkedin: "/in/",
    portfolio: "winsondieu.com",
    year: 2021,
    tags: ["ProdDesigner"]
  },
  {
    image: "vicky",
    name: "Vicky Ly",
    year: "2020",
    portfolio: "vickyly.co",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "lucy",
    name: "Lucy Xu",
    year: "2020",
    portfolio: "lucylouxu.com/",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "brittany",
    name: "Brittany Newton",
    year: "2020",
    portfolio: "in/brittany-newton-648452133/",
    linkedin: "in/brittany-newton-648452133/",
    tags: ["UXDesigner", "UXEngineer", "ProdDesigner"]
  },
  {
    image: "steven",
    name: "Steven Chen",
    year: "2020",
    portfolio: "stevenychen.com/",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "jamin",
    name: "Jamin Capulong",
    year: "2020",
    portfolio: "/in/jamin-nick-capulong/",
    linkedin: "/in/jamin-nick-capulong/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "andrew",
    name: "Andrew Zhen",
    year: "2020",
    portfolio: "ajzhen.com",
    linkedin: "ajzhen.com",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "stella",
    name: "Stella Seki",
    year: "2021",
    portfolio: "/in/stella-seki-043051170/",
    linkedin: "/in/stella-seki-043051170/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "nhu",
    name: "Nhu Luong",
    year: "2021",
    portfolio: "nhu777.net",
    linkedin: "/in/",
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "julia",
    name: "Julia Nguyen",
    linkedin: "/in/",
    portfolio: " nguyenjuliaa.com/",
    year: 2021,
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "paridhi",
    name: "Rosalinda Montoya Fiore",
    linkedin: "/in/",
    portfolio: "in/paridhi4699/",
    year: 2021,
    tags: ["VisDesigner", "UXEngineer"]
  },
  {
    image: "alison",
    name: "Alison Chen",
    linkedin: "/in/",
    portfolio: "in/ealisonchen/",
    year: 2021,
    tags: ["ProdDesigner"]
  },

  {
    image: "quinn",
    name: "Quinn Vu",
    linkedin: "/in/",
    portfolio: "thyvu.site/",
    year: 2021,
    tags: ["UXDesigner", "UXEngineer"]
  },
  {
    image: "winson",
    name: "Winson Dieu",
    linkedin: "/in/",
    portfolio: "winsondieu.com",
    year: 2021,
    tags: ["ProdDesigner"]
  }
];

for (let i = allMembers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = allMembers[i];
  allMembers[i] = allMembers[j];
  allMembers[j] = temp;
}

export default allMembers;
