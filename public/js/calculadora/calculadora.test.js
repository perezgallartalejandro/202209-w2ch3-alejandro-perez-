import {calculadora} from "./calculadora.js";

describe("given the function {calculadora}", () => {
  describe("when it receives '2' &'2'", () => {
    test("then it should return '4' & '0' & '4' & '1'", () => {
      const number1 = 2;
      const number2 = 2;
      const expectResult = [4,0,4,1];

      const result = calculadora();

      expect(result).toBe(expectResult);

    });
    });
  
    describe("given the function {calculadora}", () => {
      describe("when it receives '4' &'4' ", () => {
        test("the it should return '8' & '0' & '16' & '1'", () => {
          const number1 = 4;
          const number2 = 4;
          const expectResult = [8,0,16,1];

          const result = calculadora();

          expect(result).toBe(expectResult);
        });
      });
  });
});
