import{_ as o,M as p,p as i,q as c,R as s,t as n,N as a,a3 as t}from"./framework-dd056dd6.js";const l={},r=s("h1",{id:"state",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#state","aria-hidden":"true"},"#"),n(" State")],-1),u={class:"custom-container warning"},d=s("p",{class:"custom-container-title"},"NOTE",-1),m={href:"https://vuex.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},v=t('<h2 id="single-state-tree" tabindex="-1"><a class="header-anchor" href="#single-state-tree" aria-hidden="true">#</a> Single State Tree</h2><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/cWw3Zhb" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>Vuex uses a <strong>single state tree</strong> - that is, this single object contains all your application level state and serves as the &quot;single source of truth&quot;. This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.</p><p>The single state tree does not conflict with modularity - in later chapters we will discuss how to split your state and mutations into sub modules.</p><h2 id="getting-vuex-state-into-vue-components" tabindex="-1"><a class="header-anchor" href="#getting-vuex-state-into-vue-components" aria-hidden="true">#</a> Getting Vuex State into Vue Components</h2>',5),k={href:"https://vuejs.org/guide/computed.html",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// let&#39;s create a Counter component</span>
<span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Whenever <code>store.state.count</code> changes, it will cause the computed property to re-evaluate, and trigger associated DOM updates.</p><p>However, this pattern causes the component to rely on the global store singleton. When using a module system, it requires importing the store in every component that uses store state, and also requires mocking when testing the component.</p><p>Vuex provides a mechanism to &quot;inject&quot; the store into all child components from the root component with the <code>store</code> option (enabled by <code>Vue.use(Vuex)</code>):</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// provide the store using the &quot;store&quot; option.</span>
  <span class="token comment">// this will inject the store instance to all child components.</span>
  store<span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Counter <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;app&quot;&gt;
      &lt;counter&gt;&lt;/counter&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By providing the <code>store</code> option to the root instance, the store will be injected into all child components of the root and will be available on them as <code>this.$store</code>. Let&#39;s update our <code>Counter</code> implementation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> Counter <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;{{ count }}&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">count</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-mapstate-helper" tabindex="-1"><a class="header-anchor" href="#the-mapstate-helper" aria-hidden="true">#</a> The <code>mapState</code> Helper</h2><div class="scrimba"><a href="https://scrimba.com/p/pnyzgAP/c8Pz7BSK" target="_blank" rel="noopener noreferrer">Try this lesson on Scrimba</a></div><p>When a component needs to make use of multiple store state properties or getters, declaring all these computed properties can get repetitive and verbose. To deal with this we can make use of the <code>mapState</code> helper which generates computed getter functions for us, saving us some keystrokes:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// in full builds helpers are exposed as Vuex.mapState</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mapState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// arrow functions can make the code very succinct!</span>
    <span class="token function-variable function">count</span><span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>count<span class="token punctuation">,</span>

    <span class="token comment">// passing the string value &#39;count&#39; is same as \`state =&gt; state.count\`</span>
    <span class="token literal-property property">countAlias</span><span class="token operator">:</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// to access local state with \`this\`, a normal function must be used</span>
    <span class="token function">countPlusLocalState</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> state<span class="token punctuation">.</span>count <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>localCount
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also pass a string array to <code>mapState</code> when the name of a mapped computed property is the same as a state sub tree name.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token comment">// map this.count to store.state.count</span>
  <span class="token string">&#39;count&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-spread-operator" tabindex="-1"><a class="header-anchor" href="#object-spread-operator" aria-hidden="true">#</a> Object Spread Operator</h2>`,14),b=s("code",null,"mapState",-1),g=s("code",null,"computed",-1),y={href:"https://github.com/sebmarkbage/ecmascript-rest-spread",target:"_blank",rel:"noopener noreferrer"},f=t(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token function">localComputed</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// mix this into the outer object with the object spread operator</span>
  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="components-can-still-have-local-state" tabindex="-1"><a class="header-anchor" href="#components-can-still-have-local-state" aria-hidden="true">#</a> Components Can Still Have Local State</h3><p>Using Vuex doesn&#39;t mean you should put <strong>all</strong> the state in Vuex. Although putting more state into Vuex makes your state mutations more explicit and debuggable, sometimes it could also make the code more verbose and indirect. If a piece of state strictly belongs to a single component, it could be just fine leaving it as local state. You should weigh the trade-offs and make decisions that fit the development needs of your app.</p>`,3);function w(_,x){const e=p("ExternalLinkIcon");return i(),c("div",null,[r,s("div",u,[d,s("p",null,[n("The following documentation comes directly from the "),s("a",m,[n("vuex.vuejs.org"),a(e)]),n(".")])]),v,s("p",null,[n('So how do we display state inside the store in our Vue components? Since Vuex stores are reactive, the simplest way to "retrieve" state from it is simply returning some store state from within a '),s("a",k,[n("computed property"),a(e)]),n(":")]),h,s("p",null,[n("Note that "),b,n(" returns an object. How do we use it in combination with other local computed properties? Normally, we'd have to use a utility to merge multiple objects into one so that we can pass the final object to "),g,n(". However with the "),s("a",y,[n("object spread operator"),a(e)]),n(" (which is a stage-4 ECMAScript proposal), we can greatly simplify the syntax:")]),f])}const S=o(l,[["render",w],["__file","state.html.vue"]]);export{S as default};