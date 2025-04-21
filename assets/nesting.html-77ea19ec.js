import{_ as t,M as i,p,q as o,R as n,t as s,N as e,a3 as l}from"./framework-dd056dd6.js";const c={},r=n("h1",{id:"nesting-in-sass",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nesting-in-sass","aria-hidden":"true"},"#"),s(" Nesting in Sass")],-1),u={class:"watch"},d={href:"https://www.linkedin.com/learning/sass-essential-training/nesting-your-styles",target:"_blank",rel:"noopener noreferrer"},v={href:"https://sass-lang.com/guide#topic-3",target:"_blank",rel:"noopener noreferrer"},k=l(`<p>To nest a style rule, simple place the child style inside the parent&#39;s style block.</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$red</span></span><span class="token punctuation">:</span> #D14348<span class="token punctuation">;</span>

<span class="token selector">ul </span><span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>

  <span class="token selector">li </span><span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dotted <span class="token variable">$red</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">p </span><span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The Sass code above will be compiled to the following CSS.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">ul</span> <span class="token punctuation">{</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul li</span> <span class="token punctuation">{</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px dotted #D14348<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul p</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),m={class:"try"},b={href:"https://www.sassmeister.com/gist/8e812aab2beecb42bd1890b453492ef7",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,n("div",u,[n("p",null,[n("a",d,[s('Watch "Nesting your styles" on LinkedIn Learning'),e(a)])])]),n("p",null,[n("a",v,[s("Nesting"),e(a)]),s(" in Sass is used to create the same visual hierarchy in CSS as in HTML. Each nested rule will have its parent selector added to its own, allowing for must more readable CSS.")]),k,n("div",m,[n("p",null,[n("a",b,[s("Try it yourself on Sassmeister"),e(a)])])])])}const f=t(c,[["render",h],["__file","nesting.html.vue"]]);export{f as default};
