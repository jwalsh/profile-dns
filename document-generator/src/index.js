import {markdown as md} from "markdown";

const text = "[Markdown] is a simple text-based [markup language]\n" +
       "created by [John Gruber]\n\n" +
       "[John Gruber]: http://daringfireball.net";

// parse the markdown into a tree and grab the link references
const tree = md.parse( text ), refs = tree[ 1 ].references;

// iterate through the tree finding link references
( function find_link_refs( jsonml ) {
  if ( jsonml[ 0 ] === "link_ref" ) {
    const ref = jsonml[ 1 ].ref;

    // if there's no reference, define a wiki link
    if ( !refs[ ref ] ) {
      refs[ ref ] = {
        href: "http://en.wikipedia.org/wiki/" + ref.replace(/\s+/, "_" )
      };
    }
  }
  else if ( Array.isArray( jsonml[ 1 ] ) ) {
    jsonml[ 1 ].forEach( find_link_refs );
  }
  else if ( Array.isArray( jsonml[ 2 ] ) ) {
    jsonml[ 2 ].forEach( find_link_refs );
  }
} )( tree );

// convert the tree into html
const html = md.renderJsonML( md.toHTMLTree( tree ) );
console.log( html );

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
