class SkywardPublicSidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.bodyBlock);
    }

    get bodyBlock() {
        let bodyBlock = document.createElement('div');
        bodyBlock.innerHTML = `
        <!-- sidebar navigation -->
        <div class="usa-layout-docs__sidenav desktop:grid-col-3">
            <nav aria-label="Secondary navigation">
                <ul class="usa-sidenav">
                    <li class="usa-sidenav__item">
                        <a href="public.html" class="usa-current">Summary</a>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="history.html">History</a>
                    </li>
                    <li class="usa-sidenav__item">
                        <a href="agencies.html">Federal Agencies</a>
                    </li>
                </ul>
            </nav>
        </div>

      `;

        return bodyBlock;
    }
}

window.customElements.define('skyward-public-sidebar', SkywardPublicSidebar);