class WcagForm extends HTMLElement{
    constructor(){
      super();
    }
  
    connectedCallback(){      
      this.appendChild(this.bodyBlock);

      // const expandButton = document.querySelector("#expand");
      // expandButton.addEventListener("click", this.expandListener);
    }

    expandListener(evt){
      const expandButton = document.querySelector("#expand");
      if(expandButton.innerHTML.includes("Expand")){
        document.body.querySelectorAll('details')
          .forEach((e) => {
            e.setAttribute("open", "true");
          });
        expandButton.innerHTML = "&#8614; Collapse";  
      }else{
        document.body.querySelectorAll('details')
          .forEach((e) => {
            e.removeAttribute("open");
          });
        expandButton.innerHTML = "&#8615; Expand";  
      }
    }

    get bodyBlock(){
      let bodyBlock = document.createElement('div');

      // <button id="expand" type="button">&#8615; Expand</button>

      // <ul class="wcag-state">
      //   <li>
      //     <input type="checkbox" id="filter-pass">
      //     <span class="pass">&#10004;</span> Pass
      //   </li>
      //   <li>
      //     <input type="checkbox" id="filter-fail">
      //     <span class="fail">&#10008;</span> Fail
      //   </li>
      //   <li>
      //     <input type="checkbox" id="filter-na">
      //     <span class="na">&#8856;</span> N/A
      //   </li>
      // </ul>



      bodyBlock.innerHTML = `
      <details data-sc="1">
        <summary><h3>1. Perceivable</h3></summary>

        <details data-sc="1.1">
          <summary><h4>1.1 Text Alternatives</h4></summary>

          <details data-sc="1.1.1" data-level="A" data-version="2.0">
            <summary><h5>1.1.1 Non-text Content</h5></summary>
          </details>
        </details>

        <details data-sc="1.2">
          <summary><h4>1.2 Time-based Media</h4></summary>

          <details data-sc="1.2.1" data-level="A" data-version="2.0">
            <summary><h5>1.2.1 Audio-only and Video-only (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.2" data-level="A" data-version="2.0">
            <summary><h5>1.2.2 Captions (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.3" data-level="A" data-version="2.0">
            <summary><h5>1.2.3 Audio Description or Media Alternative (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.4" data-level="A" data-version="2.0">
            <summary><h5>1.2.4 Captions (Live)</h5></summary>
          </details>

          <details data-sc="1.2.5" data-level="AA" data-version="2.0">
            <summary><h5>1.2.5 Audio Description (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.6" data-level="AAA" data-version="2.0">
            <summary><h5>1.2.6 Sign Language (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.7" data-level="AAA" data-version="2.0">
            <summary><h5>1.2.7 Extended Audio Description (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.8" data-level="AAA" data-version="2.0">
            <summary><h5>1.2.8 Media Alternative (Prerecorded)</h5></summary>
          </details>

          <details data-sc="1.2.9" data-level="AAA" data-version="2.0">
            <summary><h5>1.2.9 Audio-only (Live)</h5></summary>
          </details>

        </details>

        <details data-sc="1.3">
          <summary><h4>1.3 Adaptable</h4></summary>

          <details data-sc="1.3.1" data-level="A" data-version="2.0">
            <summary><h5>1.3.1 Info and Relationships</h5></summary>
          </details>

          <details data-sc="1.3.2" data-level="A" data-version="2.0">
            <summary><h5>1.3.2 Meaningful Sequence</h5></summary>
          </details>

          <details data-sc="1.3.3" data-level="A" data-version="2.0">
            <summary><h5>1.3.3 Sensory Characteristics</h5></summary>
          </details>

          <details data-sc="1.3.4" data-level="AA" data-version="2.1">
            <summary><h5>1.3.4 Orientation</h5></summary>
          </details>

          <details data-sc="1.3.5" data-level="AA" data-version="2.1">
            <summary><h5>1.3.5 Identify Input Purpose</h5></summary>
          </details>

          <details data-sc="1.3.6" data-level="AAA" data-version="2.1">
            <summary><h5>1.3.6 Identify Purpose</h5></summary>
          </details>        
        </details>

        <details data-sc="1.4">
          <summary><h4>1.4 Distinguishable</h4></summary>

          <details data-sc="1.4.1" data-level="A" data-version="2.0">
            <summary><h5>1.4.1 Use of Color</h5></summary>
          </details> 

          <details data-sc="1.4.2" data-level="A" data-version="2.0">
            <summary><h5>1.4.2 Audio Control</h5></summary>
          </details> 

          <details data-sc="1.4.3" data-level="AA" data-version="2.0">
            <summary><h5>1.4.3 Contrast (Minimum)</h5></summary>
          </details> 

          <details data-sc="1.4.4" data-level="AA" data-version="2.0">
            <summary><h5>1.4.4 Resize text</h5></summary>
          </details> 

          <details data-sc="1.4.5" data-level="AA" data-version="2.0">
            <summary><h5>1.4.5 Images of Text</h5></summary>
          </details> 

          <details data-sc="1.4.6" data-level="AAA" data-version="2.0">
            <summary><h5>1.4.6 Contrast (Enhanced)</h5></summary>
          </details> 

          <details data-sc="1.4.7" data-level="AAA" data-version="2.0">
            <summary><h5>1.4.7 Low or No Background Audio</h5></summary>
          </details> 

          <details data-sc="1.4.8" data-level="AAA" data-version="2.0">
            <summary><h5>1.4.8 Visual Presentation</h5></summary>
          </details> 

          <details data-sc="1.4.9" data-level="AAA" data-version="2.0">
            <summary><h5>1.4.9 Images of Text (No Exception)</h5></summary>
          </details> 

          <details data-sc="1.4.10" data-level="AA" data-version="2.1">
            <summary><h5>1.4.10 Reflow</h5></summary>
          </details> 

          <details data-sc="1.4.11" data-level="AA" data-version="2.1">
            <summary><h5>1.4.11 Non-text Contrast</h5></summary>
          </details> 

          <details data-sc="1.4.12" data-level="AA" data-version="2.1">
            <summary><h5>1.4.12 Text Spacing</h5></summary>
          </details> 

          <details data-sc="1.4.13" data-level="AA" data-version="2.1">
            <summary><h5>1.4.13 Content on Hover or Focus</h5></summary>
          </details> 
          
        </details>
      </details>
      
      <details data-sc="2">
        <summary><h3>2. Operable</h3></summary>

        <details data-sc="2.1">
          <summary><h4>2.1 Keyboard Accessible</h4></summary>

          <details data-sc="2.1.1" data-level="A" data-version="2.0">
            <summary><h5>2.1.1 Keyboard</h5></summary>
          </details>

          <details data-sc="2.1.2" data-level="A" data-version="2.0">
            <summary><h5>2.1.2 No Keyboard Trap</h5></summary>
          </details>

          <details data-sc="2.1.3" data-level="AAA" data-version="2.0">
            <summary><h5>2.1.3 Keyboard (No Exception)</h5></summary>
          </details>

          <details data-sc="2.1.4" data-level="A" data-version="2.1">
            <summary><h5>2.1.4 Character Key Shortcuts</h5></summary>
          </details>
        </details>

        <details data-sc="2.2">
          <summary><h4>2.2 Enough Time</h4></summary>

          <details data-sc="2.2.1" data-level="A" data-version="2.0">
            <summary><h5>2.2.1 Timing Adjustable</h5></summary>
          </details>

          <details data-sc="2.2.2" data-level="A" data-version="2.0">
            <summary><h5>2.2.2 Pause, Stop, Hide</h5></summary>
          </details>

          <details data-sc="2.2.3" data-level="AAA" data-version="2.0">
            <summary><h5>2.2.3 No Timing</h5></summary>
          </details>

          <details data-sc="2.2.4" data-level="AAA" data-version="2.0">
            <summary><h5>2.2.4 Interruptions</h5></summary>
          </details>

          <details data-sc="2.2.5" data-level="AAA" data-version="2.0">
            <summary><h5>2.2.5 Re-authenticating</h5></summary>
          </details>

          <details data-sc="2.2.6" data-level="AAA" data-version="2.1">
            <summary><h5>2.2.6 Timeouts</h5></summary>
          </details>

        </details>

        <details data-sc="2.3">
          <summary><h4>2.3 Seizures and Physical Reactions</h4></summary>

          <details data-sc="2.3.1" data-level="A" data-version="2.0">
            <summary><h5>2.3.1 Three Flashes or Below Threshold</h5></summary>
          </details>

          <details data-sc="2.3.2" data-level="AAA" data-version="2.0">
            <summary><h5>2.3.2 Three Flashes</h5></summary>
          </details>

          <details data-sc="2.3.3" data-level="AAA" data-version="2.1">
            <summary><h5>2.3.3 Animation from Interactions</h5></summary>
          </details>

        </details>

        <details data-sc="2.4">
          <summary><h4>2.4 Navigable</h4></summary>

          <details data-sc="2.4.1" data-level="A" data-version="2.0">
            <summary><h5>2.4.1 Bypass Blocks</h5></summary>
          </details>

          <details data-sc="2.4.2" data-level="A" data-version="2.0">
            <summary><h5>2.4.2 Page Titled</h5></summary>
          </details>

          <details data-sc="2.4.3" data-level="A" data-version="2.0">
            <summary><h5>2.4.3 Focus Order</h5></summary>
          </details>

          <details data-sc="2.4.4" data-level="A" data-version="2.0">
            <summary><h5>2.4.4 Link Purpose (In Context)</h5></summary>
          </details>

          <details data-sc="2.4.5" data-level="AA" data-version="2.0">
            <summary><h5>2.4.5 Multiple Ways</h5></summary>
          </details>

          <details data-sc="2.4.6" data-level="AA" data-version="2.0">
            <summary><h5>2.4.6 Headings and Labels</h5></summary>
          </details>

          <details data-sc="2.4.7" data-level="AA" data-version="2.0">
            <summary><h5>2.4.7 Focus Visible</h5></summary>
          </details>

          <details data-sc="2.4.8" data-level="AAA" data-version="2.0">
            <summary><h5>2.4.8 Location</h5></summary>
          </details>

          <details data-sc="2.4.9" data-level="AAA" data-version="2.0">
            <summary><h5>2.4.9 Link Purpose (Link Only)</h5></summary>
          </details>

          <details data-sc="2.4.10" data-level="AAA" data-version="2.0">
            <summary><h5>2.4.10 Section Headings</h5></summary>
          </details>

        </details>

        <details data-sc="2.5">
          <summary><h4>2.5 Input Modalities</h4></summary>

          <details data-sc="2.5.1" data-level="A" data-version="2.1">
            <summary><h5>2.5.1 Pointer Gestures</h5></summary>
          </details>

          <details data-sc="2.5.2" data-level="A" data-version="2.1">
            <summary><h5>2.5.2 Pointer Cancellation</h5></summary>
          </details>

          <details data-sc="2.5.3" data-level="A" data-version="2.1">
            <summary><h5>2.5.3 Label in Name</h5></summary>
          </details>

          <details data-sc="2.5.4" data-level="A" data-version="2.1">
            <summary><h5>2.5.4 Motion Actuation</h5></summary>
          </details>

          <details data-sc="2.5.5" data-level="AAA" data-version="2.1">
            <summary><h5>2.5.5 Target Size</h5></summary>
          </details>

          <details data-sc="2.5.6" data-level="AAA" data-version="2.1">
            <summary><h5>2.5.6 Concurrent Input Mechanisms</h5></summary>
          </details>

        </details>
      </details>
      
      <details data-sc="3">
        <summary><h3>3. Understandable</h3></summary>

        <details data-sc="3.1">
          <summary><h4>3.1 Readable</h4></summary>

          <details data-sc="3.1.1" data-level="A" data-version="2.0">
            <summary><h5>3.1.1 Language of Page</h5></summary>
          </details>

          <details data-sc="3.1.2" data-level="AA" data-version="2.0">
            <summary><h5>3.1.2 Language of Parts</h5></summary>
          </details>

          <details data-sc="3.1.3" data-level="AAA" data-version="2.0">
            <summary><h5>3.1.3 Unusual Words</h5></summary>
          </details>

          <details data-sc="3.1.4" data-level="AAA" data-version="2.0">
            <summary><h5>3.1.4 Abbreviations</h5></summary>
          </details>

          <details data-sc="3.1.5" data-level="AAA" data-version="2.0">
            <summary><h5>3.1.5 Reading Level</h5></summary>
          </details>

          <details data-sc="3.1.6" data-level="AAA" data-version="2.0">
            <summary><h5>3.1.6 Pronunciation</h5></summary>
          </details>

        </details>

        <details data-sc="3.2">
          <summary><h4>3.2 Predictable</h4></summary>

          <details data-sc="3.2.1" data-level="A" data-version="2.0">
            <summary><h5>3.2.1 On Focus</h5></summary>
          </details>

          <details data-sc="3.2.2" data-level="A" data-version="2.0">
            <summary><h5>3.2.2 On Input</h5></summary>
          </details>

          <details data-sc="3.2.3" data-level="AA" data-version="2.0">
            <summary><h5>3.2.3 Consistent Navigation</h5></summary>
          </details>

          <details data-sc="3.2.4" data-level="AA" data-version="2.0">
            <summary><h5>3.2.4 Consistent Identification</h5></summary>
          </details>

          <details data-sc="3.2.5" data-level="AAA" data-version="2.0">
            <summary><h5>3.2.5 Change on Request</h5></summary>
          </details>

        </details>

        <details data-sc="3.3">
          <summary><h4>3.3 Input Assistance</h4></summary>

          <details data-sc="3.3.1" data-level="A" data-version="2.0">
            <summary><h5>3.3.1 Error Identification</h5></summary>
          </details>

          <details data-sc="3.3.2" data-level="A" data-version="2.0">
            <summary><h5>3.3.2 Labels or Instructions</h5></summary>
          </details>

          <details data-sc="3.3.3" data-level="AA" data-version="2.0">
            <summary><h5>3.3.3 Error Suggestion</h5></summary>
          </details>

          <details data-sc="3.3.4" data-level="AA" data-version="2.0">
            <summary><h5>3.3.4 Error Prevention (Legal, Financial, Data)</h5></summary>
          </details>

          <details data-sc="3.3.5" data-level="AAA" data-version="2.0">
            <summary><h5>3.3.5 Help</h5></summary>
          </details>

          <details data-sc="3.3.6" data-level="AAA" data-version="2.0">
            <summary><h5>3.3.6 Error Prevention (All)</h5></summary>
          </details>

        </details>
      </details>
      
      <details data-sc="4">
        <summary><h3>4. Robust</h3></summary>

        <details data-sc="4.1">
          <summary><h4>4.1 Compatible</h4></summary>

          <details data-sc="4.1.1" data-level="A" data-version="2.0">
            <summary><h5>4.1.1 Parsing</h5></summary>
          </details>

          <details data-sc="4.1.2" data-level="A" data-version="2.0">
            <summary><h5>4.1.2 Name, Role, Value</h5></summary>
          </details>

          <details data-sc="4.1.3" data-level="AA" data-version="2.1">
            <summary><h5>4.1.3 Status Messages</h5></summary>
          </details>

        </details>
      </details>
      `;
  
      return bodyBlock;
    }
  }
  
  window.customElements.define('wcag-form', WcagForm);