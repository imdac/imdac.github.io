import{_ as o,M as a,p as s,q as l,R as e,t,N as i}from"./framework-dd056dd6.js";const h={},r=e("h1",{id:"css-z-index",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#css-z-index","aria-hidden":"true"},"#"),t(" CSS z-index")],-1),d={href:"https://www.smashingmagazine.com/2009/09/the-z-index-css-property-a-comprehensive-look/",target:"_blank",rel:"noopener noreferrer"},c=e("p",null,[t("The default value for "),e("code",null,"z-index"),t(" property is 0. Any higher value will move the element on top of the elements with lower values. We can also use negative values to move elements behind other elements.")],-1),p=e("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"CSS z-index start",src:"https://codepen.io/IMD/embed/eYzdyVQ?height=265&theme-id=dark&default-tab=css,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/eYzdyVQ'>CSS z-index start</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),u=e("p",null,"Each of the squares below have an absolute position. Because they all share the same position the last element in the HTML document will be the visible box. The blue box, or .box:nth-child(3) is the visible box on top.",-1),f=e("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"CSS z-index default",src:"https://codepen.io/IMD/embed/gMOevo?height=265&theme-id=dark&default-tab=css,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/gMOevo'>CSS z-index default</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),m=e("p",null,[t("By assigning "),e("code",null,"z-index: 1;"),t(" to the "),e("code",null,".box:nth-child(1)"),t(" we change the layer order of the first .box HTML element. The green box is now on top of the blue and red boxes as their z-index is default of 0.")],-1),b=e("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"CSS z-index",src:"//codepen.io/IMD/embed/dXymev/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/dXymev/'>CSS z-index</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1),x=e("p",null,[t("By assigning a higher "),e("code",null,"z-index"),t(" to the "),e("code",null,".box:nth-child(2)"),t(" the red box, it now has the highest layer order and is the visible box on top.")],-1),_=e("iframe",{height:"265",style:{width:"100%"},scrolling:"no",title:"CSS z-index",src:"//codepen.io/IMD/embed/beGvMx/?height=265&theme-id=0&default-tab=css,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/beGvMx/'>CSS z-index</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function g(y,M){const n=a("ExternalLinkIcon");return s(),l("div",null,[r,e("p",null,[e("a",d,[t("z-index"),i(n)]),t(" allows us to control the stacking order of the positioned elements. By default if we have multiple elements positioned on a page they will stack in the order they are added on the page.")]),c,p,u,f,m,b,x,_])}const v=o(h,[["render",g],["__file","index.html.vue"]]);export{v as default};