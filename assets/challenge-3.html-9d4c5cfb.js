import{_ as e,M as s,p as a,q as o,N as i,a3 as n}from"./framework-dd056dd6.js";const l={},c=n('<h1 id="challenge-3" tabindex="-1"><a class="header-anchor" href="#challenge-3" aria-hidden="true">#</a> Challenge 3</h1><p>Challenges are opportunities to test what you have learned by interacting directly with live code.</p><p>For this challenge, you will add functionality to the <code>text-control</code> component. Within the <code>text-control</code> component, there are two buttons, one for shrinking the font size of the text and the other for enlarging the text.</p><p>Using the <code>v-on</code> directive, add two <code>click</code> listeners to the buttons. The listeners will emit the custom events <code>enlarge-text</code> and <code>shrink-text</code>. Then have the root component listen for those custom events and increase or decrease the value of the <code>fontSize</code> property. The <code>fontSize</code> value should move in <code>0.1</code> increments.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>For this challenge, you will need to edit the HTML and JavaScript.</p></div>',5),r=n(`<details class="solution"><summary><h3 style="display:inline-block;">Solution</h3></summary><p>We will add a <code>v-on</code> directive to the first button in the <code>text-control</code> component. This button will decrease the font size and, therefore, will emit the <code>shrink-text</code> event.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;text-control&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div 
      class=&quot;btn-group&quot; 
      role=&quot;group&quot;&gt;
      &lt;button 
        type=&quot;button&quot; 
        class=&quot;btn btn-outline-secondary fs-6&quot;
        @click=&quot;$emit(&#39;shrink-text&#39;)&quot;&gt;A&lt;/button&gt;
      &lt;button 
        type=&quot;button&quot; 
        class=&quot;btn btn-outline-secondary fs-5&quot;&gt;A&lt;/button&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then we perform the same process on the second button, which is used to increase the font size.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;text-control&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;div 
      class=&quot;btn-group&quot; 
      role=&quot;group&quot;&gt;
      &lt;button 
        type=&quot;button&quot; 
        class=&quot;btn btn-outline-secondary fs-6&quot;
        @click=&quot;$emit(&#39;shrink-text&#39;)&quot;&gt;A&lt;/button&gt;
      &lt;button 
        type=&quot;button&quot; 
        class=&quot;btn btn-outline-secondary fs-5&quot;
        @click=&quot;$emit(&#39;enlarge-text&#39;)&quot;&gt;A&lt;/button&gt;
    &lt;/div&gt;
  </span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With both buttons set up to emit events, we now add <code>v-on</code> directives to the <code>&lt;font-control&gt;</code> custom element so the root component can listen for the custom events.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-size-control</span>
  <span class="token attr-name">@shrink-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontSize -= 0.1<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">@enlarge-text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fontSize += 0.1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>font-size-control</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,1);function p(u,d){const t=s("Challenge");return a(),o("div",null,[c,i(t,{id:"vYpoRBV",title:"Vue Components: Challenge 3",tabs:"js result"}),r])}const b=e(l,[["render",p],["__file","challenge-3.html.vue"]]);export{b as default};
