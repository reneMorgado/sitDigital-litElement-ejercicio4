import { LitElement, html } from 'lit-element';

class MyList extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
            title: { type: String }
        };
    }
    constructor() {
        super()
        this.title = ''
        this.items = []
    }
    
    render() {
        return html`
            <h1>${this.title}</h1>
            ${this.items.length > 0 ? html`
            <ul>
                ${this.items.map(item=> html`<li>${item.name}(${item.year})</li>`)}
            </ul>
            ` : html`<h1>No hay datos</h1>`}
        `;
    }
}
customElements.define('my-list', MyList);