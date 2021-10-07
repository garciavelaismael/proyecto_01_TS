import { leer } from "./leer";

export const menu = async () => {
  let n: number;
  console.log("\n");
  console.log("1.- Sumar");
  console.log("2.- Multiplicar");
  console.log("3.- Restar");
  console.log("4.- Media");
  console.log("5.- MCD");
  console.log("6.- MCM");
  console.log("7.- Primo");
  console.log("8.- Pares");
  console.log("9.- Fechas");
  console.log("0.- Salir");
  n = parseInt(await leer("opción: "));
  return n;
};
