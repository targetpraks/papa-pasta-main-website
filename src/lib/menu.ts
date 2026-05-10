export interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  seasonal?: boolean;
  price: number;
}

export const menuItems: MenuItem[] = [
  {
    id: "seasonal-hero",
    name: "Hero Seasonal: Truffle & Wild Mushroom Fettuccine",
    description: "Fresh egg fettuccine with black truffle oil, wild porcini, cremini mushrooms, and aged parmesan. Seasonal only. When it is gone, it is gone.",
    image: "/images/menu-core-8-dishes.png",
    tags: ["Seasonal", "Vegetarian", "Proteins"],
    seasonal: true,
    price: 145,
  },
  {
    id: "alfredo",
    name: "Fettuccine Alfredo",
    description: "Silky Alfredo sauce over fresh flat ribbons. The comfort classic, perfected in our kitchen.",
    image: "/images/menu-core-8-dishes.png",
    tags: ["Vegetarian", "Proteins"],
    price: 98,
  },
  {
    id: "bolognese",
    name: "Pappardelle Bolognese",
    description: "Wide ribbons coated in slow-simmered beef and pork ragù. Twelve hours of patience in every bite.",
    image: "/images/menu-sauce-production.png",
    tags: ["Proteins"],
    price: 115,
  },
  {
    id: "pesto",
    name: "Genovese Pesto Penne",
    description: "Fresh basil, pine nuts, garlic, and parmigiano-reggiano. Summer in a bowl.",
    image: "/images/menu-pasta-shape-pairing.png",
    tags: ["Vegan", "Vegetarian"],
    price: 89,
  },
  {
    id: "carbonara",
    name: "Carbonara Tagliatelle",
    description: "Guanciale, egg yolk, pecorino romano, and cracked black pepper. No cream. Rules are rules.",
    image: "/images/menu-core-8-dishes.png",
    tags: ["Proteins"],
    price: 109,
  },
  {
    id: "arrabbiata",
    name: "Arrabbiata Rigatoni",
    description: "Spicy tomato sauce with roasted garlic and Calabrian chilies. Not for the faint of heart.",
    image: "/images/menu-sauce-production.png",
    tags: ["Vegan", "Spicy"],
    price: 85,
  },
  {
    id: "vongole",
    name: "Linguine alle Vongole",
    description: "Fresh clams, white wine, garlic, and chili flakes. Coastal freshness in every strand.",
    image: "/images/menu-pasta-shape-pairing.png",
    tags: ["Proteins", "Gluten-Free"],
    price: 135,
  },
  {
    id: "puttanesca",
    name: "Puttanesca Penne",
    description: "Tomato, olives, capers, anchovies, and garlic. Bold. Brash. Unapologetic.",
    image: "/images/menu-core-8-dishes.png",
    tags: ["Vegan", "Spicy"],
    price: 95,
  },
  {
    id: "cacio-e-pepe",
    name: "Cacio e Pepe",
    description: "Pecorino romano, black pepper, and pasta water alchemy. Deceptively simple. Perfectly executed.",
    image: "/images/menu-pasta-shape-pairing.png",
    tags: ["Vegetarian"],
    price: 92,
  },
  {
    id: "aglione",
    name: "Pici all'Aglione",
    description: "Hand-rolled thick spaghetti with slow-cooked tomato and garlic sauce. Tuscan soul food.",
    image: "/images/menu-sauce-production.png",
    tags: ["Vegan"],
    price: 102,
  },
  {
    id: "lasagna",
    name: "Nonna's Lasagna",
    description: "Layers of fresh pasta, béchamel, bolognese, and molten mozzarella. Three days in the making.",
    image: "/images/menu-core-8-dishes.png",
    tags: ["Proteins"],
    price: 125,
  },
  {
    id: "ravioli",
    name: "Spinach & Ricotta Ravioli",
    description: "Hand-pinched parcels filled with ricotta, spinach, and nutmeg. Brown butter sage finish.",
    image: "/images/menu-pasta-shape-pairing.png",
    tags: ["Vegetarian", "Proteins"],
    price: 118,
  },
];

export const menuFilters = ["All", "Proteins", "Vegan", "Vegetarian", "Gluten-Free", "Spicy", "Seasonal"];
