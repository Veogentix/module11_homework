import { getMonth } from "../../utils/getMonth.js";

describe("positive test for getMonth", () => {
      it("expect November with n === 11", () => expect(getMonth(11)).toBe("November")),
          it("expect October with n === 10", () => expect(getMonth(10)).toBe("October")),
          it("expect May with n === 5", () => expect(getMonth(5)).toBe("May"));
});

describe("negative test for getMonth", () => {
      it("expect Wrong number with string", () => expect(getMonth('randomString')).toBe("Wrong number")),
          it("expect Wrong number with boolean", () => expect(getMonth(true)).toBe("Wrong number")),
          it("expect Wrong number with typeof number === 'string'", () => expect(getMonth('5')).toBe("Wrong number")),
          it("expect Wrong number with not integer", () => expect(getMonth(10.5)).toBe("Wrong number"));
});

describe("corner test for getMonth", () => {
      it("expect Wrong number with n < 1", () => expect(getMonth(0)).toBe("Wrong number")),
          it("expect January with n === 1", () => expect(getMonth(1)).toBe("January")),
          it("expect December with n === 12", () => expect(getMonth(12)).toBe("December")),
          it("expect Wrong number with n > 12", () => expect(getMonth(13)).toBe("Wrong number"));
});
