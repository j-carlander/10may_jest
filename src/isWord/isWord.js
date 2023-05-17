export function isWord(maybeWord) {
  if (typeof maybeWord !== "string") return false;
  if (maybeWord.match("[ @!_0-9]")) return false;
  return true;
}
