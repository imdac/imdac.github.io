import{_ as p,M as o,p as i,q as l,R as e,t as n,N as s,a3 as t}from"./framework-dd056dd6.js";const r={},c=e("h1",{id:"prepared-statements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prepared-statements","aria-hidden":"true"},"#"),n(" Prepared Statements")],-1),d={href:"https://www.php.net/manual/en/pdo.prepared-statements.php",target:"_blank",rel:"noopener noreferrer"},u=t(`<h2 id="sql-injection" tabindex="-1"><a class="header-anchor" href="#sql-injection" aria-hidden="true">#</a> SQL Injection</h2><p>The following example shows how SQL injection could happen.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;db.php&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$movie</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;movie&#39;</span><span class="token punctuation">]</span> <span class="token comment">// &#39;;DROP TABLE movies;&#39;</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM movies WHERE movie_title = &#39;<span class="token interpolation"><span class="token variable">$movie</span></span>&#39;&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the above code what allowed to execute, it could the cause the movies table to be deleted. This is why it is always important to protect against SQL injection and prepared statements are on way to do that.</p><h2 id="creating-a-prepared-statement" tabindex="-1"><a class="header-anchor" href="#creating-a-prepared-statement" aria-hidden="true">#</a> Creating a Prepared Statement</h2><p>PDO supports two forms for implementing prepared statements: named parameters and anonymous placeholders. These will be placed inside of the query statement as placeholders for data, which will be added later. We will only cover named parameters in this course.</p><p>To use a named parameter inside of a prepared statement, we first start with a colon followed by the parameter name and place it inside of the query statement.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;db.php&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM movies WHERE movie_title = :movie_title&quot;</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h={href:"https://www.php.net/manual/en/pdo.prepare.php",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"prepare()",-1),k=t(`<div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>The <code>prepare()</code> method does not execute the statement. It is merely creates a template that can be used later with the desired data.</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;db.php&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM movies WHERE movie_title = :movie_title&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="binding-data" tabindex="-1"><a class="header-anchor" href="#binding-data" aria-hidden="true">#</a> Binding Data</h2><p>Once a prepared statement has been created, it is ready for the data. This can be down in two ways: directly using the methods <code>bindParam()</code> and <code>bindValue()</code> or by passing an array the <code>execute()</code> method. We will cover the latter method on the next page, for now we will cover <code>bindParam()</code> and <code>bindValue()</code>.</p>`,4),v={href:"https://www.php.net/manual/en/pdostatement.bindparam.php",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"bindParam()",-1),g={href:"https://www.php.net/manual/en/pdostatement.bindvalue.php",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"bindValue()",-1),w=e("code",null,"bindParam()",-1),q=e("p",null,[n("The example below binds the "),e("code",null,"$_GET['movie']"),n(" to the prepared statement using the "),e("code",null,"bindValue()"),n(" method. The data type is explicitly set using the "),e("em",null,"PDO::PARAM_STR"),n(" constant.")],-1),f={class:"custom-container warning"},x=e("p",{class:"custom-container-title"},"NOTE",-1),T={href:"https://www.php.net/manual/en/pdo.constants.php",target:"_blank",rel:"noopener noreferrer"},y=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;db.php&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM movies WHERE movie_title = :movie_title&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">bindValue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:movie_title&#39;</span><span class="token punctuation">,</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;movie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">PARAM_STR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="executing-a-prepared-statement" tabindex="-1"><a class="header-anchor" href="#executing-a-prepared-statement" aria-hidden="true">#</a> Executing a Prepared Statement</h2>`,2),E={href:"https://www.php.net/manual/en/pdostatement.execute.php",target:"_blank",rel:"noopener noreferrer"},$=e("code",null,"execute()",-1),S=t(`<div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token keyword">require_once</span> <span class="token string double-quoted-string">&quot;db.php&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$sql</span> <span class="token operator">=</span> <span class="token string double-quoted-string">&quot;SELECT * FROM movies WHERE movie_title = :movie_title&quot;</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span> <span class="token operator">=</span> <span class="token variable">$db</span><span class="token operator">-&gt;</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token variable">$sql</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">bindValue</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;:movie_title&#39;</span><span class="token punctuation">,</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;movie&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name static-context">PDO</span><span class="token operator">::</span><span class="token constant">PARAM_STR</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token variable">$stmt</span><span class="token operator">-&gt;</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function P(R,L){const a=o("ExternalLinkIcon");return i(),l("div",null,[c,e("p",null,[e("a",d,[n("Prepared Statements"),s(a)]),n(" are like compiled templates for SQL that two major benefits over plain SQL queries. The first is that prepared statement only need to be prepared once, but can be executed multiple times. This can optimize database procedures when working with complex queries. The second major benefit is the build-in security. Prepared statements automatically handle quoting, which will help prevent SQL injections. Therefore, prepared statement is crucial any time a query is dependent on values coming from the user.")]),u,e("p",null,[n("Then the "),e("a",h,[m,s(a)]),n(" method is used to prepare the prepared statement. The method will also return the statement object.")]),k,e("p",null,[n("The "),e("a",v,[b,s(a)]),n(" and the "),e("a",g,[_,s(a)]),n(" are very similar but do have very crucial difference. The "),w,n(" method only works with a variable and will not evaluate until the statement is executed.")]),q,e("div",f,[x,e("p",null,[n("There are many data_type constants can be applied to the both of these methods. You can see all of the available constants on the "),e("a",T,[n("PDO Constants"),s(a)]),n(" page.")])]),y,e("p",null,[n("The final step of using a prepared statement is the execute the statement with the database. This is accomplished using the "),e("a",E,[$,s(a)]),n(" method.")]),S])}const V=p(r,[["render",P],["__file","prepared-statements.html.vue"]]);export{V as default};