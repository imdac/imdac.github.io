import{_ as t,M as i,p as o,q as l,R as n,t as s,N as a,a3 as c}from"./framework-dd056dd6.js";const p={},r=n("h1",{id:"css-reset",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-reset","aria-hidden":"true"},"#"),s(" CSS Reset")],-1),u=n("p",null,"CSS reset is a block of code or a CSS file that we add to our project to overwrite the default styles of the browser. There are many reset files and libraries available on the web.",-1),d={href:"https://meyerweb.com/eric/tools/css/reset/",target:"_blank",rel:"noopener noreferrer"},v=c(`<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/</span>

<span class="token selector">html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video</span> <span class="token punctuation">{</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
	<span class="token property">font</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
	<span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* HTML5 display-role reset for older browsers */</span>
<span class="token selector">article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">body</span> <span class="token punctuation">{</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">ol, ul</span> <span class="token punctuation">{</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote, q</span> <span class="token punctuation">{</span>
	<span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">blockquote:before, blockquote:after,
q:before, q:after</span> <span class="token punctuation">{</span>
	<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">table</span> <span class="token punctuation">{</span>
	<span class="token property">border-collapse</span><span class="token punctuation">:</span> collapse<span class="token punctuation">;</span>
	<span class="token property">border-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To use this reset we will copy paste the above CSS code at the start of our CSS file, before we start writing our own CSS.</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2>`,3),b={href:"https://meyerweb.com/eric/tools/css/reset/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://css-tricks.com/reboot-resets-reasoning/",target:"_blank",rel:"noopener noreferrer"};function k(h,f){const e=i("ExternalLinkIcon");return o(),l("div",null,[r,u,n("p",null,[s("We will be using the "),n("a",d,[s("Mayer Web"),a(e)]),s(" reset code:")]),v,n("ul",null,[n("li",null,[n("a",b,[s("Mayer Web CSS Reset"),a(e)])]),n("li",null,[n("a",m,[s("Reboot, Resets, Reasoning - CSS Tricks Article"),a(e)])])])])}const _=t(p,[["render",k],["__file","index.html.vue"]]);export{_ as default};
