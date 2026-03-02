export type BunnyBreed = {
  name: string;
  origin: string;
  temperament: string;
  dietFocus: string;
  spotlight: string;
  image: string;
  imageAlt: string;
};

export const bunnyBreeds: BunnyBreed[] = [
  {
    name: "Netherland Dwarf",
    origin: "Netherlands",
    temperament: "Curious, alert, energetic",
    dietFocus: "High-fiber hay, leafy greens, and measured pellets",
    spotlight:
      "Small size with a bold personality. Great for active owners who can provide daily enrichment.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Netherland%20Dwarf.jpg",
    imageAlt: "Netherland Dwarf rabbit standing in grass"
  },
  {
    name: "Holland Lop",
    origin: "Netherlands",
    temperament: "Gentle, social, family-friendly",
    dietFocus: "Timothy hay, herbs, and limited fruit treats",
    spotlight:
      "Known for floppy ears and a calm nature. A strong fit for first-time bunny homes.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Holland%20lop%20rabbit.jpg",
    imageAlt: "Holland Lop rabbit portrait"
  },
  {
    name: "Flemish Giant",
    origin: "Belgium",
    temperament: "Calm, patient, affectionate",
    dietFocus: "Large hay portions, water-rich greens, and joint-supporting nutrition",
    spotlight:
      "One of the largest rabbit breeds. Needs spacious habitat design and soft flooring.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A%20Flemish%20Giant%20rabbit.jpg",
    imageAlt: "Flemish Giant rabbit in a natural setting"
  },
  {
    name: "Lionhead",
    origin: "Belgium",
    temperament: "Playful, bright, attentive",
    dietFocus: "Hay-forward meals and regular hydration for coat support",
    spotlight:
      "Recognized by the mane-like fur around the head. Benefits from regular grooming routines.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rabbit%20-%20Lionhead%20breed.jpg",
    imageAlt: "Lionhead rabbit with fluffy mane"
  },
  {
    name: "Mini Rex",
    origin: "United States",
    temperament: "Friendly, adaptable, playful",
    dietFocus: "Balanced pellets, hay, and crunchy greens",
    spotlight:
      "Velvet coat and easygoing behavior make Mini Rex bunnies a popular companion breed.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mini%20rex%20bunny.jpg",
    imageAlt: "Mini Rex bunny on the ground"
  },
  {
    name: "English Angora",
    origin: "England",
    temperament: "Sweet, calm, routine-oriented",
    dietFocus: "Fiber-rich diet and regular grooming support to reduce wool block risk",
    spotlight:
      "Long wool coat needs consistent brush care and controlled indoor climate.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Englishangora.jpg",
    imageAlt: "English Angora rabbit with long coat"
  },
  {
    name: "Harlequin",
    origin: "France",
    temperament: "Smart, inquisitive, lively",
    dietFocus: "Varied greens and structured feeding windows",
    spotlight:
      "Distinctive two-tone color pattern and a high need for puzzle-based enrichment.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Harlequin%20rabbit.jpg",
    imageAlt: "Harlequin rabbit with patterned coat"
  }
];

export const dietGuides = [
  {
    title: "Daily Fiber Base",
    detail:
      "Hay should represent roughly 80-85% of intake. Keep fresh hay available all day in multiple stations."
  },
  {
    title: "Smart Green Rotation",
    detail:
      "Rotate romaine, cilantro, bok choy, and basil to diversify nutrients and avoid repetitive feeding."
  },
  {
    title: "Treat Boundaries",
    detail:
      "Reserve fruit treats for training moments and keep portions minimal to protect digestive health."
  },
  {
    title: "Hydration Watch",
    detail:
      "Use a bowl plus bottle setup and monitor daily water intake, especially during warmer months."
  }
];
