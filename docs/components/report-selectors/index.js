class ReportSelectors extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('div');
      let website = getQS("website");

      bodyBlock.innerHTML = `
      <form id="reportSelector" name="reportSelector">
        <input type="hidden" value=${website} name="website">

        <fieldset>
          <label for="typeSelector">Type: </label>
          <select id="typeSelector" name="type">
            <option value="mobile" selected>Mobile</option>
            <option value="desktop">Desktop</option>
          </select>

          <label for="dateSelector">Date: </label>
          <select id="dateSelector" name="date">
            <option value="2023-08-01">2023-08-01</option>
          </select>

          <br>
          <label for="pageSelector">Page: </label>
          <select id="pageSelector" name="page">
            <option value="/">/</option>
          </select>
         </fieldset>

        </form>
      `;
  
      return bodyBlock;
    }

    /**
     * Get a value from the querystring
     */
    getQS(key){
      const querystring = new URLSearchParams(document.location.search);
      return querystring.get(key);
    }
    
  }
  
  window.customElements.define('report-selectors', ReportSelectors);