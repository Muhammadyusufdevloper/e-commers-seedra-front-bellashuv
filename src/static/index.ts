import BlogClock from "../assets/images/page/home/ourBlog/clock.svg";
import BlogImg1 from "../assets/images/page/home/ourBlog/firstBlog.png";
import BlogImg2 from "../assets/images/page/home/ourBlog/secondBlog.png";
import BlogImg3 from "../assets/images/page/home/ourBlog/thirdBlog.png";
import OurTeam1 from "../assets/images/page/about-seedra/p1.png";
import OurTeam2 from "../assets/images/page/about-seedra/p2.png";
import OurTeam3 from "../assets/images/page/about-seedra/p3.png";
import OurTeam4 from "../assets/images/page/about-seedra/p4.png";
import img1 from "../assets/images/page/home/productImg/img1.png";
import img2 from "../assets/images/page/home/productImg/img2.png";
import img3 from "../assets/images/page/home/productImg/img3.png";
import swiper from "../assets/images/page/home/swiper/swiper.svg";
import read1 from "../assets/images/components/blog/img3.png";
import read2 from "../assets/images/components/blog/img4.png";
import read3 from "../assets/images/components/blog/img5.png";

interface Product {
  id: number;
  title: string;
  price: string;
  oldPrice: string;
  category: string;
  units: string;
  description: string;
  urls: string;
  info: string;
  available: boolean;
  CreatedAt: string;
  UpdatedAt: string;
}

interface BlogData {
  id: number;
  data: string;
  className: string;
  dataClock: string;
  title: string;
  desc: string;
  bg: string;
}

interface CustomerOpinion {
  id: number;
  image: string;
  title: string;
  date: string;
  desc: string;
}

interface TeamMember {
  id: number;
  name: string;
  profession: string;
  img: string;
}

interface BlogRead {
  id: number;
  title: string;
  text: string;
  time: string;
  img: string;
}

interface Spinach {
  id: number;
  title: string;
  text: string;
  time: string;
  img: string;
  bg: string;
}

export const PRODUCT: Product[] = [
  {
    id: 1,
    title: "Cillentro",
    price: "12.56",
    oldPrice: "14.00",
    category: "BUNDLES",
    units: "done",
    description: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    urls: img1,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
  {
    id: 2,
    title: "Bodacious Hybrid",
    price: "12.56",
    oldPrice: "14.00",
    category: "HERBS",
    units: "done",
    description:
      "SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor Planting",
    urls: img2,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
  {
    id: 3,
    title: "Spinach Seeds",
    price: "12.56",
    oldPrice: "14.00",
    category: "VEGETABLES",
    units: "done",
    description: "SEEDRA Spinach Seeds for Indoor and Outdoor Planting",
    urls: img3,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
  {
    id: 4,
    title: "Cillentro",
    price: "12.56",
    oldPrice: "14.00",
    category: "FRUITS",
    units: "done",
    description: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    urls: img1,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
  {
    id: 5,
    title: "Cillentro",
    price: "12.56",
    oldPrice: "14.00",
    category: "SUPPLIES",
    units: "done",
    description: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    urls: img2,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
  {
    id: 6,
    title: "Cillentro",
    price: "12.56",
    oldPrice: "14.00",
    category: "FLOWERS",
    units: "done",
    description: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    urls: img3,
    info: "[object Object]",
    available: true,
    CreatedAt: "2024-05-04T00:04:20.973Z",
    UpdatedAt: "2024-05-04T00:04:20.973Z",
  },
];

export const OurBlogDATA: BlogData[] = [
  {
    id: 1,
    data: "12.09.2021",
    className: "our__blog__frames__mint",
    dataClock: BlogClock,
    title: "How to plant spinach correctly in winter",
    desc: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    bg: BlogImg1,
  },
  {
    id: 2,
    data: "12.09.2021",
    className: "our__blog__frames__farmer",
    dataClock: BlogClock,
    title: "How to plant spinach correctly in winter",
    desc: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    bg: BlogImg2,
  },
  {
    id: 3,
    data: "12.09.2021",
    dataClock: BlogClock,
    className: "our__blog__frames__strawberry_1",
    title: "How to plant spinach correctly in winter",
    desc: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    bg: BlogImg3,
  },
  {
    id: 4,
    data: "12.09.2021",
    className: "our__blog__frames__strawberry_2",
    dataClock: BlogClock,
    title: "How to plant spinach correctly in winter",
    desc: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    bg: BlogImg3,
  },
];

export const CUSTOMEROPINION: CustomerOpinion[] = [
  {
    id: 1,
    image: swiper,
    title: "Carla Samantoes-Diego",
    date: "12.09.2021",
    desc: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
  },
  {
    id: 2,
    image: swiper,
    title: "Carla Samantoes-Diego",
    date: "12.09.2021",
    desc: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
  },
  {
    id: 3,
    image: swiper,
    title: "Carla Samantoes-Diego",
    date: "12.09.2021",
    desc: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
  },
  {
    id: 4,
    image: swiper,
    title: "Carla Samantoes-Diego",
    date: "12.09.2021",
    desc: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
  },
  {
    id: 5,
    image: swiper,
    title: "Carla Samantoes-Diego",
    date: "12.09.2021",
    desc: "SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. ",
  },
];

export const OURTEAMDATA: TeamMember[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    profession: "Nursing Assistant",
    img: OurTeam1,
  },
  {
    id: 2,
    name: "Robert Fox",
    profession: "Dog Trainer",
    img: OurTeam2,
  },
  {
    id: 3,
    name: "Floyd Miles",
    profession: "Web Designer",
    img: OurTeam3,
  },
  {
    id: 4,
    name: "Wade Warren",
    profession: "Medical Assistant",
    img: OurTeam4,
  },
];

export const BLOGREAD: BlogRead[] = [
  {
    id: 1,
    title: "How to plant spinach correctly in winter",
    text: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    time: "12.09.2021",
    img: read1,
  },
  {
    id: 2,
    title: "How to plant spinach correctly in winter",
    text: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    time: "12.09.2021",
    img: read2,
  },
  {
    id: 3,
    title: "How to plant spinach correctly in winter",
    text: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    time: "12.09.2021",
    img: read3,
  },
];

export const SPINACH: Spinach[] = [
  {
    id: 1,
    title: "How to plant spinach correctly in winter",
    text: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    time: "12.09.2021",
    img: read1,
    bg: "#EFF2F8",
  },
  {
    id: 2,
    title: "How to plant spinach correctly in winter",
    text: "In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...",
    time: "12.09.2021",
    img: read3,
    bg: "#35974014",
  },
];
