export class Menu {
  constructor(selector) {
    this.el = document.querySelector(selector)

    document.body.addEventListener('click', event => {
      this.countClick('left', event);
      if (event.target.offsetParent !== this.el) {
        this.close();
      } else {
        this.click(event);
        this.close();
      }
    })
  }

  open() {
    throw new Error(`"open" method should be implemented in Menu"`)
  }

  close() {
    throw new Error(`"close" method should be implemented in Menu"`)
  }

  add() {
    throw new Error(`"add" method should be implemented in Menu"`)
  }
}