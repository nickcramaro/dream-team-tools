class LoremIpsum extends HTMLElement {
    constructor() {
        super();

        // creating web component 
        let shadowRoot = this.attachShadow({mode: 'open'});
        let template = document.createElement('template');
        template.innerHTML = this.getTemplateString();
        this.shadowRoot.appendChild(document.importNode(template.content, true));

        // creating references to child elements
        this.refs = new Proxy({},{get: this.getFromShadowRoot.bind(this)});

        // registering event handlers
        this.registerHandlers();
    }

    getFromShadowRoot(target, name) {
		return this.shadowRoot.querySelector('[ref="' + name + '"]');
    }
    
    registerHandlers() {

    }

    getTemplateString() {
        return `
            <div>
                Lorem ipsum generator
            </div>
        `;
    }
}

window.customElements.define('lorem-ipsum', LoremIpsum);
