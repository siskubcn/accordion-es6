/* jshint esversion: 6  */

// Some utilities needed by Accordion
import utilities from 'utilities';

    class Accordion {
    /**
     * constructor method for creating and initializing objects.
     */
        constructor( element, options ) {
            const defaults = {
            'oneAtATime': true,
            'closedOnStart': true,
            'openSlideIndex': 0,
            'elementHeaderClass': 'Accordion-header',
            'elementContentClass': 'Accordion-content',
            'accordionClosedClass': 'is-closed'
        };
        this.element = element;
        this.settings = Object.assign(defaults, options);
        this.init();
    }

    /**
     * addEventAccordion method attaches an event handler to the accordion header.
     */
     addEventAccordion ( elementDOM ) {
        const settings = this.settings;
        this.element.addEventListener("click", e => {
            let el = e.target;
            if ( el && el.classList.contains( settings.elementHeaderClass )) {

                if ( settings.oneAtATime ) {
                    elementDOM.forEach(( section, index ) => {
                        utilities.addCssClasses( section, [ settings.accordionClosedClass ]);
                    });
                }

                el.classList.toggle( settings.accordionClosedClass );
            }
        });
    }

    /**
     * addEventAccordion method attaches an event handler to the accordion header.
     */
     hideAccordionContent ( elementDOM, indexOpenSlide ) {
        for (let [index, el] of elementDOM.entries())
          {
             if (!el.classList.contains( this.settings.accordionClosedClass ) && index !== indexOpenSlide ) {
               el.classList.add( this.settings.accordionClosedClass );
             }
          }
     }

     hideAccordion( elementDOM ) {
        let indexOpenSlide = this.settings.openSlideIndex;

        if (this.settings.closedOnStart) {
            indexOpenSlide = -1;
        }
        this.hideAccordionContent( elementDOM, indexOpenSlide );
     }

    /**
     * init method that initialize Accordion.
     */
     init() {

        if ( this.element ) {
            let accordionHeader = this.accordionHeader = Array.prototype.slice.call( this.element.querySelectorAll(`.${this.settings.elementHeaderClass}`));

            if (accordionHeader.length > 0) {
                // Hide content
                this.hideAccordion( accordionHeader );
                // Attach events
                this.addEventAccordion( accordionHeader );
            }

        } else {
            throw new Error('You should define an element accordion in the document.');
        }
     }
}

export default Accordion;

