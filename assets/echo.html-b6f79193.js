import{_ as t,M as o,p,q as c,R as n,t as e,N as a,a3 as r}from"./framework-dd056dd6.js";const l={},i=n("h1",{id:"php-echo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-echo","aria-hidden":"true"},"#"),e(" PHP Echo")],-1),d={class:"watch"},u={href:"https://www.linkedin.com/learning/php-essential-training-2/output-dynamic-text",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.php.net/manual/en/function.echo.php",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"echo",-1),k=r(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span> <span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>To output, more than one string using <code>echo</code>, a comma (<code>,</code>) or a period (<code>.</code>) can be used between strings.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token variable">$name</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;John&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Total: &quot;</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token operator">+</span> <span class="token number">5</span><span class="token punctuation">;</span> <span class="token comment">// Total: 8</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;\\n&quot;</span><span class="token punctuation">;</span> <span class="token comment">// creates a new line</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello &quot;</span> <span class="token operator">.</span> <span class="token variable">$name</span><span class="token punctuation">;</span> <span class="token comment">// Hello John</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>If a file only contains PHP, the closing PHP tag is <strong>NOT</strong> required.</p></div>`,4),g={class:"try"},_={href:"https://repl.it/@eisenbm/php-echo",target:"_blank",rel:"noopener noreferrer"};function v(b,f){const s=o("ExternalLinkIcon");return p(),c("div",null,[i,n("div",d,[n("p",null,[n("a",u,[e('Watch "Output dynamic text" on LinkedIn Learning'),a(s)])])]),n("p",null,[e("The "),n("a",h,[m,a(s)]),e(" construct is used to output one or more strings. It is considered to be the primary way to output data from PHP to the browser as HTML.")]),k,n("div",g,[n("p",null,[n("a",_,[e("Try it yourself on Repl.it"),a(s)])])])])}const w=t(l,[["render",v],["__file","echo.html.vue"]]);export{w as default};