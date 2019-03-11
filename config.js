module.exports = {
  notAllowed: [
    (name)=>name.startsWith(":middle_finger"),
    (name)=>name.startsWith(":skull"),
    (name)=>name.startsWith(":ghost"),
    (name)=>name.startsWith(":metal"),
    (name)=>name.indexOf("beer") != -1,
    (name)=>name.indexOf("wine") != -1,
    (name)=>name.indexOf("cocktail") != -1,
    (name)=>name.indexOf("champagne") != -1,
    (name)=>name.match(/_tone\d/) != undefined
  ],
  sizes: [32, 64, 128],
  output: "./data",
};