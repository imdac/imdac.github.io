import{_ as p,M as o,p as c,q as l,R as n,t as s,N as e,a3 as t}from"./framework-dd056dd6.js";const i={},r=n("h1",{id:"sass-parent-selector",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-parent-selector","aria-hidden":"true"},"#"),s(" Sass Parent Selector")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-extend-method",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/documentation/style-rules/parent-selector",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"&",-1),m=t(`<p>The parent selector can be used in conjunction with pseudo-classes. For example, it could be used to style navbar links.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$yellow</span></span><span class="token punctuation">:</span> #FFBA00<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$border-color</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>

<span class="token selector">.link </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid <span class="token variable">$border-color</span><span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:hover, <span class="token parent important">&amp;</span>.active </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$yellow</span><span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector"><span class="token parent important">&amp;</span>:last-of-type </span><span class="token punctuation">{</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Which would produce the following CSS.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.link</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link:hover, .link.active</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #FFBA00<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.link:last-of-type</span> <span class="token punctuation">{</span>
  <span class="token property">border-right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),b={href:"http://getbem.com/",target:"_blank",rel:"noopener noreferrer"},h=t(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$light-grey</span></span><span class="token punctuation">:</span> #f4f4f4<span class="token punctuation">;</span>

<span class="token selector">.form </span><span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$light-grey</span><span class="token punctuation">;</span>

  <span class="token selector"><span class="token parent important">&amp;</span>__input </span><span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function g(_,y){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("div",u,[n("p",null,[n("a",d,[s('Watch "Referencing parent selectors with &" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("The "),n("a",k,[s("parent selector"),e(a)]),s(" ("),v,s(") is a special selector found in Sass and is used to refer to the outer selector when nesting. The parent selector makes it possible to neatly add and complex selectors in an easy to read fashion.")]),m,n("p",null,[s("The parent selector can also be used to when create structured class names like ones used methodologies like "),n("a",b,[s("BEM"),e(a)]),s(".")]),h])}const x=p(i,[["render",g],["__file","parent-selector.html.vue"]]);export{x as default};
