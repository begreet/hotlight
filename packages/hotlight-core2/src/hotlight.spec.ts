import { Modal } from "./hotlight";
customElements.define("hotlight-modal", Modal);
import { Input } from "./input";
customElements.define("hotlight-input", Input);

describe("open", () => {
  let modal;
  beforeEach(() => {
    document.body.innerHTML = "<hotlight-modal></hotlight-modal>";
    modal = document.body.querySelector("hotlight-modal");
  });

  it("opens through a command", () => {
    window.dispatchEvent(new KeyboardEvent("keydown",
      {
        "key": "k",
        "metaKey": true
      }
    ));
    expect(modal.open).toEqual(true);
  });

  it("opens through a method", () => {
    modal.launch();
    expect(modal.open).toEqual(true);
  });

  it("is closed by default", () => {
    expect(modal.open).toEqual(false);
  });
})

describe("close", () => {
  let modal;
  beforeEach(() => {
    document.body.innerHTML = "<hotlight-modal></hotlight-modal>";
    modal = document.body.querySelector("hotlight-modal");
    modal.launch();
  });

  it("closes when you click backdrop", () => {
    modal.container.click()
    expect(modal.open).toEqual(false);
  });

  it("closes with key command", () => {
    window.dispatchEvent(new KeyboardEvent("keydown",
      {
        "key": "k",
        "metaKey": true
      }
    ));
    expect(modal.open).toEqual(false);
  });

  xit("closes on ESC if input is empty", () => {
    modal.input.value = "";

    window.dispatchEvent(new KeyboardEvent("keyup",
      {
        "key": "Escape"
      }
    ));
    expect(modal.open).toEqual(false);
  });
});

describe("focus", () => {
  let modal;
  beforeEach(() => {
    document.body.innerHTML = "<hotlight-modal></hotlight-modal>";
    modal = document.body.querySelector("hotlight-modal");
    modal.launch();
  });

  it("has focus after opened", () => {
    modal.input.dispatchEvent(new MouseEvent("click"));
    expect(modal.input === ((document.activeElement as Modal).input as Input)).toEqual(true);
  });
});

describe("this", () => {
  beforeAll(() => {
    document.body.innerHTML = "hey";
  });
  it("does that", () => {
    expect(document.body.innerHTML).toContain("hey");
  });
});