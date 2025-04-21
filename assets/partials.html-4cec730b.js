import{_ as t,M as i,p as o,q as p,R as s,t as n,N as e,a3 as l}from"./framework-dd056dd6.js";const c={},r=s("h1",{id:"sass-partials",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sass-partials","aria-hidden":"true"},"#"),n(" Sass Partials")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/using-partials",target:"_blank",rel:"noopener noreferrer"},v={href:"https://sass-lang.com/guide#topic-4",target:"_blank",rel:"noopener noreferrer"},m={href:"https://sass-lang.com/documentation/at-rules/import",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"@import",-1),b=l(`<div class="custom-container danger"><p class="custom-container-title">NOTE</p><p>While the <code>@import</code> rule can be used to import the partials, as of October 2019, the Sass team has begun discouraging it use in favor of the <code>@use</code> rule.</p><p>However, at this time, <code>@use</code> rule is not compatible with the compiler being used in this class. So, for now, we will continue to use <code>@import</code></p></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _variables.scss</span>
<span class="token property"><span class="token variable">$offwhite</span></span><span class="token punctuation">:</span>    #EEE8D6<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$darkblue</span></span><span class="token punctuation">:</span>    #022933<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$yellow</span></span><span class="token punctuation">:</span>      #FFBA00<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// _base.scss</span>

<span class="token selector">html </span><span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body </span><span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.8rem<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$font-main</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color-main</span><span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token variable">$color-backgrounds</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.container </span><span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 80%<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token selector">h1,h2,h3,h4,h5,h6 </span><span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token variable">$font-highlight</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$color-headlines</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token comment">// style.scss</span>
<span class="token keyword">@import</span> <span class="token string">&quot;variables&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(g,f){const a=i("ExternalLinkIcon");return o(),p("div",null,[r,s("div",u,[s("p",null,[s("a",d,[n('Watch "Using Partials" on LinkedIn Learning'),e(a)])])]),s("p",null,[s("a",v,[n("Partials"),e(a)]),n(" are Sass files that contain little snippets of CSS or Sass that can be included into other Sass files. Partials are a great way to create modularized CSS, which is easier to maintain. To create a partial, simply add an underscore at the beginning of the filename. This will inform that Sass compiler not to compile this file directly.")]),s("p",null,[n("To add a partial to another Sass file, the "),s("a",m,[k,e(a)]),n(" rule is used.")]),b])}const y=t(c,[["render",h],["__file","partials.html.vue"]]);export{y as default};
