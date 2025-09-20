export default class Bhaskara {
  public bhaskara(a: number, b: number, c: number) {
    if (a === 0) {
      return "O coeficiente 'a' não pode ser 0";
    }

    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
      return `Delta = ${delta}. Não existem raízes reais.`;
    }

    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

    return `x1 = ${raiz1}, x2 = ${raiz2}`;
  }
}
