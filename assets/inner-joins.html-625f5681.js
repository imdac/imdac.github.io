import{_ as p,M as s,p as i,q as c,N as a,R as n,t as e,a3 as l}from"./framework-dd056dd6.js";const r="/images/inner-join.png",u={},d=n("h1",{id:"inner-joins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#inner-joins","aria-hidden":"true"},"#"),e(" INNER JOINs")],-1),k=l('<p>The <code>INNER JOIN</code> selects records that have matching values in both tables. This kind of relationship can be represented by the follow venn diagram.</p><p><img src="'+r+'" alt="Venn Diagram with the inner part colored representing an INNER JOIN "></p><p>The <code>INNER JOIN</code> follows the <code>FROM</code> clause and first table name. This in turn is followed by the name of the second table the <code>ON</code> keyword and the join condition.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>When working with more than one table, it is sometimes necessary to specify the table along with the column using a dot syntax. The table name or alias can be used.</p><p>Example: <em>table</em>.<em>column</em></p></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># Retrieving the title, director, year, and genre title for each movie</span>\n<span class="token keyword">SELECT</span> m<span class="token punctuation">.</span>movie_title<span class="token punctuation">,</span> m<span class="token punctuation">.</span>director<span class="token punctuation">,</span> m<span class="token punctuation">.</span><span class="token keyword">year</span><span class="token punctuation">,</span> g<span class="token punctuation">.</span>genre_title \n<span class="token keyword">FROM</span> movies <span class="token keyword">as</span> m\n<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> genres <span class="token keyword">as</span> g\n<span class="token keyword">ON</span> m<span class="token punctuation">.</span>genre_id <span class="token operator">=</span> g<span class="token punctuation">.</span>genre_id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The backticks (<code>`</code>) around table names and column names is only required if the names have a space. While it is good practice to include backticks, it becomes cumbersome when using the dot syntax.</p></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># The above example using backticks</span>\n<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>m<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>movie_title<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>m<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>director<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>m<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>year<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>g<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>genre_title<span class="token punctuation">`</span></span> \n<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>movies<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>m<span class="token punctuation">`</span></span>\n<span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">`</span>genres<span class="token punctuation">`</span></span> <span class="token keyword">as</span> <span class="token identifier"><span class="token punctuation">`</span>g<span class="token punctuation">`</span></span>\n<span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">`</span>m<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>genre_id<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token identifier"><span class="token punctuation">`</span>g<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>genre_id<span class="token punctuation">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',7),m={class:"try"},h={href:"https://www.db-fiddle.com/f/wDJVY2mN5AADqkaLspMrCh/0",target:"_blank",rel:"noopener noreferrer"};function v(g,f){const t=s("Youtube"),o=s("ExternalLinkIcon");return i(),c("div",null,[d,a(t,{id:"l1Nk8irDJu4",citation:"griffith"}),k,n("div",m,[n("p",null,[n("a",h,[e("Try it yourself on DB Fiddle"),a(o)])])])])}const _=p(u,[["render",v],["__file","inner-joins.html.vue"]]);export{_ as default};