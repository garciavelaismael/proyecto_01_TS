import { leer } from "./leer";

export const fechas = async () => {
  let actualDate = new Date();
  let age = await leer("Introduce el día con el mes y el año");
  let ageDate = new Date(age);
  var result = ageDate.valueOf() - actualDate.valueOf();
  let ageResult = result / 86400000;
  console.log("Quedan", Math.trunc(ageResult), "días para el", ageDate);
};
