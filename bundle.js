(()=>{var e=function(){return document.getElementById("text1")},n=function(){return document.getElementById("text2")};function t(t){var o=e().value,d=n().value;o===d?(document.getElementById("noDifference").removeAttribute("hidden"),document.getElementById("difference").setAttribute("hidden","")):function(e,n){document.getElementById("noDifference").setAttribute("hidden","");for(var t=function(e,n){var t=[],o=0,d=0;function i(e,n,t){for(var o=new Map,d=n;d<=t;d++){var i=e[d];o.has(i)?(o.get(i).count++,o.get(i).index=d):o.set(i,{count:1,index:d})}return o.forEach((function(e,n,t){1!==e.count?t.delete(n):t.set(n,e.index)})),o}function l(e,n,t,o,d,l){var r=i(e,n,t),c=i(o,d,l);return r.forEach((function(e,n,t){c.has(n)?t.set(n,{indexA:e,indexB:c.get(n)}):t.delete(n)})),r}function r(i,l){l<0?o++:i<0&&d++,t.push({line:0<=i?e[i]:n[l],aIndex:i,bIndex:l})}function c(t,o,d,i){for(;t<=o&&d<=i&&e[t]===n[d];)r(t++,d++);for(var c=o;t<=o&&d<=i&&e[o]===n[i];)o--,i--;var a=l(e,t,o,n,d,i);if(0===a.size){for(;t<=o;)r(t++,-1);for(;d<=i;)r(-1,d++)}else u(t,o,d,i,a);for(;o<c;)r(++o,++i)}function u(t,o,d,i,r){var u=function(e){var n=[];e.forEach((function(e,t,o){for(var d=0;n[d]&&n[d][n[d].length-1].indexB<e.indexB;)d++;n[d]||(n[d]=[]),0<d&&(e.prev=n[d-1][n[d-1].length-1]),n[d].push(e)}));var t=[];if(0<n.length){var o=n.length-1;for(t=[n[o][n[o].length-1]];t[t.length-1].prev;)t.push(t[t.length-1].prev)}return t.reverse()}(r||l(e,t,o,n,d,i));if(0===u.length)c(t,o,d,i);else{var a;for((t<u[0].indexA||d<u[0].indexB)&&c(t,u[0].indexA-1,d,u[0].indexB-1),a=0;a<u.length-1;a++)c(u[a].indexA,u[a+1].indexA-1,u[a].indexB,u[a+1].indexB-1);(u[a].indexA<=o||u[a].indexB<=i)&&c(u[a].indexA,o,u[a].indexB,i)}}return u(0,e.length-1,0,n.length-1),{lines:t,lineCountDeleted:o,lineCountInserted:d}}(e.split(""),n.split("")).lines,o="",d="",i='<span class="difference">',l="</span>",r=!1,c=!1,u=0;u<t.length;u++)-1===t[u].aIndex?(c||(c=!0,d+=i),d+=t[u].line):-1===t[u].bIndex?(r||(r=!0,o+=i),o+=t[u].line):(r&&(r=!1,o+=l),c&&(c=!1,d+=l),o+=t[u].line,d+=t[u].line);document.getElementById("comparedText1").innerHTML=o,document.getElementById("comparedText2").innerHTML=d,document.getElementById("difference").removeAttribute("hidden")}(o,d)}function o(e,n){console.log(e),console.log(n),e.value=n;var t=new Event("input",{target:e,bubbles:!0});e.dispatchEvent(t)}document.addEventListener("DOMContentLoaded",(function(){o(document.getElementById("separator"),"\\n"),document.getElementById("sep0").onclick=function(e){o(document.getElementById("separator"),"\\n")},document.getElementById("sep1").onclick=function(e){o(document.getElementById("separator")," ")},document.getElementById("sep2").onclick=function(e){o(document.getElementById("separator"),",")},document.getElementById("sep3").onclick=function(e){o(document.getElementById("separator"),".")},document.getElementById("compare").onclick=t,document.getElementById("clearAll").onclick=function(t){e().value="",n().value=""},document.getElementById("switchTexts").onclick=function(t){var o=e().value;e().value=n().value,n().value=o},document.getElementById("sort").onclick=function(t){var o=document.getElementById("separator").value.split("\\n").join("\n");e().value=e().value.split(o).sort().join(o),n().value=n().value.split(o).sort().join(o)}}))})();