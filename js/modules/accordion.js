export default class initAccordion {
    constructor(list) {
        this.accordionList = document.querySelectorAll(list);
        this.activeClass = "ativo";
    }

    toggleAccordion(item) {
        item.classList.toggle(this.activeClass);
        item.nextElementSibling.classList.toggle(this.activeClass);
    }

    // adiciona eventos no accordion
    addAccordionEvent() {
        this.accordionList.forEach((item) => {
            item.addEventListener("click", () => this.toggleAccordion(item));
        });
    }

    // iniciar função
    init() {
        if (this.accordionList.length) {
            // ativar primeiro item
            this.toggleAccordion(this.accordionList[0]);
            this.addAccordionEvent();
        }
        return this;
    }
}
