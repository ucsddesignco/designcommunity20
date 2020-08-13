/*
JSON TEMPLATE

  {
    image: "vicky",
    name: "",
    year: "",
    portfolio: "",
    linkedin: "",
    tags: [""]
  },
*/

const allMembers = [
  {
    image: "julia",
    name: "Julia Nguyen",
    year: "2021",
    portfolio: "julianguyen.co",
    linkedin: "/in/nguyenjuliaa",
    tags: ["UXDesigner", "VisualDesigner", "ProductDesigner", "GraphicDesigner"]
  },
  {
    image: "nhu",
    name: "Nhu Luong",
    year: "2021",
    portfolio: "nhu777.net/",
    linkedin: "/in/nhu-luong777/",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "UXResearcher",
      "GraphicDesigner"
    ]
  },
  {
    image: "emily",
    name: "Emily Nguyen",
    year: "2019",
    portfolio: "emilynguyen.co/",
    linkedin: "/in/emilymnguyen/",
    tags: [
      "VisualDesigner",
      "ProductDesigner",
      "UXEngineer",
      "GraphicDesigner"
    ]
  },
  {
    image: "grace",
    name: "Grace Gao",
    year: "2021",
    portfolio: "gracegao.webflow.io",
    linkedin: "/in/gaograce1/",
    tags: [
      "VisualDesigner",
      "ProductDesigner",
      "UXDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "natasha",
    name: "Natasha Supangkat",
    year: "2021",
    portfolio: "natashasupangkat.webflow.io/",
    linkedin: "/in/natasha-supangkat/",
    tags: [
      "UXDesinger",
      "VisualDesigner",
      "ProductDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "brittany",
    name: "Brittany Newton",
    year: "2020",
    portfolio: "brittanynewton.com",
    linkedin: "/in/brittanynewton88",
    tags: ["VisualDesigner", "ProductDesigner"]
  },
  {
    image: "lucy",
    name: "Lucy Xu",
    year: "2020",
    portfolio: "lucylouxu.com/",
    linkedin: "/in/lucylouxu/",
    tags: [
      "UXDesigner", 
      "VisualDesigner", 
      "ProductDesigner", 
      "GraphicDesigner"]
  },
  {
    image: "quinn",
    name: "Quinn Vu",
    year: "2021",
    portfolio: "quinn-vu.com",
    linkedin: "/in/thyvu1014/",
    tags: ["VisualDesigner", "GraphicDesigner"]
  },
  {
    image: "dana",
    name: "Dana Chou",
    year: "2021",
    portfolio: "danachou.net/flynyon",
    linkedin: "/in/dana-chou/",
    tags: ["ProductDesigner"]
  },
  {
    image: "vicky",
    name: "Vicky Ly",
    year: "2020",
    portfolio: "vickyly.co/",
    linkedin: "/in/vicky-ly/",
    tags: ["UXDesigner", "VisualDesigner", "ProductDesigner"]
  },
  {
    image: "andrew",
    name: "Andrew Zhen",
    year: "2020",
    portfolio: "ajzhen.com/",
    linkedin: "/in/andrew-zhen/",
    tags: ["UXEngineer"]
  },
  {
    image: "daniel",
    name: "Daniel Li",
    year: "2021",
    portfolio: "lidaniel.com",
    linkedin: "/in/lidaniel99/",
    tags: ["ContentStrategist"]
  },
  {
    image: "syedadam",
    name: "Adam Syed",
    year: "2022",
    portfolio: "syedadam.com/",
    linkedin: "/in/syedadamemirputra/",
    tags: [
      "UXDesigner", 
      "VisualDesigner", 
      "ProductDesigner", 
      "UXResearcher"]
  },
  {
    image: "stella",
    name: "Stella Seki",
    year: "2021",
    portfolio: "stellaseki.com",
    linkedin: "/in/stella-seki",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "UXResearcher",
      "GraphicDesigner"
    ]
  },
  {
    image: "paridhi",
    name: "Paridhi Khaitan",
    year: "2021",
    portfolio: "paridhikhaitan.me",
    linkedin: "/in/paridhikhaitan/",
    tags: ["UXEngineer"]
  },
  {
    image: "amyan",
    name: "Amy An",
    year: "2021",
    portfolio: "amyan.me",
    linkedin: "/in/amy-zhong-an",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "UXResearcher",
      "GraphicDesigner"
    ]
  },
  {
    image: "edngai",
    name: "Ed Ngai",
    year: "2017",
    portfolio: "edngai.com",
    linkedin: "/in/engai/",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "UXEngineer"
    ]
  },
  {
    image: "neveforesti",
    name: "Neve Foresti",
    year: "2021",
    portfolio: "neveforesti.com",
    linkedin: "/in/neveforesti/",
    tags: [
      "UXDesigner",
      "UXEngineer"
    ]
  },
  {
    image: "carlolopez",
    name: "Carlo Lopez De La Fuente",
    year: "2020",
    portfolio: "fdcostheta.cargo.site/",
    linkedin: "/in/carlolopezdelafuente/",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "UXResearcher",
      "GraphicDesigner"
    ]
  },
  {
    image: "jonathanfunes",
    name: "Jonathan Funes",
    year: "2020",
    portfolio: "funes-design.com",
    linkedin: "/in/jonathan-funes/",
    tags: [
      "VisualDesigner",
      "GraphicDesigner"
      // "Illustration"
    ]
  },
  {
    image: "katherinechen",
    name: "Katherine Chen",
    year: "2021",
    portfolio: "katherineychen.com/",
    linkedin: "/in/katherineychen/",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "samanthacheung",
    name: "Samantha Cheung",
    year: "2022",
    portfolio: "samanthacheung.design/",
    linkedin: "/in/cheung-samantha/",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "mengmingluo",
    name: "Mengming Luo",
    year: "2023",
    portfolio: "mengmingluo.com",
    linkedin: "/in/mengming-luo",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "UXEngineer"
    ]
  },
  {
    image: "joelsequeira",
    name: "Joel Sequeira",
    year: "2018",
    portfolio: "github.com/joelseq",
    linkedin: "/in/joelseq/",
    tags: [
      "UXEngineer"
    ]
  },
  {
    image: "michellewan",
    name: "Michelle Wan",
    year: "2020",
    portfolio: "misawan.github.io",
    linkedin: "/in/misawan/",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "UXResearcher"
    ]
  },
  {
    image: "aidenjauffret",
    name: "Aiden Jauffret",
    year: "2022",
    portfolio: "aidenjauffret.myportfolio.com/",
    linkedin: "/in/jfret/",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "jaredsuasin",
    name: "Jared Suasin",
    year: "2019",
    portfolio: "jaredsuasin.com/",
    linkedin: "/in/jaredsuasin/",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "UXEngineer"
    ]
  },
  {
    image: "alicelee",
    name: "Alice Lee",
    year: "2021",
    portfolio: "alicelee.design/",
    linkedin: "/in/alicelee1998/",
    tags: [
      "UXResearcher"
    ]
  },
  {
    image: "nathanmansur",
    name: "Nathan Mansur",
    year: "2019",
    portfolio: "nathanmansur.com/",
    linkedin: "/in/nathan-mansur/",
    tags: [
      "UXDesigner",
      "ProductDesigner"
    ]
  },
  {
    image: "thalalcassim",
    name: "Thalal Cassim",
    year: "2020",
    portfolio: "thalalcassim.com/",
    linkedin: "/in/thalalcassim/",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "UXResearcher"
    ]
  },
  {
    image: "quylanmac",
    name: "Quylan Mac",
    year: "2021",
    portfolio: "quylanmac.com/",
    linkedin: "/in/quylanmac/",
    tags: [
      "UXEngineer"
    ]
  },
  {
    image: "mading",
    name: "Madi Ng",
    year: "2020",
    portfolio: "madi-ng.com/",
    linkedin: "/in/m-ng/",
    tags: [
      "UXDesigner",
      "ProductDesigner",
      "UXResearcher"
      // Product Management
    ]
  },
  {
    image: "braeanneori",
    name: "Braeanne Oribello",
    year: "2022",
    portfolio: "braeanneori.com/",
    linkedin: "/in/braeanneori",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "eunsoolee",
    name: "Eunsoo Lee",
    year: "2020",
    portfolio: "eunsoolee.co/",
    linkedin: "/in/leeunsu",
    tags: [
      "UXDesigner",
      "VisualDesigner",
      "ProductDesigner",
      "GraphicDesigner"
    ]
  },
  {
    image: "willstock",
    name: "Will Stock",
    year: "2020",
    portfolio: "wstock.myportfolio.com/",
    linkedin: "/in/stillwock",
    tags: [
      "ProductDesigner"
      // Industrial Designer
    ]
  },
  {
    image: "abbysigler",
    name: "Abby Sigler",
    year: "2020",
    portfolio: "abbysigler.com/",
    linkedin: "/in/abigail-sigler/",
    tags: [
      "UXDesigner",
      "ProductDesigner"
      // Product Management
    ]
  }
];

export default allMembers;
