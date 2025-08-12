import Elem from "./Elem.js";

export default class JatekTer {
    #lista = [" O", " ", " ", " ", " ", " ", " ", " ", " X"];
    #szuloElem;
    #korszmalalo = 0;

    constructor(szuloElem) {
        this.#szuloElem = szuloElem;
        this.megjelenit();
        this.kivlasztEsemenykezelo();
        this.ellenoriz();
        //this.ujrakezd();
    }




    kivlasztEsemenykezelo() {
        window.addEventListener("kivalaszt", (event) => {
            if (this.#lista[event.detail] === " ") {
                ;
                if (this.#korszmalalo % 2 === 0) {
                    this.#lista[event.detail] = "X";
                } else {
                    this.#lista[event.detail] = "O";
                }
                this.#korszmalalo++;
                this.#szuloElem.innerHTML = "";
                this.megjelenit();
            }

            const eredmeny = this.ellenoriz();
            if (eredmeny) {
                if (eredmeny === "D") {
                    alert("Döntetlen mert egyik játékos sem tudod 3-at össze hozni.");
                } else {
                    alert(`Nyertes:${eredmeny}`);
                }
            }
        });
    }


    megjelenit() {
        for (let i = 0; i < this.#lista.length; i++) {
            new Elem(this.#lista[i], i, this.#szuloElem);
        }
    }


    ellenoriz() {
        for (let i = 0; i < 9; i += 3) {
            if (
                this.#lista[i] != " " &&
                this.#lista[i] === this.#lista[i + 1] &&
                this.#lista[i] === this.#lista[i + 2]
            ) {
                return this.#lista[i];
            }

            for (let i = 0; i < 3; i++) {
                if (
                    this.#lista[i] != " " &&
                    this.#lista[i] === this.#lista[i + 3] &&
                    this.#lista[i] === this.#lista[i + 6]

                ) {
                    return this.#lista[i];
                }
            }
        }

        if (
            this.#lista[0] != " " &&
            this.#lista[0] === this.#lista[4] &&
            this.#lista[0] === this.#lista[8]
        ) {
            return this.#lista[0]
        }

        if (
            this.#lista[2] != " " &&
            this.#lista[2] === this.#lista[4] &&
            this.#lista[2] === this.#lista[6]
        ) {
            return this.#lista[2]
        }

        if (!this.#lista.includes(" ")) {
            return "D"
        }
        return null;
    }


    ujrakezd(){
        
    }
}