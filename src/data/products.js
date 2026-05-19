const asset = (fileName) => encodeURI(`/assets/images/product/${fileName}`);
const thumb = (fileName) => encodeURI(`/assets/images/product/thumbs/${PathSafeStem(fileName)}.jpg`);

function PathSafeStem(fileName) {
  const parts = fileName.split(".");
  parts.pop();
  return parts.join(".");
}

export const products = [
  {
    id: "01",
    name: "Bar Grill",
    image: thumb("Bar_Grill_1800x1800.webp"),
    fullImage: asset("Bar_Grill_1800x1800.webp"),
    featured: true,
  },
  {
    id: "02",
    name: "Disc Valve Exhaust",
    image: thumb("Disc valve Exhaust.jpg"),
    fullImage: asset("Disc valve Exhaust.jpg"),
    featured: true,
  },
  {
    id: "03",
    name: "Egg Crate Grille",
    image: thumb("H60a7e3c811a645819a3f1ca2ec7a2582k.webp"),
    fullImage: asset("H60a7e3c811a645819a3f1ca2ec7a2582k.webp"),
    featured: true,
  },
  {
    id: "04",
    name: "Linear Bar Grille",
    image: thumb("LinearBarGrilleBG-600x300__PadWzY4MCwzMDAsIkZGRkZGRiIsMF0.png"),
    fullImage: asset("LinearBarGrilleBG-600x300__PadWzY4MCwzMDAsIkZGRkZGRiIsMF0.png"),
    featured: true,
  },
  {
    id: "05",
    name: "Plaque Diffuser",
    image: thumb("PLAQUE DIFFUSER.jpg"),
    fullImage: asset("PLAQUE DIFFUSER.jpg"),
    featured: true,
  },
  {
    id: "06",
    name: "Round Diffuser",
    image: thumb("Round Diffuser.jpg"),
    fullImage: asset("Round Diffuser.jpg"),
    featured: true,
  },
  {
    id: "07",
    name: "Square Diffuser",
    image: thumb("SQUARE DIFFUSER.jpg"),
    fullImage: asset("SQUARE DIFFUSER.jpg"),
    featured: true,
  },
  {
    id: "08",
    name: "Square Diffuser Pro",
    image: thumb("SQUARE DIFFUSER2.jpg"),
    fullImage: asset("SQUARE DIFFUSER2.jpg"),
    featured: true,
  },
  {
    id: "09",
    name: "Single Deflection Grille",
    image: thumb("Supply-Return-Linear-Bar-Grilles-–-Single-Deflection.png"),
    fullImage: asset("Supply-Return-Linear-Bar-Grilles-–-Single-Deflection.png"),
    featured: false,
  },
  {
    id: "10",
    name: "Vent Cap",
    image: thumb("VENT CAP.jpg"),
    fullImage: asset("VENT CAP.jpg"),
    featured: false,
  },
  {
    id: "11",
    name: "Vent Cap Type 2",
    image: thumb("VENT CAP 2.jpg"),
    fullImage: asset("VENT CAP 2.jpg"),
    featured: false,
  },
  {
    id: "12",
    name: "Double Deflection Grille",
    image: thumb("double deflection grille.jpg"),
    fullImage: asset("double deflection grille.jpg"),
    featured: false,
  },
  {
    id: "13",
    name: "Fire Smoke Damper",
    image: thumb("fire smoke damper.jpg"),
    fullImage: asset("fire smoke damper.jpg"),
    featured: false,
  },
  {
    id: "14",
    name: "Gravity Louvers",
    image: thumb("gravty louvers.jpg"),
    fullImage: asset("gravty louvers.jpg"),
    featured: false,
  },
  {
    id: "15",
    name: "Fresh Air Intake",
    image: thumb("intake.jpg"),
    fullImage: asset("intake.jpg"),
    featured: false,
  },
  {
    id: "16",
    name: "Jet Nozzle",
    image: thumb("jet nozzle.jpg"),
    fullImage: asset("jet nozzle.jpg"),
    featured: false,
  },
  {
    id: "17",
    name: "Linear Bar Grills",
    image: thumb("linear-bar-grills-1.webp"),
    fullImage: asset("linear-bar-grills-1.webp"),
    featured: false,
  },
  {
    id: "18",
    name: "Liner Bar Grille",
    image: thumb("liner bar grille.jpg"),
    fullImage: asset("liner bar grille.jpg"),
    featured: false,
  },
  {
    id: "19",
    name: "Sand Trap",
    image: thumb("sand trap.jpg"),
    fullImage: asset("sand trap.jpg"),
    featured: false,
  },
  {
    id: "20",
    name: "Slot Diffuser",
    image: thumb("slot diffuser.jpg"),
    fullImage: asset("slot diffuser.jpg"),
    featured: false,
  },
  {
    id: "21",
    name: "Turbo Ventilator",
    image: thumb("turbo ventilator.jpg"),
    fullImage: asset("turbo ventilator.jpg"),
    featured: false,
  },
  {
    id: "22",
    name: "Turbo Ventilator Type 2",
    image: thumb("turbo ventilator1.jpg"),
    fullImage: asset("turbo ventilator1.jpg"),
    featured: false,
  },
  {
    id: "23",
    name: "Volume Control Damper",
    image: thumb("voluome control damper.jpg"),
    fullImage: asset("voluome control damper.jpg"),
    featured: false,
  },
  {
    id: "24",
    name: "Volume Control Damper Plus",
    image: thumb("voluome control damper.jpg1.jpg"),
    fullImage: asset("voluome control damper.jpg1.jpg"),
    featured: false,
  },
  {
    id: "25",
    name: "Volume Control Damper Round",
    image: thumb("voluome1.jpg"),
    fullImage: asset("voluome1.jpg"),
    featured: false,
  },
];

export const featuredProducts = products.filter((product) => product.featured);
