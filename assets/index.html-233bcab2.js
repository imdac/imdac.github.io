import{_ as o,M as p,p as c,q as i,R as n,t as s,N as e,a3 as t}from"./framework-dd056dd6.js";const l={},u=n("h1",{id:"javascript-timing-methods",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#javascript-timing-methods","aria-hidden":"true"},"#"),s(" JavaScript Timing Methods")],-1),r=n("p",null,[s("Instead of executing a function immediately, it is sometimes useful to JavaScript wait a period before executing a function, or to have JavaScript repeatedly execute a function at set intervals. JavaScript two such methods "),n("code",null,"setTimeout()"),s(" and "),n("code",null,"setInterval()"),s(".")],-1),d=n("h2",{id:"settimeout",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#settimeout","aria-hidden":"true"},"#"),s(" setTimeout")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"setTimeout()",-1),h=t(`<p>The <code>setTimeout()</code> method can be used any time delayed execution or create a timed sequence of events.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> $button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> $stage <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;stage&#39;</span><span class="token punctuation">)</span>

$button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  $stage<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&lt;p&gt;Abra cadabra...&lt;/p&gt;&#39;</span>
  
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $stage<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token string">&#39;&lt;p&gt;...&lt;/p&gt;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
  
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    $stage<span class="token punctuation">.</span>innerHTML <span class="token operator">+=</span> <span class="token string">&#39;&lt;h1&gt;&lt;em&gt;Tada!&lt;/em&gt;&lt;/h1&gt;&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=n("iframe",{height:"454",style:{width:"100%"},scrolling:"no",title:"setTimeout",src:"https://codepen.io/IMD/embed/OJXGOLQ?height=454&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/OJXGOLQ'>setTimeout</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),b=n("h2",{id:"setinterval",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setinterval","aria-hidden":"true"},"#"),s(" setInterval")],-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"setInterval()",-1),_=n("code",null,"setTimeout()",-1),y=n("code",null,"setInterval()",-1),I={href:"https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"clearInterval()",-1),x=n("code",null,"setInterval()",-1),T=n("code",null,"setInterval()",-1),M=t(`<p>The <code>setInterval()</code> method can be used anytime the page needs to be updated periodically.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> $timer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;timer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> $start <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> $stop <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;stop&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token number">0</span>

$start<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token number">0</span>
   $timer<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token number">0</span>
   id <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     timer<span class="token operator">++</span>
     $timer<span class="token punctuation">.</span>textContent <span class="token operator">=</span> timer
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

$stop<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">clearInterval</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),S=n("iframe",{height:"346",style:{width:"100%"},scrolling:"no",title:"setInterval",src:"https://codepen.io/IMD/embed/gOMyXge?height=346&theme-id=light&default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/gOMyXge'>setInterval</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function $(E,D){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,r,d,n("p",null,[s("The "),n("a",k,[m,e(a)]),s(" method will execute a function after a specified time has passed. The method can take two arguments, the function to be executed and the length of time, in milliseconds, to wait.")]),h,v,b,n("p",null,[s("The "),n("a",g,[f,e(a)]),s(" method will repeatedly call a function with fixed delays between each call. Similar to "),_,s(", the "),y,s(" method takes a function and a time delay in milliseconds.")]),n("p",null,[s("The "),n("a",I,[w,e(a)]),s(" method is used to stop the "),x,s(" method. It will take a single argument, which is the timer id, which is returned by the "),T,s(" method.")]),M,S])}const O=o(l,[["render",$],["__file","index.html.vue"]]);export{O as default};