export const PHONE = "+421 905 123 456";
export const PHONE_HREF = "tel:+421905123456";
export const EMAIL = "ahoj@solpec.sk";
export const ADDRESS = "Pekárska 12, 811 09 Bratislava";

export const NAV = [
  { to: "/", label: "Úvod" },
  { to: "/denne-menu", label: "Denné menu" },
  { to: "/menu", label: "Menu" },
  { to: "/eventy-a-svadby", label: "Eventy" },
  { to: "/o-nas", label: "O nás" },
  { to: "/galeria", label: "Galéria" },
  { to: "/kontakt", label: "Kontakt" },
];

const u = (id) => `https://images.unsplash.com/${id}?q=80&w=1600&auto=format&fit=crop`;
const pexels = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;

export const IMG = {
  heroFlame: u("photo-1606152196365-d1ce5ea838b5"),
  ovenPizza: u("photo-1622880833523-7cf1c0bd4296"),
  breadOven: u("photo-1606265698533-c17fc6003934"),
  pizzaStone: u("photo-1680798671233-a6823e6e9a1e"),
  breadHands: u("photo-1613396874083-2d5fbe59ae79"),
  flourDust: u("photo-1595801106239-faefa2cdcf75"),
  breadFlour: u("photo-1635341814289-55cf1490024c"),
  meatPan: u("photo-1625604086816-4bfaf603e842"),
  plateDark: u("photo-1519077336050-4ca5cac9d64f"),
  lambPlate: u("photo-1692197275441-40c874f40385"),
  dessertDark: u("photo-1590741664176-7fbd7e2592a0"),
  cheesecake: u("photo-1768341857441-9084cfd8676e"),
  weddingGarden: u("photo-1712764995305-75422fbe0ecc"),
  weddingRoses: u("photo-1625680613227-4537c26f5d82"),
  weddingCandles: u("photo-1524777313293-86d2ab467344"),
  weddingLong: u("photo-1533120921505-7f40f5237ee1"),
  interiorWarm: pexels(37307304),
  interiorArch: u("photo-1652195960911-c9f55224bd89"),
  interiorCandle: pexels(2817462),
  embers: u("photo-1748362885463-a19be2920f88"),
  salt: u("photo-1601836011115-7f879e339819"),
  hourglass: u("photo-1518281361980-b26bfd556770"),
  lardoBoard: pexels(6660058),
  cheeseBake: u("photo-1645453014403-4ad5170a386c"),
  beetroot: pexels(3649535),
  tartare: u("photo-1777803243891-0d6f36e50446"),
  tomatoSoup: u("photo-1659480150417-25f9f0d5ca2e"),
  ribs: u("photo-1544025162-d76694265947"),
  chicken: u("photo-1610057099431-d73a1c9d2f2f"),
  trout: u("photo-1727187824542-29cf5d138634"),
  cauliflower: u("photo-1622619314592-51c47342dc74"),
  pappardelle: u("photo-1611270629569-8b357cb88da9"),
  plums: u("photo-1525028572814-575a0576ce20"),
  buchta: u("photo-1610716810599-492da7ac2acf"),
};

export const HOURS = [
  { d: "Pondelok – Štvrtok", t: "11:00 – 22:00" },
  { d: "Piatok – Sobota", t: "11:00 – 23:00" },
  { d: "Nedeľa", t: "11:00 – 18:00" },
];

export const DAILY_NOTE = "Denné menu varíme v pondelok – piatok, 11:00 – 15:00.";

export const DENNE = [
  {
    den: "Pondelok",
    polievka: { n: "Paradajková krém s pečeným cesnakom a bazalkou", p: "3,20" },
    hlavne: [
      { n: "Bravčový kolo z pece, ryža, uhorkový šalát", p: "9,40", pec: true },
      { n: "Zapekané zemiaky s údeným syrom a kyslou smotanou", p: "8,60" },
    ],
    dezert: { n: "Jablkový závin, vanilková omáčka", p: "3,50" },
  },
  {
    den: "Utorok",
    polievka: { n: "Hovädzí vývar so zeleninou a domácimi rezancami", p: "3,40" },
    hlavne: [
      { n: "Kuracie stehno z pece, zemiakové pyré, pečená mrkva", p: "8,90", pec: true },
      { n: "Bryndzové pirohy s praženou slaninou a kyslou kapustou", p: "8,20" },
    ],
    dezert: { n: "Ovocné knedle s maslovou strúhankou", p: "3,60" },
  },
  {
    den: "Streda",
    polievka: { n: "Krém z pečenej tekvice s tekvicovými semienkami", p: "3,30" },
    hlavne: [
      { n: "Polovičné bravčové rebrá z pece, zemiaková baba, kyslá kapusta", p: "11,90", pec: true },
      { n: "Pečený karfiol s chrenovou omáčkou, varené zemiaky", p: "8,90", pec: true },
    ],
    dezert: { n: "Medovník s kávovým krémom", p: "3,40" },
  },
  {
    den: "Štvrtok",
    polievka: { n: "Hubová krémová polievka s chlebovými krutónmi", p: "3,30" },
    hlavne: [
      { n: "Pstruh z pece s bylinkami, zemiakový šalát", p: "10,90", pec: true },
      { n: "Rizoto s pečenou tekvicou a parmezánom", p: "8,40" },
    ],
    dezert: { n: "Laskonky", p: "3,20" },
  },
  {
    den: "Piatok",
    polievka: { n: "Krém z údeného pstruhu, pažítka", p: "3,60" },
    hlavne: [
      { n: "Pomalé bravčové plece z pece, pečené zemiaky, horčica", p: "11,50", pec: true },
      { n: "Zapekané šulky s kapustou a údeným syrom", p: "8,20" },
    ],
    dezert: { n: "Buchty z pece s domácim lekvárom", p: "3,30" },
  },
];

export const MENU = [
  {
    id: "predjedla",
    title: "Predjedlá",
    items: [
      { n: "Údený lardo, pečený chlieb z pece, kyslé uhorky", d: "cibuľový džem, čierne korenie", p: "7,50", img: IMG.lardoBoard },
      { n: "Bryndzový nákyp s karamelizovanou cibuľou", d: "lieskové oriešky, pažítka", p: "8,90", img: IMG.cheeseBake },
      { n: "Pečená repa z pece, kozí syr, vlašské orechy", d: "rebarborový kompot, tymián", p: "9,20", pec: true, img: IMG.beetroot },
      { n: "Hovädzí tatarák na kváskovom chlebe", d: "žĺtok, croutony, koreňová zelenina", p: "12,50", img: IMG.tartare },
      { n: "Dymová krémová polievka z paradajok", d: "chlebové krutóny, tekvicové semiačka", p: "6,80", pec: true, img: IMG.tomatoSoup },
    ],
  },
  {
    id: "hlavne",
    title: "Hlavné jedlá z pece",
    items: [
      { n: "Polovičné bravčové rebrá z pece na dreve", d: "domáca BBQ omáčka, zemiaková baba, kyslá kapusta", p: "18,90", pec: true, img: IMG.ribs },
      { n: "Jahňacie stehná pomaly pečené v hlinene nádobe", d: "rozmarýn, jarná zelenina, cesnakový jogurt", p: "24,50", pec: true, img: IMG.lambPlate },
      { n: "Pečené kuracie stehno z pece", d: "čili maslo, pečená cibuľa, zemiakové pyré", p: "15,40", pec: true, img: IMG.chicken },
      { n: "Pstruh údený v peci nad dymom", d: "chrenová pena, zemiakový šalát", p: "17,80", pec: true, img: IMG.trout },
      { n: "Celý pečený karfiol, chrenová omáčka", d: "gaštanový crumble, petržlenová vňať", p: "14,90", pec: true, img: IMG.cauliflower },
      { n: "Pappardelle s jahňacím ragú pomaly duseným v peci", d: "parmezán, bazalka", p: "16,20", img: IMG.pappardelle },
    ],
  },
  {
    id: "dezerty",
    title: "Dezerty",
    items: [
      { n: "Teplé slivky z pece", d: "hnedé maslo, škoricový crumble, smotana", p: "6,90", pec: true, img: IMG.plums },
      { n: "Čokoládový fondant", d: "slaný karamel, vanilková zmrzlina", p: "7,20", img: IMG.dessertDark },
      { n: "Parená buchta s domácim lekvárom", d: "opekané mandle, šľahačka", p: "6,50", img: IMG.buchta },
      { n: "Kváskový syrník", d: "pečené lieskovce, med z Malých Karpát", p: "6,80", img: IMG.cheesecake },
    ],
  },
  {
    id: "napoje",
    title: "Nápoje & víno",
    items: [
      { n: "Domáca limonáda rebarbora alebo citrón-levanduľa", d: "0,4 l", p: "4,50" },
      { n: "Vlážna medovina z Malých Karpát", d: "0,2 l", p: "4,80" },
      { n: "Craft pivo z lokálneho pivovaru", d: "0,3 / 0,5 l", p: "3,20 / 4,20" },
      { n: "Rizling rýnsky 2022, Malé Karpaty", d: "pohár 0,25 l", p: "3,90" },
      { n: "Svätovavrinecké 2021, Malé Karpaty", d: "pohár 0,25 l", p: "4,10" },
      { n: "Káva z lokálnej pražiarne & čaje", d: "espreso, cappuccino, filtr", p: "2,90 – 3,90" },
    ],
  },
];

export const GALLERY_FILTERS = [
  { k: "vsetko", l: "Všetko" },
  { k: "pec", l: "Z pece" },
  { k: "interier", l: "Interiér" },
  { k: "oslavy", l: "Oslavy" },
];

export const GALLERY = [
  { src: IMG.heroFlame, cat: "pec", t: "Oheň v peci" },
  { src: IMG.breadHands, cat: "pec", t: "Ručné miešanie cesta" },
  { src: IMG.ovenPizza, cat: "pec", t: "Pizza pri plameňoch" },
  { src: IMG.breadOven, cat: "pec", t: "Kváskový chlieb, čerstvý z pece" },
  { src: IMG.plateDark, cat: "pec", t: "Tatarák na kváskovom chlebe" },
  { src: IMG.dessertDark, cat: "pec", t: "Čokoládový fondant" },
  { src: IMG.pizzaStone, cat: "pec", t: "Na kameni" },
  { src: IMG.interiorWarm, cat: "interier", t: "Hlavná sála" },
  { src: IMG.interiorArch, cat: "interier", t: "Klenby a drevo" },
  { src: IMG.interiorCandle, t: "Večerné svetlo", cat: "interier" },
  { src: IMG.weddingGarden, cat: "oslavy", t: "Malá svadba v záhrade" },
  { src: IMG.weddingRoses, cat: "oslavy", t: "Svadobné stoly" },
  { src: IMG.weddingCandles, cat: "oslavy", t: "Sviečky a kvety" },
];

export const PACKAGES = [
  {
    n: "Rodinná oslava",
    cap: "do 20 hostí",
    price: "od 29 € / os.",
    points: ["Dlhý spoločný stôl pri peci", "Výber z troch hlavných chodov", "Domáce koláče k káve"],
  },
  {
    n: "Malá svadba",
    cap: "do 40 hostí",
    price: "od 49 € / os.",
    points: ["Uvítací drink a pohostenie", "Štyri chody priamo z pece", "Dekorácia stola a sviečky"],
  },
  {
    n: "Firemná večera",
    cap: "na mieru",
    price: "podľa dohody",
    points: ["Celý priestor len pre vás", "Vlastný program a hudba", "Pečené prasiatko z pece"],
  },
];
