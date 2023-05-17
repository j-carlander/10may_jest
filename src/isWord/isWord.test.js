import { isWord } from "./isWord";

test("If a string is a word", () => {
  expect(isWord("angea")).toBe(true);

  expect(isWord(15)).toBe(false);

  expect(isWord("an5ea")).toBe(false);
});
