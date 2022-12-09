const book = [
  {
    id: "1",
    img: require("../assets/imkF.jpg"),
    name: "Pendahuluan",
    date: "2022 Dec 1",
    onClick: "Bab1",
    isNew: true,
  },
  {
    id: "2",
    img: require("../assets/imkB.jpg"),
    name: "Dummy",
    date: "2022 Dec 2",
    onClick: "Bab2",
    isNew: false,
  },
];

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export { book, getWindowDimensions };
