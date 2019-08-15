//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = colorArr => {
  let color1 = colorArr[0];
  let color2 = colorArr[1];
return (COLORS.indexOf(color1) * 10) + COLORS.indexOf(color2);
};

export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white,"]