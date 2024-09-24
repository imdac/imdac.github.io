import{_ as p,M as o,p as c,q as l,R as n,t as s,N as e,a3 as t}from"./framework-dd056dd6.js";const i={},u=n("h1",{id:"sass-extend-rule",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-extend-rule","aria-hidden":"true"},"#"),s(" Sass @extend Rule")],-1),r={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-extend-method",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/documentation/at-rules/extend",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"@extend",-1),b=t(`<p>Imagine creating custom buttons styles for a web site. The base button style would be the same for all to the buttons, only the background and border colors would change across the different custom buttons. In this situation, a base class could be used <code>.btn</code> and then additional modifier class <code>.btn-cool</code> or <code>.btn-hot</code> as shown below.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-base</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>However, this method requires two classes to be added to each button. But, with the <code>@extend</code> rule, we include the base button styles in each of the custom buttons, eliminating the need to attach the <code>.btn</code> class to the buttons.</p>`,3),m={href:"https://sass-lang.com/documentation/style-rules/placeholder-selectors",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,".btn",-1),y=t(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$color-btn-default</span></span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-btn-hot</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$color-btn-cool</span></span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>

<span class="token selector"><span class="token placeholder">%btn</span> </span><span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
	<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
	<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
	<span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
	<span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
	<span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
	<span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-default</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-hot</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool </span><span class="token punctuation">{</span>
	<span class="token keyword">@extend</span> <span class="token placeholder selector">%btn</span><span class="token punctuation">;</span>
	<span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color-btn-cool</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The above SCSS would be compiled to the following CSS.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.btn-default, .btn-hot, .btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 6px 12px<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #EEE8D6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-default</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #022933<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-hot</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.btn-cool</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #0076A3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),g={class:"try"},f={href:"https://www.sassmeister.com/gist/4a4d0a8023599cd0e590bd5718fb6cae",target:"_blank",rel:"noopener noreferrer"};function _(x,w){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,n("div",r,[n("p",null,[n("a",d,[s('Watch "Using the @extend method" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("The "),n("a",k,[v,e(a)]),s(" rule allows for one selector to inherit the styles of another. This gives developers the ability to write a single base style that can be shared among multiples selectors.")]),b,n("p",null,[s("Furthermore, if we use a "),n("a",m,[s("placeholder selector"),e(a)]),s(" there is no need for "),h,s(" class at all.")]),y,n("div",g,[n("p",null,[n("a",f,[s("Try it yourself on Sassmeister"),e(a)])])])])}const S=p(i,[["render",_],["__file","extend.html.vue"]]);export{S as default};
