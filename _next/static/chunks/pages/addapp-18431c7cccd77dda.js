(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[440],{8538:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addapp",function(){return n(1905)}])},1905:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return o}});var s=n(5893),i=n(9008),a=n.n(i),t=n(7294),r=n(3162);function o(){function e(e){var l=e.toString().toLowerCase();return(l=(l=(l=l.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let l=()=>{var l=n(5733);let s=new l,a=s.folder(m.friendly_name);a.file("app.json",JSON.stringify(m,null,2)),i&&a.file(m.image_src,i.file),s.generateAsync({type:"blob"}).then(function(l){(0,r.saveAs)(l,e(m.friendly_name)+".zip")})},[i,o]=(0,t.useState)(null),[d,c]=(0,t.useState)("png"),[m,u]=(0,t.useState)({friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",volume_mappings:"{}",run_config:"{}",exec_config:"{}",categories:"[]"});(0,t.useEffect)(()=>{if(m&&m.friendly_name){let l={...m};l.image_src=e(l.friendly_name)+"."+d,u(l)}},[d]);let p=l=>{let n={...m};n[l.target.name]=l.target.value,"icon"===l.target.name&&(delete n.icon,o({value:l.target.value,file:l.target.files[0]}),c(l.target.value.substr(l.target.value.lastIndexOf(".")+1))),n.friendly_name&&(n.image_src=e(n.friendly_name)+"."+d),u(n)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(a(),{children:[(0,s.jsx)("title",{children:"Kasm Apps"}),(0,s.jsx)("meta",{name:"description",content:"List of apps for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Application"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:"This will help you generate the JSON file you need to upload to the App directory."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{name:"friendly_name",onChange:p,className:"mb-2 p-2 rounded-lg bg-white/30 border border-solid border-slate-600/60"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{name:"description",onChange:p,className:"mb-2 p-2 rounded-lg bg-white/30 border border-solid border-slate-600/60"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the application"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{name:"name",onChange:p,className:"mb-2 p-2 rounded-lg bg-white/30 border border-solid border-slate-600/60"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:p,className:"mb-2 p-2 rounded-lg bg-white/30 border border-solid border-slate-600/60"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"URL to the icon to use, this will be downloaded."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)("pre",{className:"mb-8 overflow-y-auto",children:JSON.stringify(m,null,2)}),(0,s.jsx)("button",{onClick:l,className:"p-4 relative z-10 px-5 bg-emerald-600 m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}}},function(e){e.O(0,[889,774,888,179],function(){return e(e.s=8538)}),_N_E=e.O()}]);