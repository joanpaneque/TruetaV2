import{r as f,o as V,g as w,a as A,q as m}from"./app-CETcvn20.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";const $={class:"form-condition-container"},O=["innerHTML","placeholder"],q={__name:"FormCondition",props:{modelValue:{type:String,default:""},antibiotics:{type:Object,default:{}},placeholder:{type:String,default:""},antibiotics:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(b,{emit:M}){const g=b,u=M;function H(e){return e.replace(/{{(.*?)}}/g,(o,t)=>{const i=g.antibiotics.find(a=>a.id===parseInt(t));return i?`<span class="antibiotic" data-id="${i.id}">${i.name}</span>`:o}).replace(/\n/g,"<br>")}const _=f(H(g.modelValue)),n=f(null),s=f(null),S=(e,o)=>{let t=document.createRange();t.selectNode(e),t.setStart(e,0);let i=0;const a=[e];for(;a.length>0;){const l=a.pop();if(l.nodeType===Node.TEXT_NODE){const c=l.textContent.length;if(i+c>=o)return t.setEnd(l,o-i),t;i+=c}else if(l.childNodes&&l.childNodes.length>0)for(let c=l.childNodes.length-1;c>=0;c--)a.push(l.childNodes[c])}return t.setEnd(e,e.childNodes.length),t},d=e=>{const o=S(n.value,e),t=window.getSelection();t.removeAllRanges(),t.addRange(o),t.collapseToEnd()};function y(e){s.value&&(e.preventDefault(),v())}function E(){n.value.scrollTop=n.value.scrollHeight}function k(e){e.preventDefault(),n.value.innerHTML+="<br/>&nbsp;",d(n.value.innerHTML.length),E(),u("update:modelValue",p())}function C(e){n.value.innerText.trim()===""&&(e.preventDefault(),n.value.innerHTML="",u("update:modelValue",p()))}function r(){return n.value.innerHTML.replace(/<span class="antibiotic-suggestion">.*?<\/span>/g,"")}function p(){const e=document.createElement("div");return e.innerHTML=r().replaceAll("&nbsp;"," "),e.querySelectorAll(".antibiotic").forEach(t=>{const i=t.getAttribute("data-id");t.outerHTML=`{{ ${i} }}`}),e.querySelectorAll("div").forEach(t=>{t.outerHTML=t.innerHTML}),e.innerHTML}function v(){let e=r();e=e.split(" ").slice(0,-1).join(" ");const o=Math.random().toString(36).substring(7);e+=` <span class="antibiotic" data-id="${s.value.id}" hash="${o}">${s.value.name}</span>&nbsp;`,n.value.innerHTML=e,setTimeout(()=>{n.value.querySelector(`[hash="${o}"]`).addEventListener("click",()=>{console.log("click")})}),d(e.length),s.value=null,u("update:modelValue",p())}const N=e=>{function o(){n.value.querySelector(".antibiotic-suggestion").addEventListener("click",()=>{v()})}const i=window.getSelection().getRangeAt(0),a=i.cloneRange();a.selectNodeContents(n.value),a.setEnd(i.endContainer,i.endOffset);const l=a.toString().length,T=r().replaceAll("&nbsp;"," ").split(" ").pop().replace(/&nbsp;/g,"").toLowerCase(),h=Object.values(g.antibiotics).filter(L=>L.name.toLowerCase().startsWith(T));h.length===1&&T.length>1?(n.value.innerHTML=r(),n.value.innerHTML+=`<span class="antibiotic-suggestion">${h[0].name}</span>`,s.value=h[0],setTimeout(()=>{o()},0),d(l)):n.value.innerHTML=r(),u("update:modelValue",p()),d(l)};return(e,o)=>(V(),w("div",$,[A("div",{contenteditable:"true",class:"form-condition-input",innerHTML:_.value,onInput:N,ref_key:"htmlRef",ref:n,spellcheck:"false",onKeydown:[m(y,["tab"]),m(C,["backspace"]),m(k,["enter"])],placeholder:b.placeholder},null,40,O)]))}},j=R(q,[["__scopeId","data-v-3b55951f"]]);export{j as F};
