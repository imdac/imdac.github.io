import{_ as l,M as r,p as s,q as a,R as e,t,N as o}from"./framework-dd056dd6.js";const i={},d=e("h1",{id:"listeners-on-multiple-elements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#listeners-on-multiple-elements","aria-hidden":"true"},"#"),t(" Listeners on Multiple Elements")],-1),c=e("p",null,[t("The "),e("code",null,"addEventListener()"),t(" method can only be applied to a single target, but it can often be the case that we want to add an event listener to multiple target elements. To accomplish this we will need to use a loop.")],-1),h={href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll",target:"_blank",rel:"noopener noreferrer"},p=e("code",null,"querySelectorAll()",-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"for...of",-1),_=e("code",null,"addEventListener()",-1),f=e("iframe",{height:"411",style:{width:"100%"},scrolling:"no",title:"Adding Event Listener to Multiple Elements with a Loop",src:"//codepen.io/IMD/embed/KEoJQg/?height=411&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href='https://codepen.io/IMD/pen/KEoJQg/'>Adding Event Listener to Multiple Elements with a Loop</a> by IMD
  (<a href='https://codepen.io/IMD'>@IMD</a>) on <a href='https://codepen.io'>CodePen</a>.
`,-1);function g(b,v){const n=r("ExternalLinkIcon");return s(),a("div",null,[d,c,e("p",null,[t("When retrieving multiple elements using the "),e("a",h,[p,o(n)]),t(" method an array is returned. Using this array and the "),e("a",m,[u,o(n)]),t(" statement, it is possible to add the same event listener to each element. Additionally, by defining the event handler function outside of the "),_,t(" method, we can make our code more efficient.")]),f])}const w=l(i,[["render",g],["__file","multiple-elements.html.vue"]]);export{w as default};