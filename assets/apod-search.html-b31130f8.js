import{_ as n,M as o,p as r,q as l,R as e,t as a,N as i,a3 as s}from"./framework-dd056dd6.js";const d={},c=e("h1",{id:"apod-search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#apod-search","aria-hidden":"true"},"#"),a(" APOD Search")],-1),h=e("h2",{id:"objective",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#objective","aria-hidden":"true"},"#"),a(" Objective")],-1),u={href:"https://api.nasa.gov",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"app-overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#app-overview","aria-hidden":"true"},"#"),a(" App Overview")],-1),f=e("p",null,"When a user first visits the site, they are presented with a form asking for a non-future date. With provided date, the app will make a request to the APOD API to retrieve that day's Astronomy Picture of the Day. The Picture of the Day will then be displayed on the page along with the title, date, and explanation. Clicking on the image should open the high definition version of the image.",-1),g=e("p",null,"The user will able to save images as favourites. Favourites images should be stored in local storage and display on the page whenever the user visits the site. Favourite images can also be deleted.",-1),m=e("h2",{id:"resources",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#resources","aria-hidden":"true"},"#"),a(" Resources")],-1),v={href:"https://api.nasa.gov/#apod",target:"_blank",rel:"noopener noreferrer"},b={href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},_=s(`<p>The APOD API can be used to retrieve APOD data based on a specific date. The <code>date</code> parameter is added to url and is to indicate the date of the APOD image to retrieve. The format of the date should be as follows: <code>YYYY-MM-DD</code>.</p><p>The APOD API will return a JSON object, which will contain the <code>url</code> to the image, the <code>title</code> of the image, the <code>date</code> of the image, and the <code>explanation</code> of the image. An example of an APOD JSON object can be found below.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;date&quot;</span><span class="token operator">:</span><span class="token string">&quot;2022-03-27&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;explanation&quot;</span><span class="token operator">:</span><span class="token string">&quot;Why would the surface of Titan light up with a blinding flash? The reason: a sunglint from liquid seas.  Saturn&#39;s moon Titan has numerous smooth lakes of methane that, when the angle is right, reflect sunlight as if they were mirrors.  Pictured here in false-color, the robotic Cassini spacecraft that orbited Saturn from 2004 to 2017 imaged the cloud-covered Titan in 2014 in different bands of cloud-piercing infrared light.  This specular reflection was so bright it saturated one of Cassini&#39;s infrared cameras. Although the sunglint was annoying -- it was also useful.  The reflecting regions confirm that northern Titan houses a wide and complex array of seas with a geometry that indicates periods of significant evaporation.  During its numerous passes of our Solar System&#39;s most mysterious moon, Cassini has revealed Titan to be a world with active weather -- including times when it rains a liquefied version of natural gas.&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;hdurl&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_2002.jpg&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;media_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;image&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;service_version&quot;</span><span class="token operator">:</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;Titan Seas Reflect Sunlight&quot;</span><span class="token punctuation">,</span>
   <span class="token property">&quot;url&quot;</span><span class="token operator">:</span><span class="token string">&quot;https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_960.jpg&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">NOTE</p><p>Not all APOD are images. Some are videos. The <code>media_type</code> property can be used to determine if the day&#39;s APOD is an image or a video.</p></div><h3 id="api-call" tabindex="-1"><a class="header-anchor" href="#api-call" aria-hidden="true">#</a> API Call</h3><p>Your API call URL will be similar to this: <code>fetch(&quot;https://api.nasa.gov/planetary/apod?api_key=[YOUR_API_KEY]]&amp;date=[DATE_FROM_INPUT_FIELD]&quot;)</code></p><p><strong>Note:</strong></p>`,7),y=e("li",null,[a("Replace the information in "),e("code",null,"[]"),a(" with your information")],-1),A={href:"https://api.nasa.gov/",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,[a("The date value needs to be in the following format "),e("code",null,"YYY-MM-DD")],-1),k=s('<h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><h3 id="functional-requirements" tabindex="-1"><a class="header-anchor" href="#functional-requirements" aria-hidden="true">#</a> Functional Requirements</h3><h4 id="_1-user-input-form" tabindex="-1"><a class="header-anchor" href="#_1-user-input-form" aria-hidden="true">#</a> 1. User Input Form</h4><ul><li>The application must present a form on the landing page for the user to input a non-future date.</li></ul><h4 id="_2-apod-retrieval-and-display" tabindex="-1"><a class="header-anchor" href="#_2-apod-retrieval-and-display" aria-hidden="true">#</a> 2. APOD Retrieval and Display</h4><ul><li>Upon form submission, the application must retrieve the Astronomy Picture of the Day (APOD) for the entered date using NASA&#39;s APOD API.</li><li>The retrieved APOD must display the following details: <ul><li>Image (or video, if applicable).</li><li>Title.</li><li>Date.</li><li>Explanation.</li></ul></li><li>Clicking on the displayed image should open its high-definition version on the same page, maintaining the functionality of a single-page application.</li></ul><h4 id="_3-favourites-management" tabindex="-1"><a class="header-anchor" href="#_3-favourites-management" aria-hidden="true">#</a> 3. Favourites Management</h4><ul><li>Users must be able to mark any displayed APOD as a favourite.</li><li>The application must display a list of saved favourites on the page.</li><li>Users must be able to delete a favourite image.</li></ul><h4 id="_4-responsive-design" tabindex="-1"><a class="header-anchor" href="#_4-responsive-design" aria-hidden="true">#</a> 4. Responsive Design</h4><ul><li>The application must be fully responsive and provide an optimal user experience across various screen sizes and devices.</li></ul><h3 id="technical-requirements" tabindex="-1"><a class="header-anchor" href="#technical-requirements" aria-hidden="true">#</a> Technical Requirements</h3><h4 id="_1-file-structure" tabindex="-1"><a class="header-anchor" href="#_1-file-structure" aria-hidden="true">#</a> 1. File Structure</h4><ul><li>The project must use a single HTML file (<code>index.html</code>), CSS file (<code>style.css</code>), and JavaScript file (<code>script.js</code>), all located at the root of the repository.</li></ul><h4 id="_2-styling-and-frameworks" tabindex="-1"><a class="header-anchor" href="#_2-styling-and-frameworks" aria-hidden="true">#</a> 2. Styling and Frameworks</h4><ul><li>The use of modern CSS frameworks (e.g., Bootstrap, Foundation) or a CSS reset (e.g., <code>reset.css</code>) is permitted but not mandatory.</li></ul><h4 id="_3-event-handling" tabindex="-1"><a class="header-anchor" href="#_3-event-handling" aria-hidden="true">#</a> 3. Event Handling</h4><ul><li>All DOM events must be handled using JavaScript Event Listeners.</li><li>Inline events (e.g., <code>onclick</code> attributes) are not allowed.</li></ul><h4 id="_4-javascript-standards" tabindex="-1"><a class="header-anchor" href="#_4-javascript-standards" aria-hidden="true">#</a> 4. JavaScript Standards</h4><ul><li>Variables must be declared using <code>const</code> or <code>let</code>; <code>var</code> is not allowed.</li><li>JavaScript libraries (e.g., Lodash, Moment.js) may be used if needed.</li><li>The Fetch API must be used for all asynchronous operations. The use of <code>XMLHttpRequest</code> or jQuery&#39;s <code>ajax()</code> method is prohibited.</li></ul><h4 id="_5-local-storage" tabindex="-1"><a class="header-anchor" href="#_5-local-storage" aria-hidden="true">#</a> 5. Local Storage</h4><ul><li>Favourite images data must be stored in the browser&#39;s local storage.</li><li>Data retrieval and manipulation of local storage must use JavaScript.</li></ul><h4 id="_6-api-integration" tabindex="-1"><a class="header-anchor" href="#_6-api-integration" aria-hidden="true">#</a> 6. API Integration</h4><ul><li>The application must integrate with NASA’s APOD API using the Fetch API.</li></ul><h4 id="_7-accessibility" tabindex="-1"><a class="header-anchor" href="#_7-accessibility" aria-hidden="true">#</a> 7. Accessibility</h4><ul><li>The application must include semantic HTML and ARIA attributes where appropriate to ensure accessibility.</li><li>Images must include descriptive <code>alt</code> attributes.</li></ul><h3 id="bonus-features-optional" tabindex="-1"><a class="header-anchor" href="#bonus-features-optional" aria-hidden="true">#</a> Bonus Features (Optional)</h3><ul><li>Allow users to filter favourites by date or keyword.</li><li>Provide a search history feature to quickly access previously searched dates.</li><li>Add a light/dark mode toggle for better user experience.</li><li>Display loading indicators while fetching data from the API.</li></ul><h2 id="hints" tabindex="-1"><a class="header-anchor" href="#hints" aria-hidden="true">#</a> Hints</h2>',28),q=e("li",null,"Due to the limit on requests for the APOD API, students are encouraged to store the APOD data in local storage or use a static file during development.",-1),P=e("li",null,[a("When displaying the APOD image either after a APOD search or in the favourites section, the standard "),e("code",null,"url"),a(" property should be used. When displaying the high definition version of the image, the "),e("code",null,"hdurl"),a(" property should be used.")],-1),S=e("li",null,[a("Some APOD image are actually videos. The "),e("code",null,"media_type"),a(" property in provided JSON can be used to tell if the APOD is an image or a video. Student will not be required to work with videos nor implement them into their application.")],-1),D={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},T={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"};function x(O,I){const t=o("ExternalLinkIcon");return r(),l("div",null,[c,h,e("p",null,[a("You will design and develop a web application that will allow users to request different Astronomy Pictures of the Day by date using "),e("a",u,[a("NASA APOD API"),i(t)]),a(". Users will also be able to save pictures as favourites.")]),p,f,g,m,e("p",null,[a("To complete this assignment, students will be using the "),e("a",v,[a("NASA APOD API"),i(t)]),a(". Students are encouraged to register for an "),e("a",b,[a("API Key"),i(t)]),a(".")]),_,e("ul",null,[y,e("li",null,[a("To get your API Key you will need to sign-up at "),e("a",A,[a("https://api.nasa.gov/"),i(t)])]),w]),k,e("ol",null,[q,P,S,e("li",null,[a("An object can be an excellent way to store a web application settings. Storing an object to local storage does require using "),e("a",D,[a("JSON.stringify"),i(t)]),a(" and "),e("a",T,[a("JSON.parse"),i(t)]),a(".")])])])}const N=n(d,[["render",x],["__file","apod-search.html.vue"]]);export{N as default};