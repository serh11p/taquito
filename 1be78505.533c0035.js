(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{205:function(r,i,e){"use strict";var a=e(2),t=e(9),n=e(0),p=e.n(n),m=e(163),s=e.n(m),o=e(169),c=e(162),l=e(168),g=e(127),u=e.n(g);function d(r){var i=r.to,e=r.href,n=r.label,m=Object(t.a)(r,["to","href","label"]),s=Object(l.a)(i);return p.a.createElement(o.a,Object(a.a)({className:"footer__link-item"},e?{target:"_blank",rel:"noopener noreferrer",href:e}:{to:s},m),n)}var f=function(r){var i=r.url,e=r.alt;return p.a.createElement("img",{className:"footer__logo",alt:e,src:i})};i.a=function(){var r=Object(c.a)().siteConfig,i=(void 0===r?{}:r).themeConfig,e=(void 0===i?{}:i).footer,a=e||{},t=a.copyright,n=a.links,m=void 0===n?[]:n,o=a.logo,g=void 0===o?{}:o,P=Object(l.a)(g.src);return e?p.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===e.style})},p.a.createElement("div",{className:"container"},m&&m.length>0&&p.a.createElement("div",{className:"row footer__links"},m.map((function(r,i){return p.a.createElement("div",{key:i,className:"col footer__col"},null!=r.title?p.a.createElement("h4",{className:"footer__title"},r.title):null,null!=r.items&&Array.isArray(r.items)&&r.items.length>0?p.a.createElement("ul",{className:"footer__items"},r.items.map((function(r,i){return r.html?p.a.createElement("div",{key:i,dangerouslySetInnerHTML:{__html:r.html}}):p.a.createElement("li",{key:r.href||r.to,className:"footer__item"},p.a.createElement(d,r))}))):null)}))),(g||t)&&p.a.createElement("div",{className:"text--center"},g&&g.src&&p.a.createElement("div",{className:"margin-bottom--sm"},g.href?p.a.createElement("a",{href:g.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},p.a.createElement(f,{alt:g.alt,url:P})):p.a.createElement(f,{alt:g.alt,url:P})),t))):null}},261:function(r,i){},342:function(r,i){},344:function(r,i){},409:function(r,i){},411:function(r,i){},421:function(r,i){},423:function(r,i){},448:function(r,i){},450:function(r,i){},451:function(r,i){},457:function(r,i){},459:function(r,i){},477:function(r,i){},480:function(r,i){},496:function(r,i){},499:function(r,i){},537:function(r,i,e){"use strict";e(333),e(334);var a=e(2),t=(e(335),e(184),e(336),e(9)),n=e(162),p=e(536),m=e(200),s=e(4),o=e(163),c=e.n(o),l=e(311),g=e.n(l),u=e(0),d=e.n(u),f=e(520),P=e(136),D=e.n(P),I=function(r){function i(){var i;return(i=r.call(this)||this).onChange=function(r){i.code=r},i}Object(s.a)(i,r);var e=i.prototype;return e.UNSAFE_componentWillMount=function(){this.code=this.props.code},e.componentDidUpdate=function(){},e.run=function(){var r=this.props,i=r.scope,e=r.transformCode,a=r.noInline,t="\nlet _printlnBuffer = \"\";\n\nfunction println(value) {\n  _printlnBuffer += value + \"\\n\";\n\n  render(_printlnBuffer);\n}\n\nTezos.setProvider({ rpc: 'https://api.tez.ie/rpc/carthagenet' });\n\nfetch('https://api.tez.ie/keys/carthagenet/', {\n    method: 'POST',\n    headers: { Authorization: 'Bearer taquito-example' },\n  })\n  .then(response => response.text())\n  .then(privateKey => {\n    return Tezos.importKey(privateKey);\n  })\n  .then(() => {\n    "+this.code+'\n  });\n\n//contract used in example "estimate a contract origination"\nconst genericMultisigJSONfile = \n[ { "prim": "parameter","args":[ { "prim": "or","args":[ { "prim": "unit", "annots": [ "%default" ] },{ "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%counter" ] },{ "prim": "or","args":[ { "prim": "lambda","args":[ { "prim": "unit" },{ "prim": "list","args":[ { "prim":"operation" } ] } ],"annots":[ "%operation" ] },{ "prim": "pair", "args":[ { "prim": "nat","annots":[ "%threshold" ] },{ "prim": "list",\n"args":[ { "prim": "key" } ],"annots":[ "%keys" ] } ],"annots":[ "%change_keys" ] } ],"annots": [ ":action" ] } ],"annots": [ ":payload" ] },{ "prim": "list","args":[ { "prim": "option","args":[ { "prim": "signature" } ] } ],"annots": [ "%sigs" ] } ],"annots": [ "%main" ] } ] } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "nat","annots": [ "%stored_counter" ] },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%threshold" ] },{ "prim": "list","args": [ { "prim": "key" } ],"annots": [ "%keys" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ [ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "IF_LEFT","args":[ [ { "prim": "DROP" },{ "prim": "NIL","args": [ { "prim": "operation" } ] },{ "prim": "PAIR" } ],[ { "prim": "PUSH","args":[ { "prim": "mutez" },{ "int": "0" } ] },{ "prim": "AMOUNT" },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ], { "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "SWAP" }, \n{ "prim": "DUP" },{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DUP" },{ "prim": "SELF" },{ "prim": "ADDRESS" },{ "prim": "PAIR" },{ "prim": "PACK" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR","annots":[ "@counter" ] },{ "prim": "DIP","args":[ [ { "prim":"CDR" } ] ] } ] ],{ "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] } ] ] },{ "prim": "SWAP" } ] ] },\n[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@stored_counter" ] },{ "prim": "DIP","args": [ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "EQ" } ],{ "prim": "IF","args":[ [],[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "DIP","args": [ [ { "prim": "SWAP" } ] ] },[ [ { "prim": "DUP" },{ "prim": "CAR","annots": [ "@threshold" ] },{ "prim": "DIP","args":[ [ { "prim": "CDR","annots": [ "@keys" ] } ] ] } ] ],\n{ "prim": "DIP","args":[ [ { "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "0" } ],"annots": [ "@valid" ] },{ "prim": "SWAP" },{ "prim": "ITER","args":[ [ { "prim": "DIP","args":[ [ { "prim": "SWAP" } ] ] },{ "prim": "SWAP" },{ "prim": "IF_CONS","args":[ [ [ { "prim":"IF_NONE","args":[ [ { "prim":"SWAP" },{ "prim":"DROP" } ],[ { "prim":"SWAP" },{ "prim":"DIP","args":[ [ { "prim":"SWAP" },{ "prim":"DIP","args":[ { "int":"2" },[ [ { "prim":"DIP","args":[ [ { "prim":"DUP" } ] ] },{ "prim":"SWAP" } ] ] ] },\n[ [ { "prim":"DIP","args":[ { "int":"2" },[ { "prim":"DUP" } ] ] },{ "prim":"DIG","args":[ { "int":"3" } ] } ],{ "prim":"DIP","args":[ [ { "prim":"CHECK_SIGNATURE" } ] ] },{ "prim":"SWAP" },{ "prim":"IF","args":[ [ { "prim":"DROP" } ],[ { "prim":"FAILWITH" } ] ] } ],{ "prim":"PUSH","args":[ { "prim":"nat" },{ "int":"1" } ] },{ "prim":"ADD","annots":[ "@valid" ] } ] ] } ] ] } ] ],[ [ { "prim":"UNIT" },{ "prim":"FAILWITH" } ] ] ] },{ "prim": "SWAP" } ] ] } ] ] },[ [ { "prim": "COMPARE" },{ "prim": "LE" } ],{ "prim": "IF","args":[ [],\n[ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ] ] } ],{ "prim": "IF_CONS","args":[ [ [ { "prim": "UNIT" },{ "prim": "FAILWITH" } ] ],[] ] }, { "prim": "DROP" },{ "prim": "DIP","args":[ [ [ [ { "prim": "DUP" },{ "prim": "CAR" },{ "prim": "DIP","args":[ [ { "prim": "CDR" } ] ] } ] ],{ "prim": "PUSH","args":[ { "prim": "nat" },{ "int": "1" } ] },{ "prim": "ADD","annots": [ "@new_counter" ] },{ "prim": "PAIR" } ] ] },{ "prim": "IF_LEFT","args":[ [ { "prim": "UNIT" },{ "prim": "EXEC" } ],[ { "prim": "DIP","args":[ [ { "prim": "CAR" } ] ] },\n{ "prim": "SWAP" },{ "prim": "PAIR" },{ "prim": "NIL","args":[ { "prim": "operation" } ] } ] ] },{ "prim": "PAIR" } ] ] } ] ] } ]\n\n//contract for the example "Contract origination with map in storage having initial values"\nconst contractMapTacoShop = \n[ { "prim": "parameter", "args": [ { "prim": "nat" } ] },\n{ "prim": "storage","args":[ { "prim": "map","args":[ { "prim": "nat" },{ "prim": "pair","args":[ { "prim": "nat", "annots": [ "%current_stock" ] },{ "prim": "mutez", "annots": [ "%max_price" ] } ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "DUP" }, { "prim": "DIG", "args": [ { "int": "2" } ] },{ "prim": "DUP" }, { "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "GET" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string": "Unknown kind of taco." } ] },{ "prim": "FAILWITH" } ],[ { "prim": "DUP" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] },\n{ "prim": "DUP" }, { "prim": "CAR" },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] }, { "prim": "CDR" },{ "prim": "EDIV" },{ "prim": "IF_NONE","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" }, { "string": "DIV by 0" } ] },{ "prim": "FAILWITH" } ], [] ] }, { "prim": "CAR" },{ "prim": "DUP" }, { "prim": "AMOUNT" }, { "prim": "COMPARE" },{ "prim": "NEQ" },{ "prim": "IF","args":[ [ { "prim": "PUSH","args":[ { "prim": "string" },{ "string":"Sorry, the taco you are trying to purchase has a different price" } ] },\n{ "prim": "FAILWITH" } ],[ { "prim": "PUSH","args": [ { "prim": "unit" }, { "prim": "Unit" } ] } ] ] },{ "prim": "DIG", "args": [ { "int": "2" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "3" } ] },{ "prim": "PUSH", "args": [ { "prim": "nat" }, { "int": "1" } ] },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "5" } ] }, { "prim": "CAR" },{ "prim": "SUB" }, { "prim": "ABS" }, { "prim": "SWAP" },{ "prim": "CDR" }, { "prim": "SWAP" }, { "prim": "PAIR" },{ "prim": "DIG", "args": [ { "int": "4" } ] }, { "prim": "DUP" },\n{ "prim": "DUG", "args": [ { "int": "5" } ] },{ "prim": "DIG", "args": [ { "int": "1" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "2" } ] },{ "prim": "DIG", "args": [ { "int": "7" } ] }, { "prim": "DUP" },{ "prim": "DUG", "args": [ { "int": "8" } ] }, { "prim": "SWAP" },{ "prim": "SOME" }, { "prim": "SWAP" }, { "prim": "UPDATE" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP","args": [ [ { "prim": "DROP", "args": [ { "int": "7" } ] } ] ] } ] ] } ]\n\n\n//contract for the example of map wih pair key\nconst contractMapPairKey = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },\n{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "pair","args":[ { "prim": "address", "annots": [ "%theAddress" ] },\n{ "prim": "map","args":[ { "prim": "pair","args":[ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "pair","args":[ { "prim": "mutez", "annots": [ "%amount" ] },{ "prim": "int", "annots": [ "%quantity" ] } ] } ],"annots": [ "%theMap" ] } ] },{ "prim": "int", "annots": [ "%theNumber" ] } ] } ] },\n{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n\n//contract for the example of map in storage with 8 nested pairs\nconst contractMap8pairs = \n[{ "prim": "parameter", "args": [{ "prim": "unit" }] },{"prim": "storage","args":[{prim: \'map\',args: [{prim: "pair", args: [{ prim: "int" },{prim: "pair", args: [{ prim: "nat" },{prim: "pair", args: [{ prim: "string" },{prim: "pair", args: [{ prim: "bytes" },{prim: "pair", args: [{ prim: "mutez" },{prim: "pair", args: [{ prim: "bool" },{prim: "pair", args: [{ prim: "key_hash" },{prim: "pair", args: [{ prim: "timestamp" },{ prim: "address" }]}]}]}]}]}]}]}]}, { prim: "int" }]},]},{"prim": "code","args":[[{ "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [{ "prim": "operation" }] },\n{ "prim": "PAIR" },{ "prim": "DIP", "args": [[{ "prim": "DROP" }]] }]]}]\n\n//contract for map and bigmap combined example\nconst contractMapBigMap = \n[ { "prim": "parameter", "args": [ { "prim": "unit" } ] },{ "prim": "storage","args":[ { "prim": "pair","args":[ { "prim": "big_map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%thebigmap" ] },{ "prim": "map","args":[ { "prim": "pair","args": [ { "prim": "nat" }, { "prim": "address" } ] },{ "prim": "int" } ], "annots": [ "%themap" ] } ] } ] },{ "prim": "code","args":[ [ { "prim": "DUP" }, { "prim": "CDR" },{ "prim": "NIL", "args": [ { "prim": "operation" } ] },{ "prim": "PAIR" },{ "prim": "DIP", "args": [ [ { "prim": "DROP" } ] ] } ] ] } ]\n';this.transpile({code:t,scope:i,transformCode:e,noInline:a})},i}(f.d);var h=function(r){var i=r.children,e=r.theme,n=r.transformCode,p=Object(t.a)(r,["children","theme","transformCode"]),m=Object(u.useState)(!1),s=m[0],o=m[1],l=Object(u.useRef)(null),P=Object(u.useRef)(null);return Object(u.useEffect)((function(){var r;return P.current&&(r=new g.a(P.current,{text:function(){return l.current.code}})),function(){r&&r.destroy()}}),[P.current,l.current]),d.a.createElement(I,Object(a.a)({ref:l,code:i,transformCode:n||function(r){return r+";"},theme:e},p),d.a.createElement("div",{className:D.a.playgroundEditorWrapper},d.a.createElement("div",{className:c()(D.a.playgroundHeader,D.a.playgroundEditorHeader)},"Live Editor"),d.a.createElement(f.a,null),d.a.createElement("button",{ref:P,type:"button","aria-label":"Copy code to clipboard",className:c()(D.a.button,D.a.copyButton),onClick:function(){window.getSelection().empty(),o(!0),setTimeout((function(){return o(!1)}),2e3)}},s?"Copied":"Copy")),d.a.createElement("div",{className:c()(D.a.playgroundHeader,D.a.playgroundPreviewHeader)},"Result",d.a.createElement("button",{type:"button","aria-label":"Execute example",className:c()(D.a.button,D.a.runButton),onClick:function(){l.current&&l.current.run()}},"Run code")),d.a.createElement("div",{className:D.a.playgroundPreview},d.a.createElement(f.c,null),d.a.createElement(f.b,null)))},A=e(529),E=e.n(A),U=e(312),v=e(530),b=e(137),y=e.n(b),C=/{([\d,-]+)}/;i.a=function(r){var i=r.children,e=r.className,s=r.live,o=r.metastring,l=Object(t.a)(r,["children","className","live","metastring"]),f=Object(n.a)().siteConfig.themeConfig.prism,P=void 0===f?{}:f,D=Object(u.useState)(!1),I=D[0],A=D[1],b=Object(u.useRef)(null),R=Object(u.useRef)(null),N=[];if(o&&C.test(o)){var S=o.match(C)[1];N=E.a.parse(S).filter((function(r){return r>0}))}if(Object(u.useEffect)((function(){var r;return R.current&&(r=new g.a(R.current,{target:function(){return b.current}})),function(){r&&r.destroy()}}),[R.current,b.current]),s){var O=new p.b;return d.a.createElement(h,Object(a.a)({scope:Object.assign({},d.a,{Tezos:O,validateAddress:m.p,validateChain:m.q,validateKeyHash:m.s,validateContractAddress:m.r,validatePublicKey:m.t,validateSignature:m.u,MichelsonMap:p.a}),code:i.trim(),theme:P.theme||v.a,transformCode:function(r){return r.replace(/import .*/g,"")}},l))}var _=e&&e.replace(/language-/,"");!_&&P.defaultLanguage&&(_=P.defaultLanguage);var k=function(){window.getSelection().empty(),A(!0),setTimeout((function(){return A(!1)}),2e3)};return d.a.createElement(U.a,Object(a.a)({},U.b,{theme:P.theme||v.a,code:i.trim(),language:_}),(function(r){var i=r.className,e=r.style,t=r.tokens,n=r.getLineProps,p=r.getTokenProps;return d.a.createElement("div",{className:y.a.codeBlockWrapper},d.a.createElement("pre",{ref:b,className:c()(i,y.a.codeBlock),style:e},t.map((function(r,i){var e=n({line:r,key:i});return N.includes(i+1)&&(e.className=e.className+" docusaurus-highlight-code-line"),d.a.createElement("div",Object(a.a)({key:i},e),r.map((function(r,i){return d.a.createElement("span",Object(a.a)({key:i},p({token:r,key:i})))})))}))),d.a.createElement("button",{ref:R,type:"button","aria-label":"Copy code to clipboard",className:y.a.copyButton,onClick:k},I?"Copied":"Copy"))}))}}}]);