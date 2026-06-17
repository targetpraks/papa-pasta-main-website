export interface Zone {
  id: number;
  province: string;
  name: string;
  primaryColor: string;
  secondaryColor: string;
  school?: string;
  schoolColours?: string;
  footballClub?: string;
  footballColours?: string;
  status: "open" | "coming_soon" | "available";
}

export const zones: Zone[] = [
  { id: 1, province: "Eastern Cape", name: "BCM — East London Central", primaryColor: "Red", secondaryColor: "White", school: "Selborne College / Dale College", schoolColours: "Red & White / Blue & White", footballClub: "Chippa United (nearby)", footballColours: "Green/White", status: "coming_soon" },
  { id: 2, province: "Eastern Cape", name: "BCM — King Williams Town/Bhisho", primaryColor: "Blue", secondaryColor: "White", school: "Dale College", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 3, province: "Eastern Cape", name: "BCM — Mdantsane/Duncan Village", primaryColor: "Green", secondaryColor: "White", footballClub: "Chippa United", footballColours: "Green/White", status: "coming_soon" },
  { id: 4, province: "Eastern Cape", name: "NMB Central — Gqeberha CBD/Summerstrand", primaryColor: "Grey", secondaryColor: "Maroon", school: "Grey High School", schoolColours: "Grey/Maroon", footballClub: "Chippa United", footballColours: "Green/White", status: "coming_soon" },
  { id: 5, province: "Eastern Cape", name: "NMB North — Newton Park/Walmer", primaryColor: "Blue", secondaryColor: "Gold", school: "Pearson High School", schoolColours: "Blue/Gold", footballClub: "Chippa United", footballColours: "Green/White", status: "coming_soon" },
  { id: 6, province: "Eastern Cape", name: "NMB Township — iBhayi/Motherwell", primaryColor: "Orange", secondaryColor: "White", footballClub: "Chippa United", footballColours: "Green/White", status: "coming_soon" },
  { id: 7, province: "Eastern Cape", name: "NMB West — Uitenhage/Despatch", primaryColor: "Green", secondaryColor: "White", school: "Muir College", schoolColours: "Green/White", status: "coming_soon" },
  { id: 8, province: "Free State", name: "MAN — Bloemfontein Central/West", primaryColor: "Grey", secondaryColor: "Blue", school: "Grey College", schoolColours: "Grey/Blue", footballClub: "Bloemfontein Celtic / Free State Stars", footballColours: "Blue/White; Red/White", status: "coming_soon" },
  { id: 9, province: "Free State", name: "MAN — Bloemfontein North/East", primaryColor: "Red", secondaryColor: "White", school: "Eunice High / Jim Fouché", schoolColours: "Blue/White; Green/Gold", footballClub: "Free State Stars", footballColours: "Red/White", status: "coming_soon" },
  { id: 10, province: "Free State", name: "MAN — Botshabelo/Thaba Nchu", primaryColor: "Teal", secondaryColor: "White", status: "coming_soon" },
  { id: 11, province: "Gauteng", name: "EKU — Alberton/Brackendowns", primaryColor: "Royal Blue", secondaryColor: "Gold", school: "Alberton High", schoolColours: "Blue/Gold", status: "coming_soon" },
  { id: 12, province: "Gauteng", name: "EKU — Boksburg/Benoni", primaryColor: "Crimson", secondaryColor: "White", school: "Hoërskool Kempton Park / Benoni High", schoolColours: "Blue/White; Maroon/White", footballClub: "ER FC (historical)", status: "coming_soon" },
  { id: 13, province: "Gauteng", name: "EKU — Germiston/Primrose", primaryColor: "Dark Green", secondaryColor: "Gold", school: "Germiston High", schoolColours: "Green/Gold", status: "coming_soon" },
  { id: 14, province: "Gauteng", name: "EKU — Kempton Park/Tembisa", primaryColor: "Bright Blue", secondaryColor: "White", school: "Kempton Park High", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 15, province: "Gauteng", name: "EKU — Springs/Brakpan/Nigel", primaryColor: "Maroon", secondaryColor: "Silver", school: "Springs Boys High", schoolColours: "Maroon/White", status: "coming_soon" },
  { id: 16, province: "Gauteng", name: "JHB — Bedfordview/Edenvale", primaryColor: "Green", secondaryColor: "Gold", school: "Jeppe Boys High", schoolColours: "Green/Gold/Black", status: "coming_soon" },
  { id: 17, province: "Gauteng", name: "JHB — CBD/Braamfontein", primaryColor: "Purple", secondaryColor: "White", school: "Wits University", status: "coming_soon" },
  { id: 18, province: "Gauteng", name: "JHB — Diepsloot/Ivory Park", primaryColor: "Lime", secondaryColor: "White", status: "coming_soon" },
  { id: 19, province: "Gauteng", name: "JHB — Fourways/Bryanston/Lonehill", primaryColor: "Gold", secondaryColor: "Navy", school: "Bryanston High / Crawford College", schoolColours: "Blue/Gold; Blue/White", status: "coming_soon" },
  { id: 20, province: "Gauteng", name: "JHB — Houghton/Parktown", primaryColor: "Maroon", secondaryColor: "Gold", school: "KES / St Johns College", schoolColours: "Maroon/Gold; Blue/White", footballClub: "Kaizer Chiefs / Orlando Pirates", footballColours: "Gold/Black; Black/White", status: "coming_soon" },
  { id: 21, province: "Gauteng", name: "JHB — Lenasia/Eldorado Park", primaryColor: "Orange", secondaryColor: "White", school: "Nirvana High / Eldorado Park High", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 22, province: "Gauteng", name: "JHB — Meyersdal/Glenvista/Bassonia", primaryColor: "Emerald Green", secondaryColor: "Gold", school: "Hoërskool Jim Fouché / Mondeor High", schoolColours: "Green/Gold; Blue/White", status: "coming_soon" },
  { id: 23, province: "Gauteng", name: "JHB — Midrand/Carlswald", primaryColor: "Teal", secondaryColor: "White", school: "Midrand High / Reddam House", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 24, province: "Gauteng", name: "JHB — Orange Farm/Evaton", primaryColor: "Brown", secondaryColor: "Cream", status: "coming_soon" },
  { id: 25, province: "Gauteng", name: "JHB — Roodepoort/Florida/Northcliff", primaryColor: "Sky Blue", secondaryColor: "White", school: "Florida Park High / Hoërskool Noordheuwel", schoolColours: "Blue/White; Green/Gold", status: "coming_soon" },
  { id: 26, province: "Gauteng", name: "JHB — Rosebank/Parkhurst", primaryColor: "Navy Blue", secondaryColor: "Red", school: "Parktown Boys / Parktown Girls", schoolColours: "Blue/Red; Blue/White", status: "coming_soon" },
  { id: 27, province: "Gauteng", name: "JHB — Sandton/Morningside", primaryColor: "Royal Blue", secondaryColor: "Red", school: "St Stithians College", schoolColours: "Blue/White/Red", status: "coming_soon" },
  { id: 28, province: "Gauteng", name: "JHB — Soweto", primaryColor: "Black", secondaryColor: "Gold", school: "Orlando High / Morris Isaacson", schoolColours: "Black/Gold; Green/Yellow", footballClub: "Kaizer Chiefs / Orlando Pirates", footballColours: "Gold/Black; Black/White", status: "coming_soon" },
  { id: 29, province: "Gauteng", name: "Krugersdorp/Mogale City", primaryColor: "Slate Blue", secondaryColor: "White", school: "Monument High", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 30, province: "Gauteng", name: "PTA — Atteridgeville/Laudium", primaryColor: "Copper", secondaryColor: "White", status: "coming_soon" },
  { id: 31, province: "Gauteng", name: "PTA — Bronkhorstspruit/Cullinan", primaryColor: "Stone", secondaryColor: "White", status: "coming_soon" },
  { id: 32, province: "Gauteng", name: "PTA — Brooklyn/Menlo Park/Lynnwood", primaryColor: "White", secondaryColor: "Green", school: "Pretoria Boys High", schoolColours: "White/Green", footballClub: "Mamelodi Sundowns", footballColours: "Yellow/Green/Blue", status: "coming_soon" },
  { id: 33, province: "Gauteng", name: "PTA — Centurion/Irene", primaryColor: "Blue", secondaryColor: "Yellow", school: "Lyttelton Manor High / Centurion College", schoolColours: "Blue/Yellow", footballClub: "SuperSport United", footballColours: "Blue/White", status: "coming_soon" },
  { id: 34, province: "Gauteng", name: "PTA — Garsfontein/Waterkloof/Menlyn", primaryColor: "Maroon", secondaryColor: "White", school: "Waterkloof High / Menlopark High", schoolColours: "Blue/White; Maroon/White", footballClub: "Mamelodi Sundowns", footballColours: "Yellow/Green/Blue", status: "coming_soon" },
  { id: 35, province: "Gauteng", name: "PTA — Hatfield/Sunnyside", primaryColor: "Green", secondaryColor: "Gold", school: "Afrikaanse Hoër Seunskool (Affies)", schoolColours: "Green/Gold", footballClub: "Mamelodi Sundowns", footballColours: "Yellow/Green/Blue", status: "coming_soon" },
  { id: 36, province: "Gauteng", name: "PTA — Mamelodi/Eersterust", primaryColor: "Sunflower Yellow", secondaryColor: "Blue", footballClub: "Mamelodi Sundowns", footballColours: "Yellow/Green/Blue", status: "coming_soon" },
  { id: 37, province: "Gauteng", name: "PTA — Sinoville/Montana/Wonderboom", primaryColor: "Forest Green", secondaryColor: "White", school: "Hoërskool Wonderboom / Montana High", schoolColours: "Green/White; Blue/Gold", status: "coming_soon" },
  { id: 38, province: "Gauteng", name: "PTA — Soshanguve/Mabopane/Ga-Rankuwa", primaryColor: "Yellow", secondaryColor: "Green", school: "TUT (Soshanguve campus)", footballClub: "Mamelodi Sundowns", footballColours: "Yellow/Green/Blue", status: "coming_soon" },
  { id: 39, province: "KwaZulu-Natal", name: "DBN — Amanzimtoti/Chatsworth/Umlazi", primaryColor: "Gold", secondaryColor: "Black", school: "Chatsworth schools / Grosvenor Boys", schoolColours: "Various", footballClub: "Lamontville Golden Arrows", footballColours: "Gold/Black", status: "coming_soon" },
  { id: 40, province: "KwaZulu-Natal", name: "DBN — Beachfront/Point", primaryColor: "Turquoise", secondaryColor: "Sand", footballClub: "AmaZulu FC", footballColours: "Green/White", status: "coming_soon" },
  { id: 41, province: "KwaZulu-Natal", name: "DBN — Berea/Musgrave/Glenwood", primaryColor: "Green", secondaryColor: "Black", school: "DHS / Glenwood Boys High", schoolColours: "Blue/Black; Green/White", footballClub: "AmaZulu FC", footballColours: "Green/White", status: "coming_soon" },
  { id: 42, province: "KwaZulu-Natal", name: "DBN — Cato Ridge/Outer West", primaryColor: "Olive", secondaryColor: "White", status: "coming_soon" },
  { id: 43, province: "KwaZulu-Natal", name: "DBN — Pinetown/Westville/Hillcrest", primaryColor: "Red", secondaryColor: "Black", school: "Westville Boys High / Kearsney", schoolColours: "Red/Black; Maroon/Blue", status: "coming_soon" },
  { id: 44, province: "KwaZulu-Natal", name: "DBN — Tongaat/Verulam/KwaMashu", primaryColor: "Saffron", secondaryColor: "White", school: "Tongaat High / KwaMashu schools", status: "coming_soon" },
  { id: 45, province: "KwaZulu-Natal", name: "DBN — Umhlanga/Mount Edgecombe", primaryColor: "Gold", secondaryColor: "Green", school: "Northwood Boys High / Umhlanga College", schoolColours: "Green/Gold; Blue/White", status: "coming_soon" },
  { id: 46, province: "KwaZulu-Natal", name: "KZN — Ballito/Salt Rock/Zimbali", primaryColor: "Navy", secondaryColor: "White", school: "Crawford College Ballito", schoolColours: "Navy/White", status: "coming_soon" },
  { id: 47, province: "KwaZulu-Natal", name: "KZN — Pietermaritzburg", primaryColor: "Red", secondaryColor: "Blue", school: "Maritzburg College", schoolColours: "Red/Black/White", footballClub: "Maritzburg United", footballColours: "Red/Blue", status: "coming_soon" },
  { id: 48, province: "Limpopo", name: "LIM — Polokwane Central", primaryColor: "Orange", secondaryColor: "Black", school: "Capricorn High", schoolColours: "Blue/Yellow", footballClub: "Polokwane City / Baroka FC", footballColours: "Orange/Black", status: "coming_soon" },
  { id: 49, province: "Limpopo", name: "LIM — Polokwane South/Seshego", primaryColor: "Teal", secondaryColor: "White", footballClub: "Baroka FC", footballColours: "Orange/Black", status: "coming_soon" },
  { id: 50, province: "Limpopo", name: "LIM — Tzaneen/Mopani", primaryColor: "Forest Green", secondaryColor: "Gold", school: "Merensky High / Ben Vorster High", schoolColours: "Blue/White; Green/Gold", status: "coming_soon" },
  { id: 51, province: "Mpumalanga", name: "MPU — Mbombela (Nelspruit)", primaryColor: "Purple", secondaryColor: "Silver", school: "Nelspruit High / Bergvlam", schoolColours: "Blue/White; Green/Gold", footballClub: "TS Galaxy", footballColours: "Purple/Silver", status: "coming_soon" },
  { id: 52, province: "Mpumalanga", name: "MPU — Secunda/Standerton", primaryColor: "Crimson", secondaryColor: "White", school: "Hoërskool Secunda / Hoërskool Ermelo", schoolColours: "Blue/White; Green/Gold", status: "coming_soon" },
  { id: 53, province: "Mpumalanga", name: "MPU — eMalahleni (Witbank)", primaryColor: "Gold", secondaryColor: "Blue", school: "Witbank High / Hoërskool Middelburg", schoolColours: "Blue/Gold; Maroon/White", footballClub: "eMalahleni United FC", footballColours: "Blue/White", status: "coming_soon" },
  { id: 54, province: "North West", name: "NW — Mahikeng/Brits", primaryColor: "Sky Blue", secondaryColor: "White", school: "Hoërskool Lichtenburg / Zeerust High", schoolColours: "Blue/White; Green/White", status: "coming_soon" },
  { id: 55, province: "North West", name: "NW — Potchefstroom/Klerksdorp", primaryColor: "Maroon", secondaryColor: "Silver", school: "Potchefstroom Boys High / Hoër Volkskool", schoolColours: "Blue/White; Maroon/White", status: "coming_soon" },
  { id: 56, province: "North West", name: "NW — Rustenburg/Phokeng", primaryColor: "Gold", secondaryColor: "White", school: "Rustenburg High / Hoërskool Rustenburg", schoolColours: "Blue/White; Green/Gold", footballClub: "Royal AM (nearby)", footballColours: "Gold/Black", status: "coming_soon" },
  { id: 57, province: "Northern Cape", name: "NC — Kimberley/Sol Plaatje", primaryColor: "Diamond Blue", secondaryColor: "White", school: "Kimberley Boys High / Hoërskool Diamantveld", schoolColours: "Blue/White; Maroon/White", status: "coming_soon" },
  { id: 58, province: "Northern Cape", name: "NC — Upington/Kathu", primaryColor: "Rust", secondaryColor: "Cream", school: "Hoërskool Upington / Kathu High", schoolColours: "Blue/White; Green/White", status: "coming_soon" },
  { id: 59, province: "Western Cape", name: "CT — Atlantic Seaboard", primaryColor: "Ocean Blue", secondaryColor: "White", status: "open" },
  { id: 60, province: "Western Cape", name: "CT — Atlantis/Mamre", primaryColor: "Grey", secondaryColor: "White", status: "coming_soon" },
  { id: 61, province: "Western Cape", name: "CT — CBD/Gardens/Tamboerskloof", primaryColor: "White", secondaryColor: "Navy", school: "SACS (nearby)", schoolColours: "White/Blue", footballClub: "Cape Town City FC", footballColours: "Yellow/Blue", status: "open" },
  { id: 62, province: "Western Cape", name: "CT — Cape Flats/Mitchells Plain/Khayelitsha", primaryColor: "Red", secondaryColor: "White", footballClub: "Cape Town Spurs (historical)", footballColours: "Red/White", status: "coming_soon" },
  { id: 63, province: "Western Cape", name: "CT — Helderberg/Somerset West", primaryColor: "Teal", secondaryColor: "Red", school: "Parel Vallei / Hottentots Holland", schoolColours: "Blue/Red; Green/Gold", status: "coming_soon" },
  { id: 64, province: "Western Cape", name: "CT — Kraaifontein/Kuils River/Blue Downs", primaryColor: "Olive", secondaryColor: "White", status: "coming_soon" },
  { id: 65, province: "Western Cape", name: "CT — Northern Suburbs", primaryColor: "Deep Red", secondaryColor: "White", school: "DF Malan / Bellville High", schoolColours: "Blue/White; Maroon/White", status: "coming_soon" },
  { id: 66, province: "Western Cape", name: "CT — South Peninsula", primaryColor: "Sand", secondaryColor: "Navy", school: "Fish Hoek High / Simons Town High", schoolColours: "Blue/White; Navy/Gold", status: "coming_soon" },
  { id: 67, province: "Western Cape", name: "CT — Southern Suburbs", primaryColor: "Burgundy", secondaryColor: "Gold", school: "Bishops / SACS / Wynberg Boys", schoolColours: "Blue & White; White & Blue; Maroon & Gold", status: "coming_soon" },
  { id: 68, province: "Western Cape", name: "CT — V&A Waterfront/Green Point/Sea Point", primaryColor: "Yellow", secondaryColor: "Blue", footballClub: "Cape Town City FC", footballColours: "Yellow/Blue", status: "open" },
  { id: 69, province: "Western Cape", name: "CT — West Coast/Blouberg/Century City", primaryColor: "Sky Blue", secondaryColor: "White", school: "Table View High / Blouberg schools", schoolColours: "Blue/White", status: "coming_soon" },
  { id: 70, province: "Western Cape", name: "WC — Garden Route", primaryColor: "Forest Green", secondaryColor: "Gold", school: "Outeniqua High / Knysna High", schoolColours: "Green/Gold; Blue/White", status: "coming_soon" },
  { id: 71, province: "Western Cape", name: "WC — Paarl/Wellington", primaryColor: "Silver", secondaryColor: "Navy", school: "Paarl Boys' High / Paarl Gimnasium", schoolColours: "Navy/Silver; Green/Maroon", status: "coming_soon" },
  { id: 72, province: "Western Cape", name: "WC — Stellenbosch/Franschhoek", primaryColor: "Burgundy", secondaryColor: "White", school: "Paul Roos / Rhenish", schoolColours: "Maroon/White; Navy/White", status: "coming_soon" },
];

export const provinces = Array.from(new Set(zones.map(z => z.province)));

export function getColorHex(name: string): string {
  const colorMap: Record<string, string> = {
    Red: "#ef4444", Blue: "#3b82f6", Green: "#22c55e", Grey: "#6b7280", Maroon: "#7f1d1d",
    Gold: "#eab308", Orange: "#f97316", White: "#ffffff", Navy: "#1e3a8a", Teal: "#14b8a6",
    Purple: "#a855f7", Lime: "#84cc16", Black: "#0a0a0a", Crimson: "#991b1b", Silver: "#c0c0c0",
    RoyalBlue: "#4169e1", DarkGreen: "#166534", BrightBlue: "#0ea5e9", Brown: "#8B4513",
    SkyBlue: "#87ceeb", NavyBlue: "#000080", SlateBlue: "#6a5acd", Copper: "#b87333",
    Stone: "#a8a29e", ForestGreen: "#14532d", Yellow: "#fbbf24", SunflowerYellow: "#facc15",
    DiamondBlue: "#00b7eb", Rust: "#b7410e", OceanBlue: "#006994", DeepRed: "#b91c1c",
    Burgundy: "#720e1e", Sand: "#c2b280", Olive: "#6b8e23", Saffron: "#f4c430",
    Forest: "#228b22", Turquoise: "#40e0d0", Coral: "#ff7f50", Magenta: "#ff00ff",
    EmeraldGreen: "#50c878", Pink: "#ec4899", Cream: "#fffdd0", Charcoal: "#36454f",
  };
  const key = name.replace(/[^a-zA-Z]/g, "");
  return colorMap[key] || "#ffffff";
}
