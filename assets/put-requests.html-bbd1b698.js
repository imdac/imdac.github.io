import{_ as t,M as e,p as o,q as p,R as a,t as s,N as c,a3 as l}from"./framework-dd056dd6.js";const u={},i=a("h1",{id:"put-requests",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#put-requests","aria-hidden":"true"},"#"),s(" Put Requests")],-1),d={class:"watch"},r={href:"https://laracasts.com/series/laravel-6-from-scratch/episodes/24",target:"_blank",rel:"noopener noreferrer"},m=l(`<p>HTML form can only be submitted using two methods, <code>GET</code> or <code>POST</code>. But as we learned earlier, RESTful applications require a <code>PUT</code> method for updating data and a <code>DELETE</code> method to delete data.</p><p>Fortunately, Laravel has provided a solution for this problem. When a form must use the <code>PUT</code> or <code>DELETE</code> method, set the form&#39;s method to <code>POST</code> and then add the <code>@method()</code> directive to the form. This directive will take a string that matches the desired method.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Update data with the PUT method --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/movies/{{ $movie-&gt;movie_id }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  @csrf
  @method(&#39;PUT&#39;)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>movie_title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Delete data with the DELETE method --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POST<span class="token punctuation">&quot;</span></span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/movies/{{ $movie-&gt;movie_id }}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  @csrf
  @method(&#39;DELETE&#39;)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>DELETE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function k(h,v){const n=e("ExternalLinkIcon");return o(),p("div",null,[i,a("div",d,[a("p",null,[a("a",r,[s('Watch "Forms that Submit PUT Requests" on Laracasts'),c(n)])])]),m])}const q=t(u,[["render",k],["__file","put-requests.html.vue"]]);export{q as default};