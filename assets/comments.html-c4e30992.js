import{_ as a,M as o,p as i,q as l,R as e,t as n,N as s,a3 as r}from"./framework-dd056dd6.js";const c={},d=e("h1",{id:"php-comments",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#php-comments","aria-hidden":"true"},"#"),n(" PHP Comments")],-1),p={class:"watch"},m={href:"https://www.linkedin.com/learning/php-essential-training-2/insert-code-comments",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"Comments are messages that a developer leaves in the code to help explain the code or to leave a note about the code, but are completely ignored by the interpreter. Comments are a vital tool for any developer, and the better comments are used the better a developer will become.",-1),u={href:"https://www.php.net/manual/en/language.basic-syntax.comments.php",target:"_blank",rel:"noopener noreferrer"},v=r(`<h2 id="single-line-comments" tabindex="-1"><a class="header-anchor" href="#single-line-comments" aria-hidden="true">#</a> Single Line Comments</h2><p>Single line comments start with a <code>//</code> and continues to the end of the line. Any text between the <code>//</code> and the end line will be ignored by PHP. PHP comments only work inside of PHP tags <code>&lt;?php ?&gt;</code>. Any comments outside of the PHP tag will be rendered as text by the browser.</p><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>It is also possible to use <code>#</code> for single-line comments, but this is not commonly used.</p></div><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
  <span class="token comment">// This a single line comment</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>

// This will appear as text in the browser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multi-line-comments" tabindex="-1"><a class="header-anchor" href="#multi-line-comments" aria-hidden="true">#</a> Multi-line Comments</h2><p>Multi-line comments start with a <code>/*</code> and will continue until a <code>*/</code> is encountered.</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span> 
  <span class="token comment">/* This is a 
    multiline comment */</span> 
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">&quot;Hello, World&quot;</span><span class="token punctuation">;</span>
<span class="token delimiter important">?&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),b={class:"try"},g={href:"https://repl.it/@eisenbm/php-comments",target:"_blank",rel:"noopener noreferrer"};function _(k,f){const t=o("ExternalLinkIcon");return i(),l("div",null,[d,e("div",p,[e("p",null,[e("a",m,[n('Watch "Insert code comments" on LinkedIn Learning'),s(t)])])]),h,e("p",null,[e("a",u,[n("PHP Comments"),s(t)]),n(" can be divided into two categories: single-line comments and multi-line comments.")]),v,e("div",b,[e("p",null,[e("a",g,[n("Try it yourself on Repl.it"),s(t)])])])])}const x=a(c,[["render",_],["__file","comments.html.vue"]]);export{x as default};