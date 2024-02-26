"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[676],{9151:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var i=t(4848),o=t(8453);const s={sidebar_position:3},l="Link the Backend",r={id:"tutorial-basics/link",title:"Link the Backend",description:"Now its time to link the backend back up to your frontend!",source:"@site/docs/tutorial-basics/link.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/link",permalink:"/movieweb-backendocs/tutorial-basics/link",draft:!1,unlisted:!1,editUrl:"https://github.com/TecEash1/movieweb-backendocs/docs/tutorial-basics/link.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Creating the Service",permalink:"/movieweb-backendocs/tutorial-basics/create-service"},next:{title:"Making the Docker Image",permalink:"/movieweb-backendocs/docker"}},c={},d=[{value:"Method 1",id:"method-1",level:2},{value:"<strong>Vercel</strong>",id:"vercel",level:3},{value:"Non-Vercel Applications",id:"non-vercel-applications",level:3},{value:"Method 2",id:"method-2",level:2}];function a(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"link-the-backend",children:"Link the Backend"}),"\n",(0,i.jsx)(n.p,{children:"Now its time to link the backend back up to your frontend!"}),"\n",(0,i.jsx)(n.p,{children:"Once your Google Cloud run service has finished launching you should have a URL that is shown:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"url",src:t(8666).A+"",width:"853",height:"40"})}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make a note or copy that URL"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"method-1",children:"Method 1"}),"\n",(0,i.jsx)(n.p,{children:"Method 1 involves linking the backend to your Movie Web frontend globally. This will enable all of your users to be able to use your backend system."}),"\n",(0,i.jsx)(n.h3,{id:"vercel",children:(0,i.jsx)(n.strong,{children:"Vercel"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Head to your project and select "Settings"'}),"\n",(0,i.jsx)(n.li,{children:'Select "Environmental Variables"'}),"\n",(0,i.jsx)(n.li,{children:"Add the following environmental variable:"}),"\n"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Key"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"VITE_BACKEND_URL"}),(0,i.jsx)(n.td,{children:"PASTED BACKEND URL"})]})})]}),"\n",(0,i.jsx)(n.h3,{id:"non-vercel-applications",children:"Non-Vercel Applications"}),"\n",(0,i.jsxs)(n.p,{children:["For non vercel applications adding the environmental variable will depend on where and how you are hosting it. The environmental variable you need to add is the same as vercel (",(0,i.jsx)(n.code,{children:"VITE_BACKEND_URL"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"method-2",children:"Method 2"}),"\n",(0,i.jsx)(n.p,{children:"Method 2 involves having the user link the backend system to Movie Web themselves. To do this they will need to open up your Movie Web frontend and:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Click on the burger menu in the top right"}),"\n",(0,i.jsx)(n.li,{children:"Select Settings"}),"\n",(0,i.jsx)(n.li,{children:"Scroll down to Custom Server"}),"\n",(0,i.jsxs)(n.li,{children:["Paste your backend URL in and hit ",(0,i.jsx)(n.code,{children:"Save"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"movieweb-backend",src:t(2771).A+"",width:"1797",height:"685"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8666:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-10-b864a32424cb1b345ac6a038da2a04aa.png"},2771:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/image-11-575618798b053983fc0e9bedb433bbc4.png"},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(6540);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);