import { Actions } from "./typings";

export class Input extends HTMLElement {
  constructor() {
    super();
    this.component = this
      .attachShadow({
        mode: 'open'
      })

    const color = getComputedStyle(window.document.documentElement)
    .getPropertyValue("--hl-text-color");
    console.log(color, window.document)

    this.component.appendChild(template.content.cloneNode(true));

    this.parentsContainer = this.component.getElementById("parents-container");
    this.input = this.component.getElementById("input");

  }

  private renderParents() {
    const frag = document.createDocumentFragment();

    this._parents.forEach(action => {
      const item = parentTemplate.content.cloneNode(true) as HTMLElement;
      item.innerText = action.title;
      console.log(item, action.title);
      frag.appendChild(item);
    });

    this.parentsContainer.innerHTML = "";
    this.parentsContainer.appendChild(frag);
  }

  clear() {
    this.input.value = "";
  }

  set placeholder(value: string) {
    this.setAttribute("placeholder", value);
    this.input.setAttribute("value", value);
  }

  private component: any;
  private input: HTMLInputElement;
  private parentsContainer: HTMLDivElement;
  private _parents: Actions;

  get value() {
    return this.input.value;
  }

  set value(value: string) {
    this.input.value = value;
  }

  set parents(value: Actions) {
    console.log(value)
    this._parents = value;
    this.renderParents();
  }

  get parents() {
    return this.parents;
  }

  focus() {
    this.input.focus();
  }
}

const template = document.createElement("template");
template.innerHTML = `
  <form
    role="search"
    novalidate
    autocomplete="off"
  >
    <div id="parents-container"></div>
    <input
      id="input"
      type="text"
      class="text-input"
    />
  </div>

  <style>
    form {
      display: flex;
      margin: 0;
    }
    input {
      flex-grow: 1;
      font-size: 18px;
      color: var(--hl-text-color);
      padding: 10px;
      border: none;
      background: transparent;
    }
    input:placeholder {
      color: white;
    }
    input:focus {
      outline: none;
    }
  </style>
`;

const parentTemplate = document.createElement("template");
parentTemplate.innerHTML = `
  <div class="parent" style="background: red">
  </div>
`