export const personalityQuestionsData = [
  {
    id: 1,
    name: "All",
    active: true,
    filter: (breed) => true,
  },
  {
    id: 2,
    name: "Small",
    active: false,
    filter: (breed) => breed.max_height_male <= 15,
  },
  {
    id: 3,
    name: "Medium",
    active: false,
    filter: (breed) =>
      breed.max_height_male > 15 && breed.max_height_male <= 22,
  },
  {
    id: 4,
    name: "Large",
    active: false,
    filter: (breed) =>
      breed.max_height_male > 22 && breed.max_height_male <= 28,
  },
  {
    id: 5,
    name: "extra Large",
    active: false,
    filter: (breed) =>
      breed.max_height_male > 28 && breed.max_height_male < 100,
  },
  {
    id: 6,
    name: "good with children",
    active: false,
    filter: (breed) => breed.good_with_children >= 4,
  },
  {
    id: 7,
    name: "protective",
    active: false,
    filter: (breed) => breed.protectiveness >= 4,
  },
  {
    id: 8,
    name: "much energy",
    active: false,
    filter: (breed) => breed.energy >= 4,
  },
  {
    id: 9,
    name: "little energy",
    active: false,
    filter: (breed) => breed.energy <= 3,
  },
  {
    id: 10,
    name: "easy to train",
    active: false,
    filter: (breed) => breed.trainability >= 4,
  },
  {
    id: 11,
    name: "good with other dogs",
    active: false,
    filter: (breed) => breed.good_with_other_dogs >= 4,
  },
  {
    id: 12,
    name: "good with strangers",
    active: false,
    filter: (breed) => breed.good_with_strangers >= 4,
  },
  {
    id: 13,
    name: "no drooling",
    active: false,
    filter: (breed) => breed.drooling < 2,
  },
  {
    id: 14,
    name: "easy to care for",
    active: false,
    filter: (breed) => breed.grooming <= 2,
  },
  {
    id: 15,
    name: "little barking",
    active: false,
    filter: (breed) => breed.barking <= 2,
  },
];
