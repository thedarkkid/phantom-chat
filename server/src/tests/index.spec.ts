import { sanitize } from "../common/String";

test("jest works!", () => {
  expect(true).toBeTruthy();
});

test("sanitizer function correctly sanitized strings", () => {
  const correct = "@reuyiw09";
  const inCorrect = " </>@12312 ";

  expect(sanitize(correct)).toBe(correct);
  expect(sanitize(inCorrect)).toBe("&lt;/&gt;@12312");
});
