import{_ as a,M as i,p as s,q as l,R as e,t,N as r,a3 as o}from"./framework-dd056dd6.js";const d="/images/network-tab-chrome.png",c="/images/performance-tab-chrome.png",h="/images/responsive-view-chrome.png",p={},g=o('<h1 id="web-page-performance" tabindex="-1"><a class="header-anchor" href="#web-page-performance" aria-hidden="true">#</a> Web Page Performance</h1><p>Performance is the most important aspect when it comes to user experience and engagement. A user will loose interest in a slow website and according to user acceptance testing and articles on the web users would leave a website if it does not start painting the text or images with in first 3-5 seconds.</p><p>In a highly competitive online space where every company is trying to engage users, each millisecond counts.</p><h2 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h2><p>There are many online tools that help with testing our websites for performance issues and suggest possible solutions.</p><h3 id="browser-dev-tools" tabindex="-1"><a class="header-anchor" href="#browser-dev-tools" aria-hidden="true">#</a> Browser Dev Tools</h3><p>We can start with the browser dev tools where we can use the <strong>Network</strong> tab to see each resource that is downloaded and how long it took. <img src="'+d+'" alt="network tab screenshot"></p><p>The <strong>Performance</strong> can be used to see a snapshot of the web page performance, the time spent on different tasks by the browser. <img src="'+c+'" alt="performance tab screenshot"></p><p>Over the performance and network tab we can use the <strong>Responsive View</strong> in the browser allows us to simulate the slow internet to see the performance on low speed networks.</p><p><img src="'+h+'" alt="responsive view chrome"></p><h3 id="online-testing-tools" tabindex="-1"><a class="header-anchor" href="#online-testing-tools" aria-hidden="true">#</a> Online Testing Tools</h3><p>There are many online testing tools that give us stats on our website performance and health.</p>',12),m={id:"web-page-test",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#web-page-test","aria-hidden":"true"},"#",-1),u={href:"https://www.webpagetest.org/",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"This tool has many different type of stats we can pull for our web pages from advance per resource report to a simple performance testing.",-1),w={id:"google-page-speed",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#google-page-speed","aria-hidden":"true"},"#",-1),v={href:"https://developers.google.com/speed",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"The Google page speed test gives us stats on the page speed and shows suggestions on how to improve the speed.",-1),S={id:"google-mobile-friendly",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#google-mobile-friendly","aria-hidden":"true"},"#",-1),x={href:"https://search.google.com/test/mobile-friendly?utm_source=mft&utm_medium=redirect&utm_campaign=mft-redirect",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"Since majority of uses are accessing website from their smartphones, being mobile friendly is a major component of performance.",-1),C={id:"css-stats",tabindex:"-1"},M=e("a",{class:"header-anchor",href:"#css-stats","aria-hidden":"true"},"#",-1),P={href:"https://cssstats.com/",target:"_blank",rel:"noopener noreferrer"},H=o('<p>CSS contributes to the layout, design and overall user experience of a website. While writing the CSS it is easy to add properties and styles that are duplicate and can be consolidated. This smart tester helps us to optimize our CSS.</p><h2 id="actions-for-performance" tabindex="-1"><a class="header-anchor" href="#actions-for-performance" aria-hidden="true">#</a> Actions for Performance</h2><p>There are several actions we can take to improve the web page performance at different time starting from the planning phase, during the development and post development.</p><h3 id="performance-budgets" tabindex="-1"><a class="header-anchor" href="#performance-budgets" aria-hidden="true">#</a> Performance Budgets</h3><p>Performance budgets are used to guide our development keeping performance as an important factor.</p><p>There are many different budgets we can use depending on our skill level and complexity. One example of a performance budget will be:</p><ul><li>Load time: &lt; 1s</li><li>Speed index: &lt; 800</li><li>Page size: &lt; 1MB</li><li>Requests: maximum 10 requests</li><li>Page Speed: achieve green level on page speed rank</li><li>Google Mobile Friendly Test: Pass</li></ul>',7),L={href:"https://timkadlec.com/2014/11/performance-budget-metrics/",target:"_blank",rel:"noopener noreferrer"},z=o('<h3 id="performance-techniques" tabindex="-1"><a class="header-anchor" href="#performance-techniques" aria-hidden="true">#</a> Performance Techniques</h3><ul><li>Use as few images as possible</li><li>Optimize images for web</li><li>Reduce the image size by using compressed versions or newer image formats like WebP</li><li>Resize images to the maximum required size before adding them to the page</li><li>Remove any unused HTML and CSS code</li><li>Run website through CSS Stats to reduce style duplications</li><li>Fix any broken links</li><li>Always add CSS in a file and link from the head of the HTML</li><li>Include only limited fonts that are used on the page</li><li>Embed simple SVGs</li><li>Add decorative images using CSS</li><li>Use CDNs to reduce load on a single server</li></ul><h4 id="minify-css" tabindex="-1"><a class="header-anchor" href="#minify-css" aria-hidden="true">#</a> Minify CSS</h4><p>Minifying CSS files can be done using an online service or automatically using command line or other advance development frameworks.</p>',4),F={href:"https://www.toptal.com/developers/cssminifier/",target:"_blank",rel:"noopener noreferrer"},q=o(`<p>Create a new file named <code>*.min.css</code> such as <code>main.min.css</code> to distinguish it from the regular css file. This file can now be added to the HTML using the stylesheet link tag.</p><h4 id="inline-css" tabindex="-1"><a class="header-anchor" href="#inline-css" aria-hidden="true">#</a> Inline CSS</h4><p>Using inline CSS is discouraged when it comes to code organization and maintenance, however in cases where a small amount of CSS is critical for the page to render we can make an exception. This is done to avoid any issues created by the delay in downloading and rending CSS by the browser. Use the <code>style</code> tag to add critical CSS.</p><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>&lt;style&gt;
  /* Add the important styles here */
&lt;/style&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="handling-javascript" tabindex="-1"><a class="header-anchor" href="#handling-javascript" aria-hidden="true">#</a> Handling JavaScript</h4>`,5),R={href:"https://minify-js.com/",target:"_blank",rel:"noopener noreferrer"},W=o(`<p>JavaScript can block the page from rendering until it is finished downloading and executing, to avoid JavaScript from blocking the page load, we can do the following:</p><ol><li>Add the JavaScript tag at the bottom of the HTML before the closing body tag.</li><li>Add <code>async</code> attribute to the script tag to have the browser download and execute JS in the background.</li></ol><div class="language-HTML line-numbers-mode" data-ext="HTML"><pre class="language-HTML"><code>...
    &lt;script src=&quot;js/main.min.js&quot; async&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The web page performance is a vast topic, the techniques covered here are a good starting point and you may explore more advance techniques as you gain skill and experience in web development. Here are some resources (in no specific order) for further reading.</p><h2 id="resources" tabindex="-1"><a class="header-anchor" href="#resources" aria-hidden="true">#</a> Resources</h2>`,5),j={href:"https://www.sitepoint.com/complete-guide-reducing-page-weight/",target:"_blank",rel:"noopener noreferrer"},J={href:"https://browserdiet.com/",target:"_blank",rel:"noopener noreferrer"},A={href:"https://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/",target:"_blank",rel:"noopener noreferrer"},N={href:"https://www.fourkitchens.com/blog/article/fix-scrolling-performance-css-will-change-property/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.smashingmagazine.com/2015/08/understanding-critical-css/",target:"_blank",rel:"noopener noreferrer"},B={href:"https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/",target:"_blank",rel:"noopener noreferrer"},G={href:"http://jankfree.org/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://jonsuh.com/blog/font-loading-with-font-events/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://speakerdeck.com/bramstein/web-fonts-performance",target:"_blank",rel:"noopener noreferrer"},E={href:"https://www.bramstein.com/writing/preload-hints-for-web-fonts.html",target:"_blank",rel:"noopener noreferrer"};function O(D,K){const n=i("ExternalLinkIcon");return s(),l("div",null,[g,e("h4",m,[f,t(),e("a",u,[t("Web Page Test"),r(n)])]),b,e("h4",w,[_,t(),e("a",v,[t("Google Page Speed"),r(n)])]),y,e("h4",S,[k,t(),e("a",x,[t("Google Mobile Friendly"),r(n)])]),T,e("h4",C,[M,t(),e("a",P,[t("CSS Stats"),r(n)])]),H,e("p",null,[e("a",L,[t("Read more about performance budgets"),r(n)])]),z,e("p",null,[t("Using an online website like "),e("a",F,[t("Toptal"),r(n)]),t(" we can get a minified version of the CSS code.")]),q,e("p",null,[t("We can minify our JavaScript files like CSS to reduce the file size. Using an external service like "),e("a",R,[t("Minify JS"),r(n)])]),W,e("ul",null,[e("li",null,[e("a",j,[t("The Complete Guide to Reducing Page Weight"),r(n)])]),e("li",null,[e("a",J,[t("How to lose weight in the browser"),r(n)])]),e("li",null,[e("a",A,[t("Front-end performance for web designers and front-end developers"),r(n)])]),e("li",null,[e("a",N,[t("Fix scrolling performance with CSS will-change property"),r(n)])]),e("li",null,[e("a",U,[t("Understanding Critical CSS"),r(n)])]),e("li",null,[e("a",B,[t("10 Ways to Minimize Reflows and Improve Performance"),r(n)])]),e("li",null,[e("a",G,[t("Jank Free"),r(n)])]),e("li",null,[e("a",I,[t("Faster Font Loading with Font Events"),r(n)])]),e("li",null,[e("a",V,[t("Web Fonts Performance"),r(n)])]),e("li",null,[e("a",E,[t("Preload Hints For Web Fonts"),r(n)])])])])}const X=a(p,[["render",O],["__file","index.html.vue"]]);export{X as default};