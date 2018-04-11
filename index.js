class MainComponent extends HTMLElement {
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
        this.refs.encodeNav.addEventListener('click', this.openMenu.bind(this, this.refs.encodeMenu));
        this.refs.loremNav.addEventListener('click', this.openMenu.bind(this, this.refs.loremNav));
        this.refs.rgbNav.addEventListener('click', this.openMenu.bind(this, this.refs.rgbNav));
        this.refs.backBtn.addEventListener('click', this.backToMain.bind(this));
    }

    backToMain() {
        this.refs.menu.style.display = 'block';
        this.refs.secondary.style.display = 'none';
        this.refs.rgbMenu.style.display = 'none';
        this.refs.loremMenu.style.display = 'none';
        this.refs.encodeMenu.style.display = 'none';
    }

    openMenu(e) {
        this.refs.menu.style.display = 'none';
        this.refs.secondary.style.display = 'block';
        e.style.display = 'block';
    }

    getTemplateString() {
        return `
            <style>
                .secondary-menu {
                    display: none;
                }
                
                .secondary-menu__item {
                    display: none;
                }            
            </style>

            <ul class="menu" ref="menu">
                <li class="menu__item" ref="encodeNav">Encode/Decode</li>
                <li class="menu__item" ref="loremNav">Lorem Ipsum</li>
                <li class="menu__item" ref="rgbNav">Hex/RGB</li>
            </ul>

            <div class="secondary-menu" ref="secondary">
                <button ref="backBtn">Back</button>
                <encoder-decoder class="secondary-menu__item" ref="encodeMenu"></encoder-decoder>
                <lorem-ipsum class="secondary-menu__item" ref="loremMenu"></lorem-ipsum>
                <rgb-hex class="secondary-menu__item" ref="rgbMenu"></rgb-hex>
            </div>
        `;
    }
}

window.customElements.define('main-component', MainComponent);
