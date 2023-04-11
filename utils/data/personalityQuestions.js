export const personalityQuestionsData = [
  {
    id: 1,
    question: "How big can your dog be?",
    description:
      "A dog's size is important when deciding if it will fit your lifestyle and housing situation, as well as planning its diet, exercise and care requirements.",
    startValue: [50, 70],
    filter: (breed, value) =>
      breed.min_height_male * 2.54 >= value[0] &&
      breed.max_height_male * 2.54 <= value[1],
  },
  {
    id: 2,
    question: "How much exercise can you provide?",
    description:
      "Exercise is important for a dog's physical and mental health. Some breeds require more exercise than others.",
    startValue: [50],
    filter: (breed, value) => breed.energy <= value / 20 - 1,
  },
  {
    id: 3,
    question: "Do you have children?",
    description:
      "Some breeds are better with children than others. It's important to choose a breed that will get along well with your family.",
    startValue: [50],
    filter: (breed, value) => breed.good_with_children <= value / 20,
  },
  {
    id: 4,
    question: "How much grooming are you willing to do?",
    description:
      "Some breeds require more grooming than others. If you don't have a lot of time or money to spend on grooming, you may want to choose a low-maintenance breed.",
    startValue: [50],
    filter: (breed, value) => breed.grooming <= value / 20,
  },
  {
    id: 5,
    question: "How much barking can you tolerate?",
    description:
      "Some breeds are more prone to barking than others. If you live in an apartment or have close neighbors, you may want to choose a breed that is not as vocal.",
    startValue: [50],
    filter: (breed, value) => breed.barking <= value / 20,
  },
  {
    id: 6,
    question: "How much time can you spend training your dog?",
    description:
      "Training is important for a dog's behavior and obedience. Some breeds are easier to train than others.",
    startValue: [50],
    filter: (breed, value) => breed.trainability <= value / 20,
  },
  {
    id: 7,
    question: "Do you have other pets?",
    description:
      "Some breeds get along well with other animals, while others may have a higher prey drive and may not be a good fit for a home with other pets.",
    startValue: [50],
    filter: (breed, value) => breed.good_with_other_dogs <= value / 20,
  },
  {
    id: 8,
    question: "How much shedding can you tolerate?",
    description:
      "Some breeds shed more than others. If you don't want to deal with a lot of hair in your home, you may want to choose a breed that is known for being low-shedding.",
    startValue: [50],
    filter: (breed, value) => breed.shedding <= value / 20,
  },
  {
    id: 9,
    question: "How much time can you spend with your dog each day?",
    description:
      "Dogs are social animals and require human interaction. Some breeds may be more independent and require less attention, while others may be more prone to separation anxiety.",
    startValue: [50],
    filter: (breed, value) => breed.protectiveness <= value / 20,
  },
  {
    id: 10,
    question: "Do you have a fenced yard?",
    description:
      "A fenced yard can provide a safe and secure area for your dog to play and exercise. Some breeds may require a larger yard or may not be suitable for homes without a yard.",
    startValue: [50],
    filter: (breed, value) => breed.drooling <= value / 20,
  },
];
