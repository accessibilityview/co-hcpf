class SkywardHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(this.bodyBlock);
    }

    get bodyBlock() {
        let bodyBlock = document.createElement('div');
        bodyBlock.innerHTML = `
        <a class="usa-skipnav" href="#main-content">Skip to main content</a>

        <!-- usa-header -->
        <div class="usa-overlay"></div>
        <header class="usa-header usa-header--basic">
            <div class="usa-nav-container">
                <div class="usa-navbar">
                    <div class="usa-logo" id="-logo">
                        <em class="usa-logo__text"><a href="/" title="Accessibility View">Accessibility View</a></em>
                    </div>
                    <button type="button" class="usa-menu-btn">Menu</button>
                </div>
                <nav aria-label="Primary navigation," class="usa-nav">
                    <button type="button" class="usa-nav__close">
                        <img src="/assets/uswds/img/usa-icons/close.svg" role="img" alt="Close" />
                    </button>
                    <ul class="usa-nav__primary usa-accordion">
                        <li class="usa-nav__primary-item">
                            <a href="/public.html" class="usa-nav-link"><span>Public Webpages</span></a>
                        </li>
                        <li class="usa-nav__primary-item">
                            <a href="/internal.html" class="usa-nav-link"><span>Internal Webpages</span></a>
                        </li>
                        <li class="usa-nav__primary-item">
                            <a href="/documents.html" class="usa-nav-link"><span>Public Documents</span></a>
                        </li>
                        <li class="usa-nav__primary-item">
                            <a href="/assessment.html" class="usa-nav-link"><span>Full Assessment</span></a>
                        </li>
                        <li class="usa-nav__primary-item">
                            <a href="/about.html" class="usa-nav-link"><span>About Accessibility View</span></a>
                        </li>
                    </ul>
                    <!--
                    <section aria-label="Search component">
                        <form class="usa-search usa-search--small" role="search">
                            <label class="usa-sr-only" for="search-field">Search</label>
                            <input class="usa-input" id="search-field" type="search" name="search" />
                            <button class="usa-button" type="submit">
                                <img src="/assets/uswds/img/usa-icons-bg/search--white.svg" class="usa-search__submit-icon"
                                    alt="Search" />
                            </button>
                        </form>
                    </section>
                    -->
                </nav>
            </div>
        </header>
        <!-- usa-header -->
      `;

        return bodyBlock;
    }
}

window.customElements.define('skyward-header', SkywardHeader);