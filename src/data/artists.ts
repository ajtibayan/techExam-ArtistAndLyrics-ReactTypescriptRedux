export type artist = {
  id: string;
  name: string;
  nationality: string;
  age: number;
  isSelected: boolean;
};

export const artists: artist[] = [
  {
    id: "1",
    name: "Bruno Mars",
    nationality: "American",
    age: 20,
    isSelected: false,
  },
  {
    id: "2",
    name: "Adele",
    nationality: "English",
    age: 21,
    isSelected: false,
  },
  {
    id: "3",
    name: "Michael Jackson",
    nationality: "American",
    age: 19,
    isSelected: false,
  },
  {
    id: "4",
    name: "Taylor Swift",
    nationality: "American",
    age: 19,
    isSelected: false,
  },
  {
    id: "5",
    name: "Drake",
    nationality: "Canadian",
    age: 19,
    isSelected: false,
  },
];
