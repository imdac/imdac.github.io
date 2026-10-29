import{_ as e,M as o,p as i,q as c,R as n,t as s,N as a,a3 as l}from"./framework-dd056dd6.js";const p={},r=n("h1",{id:"custom-events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#custom-events","aria-hidden":"true"},"#"),s(" Custom Events")],-1),u={href:"https://vuejs.org/guide/essentials/component-basics.html#listening-to-events",target:"_blank",rel:"noopener noreferrer"},d=l(`<p>Imagine a switch component used to toggle a site&#39;s dark mode. When the switch is toggled, the site should switch between light and dark mode.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dark</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;bs-switch&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;div class=&quot;form-check form-switch&quot;&gt;
    &lt;input 
      class=&quot;form-check-input&quot; 
      type=&quot;checkbox&quot; 
      role=&quot;switch&quot;
      id=&quot;formSwitch&quot;&gt;
    &lt;label 
      class=&quot;form-check-label&quot;  
      for=&quot;formSwitch&quot;&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/label&gt;
  &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But there is a problem. The data property that controls the mode of the site, <code>dark</code>, is stored within the root component, and best practice states that a component should never directly edit another component&#39;s data. So, only the root component can change the value of the <code>dark</code> property, and only the switch component knows when the value should be changed.</p><p>This problem can be solved by creating a custom event, which the child component will emit and for which the parent component will listen.</p><p>Start by adding a standard <code>v-on</code> directive to the child component to listen for a change on the switch. The action of the directive will be to emit a custom event, <code>toggle-dark</code>, using the <code>$emit</code> method.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;bs-switch&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;div class=&quot;form-check form-switch&quot;&gt;
    &lt;input 
      class=&quot;form-check-input&quot; 
      type=&quot;checkbox&quot; 
      role=&quot;switch&quot;
      id=&quot;formSwitch&quot;
      @change=&quot;$emit(&#39;toggle-dark&#39;)&quot;&gt;
    &lt;label 
      class=&quot;form-check-label&quot;  
      for=&quot;formSwitch&quot;&gt;
      &lt;slot&gt;&lt;/slot&gt;
    &lt;/label&gt;
  &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The parent component will add its own <code>v-on</code> directive, but instead of listening for the <code>change</code> event, it will listen for the custom <code>toggle-dark</code> event. The action of this directive will be toggling the <code>dark</code> property value.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{&#39;dark&#39;: dark}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bs-switch</span>
    <span class="token attr-name">@toggle-dark</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dark = !dark<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    Dark Mode
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bs-switch</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),v={class:"try"},m={href:"https://codepen.io/IMD/pen/oNpKEXB",target:"_blank",rel:"noopener noreferrer"};function h(k,b){const t=o("ExternalLinkIcon");return i(),c("div",null,[r,n("p",null,[s("Components are self-contained Vue application instances. This isolation means that events can occur in a child component without the parent's knowledge. Fortunately, Vue has a process for a child component to communicate back up to its parent by using "),n("a",u,[s("custom events"),a(t)]),s(".")]),d,n("div",v,[n("p",null,[n("a",m,[s("Try it yourself on CodePen"),a(t)])])])])}const f=e(p,[["render",h],["__file","custom-events.html.vue"]]);export{f as default};
