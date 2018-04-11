class RgbHex extends HTMLElement {
    constructor() {
        super();

        // creating web component 
        let shadowRoot = this.attachShadow({mode: 'open'});
        let rgbHexTemplate = document.createElement('template');
        rgbHexTemplate.innerHTML = this.getTemplateString();
        this.shadowRoot.appendChild(document.importNode(rgbHexTemplate.content, true));

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
                Rgb to Hex
            </div>
        `;
    }
}

window.customElements.define('rgb-hex', RgbHex);
