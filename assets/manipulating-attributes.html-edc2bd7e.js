import{_ as p,M as o,p as c,q as l,R as n,t,N as e,a3 as s}from"./framework-dd056dd6.js";const r={},u=s(`<h1 id="manipulating-attributes" tabindex="-1"><a class="header-anchor" href="#manipulating-attributes" aria-hidden="true">#</a> Manipulating Attributes</h1><p>When retrieving an HTML Element using one of the method discussed above, each HTML Element is represented as an [Object] in JavaScript. Updating the properties of this object will also manipulate the HTML. From this object it is possible to add, remove or change an element&#39;s attributes, classes, text and even its inner HTML.</p><p>All native attribute (non-custom attributes), can be accessed as properties in the HTML Element Object. So if we were to have an anchor tag like the one below, we would be able to read, change, add, and remove its attributes.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>link<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://facebook.com<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reading-attributes" tabindex="-1"><a class="header-anchor" href="#reading-attributes" aria-hidden="true">#</a> Reading Attributes</h2>`,5),d={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"getAttribute()",-1),k=n("code",null,"null",-1),m=n("code",null,'""',-1),b=s(`<p>If we had the HTML example above, we can retrieve the values of the attributes using the <code>getAttribute()</code> method like so:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// link</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// https://facebook.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is important to note that most standard attributes can be accessed directly from an element, using the attribute name as the property.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// link</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>href<span class="token punctuation">)</span> <span class="token comment">// https://facebook.com</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),g=n("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Manipulating Attributes - getAttribute()",src:"//codepen.io/IMD/embed/WNerKQY/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/WNerKQY/'>Manipulating Attributes - getAttribute()</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),v=n("h2",{id:"changing-attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#changing-attributes","aria-hidden":"true"},"#"),t(" Changing Attributes")],-1),f={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"setAttribute()",-1),w=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
link<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;https://twitter.com&#39;</span><span class="token punctuation">)</span> <span class="token comment">// updates the attribute</span>
link<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;target&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;_blank&#39;</span><span class="token punctuation">)</span> <span class="token comment">// adds a new attribute</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It is also possible to use the attribute properties to update and add new properties.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
link<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">&#39;https://twitter.com&#39;</span> <span class="token comment">// updates the attribute</span>
link<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token string">&#39;_blank&#39;</span> <span class="token comment">// adds a new attribute</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>This does <strong>NOT</strong> make changes to the HTML file itself. Only how the browser renders the HTML.</p></div>`,4),A=n("iframe",{height:"484",style:{width:"100%"},scrolling:"no",title:"Manipulating Attributes - Changing Attributes",src:"//codepen.io/IMD/embed/PoYZdNr/?height=484&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/PoYZdNr/'>Manipulating Attributes - Changing Attributes</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),M=n("h2",{id:"removing-attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#removing-attributes","aria-hidden":"true"},"#"),t(" Removing Attributes")],-1),I={href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"removeAttribute()",-1),j=s(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> link <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;link&#39;</span><span class="token punctuation">)</span>
link<span class="token punctuation">.</span><span class="token function">removeAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;href&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Using the <code>removeAttribute()</code> method is the preferred way to set an attribute to <code>null</code>, as attempting to do so with <code>setAttribute()</code> or the attribute property can have unexpected results.</p></div>`,2),x=n("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Manipulating Attributes - Removing Attributes",src:"//codepen.io/IMD/embed/bGbExqd/?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/bGbExqd/'>Manipulating Attributes - Removing Attributes</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function E(D,T){const a=o("ExternalLinkIcon"),i=o("Youtube");return c(),l("div",null,[u,n("p",null,[t("The "),n("a",d,[h,e(a)]),t(" method returns the value of the specified attribute of the target element. If the attribute does not exist, value returned will be "),k,t(" or an empty string ("),m,t(").")]),b,g,v,n("p",null,[t("The "),n("a",f,[_,e(a)]),t(" method sets the value of an attribute on the specified element. If the attribute already exists, the value will be updated, else a new attribute will be added.")]),w,A,M,n("p",null,[t("The "),n("a",I,[y,e(a)]),t(" method removes an attribute from an element.")]),j,x,e(i,{id:"tPSpyyjmFtA",citation:"griffith"})])}const P=p(r,[["render",E],["__file","manipulating-attributes.html.vue"]]);export{P as default};