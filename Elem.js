export default class Elem {
    #adat = "";
    #index = 0;
    szuloElem;
    constructor(adat, index, szuloElem) {
        console.log(szuloElem);
        this.#adat = adat;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.elem = document.querySelector(".elem:last-child");
        console.log(this.elem);
        this.elem.addEventListener("click", () => {
            if (this.#adat === " ") {
                this.esemeny();
            }
        })
    }

    megjelenit() {
        let html = `
        <div class="elem">
            ${this.#adat}
        </div>
        `;
        this.szuloElem.insertAdjacentHTML("beforeend", html);
    }

    esemeny() {
        const kivalasztElem = new CustomEvent("kivalaszt", { detail: this.#index })
        window.dispatchEvent(kivalasztElem);
    }
}