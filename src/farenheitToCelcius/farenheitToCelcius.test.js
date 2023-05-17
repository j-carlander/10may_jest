import { farenheitToCelcius } from "./farenheitToCelcius";

test("Converting Faranheit to Celcius", () => {
  let farenheit = 50;
  let celcius = 10;

  expect(farenheitToCelcius(farenheit)).toBe(celcius);
});
