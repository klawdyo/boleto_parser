import { insertAt } from "../utils/utils";

/**
 *
 */
export function getFormattedLine(line: string) {
  let out = line.replace(/[^\d]+/g, "");

  out = insertAt(out, 5, ".");
  out = insertAt(out, 11, " ");
  out = insertAt(out, 17, ".");
  out = insertAt(out, 24, " ");
  out = insertAt(out, 30, ".");
  out = insertAt(out, 37, " ");
  out = insertAt(out, 39, " ");

  return out;
}
