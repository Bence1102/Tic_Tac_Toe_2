import JatekTer from "./JatekTer.js";

const jatekterElem = document.querySelector(".jatekter");
const jatek =new JatekTer(jatekterElem);

document.querySelector(".ujrakezd").addEventListener("click", () => {
    jatek.ujrakezd();
})