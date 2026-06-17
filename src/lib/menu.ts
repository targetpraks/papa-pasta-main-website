export type FacetKey = "sauce" | "protein" | "cheese" | "heat" | "dietary";

export type MenuDish = {
  category: string;
  name: string;
  price: string;
  desc: string;
  img: string;
  tag: string;
};

export type MenuFacetState = Record<FacetKey, string>;

export const menuCategories = [
  "All",
  "Meat Sauces",
  "Fish Sauces",
  "Vegetable Sauces",
  "Cream Sauces",
  "Tomato Sauces",
  "Oil Sauces",
  "Drop Sauces",
  "Seasonal Sauces",
];

export const menuFacetGroups: Array<{ key: FacetKey; label: string; options: string[] }> = [
  { key: "sauce", label: "Sauces", options: menuCategories },
  { key: "protein", label: "Protein", options: ["All", "Beef", "Chicken", "Lamb", "Prawn", "Tuna", "Salmon", "Seafood", "Vegetable", "None"] },
  { key: "cheese", label: "Cheese", options: ["All", "Parmesan", "Pecorino", "Ricotta", "Mascarpone", "Burrata", "Four Cheese", "None"] },
  { key: "heat", label: "Heat Level", options: ["All", "Safe Zone", "Warm-Up", "Boss Heat"] },
  { key: "dietary", label: "Style", options: ["All", "Meat", "Fish", "Vegetarian", "Vegan Option"] },
];

export const defaultMenuFacets: MenuFacetState = {
  sauce: "All",
  protein: "All",
  cheese: "All",
  heat: "All",
  dietary: "All",
};

const menuImages = {
  basil: "/images/menu-stock/basil-pasta.jpg",
  cheese: "/images/menu-stock/seafood-pasta.jpg",
  cream: "/images/menu-stock/tomato-spaghetti.jpg",
  meat: "/images/menu-stock/pasta-table.jpg",
  seafood: "/images/menu-stock/creamy-pasta.jpg",
  tomato: "/images/menu-stock/rigatoni.jpg",
} as const;

export const menuDishes: MenuDish[] = [
  { category: "Meat Sauces", name: "Bolognese della Casa", price: "R95", desc: "Slow-braised beef and pork ragu over wide tagliatelle. Simmered deep, rich, and built for comfort.", img: menuImages.meat, tag: "House Favourite" },
  { category: "Meat Sauces", name: "Braai-Spiced Meatball", price: "R98", desc: "Char-grilled meatballs in smoky tomato sauce with a South African braai edge.", img: menuImages.meat, tag: "Heritage" },
  { category: "Meat Sauces", name: "Beef Short Rib Ragu", price: "R119", desc: "Pulled beef short rib, tomato, red wine, herbs, and cracked black pepper on pappardelle.", img: menuImages.meat, tag: "Slow Cooked" },
  { category: "Meat Sauces", name: "Chicken Pesto Alfredo", price: "R99", desc: "Grilled chicken, basil pesto, Parmesan cream, and toasted crumbs over penne.", img: menuImages.basil, tag: "Protein" },

  { category: "Fish Sauces", name: "Prawn Arrabbiata", price: "R125", desc: "Prawns, chilli tomato, garlic, parsley, and lemon over linguine.", img: menuImages.seafood, tag: "Spicy" },
  { category: "Fish Sauces", name: "Tuna Pomodoro", price: "R92", desc: "Tuna, capers, olives, basil, and slow tomato sauce on spaghetti.", img: menuImages.tomato, tag: "Coastal" },
  { category: "Fish Sauces", name: "Creamy Salmon Lemon", price: "R135", desc: "Salmon flakes, lemon cream, dill, and cracked pepper with fettuccine.", img: menuImages.seafood, tag: "Premium" },
  { category: "Fish Sauces", name: "Seafood Aglio", price: "R129", desc: "Prawns, calamari, garlic oil, chilli, parsley, and lemon zest over linguine.", img: menuImages.seafood, tag: "Oil Based" },

  { category: "Vegetable Sauces", name: "Summer Harvest Primavera", price: "R88", desc: "Zucchini, cherry tomatoes, basil, lemon zest, and Parmesan on penne.", img: menuImages.basil, tag: "Vegetarian" },
  { category: "Vegetable Sauces", name: "Roasted Veg Ragu", price: "R86", desc: "Roasted peppers, aubergine, courgette, tomato, and herbs over rigatoni.", img: menuImages.tomato, tag: "Vegan Option" },
  { category: "Vegetable Sauces", name: "Mushroom Truffle Cream", price: "R112", desc: "Wild mushrooms, black truffle oil, cream, and Parmesan over fettuccine.", img: menuImages.cream, tag: "Signature" },
  { category: "Vegetable Sauces", name: "Spinach Ricotta Verde", price: "R89", desc: "Spinach, ricotta, garlic, nutmeg, and green herb sauce on shells.", img: menuImages.basil, tag: "Green" },

  { category: "Cream Sauces", name: "Alfredo Classico", price: "R89", desc: "Silky Parmesan cream sauce over fresh fettuccine. The comfort benchmark.", img: menuImages.cream, tag: "Best Seller" },
  { category: "Cream Sauces", name: "Carbonara Proper", price: "R92", desc: "Egg yolk, Pecorino, black pepper, and crispy cured beef. No shortcuts.", img: menuImages.cream, tag: "Authentic" },
  { category: "Cream Sauces", name: "Four Cheese Maccheroni", price: "R94", desc: "Mozzarella, cheddar, Parmesan, and blue cheese folded into short pasta.", img: menuImages.cheese, tag: "Rich" },
  { category: "Cream Sauces", name: "Creamy Garlic Parmesan", price: "R86", desc: "Roasted garlic, Parmesan cream, parsley, and toasted crumbs on fusilli.", img: menuImages.cream, tag: "Classic" },

  { category: "Tomato Sauces", name: "Napolitana Fresca", price: "R79", desc: "San Marzano-style tomato base, basil, garlic, and olive oil. Simple and sharp.", img: menuImages.tomato, tag: "Classic" },
  { category: "Tomato Sauces", name: "Arrabbiata Piccante", price: "R82", desc: "Chilli tomato sauce with garlic, parsley, and a clean heat finish.", img: menuImages.tomato, tag: "Spicy" },
  { category: "Tomato Sauces", name: "Vodka Rosso", price: "R96", desc: "Tomato, cream, vodka, chilli, and Parmesan over rigatoni.", img: menuImages.tomato, tag: "Drop Favourite" },
  { category: "Tomato Sauces", name: "Pomodoro Burrata", price: "R118", desc: "Fresh tomato sauce, basil oil, burrata, and cracked pepper over spaghetti.", img: menuImages.tomato, tag: "Fresh" },

  { category: "Oil Sauces", name: "Aglio e Olio", price: "R76", desc: "Garlic, chilli, parsley, extra virgin olive oil, and spaghetti.", img: menuImages.basil, tag: "Minimal" },
  { category: "Oil Sauces", name: "Cacio e Pepe", price: "R85", desc: "Pecorino Romano, cracked pepper, pasta water, and a glossy Roman finish.", img: menuImages.cheese, tag: "Signature" },
  { category: "Oil Sauces", name: "Basil Pesto Genovese", price: "R88", desc: "Basil, pine nuts, Parmesan, garlic, and olive oil over trofie-style pasta.", img: menuImages.basil, tag: "Green" },
  { category: "Oil Sauces", name: "Chilli Crisp Garlic", price: "R84", desc: "House chilli crisp, garlic oil, spring onion, and toasted crumbs on linguine.", img: menuImages.tomato, tag: "Heat" },

  { category: "Drop Sauces", name: "Spicy Vodka Vibe", price: "R99", desc: "The limited drop sauce: vodka tomato cream, chilli, Parmesan, and neon-store energy.", img: menuImages.tomato, tag: "Live Drop" },
  { category: "Drop Sauces", name: "Blackout Garlic Cream", price: "R105", desc: "Roasted black garlic, cream, Parmesan, and pepper. Dark, rich, and limited.", img: menuImages.cream, tag: "Limited" },
  { category: "Drop Sauces", name: "Neon Basil Rosso", price: "R97", desc: "Tomato, basil pesto, cream, and chilli flakes tied to the next colour reveal.", img: menuImages.basil, tag: "Colour Drop" },
  { category: "Drop Sauces", name: "TakeOver Truffle Alfredo", price: "R128", desc: "Member-preview truffle Alfredo with mushrooms, Parmesan, and a weekly availability window.", img: menuImages.cream, tag: "Early Access" },

  { category: "Seasonal Sauces", name: "Truffle Wild Mushroom", price: "R145", desc: "Wild mushrooms, black truffle oil, Parmesan cream, and fettuccine. Seasonal only.", img: menuImages.cream, tag: "Seasonal" },
  { category: "Seasonal Sauces", name: "Cape Lemon Herb", price: "R92", desc: "Lemon, parsley, basil, olive oil, and seasonal greens over linguine.", img: menuImages.basil, tag: "Summer" },
  { category: "Seasonal Sauces", name: "Winter Lamb Ragu", price: "R132", desc: "Slow lamb, tomato, rosemary, and Parmesan over pappardelle.", img: menuImages.meat, tag: "Winter" },
  { category: "Seasonal Sauces", name: "Spring Pea Mascarpone", price: "R94", desc: "Peas, mascarpone, mint, lemon, and Parmesan over short pasta.", img: menuImages.basil, tag: "Spring" },
];

export const menuDishFacets: Record<string, MenuFacetState> = {
  "Bolognese della Casa": { sauce: "Meat Sauces", protein: "Beef", cheese: "Parmesan", heat: "Safe Zone", dietary: "Meat" },
  "Braai-Spiced Meatball": { sauce: "Meat Sauces", protein: "Beef", cheese: "Parmesan", heat: "Warm-Up", dietary: "Meat" },
  "Beef Short Rib Ragu": { sauce: "Meat Sauces", protein: "Beef", cheese: "Parmesan", heat: "Safe Zone", dietary: "Meat" },
  "Chicken Pesto Alfredo": { sauce: "Meat Sauces", protein: "Chicken", cheese: "Parmesan", heat: "Safe Zone", dietary: "Meat" },
  "Prawn Arrabbiata": { sauce: "Fish Sauces", protein: "Prawn", cheese: "None", heat: "Boss Heat", dietary: "Fish" },
  "Tuna Pomodoro": { sauce: "Fish Sauces", protein: "Tuna", cheese: "None", heat: "Warm-Up", dietary: "Fish" },
  "Creamy Salmon Lemon": { sauce: "Fish Sauces", protein: "Salmon", cheese: "Parmesan", heat: "Safe Zone", dietary: "Fish" },
  "Seafood Aglio": { sauce: "Fish Sauces", protein: "Seafood", cheese: "None", heat: "Boss Heat", dietary: "Fish" },
  "Summer Harvest Primavera": { sauce: "Vegetable Sauces", protein: "Vegetable", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Roasted Veg Ragu": { sauce: "Vegetable Sauces", protein: "Vegetable", cheese: "None", heat: "Warm-Up", dietary: "Vegan Option" },
  "Mushroom Truffle Cream": { sauce: "Vegetable Sauces", protein: "Vegetable", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Spinach Ricotta Verde": { sauce: "Vegetable Sauces", protein: "Vegetable", cheese: "Ricotta", heat: "Safe Zone", dietary: "Vegetarian" },
  "Alfredo Classico": { sauce: "Cream Sauces", protein: "None", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Carbonara Proper": { sauce: "Cream Sauces", protein: "Beef", cheese: "Pecorino", heat: "Safe Zone", dietary: "Meat" },
  "Four Cheese Maccheroni": { sauce: "Cream Sauces", protein: "None", cheese: "Four Cheese", heat: "Safe Zone", dietary: "Vegetarian" },
  "Creamy Garlic Parmesan": { sauce: "Cream Sauces", protein: "None", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Napolitana Fresca": { sauce: "Tomato Sauces", protein: "None", cheese: "None", heat: "Safe Zone", dietary: "Vegan Option" },
  "Arrabbiata Piccante": { sauce: "Tomato Sauces", protein: "None", cheese: "None", heat: "Boss Heat", dietary: "Vegan Option" },
  "Vodka Rosso": { sauce: "Tomato Sauces", protein: "None", cheese: "Parmesan", heat: "Warm-Up", dietary: "Vegetarian" },
  "Pomodoro Burrata": { sauce: "Tomato Sauces", protein: "None", cheese: "Burrata", heat: "Safe Zone", dietary: "Vegetarian" },
  "Aglio e Olio": { sauce: "Oil Sauces", protein: "None", cheese: "None", heat: "Boss Heat", dietary: "Vegan Option" },
  "Cacio e Pepe": { sauce: "Oil Sauces", protein: "None", cheese: "Pecorino", heat: "Safe Zone", dietary: "Vegetarian" },
  "Basil Pesto Genovese": { sauce: "Oil Sauces", protein: "None", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Chilli Crisp Garlic": { sauce: "Oil Sauces", protein: "None", cheese: "None", heat: "Boss Heat", dietary: "Vegan Option" },
  "Spicy Vodka Vibe": { sauce: "Drop Sauces", protein: "None", cheese: "Parmesan", heat: "Boss Heat", dietary: "Vegetarian" },
  "Blackout Garlic Cream": { sauce: "Drop Sauces", protein: "None", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Neon Basil Rosso": { sauce: "Drop Sauces", protein: "None", cheese: "Parmesan", heat: "Warm-Up", dietary: "Vegetarian" },
  "TakeOver Truffle Alfredo": { sauce: "Drop Sauces", protein: "Vegetable", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Truffle Wild Mushroom": { sauce: "Seasonal Sauces", protein: "Vegetable", cheese: "Parmesan", heat: "Safe Zone", dietary: "Vegetarian" },
  "Cape Lemon Herb": { sauce: "Seasonal Sauces", protein: "Vegetable", cheese: "None", heat: "Safe Zone", dietary: "Vegan Option" },
  "Winter Lamb Ragu": { sauce: "Seasonal Sauces", protein: "Lamb", cheese: "Parmesan", heat: "Safe Zone", dietary: "Meat" },
  "Spring Pea Mascarpone": { sauce: "Seasonal Sauces", protein: "Vegetable", cheese: "Mascarpone", heat: "Safe Zone", dietary: "Vegetarian" },
};

export function dishMatchesFacets(dish: MenuDish, facets: MenuFacetState) {
  const dishFacets = menuDishFacets[dish.name];
  return menuFacetGroups.every(({ key }) => facets[key] === "All" || dishFacets[key] === facets[key]);
}
