import{_ as e,M as p,p as o,q as i,R as n,t as s,N as t,a3 as l}from"./framework-dd056dd6.js";const c={},u=l(`<h1 id="grid-item-positioning-with-areas" tabindex="-1"><a class="header-anchor" href="#grid-item-positioning-with-areas" aria-hidden="true">#</a> Grid Item Positioning with Areas</h1><h2 id="preamble" tabindex="-1"><a class="header-anchor" href="#preamble" aria-hidden="true">#</a> Preamble</h2><p>In addition to using grid lines or <code>span</code> for positioning grid items, there is an alternate method by assigning names to areas of the grid.</p><p>In a grid container we define the columns, rows and the initial areas using <code>grid-template-columns, grid-template-rows and grid-template-areas</code> properties.</p><p><code>grid-template-areas</code> allows us to define named areas of the grid. In the example below, in keeping with a mobile first approach, we initially define a 1 column, 4 row layout that effectively names each row according to a single column layout.</p><p>Each grid item is assigned a corresponding grid-area name that we can use in a media query to adapt the layout.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.grid-container</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span> 
		“header” 
		“nav” 
		“main” 
		“footer”<span class="token punctuation">;</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>171<span class="token punctuation">,</span> 174<span class="token punctuation">,</span> 180<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr<span class="token punctuation">;</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> grey<span class="token punctuation">;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>212<span class="token punctuation">,</span> 160<span class="token punctuation">,</span> 160<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> nav<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>129<span class="token punctuation">,</span> 21<span class="token punctuation">,</span> 21<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> main
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>208<span class="token punctuation">,</span> 141<span class="token punctuation">,</span> 41<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-area</span><span class="token punctuation">:</span> footer
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 760px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.grid-container</span> <span class="token punctuation">{</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
			“header header”
			“nav nav”
			“main main”
			“footer footer”<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 980px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.grid-container</span> <span class="token punctuation">{</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
			“header header header”
			“nav main main”
			“nav main main”
			“footer footer footer”<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 1fr 1fr 1fr<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.grid-container</span> <span class="token punctuation">{</span>
        <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
			“header header header header”
			“nav main main main”
			“nav main main main”
			“footer footer footer footer”<span class="token punctuation">;</span>
        <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“grid-container”</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>RWD II CSS Grid - Grid Areas<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Page 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Page 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>Page 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Content<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Heading 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Heading 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Heading 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token entity named-entity" title="©">&amp;copy;</span> 2020 Interactive Multimedia Design<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=n("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"Grid - Position by Area ",src:"https://codepen.io/IMD/embed/JjKVeXX?height=265&theme-id=light&default-tab=css,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/JjKVeXX'>Grid - Position by Area </a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),d=n("h2",{id:"further-review",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#further-review","aria-hidden":"true"},"#"),s(" Further Review")],-1),k={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas",target:"_blank",rel:"noopener noreferrer"},m={href:"https://developer.mozilla.org/en-US/docs/Glossary/Grid_cell",target:"_blank",rel:"noopener noreferrer"},v=n("h2",{id:"see-also",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#see-also","aria-hidden":"true"},"#"),s(" See Also")],-1),g={href:"https://www.youtube.com/watch?v=GhMf4piClEw",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.youtube.com/watch?v=7U7EebDUPXc",target:"_blank",rel:"noopener noreferrer"};function h(y,f){const a=p("ExternalLinkIcon");return o(),i("div",null,[u,r,d,n("ul",null,[n("li",null,[s("Read "),n("a",k,[s("Grid template areas - CSS: Cascading Style Sheets | MDN"),t(a)])]),n("li",null,[s("Read "),n("a",m,[s("Grid Cell - MDN Web Docs Glossary: Definitions of Web-related terms | MDN"),t(a)])])]),v,n("ul",null,[n("li",null,[n("a",g,[s("CSS Grids with Unequal Columns - YouTube"),t(a)])]),n("li",null,[n("a",b,[s("Overlapping CSS Grid Elements - YouTube"),t(a)])])])])}const _=e(c,[["render",h],["__file","grid-template-area.html.vue"]]);export{_ as default};
