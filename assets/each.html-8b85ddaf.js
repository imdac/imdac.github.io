import{_ as t,M as o,p as c,q as l,R as n,t as s,N as e,a3 as p}from"./framework-dd056dd6.js";const i={},r=n("h1",{id:"sass-each",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#sass-each","aria-hidden":"true"},"#"),s(" Sass @each")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/going-through-a-list-with-each",target:"_blank",rel:"noopener noreferrer"},h={href:"https://sass-lang.com/documentation/at-rules/control/each",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"@each",-1),v={href:"https://sass-lang.com/documentation/values/lists",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"list",-1),m={href:"https://sass-lang.com/documentation/values/maps",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"map",-1),g=p(`<div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$colors</span></span><span class="token punctuation">:</span> red<span class="token punctuation">,</span> blue<span class="token punctuation">,</span> green<span class="token punctuation">,</span> orange<span class="token punctuation">;</span>

<span class="token selector"><span class="token placeholder">%box</span> </span><span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">@each</span> <span class="token selector"><span class="token variable">$color</span> in <span class="token variable">$colors</span> </span><span class="token punctuation">{</span>
  <span class="token selector">.box-<span class="token variable">#{$color}</span> </span><span class="token punctuation">{</span>
    <span class="token keyword">@extend</span> <span class="token placeholder selector">%box</span><span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),f={class:"try"},x={href:"https://www.sassmeister.com/gist/978a63abebd67b3e97887052712b3774",target:"_blank",rel:"noopener noreferrer"};function y(w,N){const a=o("ExternalLinkIcon");return c(),l("div",null,[r,n("div",u,[n("p",null,[n("a",d,[s('Watch "Going through a list with @each" on LinkedIn Learning'),e(a)])])]),n("p",null,[s("The "),n("a",h,[k,e(a)]),s(" makes it easy to output styles or evaluate a block of code for each element in a "),n("a",v,[_,e(a)]),s(" or each key value pair in a "),n("a",m,[b,e(a)]),s(".")]),g,n("div",f,[n("p",null,[n("a",x,[s("Try it yourself on Sassmeister"),e(a)])])])])}const L=t(i,[["render",y],["__file","each.html.vue"]]);export{L as default};