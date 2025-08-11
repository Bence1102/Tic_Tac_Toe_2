export default class Elem{
    #adat="";
    #index=0;
    szuloElem;
    constructor(szuloElem, elem, index){
        this.szuloElem = szuloElem;
        this.elem = elem;
        this.#index = index;
        megjelenit();
        esemeny();
    }

    megjelenit(){
    
    
    }

    esemeny(){
        const kivalasztElem = new CustumEvent("kivalaszt", {
    });
    }
}