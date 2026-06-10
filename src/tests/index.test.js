const fs = require("fs");
const path = require("path");

describe("Pruebas del HTML", () => {
  let document;

  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, "../../index.html"), "utf8");
    document = new DOMParser().parseFromString(html, "text/html");
  });

  test("El título de la página existe", () => {
    const title = document.querySelector("title");
    expect(title).not.toBeNull();
  });

  test("Existe un elemento h1", () => {
    const h1 = document.querySelector("h1");
    expect(h1).not.toBeNull();
  });

  test("La página tiene contenido en el body", () => {
    const body = document.querySelector("body");
    expect(body.innerHTML.trim()).not.toBe("");
  });
});