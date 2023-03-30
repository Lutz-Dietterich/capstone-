export const filterButtonsData = [
  {
    id: 1,
    name: "All",
    value: "all",
    active: true,
    criteria: "breedData",
  },
  {
    id: 2,
    name: "Small",
    value: "Small",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.max_height_male <= 15
    )`,
  },
  {
    id: 3,
    name: "Medium",
    value: "Medium",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.max_height_male > 15 && breed.max_height_male <= 22
    )`,
  },
  {
    id: 4,
    name: "Large",
    value: "Large",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.max_height_male > 22 && breed.max_height_male <= 28
    )`,
  },
  {
    id: 5,
    name: "extra Large",
    value: "extra Large",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.max_height_male > 28 && breed.max_height_male < 100
    )`,
  },
  {
    id: 6,
    name: "good with children",
    value: "good with children",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.good_with_children >= 4
    )`,
  },
  {
    id: 7,
    name: "protective",
    value: "protective",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.protectiveness >= 4
    )`,
  },
  {
    id: 8,
    name: "much energy",
    value: "much energy",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.energy >= 4
    )`,
  },
  {
    id: 9,
    name: "little energy",
    value: "little energy",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.energy <= 3
    )`,
  },
  {
    id: 10,
    name: "easy to train",
    value: "easy to train",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.trainability >= 4
    )`,
  },
  {
    id: 11,
    name: "good with other dogs",
    value: "good with other dogs",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.good_with_other_dogs >= 4
    )`,
  },
  {
    id: 12,
    name: "good with strangers",
    value: "good with strangers",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.good_with_strangers >= 4
    )`,
  },
  {
    id: 13,
    name: "no drooling",
    value: "no drooling",
    active: false,
    criteria: `breedData.filter(
      (breed) => breed.drooling < 2
    )`,
  },
];
