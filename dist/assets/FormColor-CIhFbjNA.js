import{r,h as c,o as m,g as f,a,i as p,v as y,n as v}from"./app-CETcvn20.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g=["for"],h=["for"],V=["name","placeholder","id"],S=["src"],x=["id","name"],B={__name:"FormColor",props:{placeholder:{type:String,default:""},modelValue:{type:String,default:""},value:{type:String,default:""},icon:{type:String,default:""},id:{type:String,default:""},name:{type:String,default:""},autofocus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e,{emit:s}){const n=e,i=s,l=r(n.modelValue||n.value);c(()=>n.modelValue,t=>{l.value=t});const u=t=>{l.value=t,i("update:modelValue",t)};return(t,o)=>(m(),f("div",{class:v(["input-container",{disabled:e.disabled}])},[a("label",{for:e.id,class:"label",style:{display:"none"}},"Dummy",8,g),a("label",{for:"color-"+e.id,class:"label",style:{display:"none"}},"Dummy",8,h),a("input",{name:e.name,required:"",autocomplete:"off",placeholder:e.placeholder,type:"text",disabled:"",id:e.id},null,8,V),a("img",{src:e.icon,alt:"Icon",class:"icon"},null,8,S),p(a("input",{type:"color","onUpdate:modelValue":o[0]||(o[0]=d=>l.value=d),onInput:o[1]||(o[1]=d=>u(d.target.value)),id:"color-"+e.id,name:e.name},null,40,x),[[y,l.value]])],2))}},D=b(B,[["__scopeId","data-v-6912ebfa"]]);export{D as F};
