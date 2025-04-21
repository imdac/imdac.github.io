import{_ as o,M as a,p as i,q as r,R as e,t as s,N as t,a3 as l}from"./framework-dd056dd6.js";const c={},u=e("h1",{id:"application-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#application-structure","aria-hidden":"true"},"#"),s(" Application Structure")],-1),d={class:"custom-container warning"},p=e("p",{class:"custom-container-title"},"NOTE",-1),m={href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},h=l(`<p>Vuex doesn&#39;t really restrict how you structure your code. Rather, it enforces a set of high-level principles:</p><ol><li><p>Application-level state is centralized in the store.</p></li><li><p>The only way to mutate the state is by committing <strong>mutations</strong>, which are synchronous transactions.</p></li><li><p>Asynchronous logic should be encapsulated in, and can be composed with <strong>actions</strong>.</p></li></ol><p>As long as you follow these rules, it&#39;s up to you how to structure your project. If your store file gets too big, simply start splitting the actions, mutations and getters into separate files.</p><p>For any non-trivial app, we will likely need to leverage modules. Here&#39;s an example project structure:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>├── index.html
├── main.js
├── api
│   └── <span class="token punctuation">..</span>. <span class="token comment"># abstractions for making API requests</span>
├── components
│   ├── App.vue
│   └── <span class="token punctuation">..</span>.
└── store
    ├── index.js          <span class="token comment"># where we assemble modules and export the store</span>
    ├── actions.js        <span class="token comment"># root actions</span>
    ├── mutations.js      <span class="token comment"># root mutations</span>
    └── modules
        ├── cart.js       <span class="token comment"># cart module</span>
        └── products.js   <span class="token comment"># products module</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v={href:"https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart",target:"_blank",rel:"noopener noreferrer"};function b(_,g){const n=a("ExternalLinkIcon");return i(),r("div",null,[u,e("div",d,[p,e("p",null,[s("The following documentation comes directly from the "),e("a",m,[s("vuex.vuejs.org"),t(n)]),s(".")])]),h,e("p",null,[s("As a reference, check out the "),e("a",v,[s("Shopping Cart Example"),t(n)]),s(".")])])}const x=o(c,[["render",b],["__file","structure.html.vue"]]);export{x as default};
