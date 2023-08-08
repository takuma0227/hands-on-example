import { commaToNum } from "./utils/commaToNum";

test("カンマ区切りの5桁数字の文字列を数値に直す", () => {
  expect(commaToNum("30,000")).toEqual(30000);
});

test("カンマ区切りの8桁の数字の文字列を数値に直す", () => {
  expect(commaToNum("15,000,000")).toEqual(15000000);
});