import{_ as t,M as p,p as o,q as l,R as n,t as s,N as e,a3 as i}from"./framework-dd056dd6.js";const c={},u=n("h1",{id:"php-switch-statement",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#php-switch-statement","aria-hidden":"true"},"#"),s(" PHP switch Statement")],-1),r={class:"watch"},d={href:"https://www.linkedin.com/learning/php-essential-training-2/switch-statements",target:"_blank",rel:"noopener noreferrer"},k={href:"https://www.php.net/manual/en/control-structures.switch.php",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"switch",-1),h=n("code",null,"if",-1),b=n("code",null,"switch",-1),m=i(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 

  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 0 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 1 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 2 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 3 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-break-statement" tabindex="-1"><a class="header-anchor" href="#the-break-statement" aria-hidden="true">#</a> The break Statement</h2><p>In the above example, all the <code>echo</code> statements will be executed. That is because of a concept known as fallthrough. Fallthrough is the most common point of error when using a <code>switch</code> statement.</p><p>When a <code>switch</code> statement finds a case that matches, it will execute that case&#39;s statement and then &quot;fallthrough&quot; all the remaining cases until it reaches the end of the <code>switch</code> block OR it finds a <code>break</code> statement. This is why in almost all cases, it is important to add a <code>break</code> at the end of each case.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> 

  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 0 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 1 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 2 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 3 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-default-case" tabindex="-1"><a class="header-anchor" href="#the-default-case" aria-hidden="true">#</a> The default Case</h2><p>The <code>default</code> case is to match anything that wasn&#39;t matched by other cases. It is the equivalent of the <code>else</code> statement.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> 

  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$a</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 0 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 1 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 2 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">3</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a equals 3 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;a is not 0, 1, 2, or 3 &lt;br&gt;&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-fallthrough" tabindex="-1"><a class="header-anchor" href="#using-fallthrough" aria-hidden="true">#</a> Using Fallthrough</h2><p>It is possible to use fallthrough to prevent from repeating code. This can be done by having two cases share the same response.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

  <span class="token variable">$user_type</span> <span class="token operator">=</span> <span class="token string single-quoted-string">&#39;customer&#39;</span><span class="token punctuation">;</span>

  <span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$user_type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;student&#39;</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Welcome!&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;press&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;customer&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">case</span> <span class="token string single-quoted-string">&#39;admin&#39;</span><span class="token punctuation">:</span>
      <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function g(w,q){const a=p("ExternalLinkIcon");return o(),l("div",null,[u,n("div",r,[n("p",null,[n("a",d,[s('Watch "Switch statements" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("The "),n("a",k,[v,e(a)]),s(" statement is an alternative to an "),h,s(" statement. With the "),b,s(" statement you take a single variable or expression and compare it against a list of possible values, checking if they are equal.")]),m])}const f=t(c,[["render",g],["__file","switch-statement.html.vue"]]);export{f as default};
