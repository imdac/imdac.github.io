import{_ as p,M as o,p as c,q as i,R as n,t as s,N as t,a3 as e}from"./framework-dd056dd6.js";const l={},u=n("h1",{id:"laravel-route-wildcards",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#laravel-route-wildcards","aria-hidden":"true"},"#"),s(" Laravel Route Wildcards")],-1),r={class:"watch"},d={href:"https://laracasts.com/series/laravel-6-from-scratch/episodes/7",target:"_blank",rel:"noopener noreferrer"},k={href:"https://laravel.com/docs/6.x/routing#route-parameters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"{}",-1),g=n("code",null,"-",-1),h=e(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/posts/{post}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The route above will accept any value after <code>/posts/</code> and direct to the post view. Now to capture that value, just add a parameter to the callback function. Route parameters are injected into route callback function based on their order.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/posts/{post}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The parameter can then be used to inside of the callback function to make query to the database, pass it on to the view, or perform some other logic.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/posts/{post}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$posts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;post-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;This is my first post&#39;</span><span class="token punctuation">;</span>
    <span class="token string single-quoted-string">&#39;post-2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;This is my second post&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;post&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$posts</span><span class="token punctuation">[</span><span class="token variable">$post</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m=n("code",null,"$posts",-1),b={href:"https://laravel.com/docs/6.x/helpers#method-abort",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"abort",-1),_=e(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token class-name static-context">Route</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;/posts/{post}&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$posts</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;post-1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;This is my first post&#39;</span><span class="token punctuation">;</span>
    <span class="token string single-quoted-string">&#39;post-2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;This is my second post&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">isset</span><span class="token punctuation">(</span><span class="token variable">$posts</span><span class="token punctuation">[</span><span class="token variable">$post</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">abort</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;The post was not found.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token function">view</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;post&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">&#39;post&#39;</span> <span class="token operator">=&gt;</span> <span class="token variable">$posts</span><span class="token punctuation">[</span><span class="token variable">$post</span><span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(y,q){const a=o("ExternalLinkIcon");return c(),i("div",null,[u,n("div",r,[n("p",null,[n("a",d,[s('Watch "Route Wildcards" on Laracasts'),t(a)])])]),n("p",null,[s("Sometimes you will need create a route that will accept a wildcard value, and then retrieve that value. This is where route parameters come. "),n("a",k,[s("Route parameters"),t(a)]),s(" allow you set a segment of the URI to be required or option and then capture that segment. Route parameters are always encased within "),v,s(" braces and should consist of alphabetic characters, and may not contain a "),g,s(" character.")]),h,n("p",null,[s("Now, in the example above if the value passed through the URI is not one of the keys int he "),m,s(" array, the code will break. To fix this we can check if the key is in the array and if it is not then abort the script using the "),n("a",b,[f,t(a)]),s(" helper function.")]),_])}const R=p(l,[["render",w],["__file","wildcards.html.vue"]]);export{R as default};