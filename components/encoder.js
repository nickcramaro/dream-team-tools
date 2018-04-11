class EncoderDecoder extends HTMLElement {
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
        this.refs.base64Encode.onclick = this.base64Encode.bind(this);
        this.refs.base64Decode.onclick = this.base64Decode.bind(this);
        this.refs.urlEncode.onclick = this.urlEncode.bind(this);
        this.refs.urlDecode.onclick = this.urlDecode.bind(this);
    }

    base64Encode() {
        this.refs.output.value = btoa(this.refs.input.value);
    }

    base64Decode() {
        this.refs.output.value = atob(this.refs.input.value);
    }

    urlEncode() {
        this.refs.output.value = encodeURI(this.refs.input.value);
    }

    urlDecode() {
        this.refs.output.value = decodeURI(this.refs.input.value);
    }

    getTemplateString() {
        return `
            <div>
                <input ref="input" />
                <input ref="output" />
                <button ref="base64Encode" >Base64 Encode</button>
                <button ref="base64Decode">Base64 Decode</button>
                <button ref="urlEncode">Url Encode</button>
                <button ref="urlDecode">Url Decode</button>
            </div>
        `;
    }
}

window.customElements.define('encoder-decoder', EncoderDecoder);
