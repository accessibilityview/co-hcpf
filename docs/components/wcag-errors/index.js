class WcagErrors extends HTMLElement{
  constructor(){
    super();
  }

  connectedCallback(){      
    this.appendChild(this.bodyBlock);
  }

  get bodyBlock(){
    let bodyBlock = document.createElement('div');
    let details = document.createElement('details');
    let table = document.createElement('table');
    table.setAttribute('id', 'wcagErrorsTable');
    
    // build header
    let tHead = document.createElement("thead");
    let trHeader = tHead.insertRow();

    let thError = document.createElement("th");
    thError.appendChild(document.createTextNode("Error"));
    trHeader.appendChild(thError);

    let thCount = document.createElement("th");
    thCount.appendChild(document.createTextNode("Count"));
    trHeader.appendChild(thCount);

    let thCorresponds = document.createElement("th");      
    thCorresponds.appendChild(document.createTextNode("Lighthouse"));     
    trHeader.appendChild(thCorresponds);

    tHead.appendChild(trHeader);
    table.appendChild(tHead);
   
    // build body (stubbed out; no data)
    let tBody = document.createElement("tbody");
    table.appendChild(tBody);
    details.appendChild(table);

    // build summary
    let summary = document.createElement('summary');
    summary.setAttribute('id', 'wcagErrorsSummary');
    summary.appendChild(document.createTextNode(`Errors:`));
    details.appendChild(summary);    

    bodyBlock.appendChild(details); 
    return bodyBlock;
  }
}  
  
window.customElements.define('wcag-errors', WcagErrors);