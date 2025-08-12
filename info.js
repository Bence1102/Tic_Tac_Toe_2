export default class Info{
    #szuloElem;
    #uzenet;
    constructor(szuloElem){
        this.#szuloElem=szuloElem;
        this.#uzenet="";
    }

    info(uzenet){
        this.#uzenet=uzenet;
        this.megjelenit()
    }

    megjelenit(){
        this.#szuloElem.innerHTML = `<p>${this.#uzenet}</p>`;
    }
}