import myAccordion from 'accordion';

let accordionSettings = {
    'oneAtATime': false,
    'closedOnStart': true,
    'openSlideIndex': 0,
    'elementHeaderClass': 'Accordion-header',
    'elementContentClass': 'Accordion-content',
    'accordionClosedClass': 'is-closed'
},
element = document.querySelector('.Accordion'),
accordionTest = new myAccordion( element, accordionSettings );