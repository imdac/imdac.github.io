import{_ as r,M as a,p as c,q as p,R as n,t as e,N as t,V as l,a3 as o}from"./framework-dd056dd6.js";const u={},d=n("h1",{id:"vuex",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuex","aria-hidden":"true"},"#"),e(" Vuex")],-1),m={class:"custom-container warning"},h=n("p",{class:"custom-container-title"},"NOTE",-1),v={href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},k=o('<div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cMPa2Uk" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>At the center of every Vuex application is the <strong>store</strong>. A &quot;store&quot; is basically a container that holds your application <strong>state</strong>. There are two things that make a Vuex store different from a plain global object:</p><ol><li><p>Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store&#39;s state changes.</p></li><li><p>You cannot directly mutate the store&#39;s state. The only way to change a store&#39;s state is by explicitly <strong>committing mutations</strong>. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.</p></li></ol><h3 id="the-simplest-store" tabindex="-1"><a class="header-anchor" href="#the-simplest-store" aria-hidden="true">#</a> The Simplest Store</h3>',4),g=n("strong",null,"NOTE:",-1),b={href:"https://babeljs.io/docs/learn-es2015/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://vuex.vuejs.org/installation.md",target:"_blank",rel:"noopener noreferrer"},_=o(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Make sure to call Vue.use(Vuex) first if using a module system</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, you can access the state object as <code>store.state</code>, and trigger a state change with the <code>store.commit</code> method:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;increment&#39;</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span> <span class="token comment">// -&gt; 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Again, the reason we are committing a mutation instead of changing <code>store.state.count</code> directly, is because we want to explicitly track it. This simple convention makes your intention more explicit, so that you can reason about state changes in your app better when reading the code. In addition, this gives us the opportunity to implement tools that can log every mutation, take state snapshots, or even perform time travel debugging.</p><p>Using store state in a component simply involves returning the state within a computed property, because the store state is reactive. Triggering changes simply means committing mutations in component methods.</p>`,5),y={href:"https://jsfiddle.net/n9jmu5v7/1269/",target:"_blank",rel:"noopener noreferrer"};function x(w,j){const s=a("ExternalLinkIcon"),i=a("RouterLink");return c(),p("div",null,[d,n("div",m,[h,n("p",null,[e("The following documentation comes directly from the "),n("a",v,[e("vuex.vuejs.org"),t(s)]),e(".")])]),k,n("blockquote",null,[n("p",null,[g,e(" We will be using ES2015 syntax for code examples for the rest of the docs. If you haven't picked it up, "),n("a",b,[e("you should"),t(s)]),e("!")])]),n("p",null,[e("After "),n("a",f,[e("installing"),t(s)]),e(" Vuex, let's create a store. It is pretty straightforward - just provide an initial state object, and some mutations:")]),_,n("p",null,[e("Here's an example of the "),n("a",y,[e("most basic Vuex counter app"),t(s)]),e(".")]),n("p",null,[e("Next, we will discuss each core concept in much finer details, starting with "),t(i,{to:"/modules/vue/vuex/state.html"},{default:l(()=>[e("State")]),_:1}),e(".")])])}const T=r(u,[["render",x],["__file","index.html.vue"]]);export{T as default};