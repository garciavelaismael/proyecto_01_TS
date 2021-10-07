import { menu } from "./view/menu";
import { leer } from "./view/leer";
import { fechas } from "./view/cont";

const main = async () => {
  let n: number;
  let n1: number, n2: number;
  do {
    n = await menu();
    switch (n) {
      case 1:
        console.log("Estas en la suma");
        await sumar();
        break;
      case 2:
        console.log("Estas en la multiplicación");
        n1 = parseInt(await leer("Dame un número"));
        n2 = parseInt(await leer("Dame otro número"));
        console.log(`El resultado es: ${multiplicar(n1, n2)}`);
        break;
      case 3:
        console.log("Estas en la resta");
        n1 = parseInt(await leer("Dame un número"));
        n2 = parseInt(await leer("Dame otro número"));
        console.log(`El resultado es: ${n1 - n2}`);
        break;
      case 4:
        console.log("Estas en la media");
        n1 = parseInt(await leer("Dame un número"));
        n2 = parseInt(await leer("Dame otro número"));
        console.log(`El resultado es: ${(n1 + n2) / 2}`);
        break;
      case 5:
        console.log("Estas en el MCD");
        await mcd();
        break;
      case 6:
        console.log("Estas en el MCM");
        await mcm();
        break;
      case 7:
        console.log("Estas en la comprobación de primos");
        await primo();
        break;
      case 8:
        console.log("Estas en la comprobación de pares");
        await pares();
        break;
      case 9:
        console.log("Estas en el contador de fecha");
        await fechas();
        break;
      case 0:
        console.log("Bye");
        break;
      default:
        console.log("Opción incorrecta");
        break;
    }
  } while (n != 0);
};
const sumar = async () => {
  let n1: number;
  let n2: number;
  n1 = parseInt(await leer("Dame un número"));
  n2 = parseInt(await leer("Dame otro número"));
  console.log(`La suma es ${n1 + n2}`);
};
const multiplicar = (n1: number, n2: number): number => n1 * n2;
const mcd = async () => {
  let n1: number;
  let n2: number;
  let tmp;
  n1 = parseInt(await leer("Dame un número"));
  n2 = parseInt(await leer("Dame otro número"));
  while (n2 !== 0) {
    tmp = n2;
    n2 = n1 % n2;
    n1 = tmp;
  }
  console.log(`El MCD es ${n1}`);
};
const mcd0 = (n1: number, n2: number) => {
  let tmp;
  while (n2 !== 0) {
    tmp = n2;
    n2 = n1 % n2;
    n1 = tmp;
  }
  return n1;
};
const mcm = async () => {
  let n1: number;
  let n2: number;
  n1 = parseInt(await leer("Dame un número"));
  n2 = parseInt(await leer("Dame otro número"));
  console.log(`El MCM es ${(n1 * n2) / mcd0(n1, n2)}`);
};
const primo = async () => {
  let primo;
  let n1: number;
  n1 = parseInt(await leer("Dame un número"));
  let i = 0;
  primo = true;
  for (i = 2; i < n1; i++) {
    if (n1 % i == 0) {
      primo = false;
    }
  }
  if (primo == true) {
    console.log(`El número ${n1} es primo`);
  } else {
    console.log(`El número ${n1} no es primo`);
  }
};
const pares = async () => {
  let n1: number;
  n1 = parseInt(await leer("Dame un número"));
  if (n1 % 2 == 0) {
    console.log(`Es un número par`);
  } else {
    console.log(`Es un número impar`);
  }
};
main();
