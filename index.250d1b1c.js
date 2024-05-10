var e=document.querySelector(".tree");document.querySelectorAll("li").forEach(function(e){if(e.childNodes.length>1){var n=document.createElement("span");e.prepend(n),n.appendChild(n.nextSibling)}}),e.addEventListener("click",function(e){var n=e.target;"SPAN"===n.tagName&&(n.nextSibling.hidden=!n.nextSibling.hidden)});
//# sourceMappingURL=index.250d1b1c.js.map
