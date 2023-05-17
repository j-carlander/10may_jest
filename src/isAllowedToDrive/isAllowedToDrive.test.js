import { isAllowedToDrive } from "./isAllowedToDrive";

test("Test if a driver is allowed to drive", () => {
  expect(isAllowedToDrive(20, true)).toBe(true);

  expect(isAllowedToDrive(15, true)).toBe(false);

  expect(isAllowedToDrive(18, false)).toBe(false);

  expect(isAllowedToDrive(14, false)).toBe(false);
});
