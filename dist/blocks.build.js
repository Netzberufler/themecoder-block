!function(e){function t(c){if(n[c])return n[c].exports;var r=n[c]={i:c,l:!1,exports:{}};return e[c].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(1)},function(e,t,n){"use strict";var c=n(2),r=(n.n(c),wp.blocks.registerBlockType),a=wp.i18n.__,l=wp.editor.RichText;r("themecoder-block/image-card",{title:a("Image Card","themecoder-block"),icon:"images-alt2",category:"layout",attributes:{title:{type:"string",source:"html",selector:".tc-title"},description:{type:"string",source:"html",selector:".tc-description"}},edit:function(e){var t=e.attributes,n=e.className,c=e.setAttributes,r=t.title,i=t.description;return wp.element.createElement("div",{className:n},wp.element.createElement("div",{className:"tc-columns"},wp.element.createElement("div",{className:"tc-image"}),wp.element.createElement("div",{className:"tc-card"},wp.element.createElement(l,{tagName:"h2",value:r,className:"tc-title",onChange:function(e){return c({title:e})},placeholder:a("Add a title\u2026","gt-blocks"),keepPlaceholderOnFocus:!0}),wp.element.createElement(l,{tagName:"p",value:i,className:"tc-description",onChange:function(e){return c({description:e})},placeholder:a("Write a description\u2026","gt-blocks"),keepPlaceholderOnFocus:!0}))))},save:function(e){var t=e.attributes,n=t.title,c=t.description;return wp.element.createElement("div",null,wp.element.createElement("div",{className:"tc-columns"},wp.element.createElement("div",{className:"tc-image"}),wp.element.createElement("div",{className:"tc-card"},wp.element.createElement(l.Content,{tagName:"h2",className:"tc-title",value:n}),wp.element.createElement(l.Content,{tagName:"p",className:"tc-description",value:c}))))}})},function(e,t){}]);