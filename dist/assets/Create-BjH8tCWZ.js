import{T as i,o as u,c as n,w as l,a as m,b as s,u as a,d as p,e as d,p as f,f as _}from"./app-CETcvn20.js";import{W as g}from"./WizardLayout-CH6FHGsX.js";import{F as V}from"./FormInput-BKhzg1hJ.js";import{F as C}from"./FormSubmit-CZoPQgEY.js";import{F as b}from"./FormColor-CIhFbjNA.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ApplicationLogo-Bq_MNiVl.js";import"./CreateButton.vue_vue_type_style_index_0_scoped_2473c3fd_lang-hSJpCdlz.js";const F=o=>(f("data-v-78fe1c6a"),o=o(),_(),o),h=F(()=>m("h1",{class:"create-surgery-form-title"},"Crear cirurgia",-1)),v={__name:"Create",setup(o){const e=i({name:"",color:""}),c=()=>{e.post(route("surgeries.store"))};return(I,r)=>(u(),n(g,null,{default:l(()=>[m("form",{onSubmit:d(c,["prevent"]),class:"create-surgery-form"},[h,s(V,{modelValue:a(e).name,"onUpdate:modelValue":r[0]||(r[0]=t=>a(e).name=t),type:"text",placeholder:"Nom de la cirurgia",icon:"/assets/icons/bone-break.svg",id:"name",name:"name",autofocus:""},null,8,["modelValue"]),s(b,{modelValue:a(e).color,"onUpdate:modelValue":r[1]||(r[1]=t=>a(e).color=t),placeholder:"Color de la cirurgia",icon:"/assets/icons/palette.svg",id:"color",name:"color"},null,8,["modelValue"]),s(C,null,{default:l(()=>[p("Crear cirurgia")]),_:1})],32)]),_:1}))}},W=x(v,[["__scopeId","data-v-78fe1c6a"]]);export{W as default};
