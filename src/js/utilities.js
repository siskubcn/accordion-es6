/* jshint esversion: 6  */

const utilities = {

   extend(out={}) {
       for (let i = 1; i < arguments.length; i++) if (arguments[i]) for (const key in arguments[i]) arguments[i].hasOwnProperty(key) && (out[key] = arguments[i][key]);
       return out;
   },

    addCssClasses(el, cssClasses) {
        for(let i = 0; i < cssClasses.length; i++)
            el.classList.add(cssClasses[i]);
    },

    removeCssClasses(el, cssClasses) {
        for(let i = 0; i < cssClasses.length; i++)
            el.classList.remove(cssClasses[i]);
    }

 };

 export default utilities;