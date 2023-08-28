class AgencyNav extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('ul');
      bodyBlock.classList.add("usa-sidenav__sublist");

      bodyBlock.innerHTML = `
        <li class="usa-sidenav__item">
            <a href="view.html?website=cns" id="cns">CNS - Corporation for National and Community Service (Americorps)</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dhs" id="dhs">DHS - Department of Homeland Security</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doc" id="doc">DOC - Department of Commerce</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doe" id="doe">DOE - Department of Energy</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doi" id="doi">DOI - Department of the Interior</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=doj" id="doj">DOJ - Department of Justice</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dol" id="dol">DOL - Department of Labor</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=dot" id="dot">DOT - Department of Transportation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=ed" id="ed">ED - Department of Education</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=eeoc" id="eeoc">EEOC - Equal Employment Opportunity Commission </a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=epa" id="epa">EPA - Environmental Protection Agency</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=fcc" id="fcc">FCC - Federal Communications Commission</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=fdic" id="fdic">FDIC - Federal Deposit Insurance Corporation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=gsa" id="gsa">GSA - General Services Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=hhs" id="hhs">HHS - Deparment of Health and Human Services</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=hud" id="hud">HUD - Department of Housing and Urban Development</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nara" id="nara">NARA - National Archives and Records Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nrc" id="nrc">NRC - US Nuclear Regulatory Commission</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=nsf" id="nsf">NSF - National Science Foundation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=opm" id="opm">OPM - Office of Personnel Management</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=pbgc" id="pbgc">PBGC - Pension Benefit Guaranty Corporation</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=sba" id="sba">SBA - Small Business Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=ssa" id="ssa">SSA - Social Security Administration</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=state" id="state">State - Department of State</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=treasury" id="treasury">Treasury - Department of Treasury</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=usab" id="usab">USAB - US Access Board</a>
        </li>
        <li class="usa-sidenav__item">
            <a href="view.html?website=usaid" id="usaid">USAID - US Agency of International Development</a>
        </li>
      `;
  
      return bodyBlock;
    }
  }
  
  window.customElements.define('agency-nav', AgencyNav);