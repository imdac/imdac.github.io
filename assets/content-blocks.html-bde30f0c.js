import{_ as t,M as o,p as c,q as p,R as n,t as s,N as e,a3 as i}from"./framework-dd056dd6.js";const l={},r=n("h1",{id:"sass-content-blocks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-content-blocks","aria-hidden":"true"},"#"),s(" Sass Content Blocks")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/using-the-content-container",target:"_blank",rel:"noopener noreferrer"},k={href:"https://sass-lang.com/documentation/at-rules/mixin#content-blocks",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"@content",-1),b=i(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@mixin</span> <span class="token selector">hover </span><span class="token punctuation">{</span>
  &amp;<span class="token punctuation">:</span><span class="token function">not</span><span class="token punctuation">(</span>[disabled]<span class="token punctuation">)</span><span class="token selector">:hover </span><span class="token punctuation">{</span>
    <span class="token keyword">@content</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.button </span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> .375rem .75rem<span class="token punctuation">;</span>
  
  <span class="token property">background-color</span><span class="token punctuation">:</span> #007bff<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #007bff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> .25rem<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  
  <span class="token keyword">@include</span> <span class="token selector">hover </span><span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #0069d9<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #0069d9<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),m={class:"try"},h={href:"https://www.sassmeister.com/gist/c13a02f3bf928d6b3efcc2d5b0a1a027",target:"_blank",rel:"noopener noreferrer"};function _(f,y){const a=o("ExternalLinkIcon");return c(),p("div",null,[r,n("div",u,[n("p",null,[n("a",d,[s('Watch "Using the @content container" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("A "),n("a",k,[s("content block"),e(a)]),s(" is an block of styles that are taken by a mixin. When a mixin is declare, a content block can by included using the "),v,s(" at-rule in the mixin's body.")]),b,n("div",m,[n("p",null,[n("a",h,[s("Try it yourself on Sassmeister"),e(a)])])])])}const x=t(l,[["render",_],["__file","content-blocks.html.vue"]]);export{x as default};
