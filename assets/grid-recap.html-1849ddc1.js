import{_ as o,M as i,p as s,q as l,R as e,t as a,N as n,V as c,a3 as t}from"./framework-dd056dd6.js";const h="/images/grid-recap-example.png",p="/images/grid-recap-areas.png",m={},u=e("h1",{id:"grid-recap",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#grid-recap","aria-hidden":"true"},"#"),a(" Grid Recap")],-1),g={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"},f=t('<h2 id="terms-and-defaults" tabindex="-1"><a class="header-anchor" href="#terms-and-defaults" aria-hidden="true">#</a> Terms and defaults</h2><table><thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody><tr><td>grid container</td><td>the parent element that we have added the <code>display:grid</code> property to</td></tr><tr><td>grid items</td><td>the direct child elements of the grid container</td></tr><tr><td>grid lines</td><td>the lines separating rows and columns, also referred as row-lines and column-lines respectively</td></tr><tr><td>grid tracks</td><td>the space between the grid lines. Also, known as rows and columns</td></tr><tr><td>grid rows</td><td>the horizontal space between row-lines</td></tr><tr><td>grid columns</td><td>the vertical space between column-lines</td></tr><tr><td>grid cell</td><td>a single unit of the grid, created by the intersection of a row and column</td></tr><tr><td>grid gap</td><td>the thickness of the row and column lines, can de defined individually as grid-column-gap or grid-row-gap</td></tr><tr><td>explicit grid</td><td>The gird rows and columns that we explicitly define using the template properties</td></tr><tr><td>implicit grid</td><td>the rows and columns that are automatically generated by the elements that overflow the explicit grid</td></tr></tbody></table><h2 id="the-container" tabindex="-1"><a class="header-anchor" href="#the-container" aria-hidden="true">#</a> The container</h2><p>To start working with grid we first need to set the grid container by adding <code>display:grid</code> to the parent element of the elements that we want to layout in a grid.</p>',4),w=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"",src:"https://codepen.io/IMD/embed/YzQQWBL?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/YzQQWBL">
  </a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),b=t('<div class="custom-container tip"><p class="custom-container-title">Note</p><p>Unlike flexbox we will not see any change happening to our elements right away. At this point we do have a grid but the grid is an implicit grid, which means each element is creating its own cell. In the example above we have an implicit grid of 4 rows and 1 column.</p></div><h2 id="grid-template" tabindex="-1"><a class="header-anchor" href="#grid-template" aria-hidden="true">#</a> Grid Template</h2><p>A grid is comprised of rows and columns hence we have two properties to explicitly define the template of a grid <code>gird-template-rows</code> and <code>grid-template-columns</code></p><p>We define the number of rows by supplying the height of each row to the <code>grid-template-rows</code> property. Example: <code>grid-template-rows: 100px 200px;</code> will create 2 rows with 100px and 200px height respectively.</p><p>We define the number of columns by supplying the width of each column to the <code>grid-template-columns</code> property. Example: <code>grid-template-columns: 20% 30% 50%;</code> will create 3 columns with 20%, 30%, and 50% width respectively.</p>',5),v=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"display-grid",src:"https://codepen.io/IMD/embed/MWoojjJ?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/MWoojjJ">
  display-grid</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),y=t('<p><em>Screenshot of the browser dev tools showing the grid layout with line number</em><img src="'+h+'" alt="Grid Screenshot with lines and cells"></p><div class="custom-container tip"><p class="custom-container-title">Notes</p><ul><li>We have created an explicit grid of 2 rows and 3 columns, which means we have 6 cells in total</li><li>Grid items will occupy one cell each by default</li><li>Since we have 4 items the last two cells in our grid are empty</li><li>There are 4 grid column lines and 3 grid row lines</li></ul></div><div class="custom-container warning"><p class="custom-container-title">Repeat</p><p>We can use the <code>repeat()</code> function to create rows or columns with repeating height or width. <code>grid-template-columns: 25% 25% 25% 25%;</code> can be written as <code>grid-template-columns: repeat(4, 25%);</code></p></div><h2 id="auto-rows-and-columns" tabindex="-1"><a class="header-anchor" href="#auto-rows-and-columns" aria-hidden="true">#</a> Auto rows and columns</h2><p>When we have more items than we have cells in our grid or we have one or more items taking over multiple cells we might run out of the explicitly defined cells, in this case the overflowing items will create rows automatically and the height of these rows will not be defined hence it will be set to the height of the content of the items.</p><p>To deal with the issue that automatic height can create we can use the <code>grid-auto-columns</code> property to define the width of the automatically generate columns or <code>grid-auto-rows</code> property to define height of the automatically generate rows.</p>',6),_=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"grid-gap",src:"https://codepen.io/IMD/embed/vYZZXeP?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/vYZZXeP">
  grid-gap</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),x=t(`<h2 id="grid-template-areas" tabindex="-1"><a class="header-anchor" href="#grid-template-areas" aria-hidden="true">#</a> Grid Template Areas</h2><p>We can name each cell of the grid that we have created using <code>grid-template-areas</code> property. These names can be used to place the grid items in specific areas.</p><p>We will need to add a name for each cell in a row, if we want to skip over a cell we can use a period <code>.</code> as the value. Example:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">grid-template-areas</span><span class="token punctuation">:</span> 
<span class="token string">&quot;keys . brace&quot;</span> 
<span class="token string">&quot;mask note note&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the above example we are adding the name <em>keys</em> to the first cell, leaving second cell without a name and then using <em>brace</em> for the third cell, the fourth cell is named <em>mask</em> and the last two cells are named the same <em>note</em>.</p><p>We will be using these names for our items later.</p>`,6),S=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"grid-templates",src:"https://codepen.io/IMD/embed/rNwwMwG?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/rNwwMwG">
  grid-templates</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),k=t('<p><em>Screenshot of the browser dev tools showing the grid area names</em><img src="'+p+`" alt="Grid Screenshot with grid area labels"></p><h2 id="items-placement" tabindex="-1"><a class="header-anchor" href="#items-placement" aria-hidden="true">#</a> Items Placement</h2><p>We can place the items in different cells than the default first come first cell behavior, we can also place an item to occupy more than one adjacent cells. The three properties we can use for this are <code>grid-column</code>, <code>grid-row</code>, and <code>grid-area</code></p><p>We can use the line numbers for our grid as values for <code>grid-column</code> and <code>grid-row</code> properties and use the area names for the value of <code>grid-area</code> property.</p><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.product:nth-child(2){
  /* Start at column line 3 */
  grid-column: 3;
}
.product:nth-child(2){
  /* Start at line 2, go to line 6 */
  grid-column: 2 / 6;
}
.product:nth-child(2){
  /* Start at line 2, go to last line */
  grid-column: 2 / -1;
}
.product:nth-child(2){
  /* Start at line 2, span horizontally 3 rows */
  grid-column: 2 / span 3;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-CSS line-numbers-mode" data-ext="CSS"><pre class="language-CSS"><code>.product:nth-child(1){
  /* take the grid area with label keys */
  grid-area: keys;
}
.product:nth-child(2){
  /* take the grid area with label brace */
  grid-area: brace;
}
.product:nth-child(3){
  /* take the grid area with label mask */
  grid-area: mask;
}
.product:nth-child(4){
  /* take the grid area with label note */
  grid-area: note;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),I=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"grid-gap",src:"https://codepen.io/IMD/embed/GREEjXR?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/GREEjXR">
  grid-gap</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),M=t('<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> Gap</h2><p>The <code>gap</code> property can be used to add thickness to the grid lines, we can individually add the value for the column lines using <code>column-gap</code> or row lines using <code>row-gap</code>.</p><p>The value accepted by these properties is simply a number followed by a unit. Example: <code>gap: 10px;</code> will add a thickness of 10px to both row and column lines.</p>',3),D=e("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"grid-template-areas",src:"https://codepen.io/IMD/embed/YzQQGQB?default-tab=css%2Cresult",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/IMD/pen/YzQQGQB">
  grid-template-areas</a> by IMD (<a href="https://codepen.io/IMD">@IMD</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),C=t('<h2 id="summary-of-properties" tabindex="-1"><a class="header-anchor" href="#summary-of-properties" aria-hidden="true">#</a> Summary of Properties</h2><table><thead><tr><th>Property</th><th>Description</th><th>Added on</th></tr></thead><tbody><tr><td>display:grid;</td><td>initializes the grid container</td><td>parent element</td></tr><tr><td>grid-template-rows</td><td>defines the height of each row</td><td>gird container</td></tr><tr><td>grid-template-columns</td><td>defines the width of each column</td><td>gird container</td></tr><tr><td>grid-auto-rows</td><td>defines the height of automatically created rows</td><td>gird container</td></tr><tr><td>grid-auto-columns</td><td>defines the width of automatically created columns</td><td>gird container</td></tr><tr><td>grid-template-areas</td><td>defines the name of each grid cell</td><td>gird container</td></tr><tr><td>grid-row</td><td>defines the placement of grid item based on row lines</td><td>gird item</td></tr><tr><td>grid-column</td><td>defines the placement of grid item based on column lines</td><td>gird item</td></tr><tr><td>grid-area</td><td>defines the placement of grid item based on area label</td><td>gird item</td></tr><tr><td>gap</td><td>defines the thickness of the grid lines</td><td>grid container</td></tr><tr><td>row-gap</td><td>defines the thickness of the grid row lines</td><td>grid container</td></tr><tr><td>column-gap</td><td>defines the thickness of the grid column lines</td><td>grid container</td></tr></tbody></table>',2);function P(G,W){const d=i("RouterLink"),r=i("ExternalLinkIcon");return s(),l("div",null,[u,e("p",null,[a("This is a recap of the "),n(d,{to:"/modules/css/css-grid/"},{default:c(()=>[a("CSS Grid module covered in Web Dev I")]),_:1}),a(".")]),e("p",null,[e("a",g,[a("CSS Grid"),n(r)]),a(" is used to create page layouts in two dimensional grids, using both columns and rows at the same time.")]),f,w,b,v,y,_,x,S,k,I,M,D,C])}const z=o(m,[["render",P],["__file","grid-recap.html.vue"]]);export{z as default};