import{_ as i,M as o,p,q as l,R as n,t as s,N as e,a3 as t}from"./framework-dd056dd6.js";const c={},r=n("h1",{id:"responsive-web-design-patterns",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#responsive-web-design-patterns","aria-hidden":"true"},"#"),s(" Responsive Web Design Patterns")],-1),u={href:"https://alistapart.com/article/responsive-web-design/",target:"_blank",rel:"noopener noreferrer"},d=n("em",null,"Responsive Web Design",-1),m={href:"https://www.lukew.com/ff/entry.asp?1514",target:"_blank",rel:"noopener noreferrer"},k=n("em",null,"Multi-Device Layout Patterns",-1),v=t(`<h2 id="tiny-tweaks" tabindex="-1"><a class="header-anchor" href="#tiny-tweaks" aria-hidden="true">#</a> Tiny Tweaks</h2><p>Tiny tweaks is the simplest of all the responsive layout patterns and relies heavily on the natural responsiveness of the HTML. These layouts consist of a single column that fluidly grow and shrink with the screen size. This layout structure requires few if any media queries and little effort to optimize it across all screen sizes.</p><p><img src="https://static.lukew.com/md-patterns4.png" alt="Illustration for the tiny tweak pattern"><br><small>Illustration created by Luke Wroblewski.</small></p><p>This type of the layout can be easily accomplished using CSS Grid and explicitly setting the row heights for the header and footer.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 75px 1fr 100px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),h=n("iframe",{height:"575",style:{width:"100%"},scrolling:"no",title:"RWD Patterns: Tiny Tweaks",src:"https://codepen.io/IMD/embed/MWwjXpE?height=575&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/MWwjXpE'>RWD Patterns: Tiny Tweaks</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),g=t(`<h2 id="mostly-fluid" tabindex="-1"><a class="header-anchor" href="#mostly-fluid" aria-hidden="true">#</a> Mostly Fluid</h2><p>The mostly fluid layouts rely on the concept of a fluid grid system, that will shift depending on the screen size. On smaller screens, the mostly fluid layout will be a single column with a fixed max-width for larger screens.</p><p><img src="https://static.lukew.com/md-patterns1.png" alt="Illustration for the mostly fluid pattern"><br><small>Illustration created by Luke Wroblewski.</small></p><p>Thanks again to CSS Grid, creating a mostly fluid layout is relatively painless. In the example below, nested grids and a fixed <code>max-width</code> of <code>1200px</code> were used. A single media query was used to shift the <code>&lt;main&gt;</code> from a one column to a two column grid.</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;body&gt;
  &lt;header&gt;&lt;/header&gt;
  &lt;main&gt;
    &lt;section&gt;&lt;/section&gt;
    &lt;section&gt;&lt;/section&gt;
    &lt;section&gt;&lt;/section&gt;
    &lt;section&gt;&lt;/section&gt;
  &lt;/main&gt;
  &lt;footer&gt;&lt;/footer&gt;
&lt;/body&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 75px 1fr 100px<span class="token punctuation">;</span>

  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">main</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* height is used to simulate content */</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 560px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>2<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),b=n("iframe",{height:"575",style:{width:"100%"},scrolling:"no",title:"RWD Patterns: Mostly Fluid",src:"https://codepen.io/IMD/embed/JjdRZmV?height=575&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/JjdRZmV'>RWD Patterns: Mostly Fluid</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),f=t(`<h2 id="column-drop" tabindex="-1"><a class="header-anchor" href="#column-drop" aria-hidden="true">#</a> Column Drop</h2><p>The column drop layout is when a layout will have multi-columns on a larger screen, but begins dropping columns as the screen size gets smaller. This means content will be less fluid and instead adapting to the screen sizes will be made responsive by stacking the columns.</p><p><img src="https://static.lukew.com/md-patterns2.png" alt="Illustration for the column drop pattern"><br><small>Illustration created by Luke Wroblewski.</small></p><p>With flexbox and flex-wrap, creating the column drop layout is quite simple. Only a minimum amount of media queries are required to adjust the order and make sure the element fill the appropriate amount of space.</p><p><strong>Note:</strong> The layout was designed large screen first, and used media queries to move down. While, it is possible to create this layout first, the concept of <em>column drop</em> implies that design starts with the largest screen.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header,
main,
footer</span> <span class="token punctuation">{</span>
  <span class="token property">flex-grow</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header,
footer</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 150px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">main</span> <span class="token punctuation">{</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 699px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">header,
  main</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100% - 200px<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">footer</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 549px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">header,
  footer</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token selector">main</span> <span class="token punctuation">{</span>
    <span class="token property">order</span><span class="token punctuation">:</span> -1<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),y=n("iframe",{height:"575",style:{width:"100%"},scrolling:"no",title:"RWD Patterns: Column Drop",src:"https://codepen.io/IMD/embed/abOmjyb?height=575&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/abOmjyb'>RWD Patterns: Column Drop</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),w=t(`<h2 id="layout-shifter" tabindex="-1"><a class="header-anchor" href="#layout-shifter" aria-hidden="true">#</a> Layout Shifter</h2><p>The layout shifter pattern is likely the most complex and therefore requires the most adapting. With this layout, various screens can see vastly different layouts. While the layout shifter does require the most amount of work, it also has the most room for innovation and creativity. There are many different possibilities for creating a responsive web design using this technique, the following illustration and the example is just one of those possibilities.</p><p><img src="https://static.lukew.com/md-patterns3.png" alt="Illustration for the layout shifter pattern"><br><small>Illustration created by Luke Wroblewski.</small></p><p>While in the past the layout shifter required a significant amount of work to create, which likely kept it less popular than some of the other designs on the this list, thanks to CSS Grid and grid areas it can be remarkably simple. In the example below, a single grid is used, which explicitly set the columns and rows for the grid. Then <code>grid-template-areas</code> is used to visually create mobile layout. Each element is assigned an area and the layout is set. From there, each time layout needs to change only the <code>grid-template-areas</code> needs to be adjusted.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>5<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 75px 1fr 1fr 100px<span class="token punctuation">;</span>
  <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
    <span class="token string">&quot;nav nav nav nav nav&quot;</span>
    <span class="token string">&quot;header header header header header&quot;</span>
    <span class="token string">&quot;main main main main main&quot;</span>
    <span class="token string">&quot;footer footer footer footer footer&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">nav</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> nav<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> header<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">main</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> main<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">footer</span> <span class="token punctuation">{</span>
  <span class="token property">grid-area</span><span class="token punctuation">:</span> footer<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 700px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> 1fr 1fr 1fr 100px<span class="token punctuation">;</span>
    <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> 200px <span class="token function">repeat</span><span class="token punctuation">(</span>4<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">grid-template-areas</span><span class="token punctuation">:</span>
      <span class="token string">&quot;nav header header header header&quot;</span>
      <span class="token string">&quot;nav main main main main&quot;</span>
      <span class="token string">&quot;nav main main main main&quot;</span>
      <span class="token string">&quot;nav footer footer footer footer&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),_=n("iframe",{height:"575",style:{width:"100%"},scrolling:"no",title:"RWD Patterns: Layout Shifter",src:"https://codepen.io/IMD/embed/OJVRVoW?height=575&theme-id=dark&default-tab=result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/OJVRVoW'>RWD Patterns: Layout Shifter</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),x=n("h2",{id:"off-canvas",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#off-canvas","aria-hidden":"true"},"#"),s(" Off Canvas")],-1),D=n("p",null,"The final responsive layout category is off canvas. The principle with this pattern is that instead of stretching or rearranging content to fit on the screen, just push it off the screen until it is needed, and retrieve it using JavaScript. Most screen content is limited to navigation and tools, but there is a lot of flexibility to what can be set off canvas.",-1),I=n("p",null,"It can be argued that this last category is not responsive design at all, as it is just hiding content rather than finding a way to make it fit. Futhermore, such a design is less convenient for the user, and they are forced to reveal the content before they can consume it, and if content can be hidden is it necessary in the first place?",-1),M=n("p",null,[n("img",{src:"https://static.lukew.com/md-patterns7.png",alt:"Illustration for the off canvas pattern"}),n("br"),n("small",null,"Illustration created by Luke Wroblewski.")],-1),W=n("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Column Drop",src:"https://codepen.io/IMD/embed/RwyoQLR?default-tab=result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/RwyoQLR">
  Column Drop</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),q=n("h2",{id:"reference",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reference","aria-hidden":"true"},"#"),s(" Reference")],-1),T={href:"https://alistapart.com/article/responsive-web-design/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.lukew.com/ff/entry.asp?1514",target:"_blank",rel:"noopener noreferrer"},R={href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.packtpub.com/web-development/responsive-web-design-patterns",target:"_blank",rel:"noopener noreferrer"};function S(C,j){const a=o("ExternalLinkIcon");return p(),l("div",null,[r,n("p",null,[s("With the introduction of the true mobile browser, no longer were web sites being accessed exclusively by desktops and laptops. In 2010, Ethan Marcotte, provided the industry with a wake-up and a path with his now famous article, "),n("a",u,[d,e(a)]),s(". Over a decade later, the world and industry has moved forward, and the idea of responsive web design is no longer an idea, it is a requirement.")]),n("p",null,[s("In 2012, two years after Marcotte told the world about Responsive Web Design, Luke Wroblewski, seeing patterns in how developers were designing their responsive layouts, wrote the article "),n("a",m,[k,e(a)]),s(". Wroblewski broke these layout patterns into 5 categories: tiny tweaks, mostly fluid, column drop, layout shifter, off canvas.")]),v,h,g,b,f,y,w,_,x,D,I,M,W,q,n("ul",null,[n("li",null,[n("a",T,[s("Responsive Web Design | A List Apart"),e(a)])]),n("li",null,[n("a",P,[s("Multi-Device Layout Patterns"),e(a)])]),n("li",null,[n("a",R,[s("Responsive Web Design Patterns | Google Developers"),e(a)])]),n("li",null,[n("a",L,[s("Responsive Web Design Patterns | Packt"),e(a)])])])])}const O=i(c,[["render",S],["__file","index.html.vue"]]);export{O as default};
