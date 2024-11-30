import {
  isValidURL,
  handleSubmit,
  polarityChecker,
} from "../src/client/js/formHandler.js";

describe("FormHandler Functions", () => {
  describe("isValidURL", () => {
    it("should return true for a valid URL", () => {
      const validUrl = "https://www.example.com";
      expect(isValidURL(validUrl)).toBe(true);
    });

    it("should return false for an invalid URL", () => {
      const invalidUrl = "invalid-url";
      expect(isValidURL(invalidUrl)).toBe(false);
    });
  });

  describe("polarityChecker", () => {
    it('should return "STRONG POSITIVE" for "P+"', () => {
      expect(polarityChecker("P+")).toBe("STRONG POSITIVE");
    });

    it('should return "POSITIVE" for "P"', () => {
      expect(polarityChecker("P")).toBe("POSITIVE");
    });

    it('should return "NEUTRAL" for "NEW"', () => {
      expect(polarityChecker("NEW")).toBe("NEUTRAL");
    });

    it('should return "NEGATIVE" for "N"', () => {
      expect(polarityChecker("N")).toBe("NEGATIVE");
    });

    it('should return "STRONG NEGATIVE" for "N+"', () => {
      expect(polarityChecker("N+")).toBe("STRONG NEGATIVE");
    });

    it('should return "NO SENTIMENT" for "NONE"', () => {
      expect(polarityChecker("NONE")).toBe("NO SENTIMENT");
    });

    it("should return undefined for an invalid score", () => {
      expect(polarityChecker("INVALID")).toBeUndefined();
    });
  });

  describe("handleSubmit", () => {
    let mockEvent;
    let mockPreventDefault;

    beforeEach(() => {
      mockPreventDefault = jest.fn();
      mockEvent = { preventDefault: mockPreventDefault };
      document.body.innerHTML = `
        <form id="urlForm">
          <input id="name" value="https://www.example.com">
          <div id="results"></div>
        </form>
      `;
    });

    it("should call preventDefault", () => {
      handleSubmit(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
    });

    it("should alert when URL is invalid", () => {
      document.getElementById("name").value = "invalid-url";
      const spyAlert = jest.spyOn(window, "alert").mockImplementation();
      handleSubmit(mockEvent);
      expect(spyAlert).toHaveBeenCalledWith(
        "Seems like an invalid URL, please try with a valid URL."
      );
      spyAlert.mockRestore();
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });
  });
});
