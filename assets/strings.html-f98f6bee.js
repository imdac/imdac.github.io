import{_ as r,M as a,p,q as l,N as e,R as n,t as s,a3 as t}from"./framework-dd056dd6.js";const c={},d=n("h1",{id:"javascript-strings",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-strings","aria-hidden":"true"},"#"),s(" JavaScript Strings")],-1),u=t(`<p>Strings are one of the most common primitive data types in JavaScript. Strings can be created using string literals and template literals.</p><h2 id="string-literal" tabindex="-1"><a class="header-anchor" href="#string-literal" aria-hidden="true">#</a> String Literal</h2><p>In JavaScript, a string literal is any number of characters (letters, numbers, or special characters) surrounded by a set of quotes (either single or double).</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> animal <span class="token operator">=</span> <span class="token string">&#39;dog&#39;</span>
<span class="token keyword">const</span> phone <span class="token operator">=</span> <span class="token string">&#39;555-555-5555&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Both single <code>&#39;</code> and double <code>&quot;</code> quotes can be used for strings. It is a preference for which one to use, but is it best to stay consistent.</p></div><h2 id="string-concatenation" tabindex="-1"><a class="header-anchor" href="#string-concatenation" aria-hidden="true">#</a> String Concatenation</h2><p>The term concatenation refers to the combining of two or more strings together. In JavaScript, this is accomplished by use of the plus sign (<code>+</code>) . Concatenation can be used with string literals, numbers and variables.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> <span class="token string">&#39;world&#39;</span>

<span class="token keyword">const</span> pet <span class="token operator">=</span> <span class="token string">&#39;dogs&#39;</span>
<span class="token keyword">const</span> number <span class="token operator">=</span> <span class="token number">3</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I have &#39;</span> <span class="token operator">+</span> number <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> pet <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When concatenating, JavaScript will attempt to convert all values to strings. Furthermore, because the plus sign (<code>+</code>) is also used for addition, this can cause unexpected results when working with strings and numbers.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> add <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 3</span>
<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token string">&#39;2&#39;</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token comment">// 21</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>String Literals do not support multiple lines, but it is possible to include multiple lines in a string by using the newline special character (<code>\\n</code>) and string concatenation.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> title <span class="token operator">=</span> <span class="token string">&#39;Sherlock Holmes\\n&#39;</span> <span class="token operator">+</span>
<span class="token string">&#39;The Hound of the Baskervilles&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="template-literals" tabindex="-1"><a class="header-anchor" href="#template-literals" aria-hidden="true">#</a> Template Literals</h2>`,13),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"`",-1),v=t('<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> greeting <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, World</span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Template literals also has multi-line support, which means it possible to include a return inside of a string without the use of the special character or string concatenation.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> address <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n221B Baker Street\nLondon, England</span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="expression-interpolation" tabindex="-1"><a class="header-anchor" href="#expression-interpolation" aria-hidden="true">#</a> Expression Interpolation</h2><p>Template literal can contain placeholders (<code>${expression}</code>) which are used to embed an expressions into a string. Expressions can include variables, formulas or functions.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token string">&#39;Ted&#39;</span>\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Have you met </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">`</span></span> <span class="token comment">// Have you met Ted?</span>\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">5</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">const</span> product <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">The product of a and b is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>a <span class="token operator">*</span> b<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token comment">// The product of a and b is 8</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6);function g(h,b){const o=a("Scrimba"),i=a("ExternalLinkIcon");return p(),l("div",null,[d,e(o,{id:"/p/pPPeCy/cEN6zTE",citation:"israel"}),u,n("p",null,[s("The "),n("a",m,[s("template literal"),e(i)]),s(" is a syntax for string literal that allows for embedded expressions and multi-line support. To create a template literal the backtick ("),k,s(") is used to surrounded the string literal and any expressions.")]),v])}const w=r(c,[["render",g],["__file","strings.html.vue"]]);export{w as default};