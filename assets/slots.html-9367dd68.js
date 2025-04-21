import{_ as l,M as o,p,q as i,R as n,t as s,N as t,a3 as e}from"./framework-dd056dd6.js";const c={},d=n("h1",{id:"slots",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slots","aria-hidden":"true"},"#"),s(" Slots")],-1),r={href:"https://vuejs.org/guide/components/slots.html",target:"_blank",rel:"noopener noreferrer"},u=e(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-button</span><span class="token punctuation">&gt;</span></span>
  Click me! <span class="token comment">&lt;!-- slot content --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-button</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The <code>&lt;slot&gt;</code> element indicates where the slot content should go.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;bs-button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;button class=&quot;btn btn-primary&quot;&gt;
      &lt;slot&gt;&lt;/slot&gt; &lt;!-- slot outlet ---&gt;
    &lt;/button&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),m={class:"try"},v={href:"https://codepen.io/IMD/pen/vYpoWEQ",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="fallback-content" tabindex="-1"><a class="header-anchor" href="#fallback-content" aria-hidden="true">#</a> Fallback Content</h2><p>It is possible to set default content for a slot if no content is provided to the child component.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;bs-button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;button class=&quot;btn btn-primary&quot;&gt;
      &lt;slot&gt;
        Button &lt;!-- fallback content ---&gt;
      &lt;/slot&gt;
    &lt;/button&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="named-slots" tabindex="-1"><a class="header-anchor" href="#named-slots" aria-hidden="true">#</a> Named Slots</h2><p>Multiple slot outlets can be added to a single component. The <code>&lt;slot&gt;</code> element is then assigned a <code>name</code> attribute, which can be used as a unique ID.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;bs-layout&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div class=&quot;container&quot;&gt;
       &lt;header&gt;
         &lt;slot name=&quot;header&quot;&gt;&lt;/slot&gt;
       &lt;/header&gt;
       &lt;main&gt;
         &lt;slot name=&quot;main&quot;&gt;&lt;/slot&gt;
       &lt;/main&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To pass content to a named slot, the <code>&lt;template&gt;</code> element is used with the <code>v-slot</code> directive containing the name of the slot as an argument.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-layout</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- content for header slot ---&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- content for main slot --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-layout</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),k={class:"try"},b={href:"https://codepen.io/IMD/pen/XWVvzXa",target:"_blank",rel:"noopener noreferrer"};function h(_,f){const a=o("ExternalLinkIcon");return p(),i("div",null,[d,n("p",null,[n("a",r,[s("Slots"),t(a)]),s(" allow for content to be passed to a child component.")]),u,n("div",m,[n("p",null,[n("a",v,[s("Try it yourself on CodePen"),t(a)])])]),g,n("div",k,[n("p",null,[n("a",b,[s("Try it yourself on CodePen"),t(a)])])])])}const x=l(c,[["render",h],["__file","slots.html.vue"]]);export{x as default};
