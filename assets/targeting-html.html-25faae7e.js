import{_ as e,p as n,q as s,a3 as t}from"./framework-dd056dd6.js";const a="/images/header-colour.gif",l={},i=t('<h1 id="targeting-html" tabindex="-1"><a class="header-anchor" href="#targeting-html" aria-hidden="true">#</a> Targeting HTML</h1><p>Targeting is referred to as selecting the elements on the page for styling them in CSS.</p><h2 id="tag-name-sector" tabindex="-1"><a class="header-anchor" href="#tag-name-sector" aria-hidden="true">#</a> Tag name sector</h2><p>The simplest way to target HTML elements is by using the tag name.</p><p><img src="'+a+`" alt="Targeting html elements by tag"></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* selecting all the &lt;h1&gt; tags on the page */</span>
<span class="token selector">h1</span><span class="token punctuation">{</span>
  <span class="token comment">/* color will change the font color of the element */</span>
  <span class="token property">color</span><span class="token punctuation">:</span> coral<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* selecting all the &lt;p&gt; tags on the page */</span>
<span class="token selector">p</span><span class="token punctuation">{</span>
  <span class="token comment">/* background-color will change the background of the element */</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> lightblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>When we use a tag name in the rule set the browser will select all the tags or elements with that name on the page. Example using <code>h1</code> or <code>p</code> will select all the <code>h1</code> tags and <code>p</code> tags</p></div><h2 id="targeting-multiple-elements" tabindex="-1"><a class="header-anchor" href="#targeting-multiple-elements" aria-hidden="true">#</a> Targeting multiple elements</h2><p>We can target multiple elements together to apply the same set of styles in css by separating the selectors with a comma <code>,</code>.</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* targeting all &lt;h1&gt;, &lt;h2&gt;, &lt;h3&gt; and &lt;h4&gt; tags on the page */</span>
<span class="token selector">h1, h2, h3, h4</span><span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="targeting-child-elements" tabindex="-1"><a class="header-anchor" href="#targeting-child-elements" aria-hidden="true">#</a> Targeting child elements</h2><p>If we wish to target only elements that are inside another element we can do that using the <strong>descendant selector</strong>.</p><p>For writing the descendant selector we start with the parent adding a space for each level of child elements.</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;article&gt;
  &lt;h2&gt;Rose&lt;/h2&gt;
  &lt;section&gt;
    &lt;h3&gt;Botany&lt;/h3&gt;
  &lt;/section&gt;
&lt;/article&gt;
&lt;aside&gt;
  &lt;h2&gt;More Flowers&lt;/h2&gt;
  &lt;section&gt;
    &lt;h3&gt;Similar to rose&lt;/h3&gt;
  &lt;/section&gt;
&lt;/aside&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we have the HTML above and try to use <code>h2</code> selector it will select the <code>&lt;h2&gt;</code> tags inside <code>&lt;article&gt;</code> and <code>&lt;aside&gt;</code> tags. In this case we can use the <strong>descendant selector</strong> for selecting the specific heading</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* targeting only the &lt;h2&gt; inside the &lt;article&gt; */</span>
<span class="token selector">article h2</span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* targeting the &lt;h3&gt; tag inside the &lt;section&gt; tag inside the &lt;article&gt; */</span>
<span class="token selector">article section h3</span><span class="token punctuation">{</span>
  <span class="token comment">/* 
    border property adds a border around the element
    We add 3 values to the border property 
    thickness style color
  */</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[i];function o(d,r){return n(),s("div",null,c)}const u=e(l,[["render",o],["__file","targeting-html.html.vue"]]);export{u as default};
