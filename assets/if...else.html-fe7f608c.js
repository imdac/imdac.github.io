import{_ as i,M as t,p as c,q as l,R as n,t as s,N as e,a3 as p}from"./framework-dd056dd6.js";const d={},r=n("h1",{id:"if-else",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#if-else","aria-hidden":"true"},"#"),s(" if...else")],-1),u=n("h2",{id:"the-if-statement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#the-if-statement","aria-hidden":"true"},"#"),s(" The if statement")],-1),v={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"if",-1),k={href:"https://developer.mozilla.org/en-US/docs/Glossary/truthy",target:"_blank",rel:"noopener noreferrer"},b=p(`<ul><li>The <code>if</code> statement is made up of a <code>condition</code> and a <code>statement</code>.</li><li>The <code>condition</code> is an expression that will be evaluated to be <code>truthy</code> or <code>falsy</code>.</li><li>The <code>condition</code> is placed between parentheses following the <code>if</code> keyword.</li><li>The <code>statement</code> is the block of code within the curly braces, which will be executed if the <code>condition</code> is <code>truthy</code>.</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// statement, the block of code to be executed if the condition is truthy</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Let&#39;s look at a scenario</strong></p><p>Imagine you are building a site for an e-commerce shop, and you need to apply certain discounts based on the user&#39;s product total. We can use conditional statements to calculate the cart total.</p><p><strong>Condition:</strong> If the product total is greater than or equal to $50<br><strong>Statement:</strong> Apply free shipping</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
Step 1: Define variables
  - productTotal may be reassigned later, so we use the let declaration
  - shippingFee is always the same, so we use the const declaration
*/</span>
<span class="token keyword">let</span> productTotal <span class="token operator">=</span> <span class="token number">55</span>
<span class="token keyword">const</span> shippingFee <span class="token operator">=</span> <span class="token number">15</span>
<span class="token keyword">let</span> cartTotal

cartTotal <span class="token operator">=</span> productTotal <span class="token operator">+</span> shippingFee

<span class="token comment">// Step 2: Check if product total &gt;= 50, if so, apply free shipping</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// If product total &gt;= 50, remove shipping fee, and do not apply discount</span>
  cartTotal <span class="token operator">=</span> productTotal
  <span class="token comment">// will log 55</span>
<span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-else-statement" tabindex="-1"><a class="header-anchor" href="#the-else-statement" aria-hidden="true">#</a> The else statement</h2><p>The second part of the <code>if...else</code>, is the <code>else</code> statement. This optional statement will execute its block of code only if the <code>condition</code>, from the previous <code>if</code> statement is <code>falsy</code>.</p><p>While it is possible to have an <code>if</code> without an <code>else</code>, the reverse is not possible.</p><p>Continuing the example above, if the productTotal is greater than or equal to $50 (if the above condition is truthy), then we must remove shipping fees.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
  Note that we changed the productTotal to $30
*/</span>
productTotal <span class="token operator">=</span> <span class="token number">30</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  cartTotal <span class="token operator">=</span> productTotal
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
  <span class="token comment">// this will not run as the productTotal is less than 50</span>
<span class="token punctuation">}</span> 
<span class="token keyword">else</span> 
<span class="token punctuation">{</span>
  cartTotal
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
  <span class="token comment">// will log 45</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-else-if-clause" tabindex="-1"><a class="header-anchor" href="#the-else-if-clause" aria-hidden="true">#</a> The else if clause</h2><p>When checking for multiple conditions, <code>if...else</code> statements can be nested to create an <code>else if</code> clause. Each condition will be checked only if the previous condition was <code>falsy</code>.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>There is no <code>elseif</code> keyword in JavaScript. The use of <code>elseif</code> in place of <code>else if</code> will result in a syntax error.</p></div><p>Continuing the example above, on top of the previous condition, if productTotal is greater than or equal to $100, we must remove shipping fees AND apply a 5% discount</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
  Note that we changed the productTotal to $200
*/</span>

productTotal <span class="token operator">=</span> <span class="token number">200</span>
<span class="token keyword">let</span> discount <span class="token operator">=</span> <span class="token number">0.05</span> <span class="token operator">*</span> productTotal

<span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  cartTotal <span class="token operator">=</span> productTotal <span class="token operator">-</span> discount
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
  <span class="token comment">// will log 190 (200 - 5% of $200)</span>
<span class="token punctuation">}</span> 
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  cartTotal <span class="token operator">=</span> productTotal
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
  cartTotal
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Because an <code>else if</code> condition is only evaluated when the previous condition is <code>falsy</code>, using the <code>else if</code> clause can ensure that only one block of code is executed, which may not be possible when just using <code>if</code> statements.</p><p><strong>Using if statements only is not recommended when the conditions are related</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token comment">// Note that our productTotal is still $200.</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token comment">// this block of code will execute</span>
  cartTotal <span class="token operator">=</span> productTotal <span class="token operator">-</span> discount
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
  
<span class="token punctuation">}</span> 

<span class="token keyword">if</span> <span class="token punctuation">(</span>productTotal <span class="token operator">&gt;=</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// this block of code will also execute</span>
  cartTotal <span class="token operator">=</span> cartTotal <span class="token operator">-</span> shippingFee
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>cartTotal<span class="token punctuation">)</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function h(f,g){const a=t("ExternalLinkIcon"),o=t("Youtube");return c(),l("div",null,[r,u,n("p",null,[s("The "),n("a",v,[m,s(" statement"),e(a)]),s(" is the most basic conditional statement in JavaScript. It executes a block of code only if a specified condition is "),n("a",k,[s("truthy"),e(a)]),s(".")]),b,e(o,{id:"c83OjxNSPos",citation:"griffith"})])}const w=i(d,[["render",h],["__file","if...else.html.vue"]]);export{w as default};
