(()=>{"use strict";function e(e,t){document.querySelector(e).style.display=t?"block":"none"}!function(e){var t=window.setInterval((function(){void 0!==document.getElementsByTagName("body")[0]&&(window.clearInterval(t),e.call(this))}),1e3)}((function(){e(".buzzer-content",!0),e("#loading",!1)})),$(document).ready((()=>{(function(){const e=(e,t)=>`\n        <div class="hidden bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">\n            <p class="font-bold">${e}</p>\n            <p>${t}</p>\n        </div>`;function t(t){if(0===t.length){const t=$(e("Connection Error","Connection to metamask failed. Please try again"));t.appendTo(".grid"),t.toggle(500)}else{const e=t[0],n=$('\n        <div class="hidden bg-teal-100 border-l-4 border-teal-500 text-teal-900 p-4" role="alert">\n            <p class="font-bold">Connection Success</p>\n            <p>You will be redirected to buzzer nft input page</p>\n        </div>');n.appendTo(".grid"),n.toggle(500),$.post("/",{account:e},(e=>{console.log(e),"succ"==e&&location.reload()})),console.log(e)}}$(document).ready((async()=>{$("#mt-connect").click((async()=>{await async function(){const n=window.ethereum;n?(console.log("Ethereum successfully detected!"),await n.request({method:"eth_chainId"}),await n.request({method:"eth_requestAccounts"}).then(t).catch((t=>{if(t){console.log(t);const n=$(e("Connection Error","Connection to metamask failed. Please try again"));n.appendTo(".connect-mtmsk"),n.toggle(500)}}))):console.error("Please install MetaMask!",error)}()}))}))})(),$(document).ready((()=>{$(".0x4565_id_but").click((()=>{$.post("/0x4565",{"0x4565":$(".0x4565_id_inp").val()},(e=>{"succ_0x4565"==e&&location.reload()}))}))})),function(){const e=document.getElementById("file-template"),t=document.getElementById("image-template"),n=document.getElementById("empty");let o={};function c(c,l){const a=l.type.match("image.*")||l.type.match("application/pdf"),d=URL.createObjectURL(l),i=a?t.content.cloneNode(!0):e.content.cloneNode(!0);i.querySelector("h1").textContent=l.name,i.querySelector("li").id=d,i.querySelector(".delete").dataset.target=d,i.querySelector(".size").textContent=l.size>1024?l.size>1048576?Math.round(l.size/1048576)+"mb":Math.round(l.size/1024)+"kb":l.size+"b",l.type.match("image.*")?Object.assign(i.querySelector("img"),{src:d,alt:l.name}):Object.assign(i.querySelector("img"),{src:"/images/pdf.png",alt:l.name}),n.classList.add("hidden"),c.prepend(i),o[d]=l}const l=document.getElementById("gallery"),a=(document.getElementById("overlay"),document.getElementById("hidden-input"));document.getElementById("button").onclick=()=>a.click(),a.onchange=e=>{for(const t of e.target.files)c(l,t)},l.onclick=({target:e})=>{if(e.classList.contains("delete")){const t=e.dataset.target;document.getElementById(t).remove(t),1===l.children.length&&n.classList.remove("hidden"),delete o[t]}},document.getElementById("submit").onclick=()=>{alert(`Submitted Files:\n${JSON.stringify(o)}`),console.log(o)},document.getElementById("cancel").onclick=()=>{for(;l.children.length>0;)l.lastChild.remove();o={},n.classList.remove("hidden"),l.append(n)}}()}))})();