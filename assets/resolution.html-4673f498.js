import{_ as t,M as i,p as o,q as l,R as e,t as s,N as n,Q as r,a3 as p}from"./framework-dd056dd6.js";const c={},d=p(`<h1 id="resolution-switching" tabindex="-1"><a class="header-anchor" href="#resolution-switching" aria-hidden="true">#</a> Resolution Switching</h1><h2 id="preamble" tabindex="-1"><a class="header-anchor" href="#preamble" aria-hidden="true">#</a> Preamble</h2><p>The resolution switching problem can be thought of as presenting an image of appropriate resolution given a device’s display density, viewport size or other size constraint. Put another way, we don’t want to send high resolution images to low resolution screens or send low res images to high res screens.</p><p>There’s no benefit for the user to receive an image with a resolution that needs to be scaled down. Worse, the image has consumed resources that it didn’t need to. Whether cellular network bandwidth or cpu processing cycles there’s an impact to the user that isn’t on the screen.</p><p>The resolution switching problem can be thought off in two scenarios. Same size, different resolution and same image, different size.</p><h2 id="same-image-in-different-sizes" tabindex="-1"><a class="header-anchor" href="#same-image-in-different-sizes" aria-hidden="true">#</a> Same image in different sizes</h2><p>In this situation we want to display the same image but an appropriately sized version depending on the display.</p><p>We can use the <code>&lt;img&gt;</code> element and incorporate two additional attributes. The <code>srcset</code> and <code>sizes</code> attributes allow us to offer images of varying sizes that the browser can select as the best choice.</p><p><code>srcset</code> defines the list of images and related size the browser can choose from.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img/sizes/lego_320.png 320w,
             img/sizes/lego_640.png 640w,
             img/sizes/lego_1024.png 1024w<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Following the filename, you’ll notice a <code>w</code> this indicates the intrinsic or real width of the image. This helps the browser identify the file that best suits the location as determined by the sizes attribute.</p><p><code>sizes</code> defines the media queries and associated image size that best suits the condition.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 320px) 320px,
            (max-width: 640px) 640px,
            (max-width: 1024px) 1024px<span class="token punctuation">&quot;</span></span> <span class="token attr-name">...</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You’ll notice after the condition we declare a size for the <em>slot</em>. The slot is a placeholder for the matching image.</p><p>Now the browser can choose the most appropriate image.</p><h4 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> 
     <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img/sizes/lego_320.png 320w,
             img/sizes/lego_640.png 640w,
             img/sizes/lego_1024.png 1024w<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">sizes</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(max-width: 320px) 320px,
           (max-width: 640px) 640px,
           (max-width: 1024px) 1024px<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img/sizes/lego_640.png<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Life size person built from grey Lego bricks 
         standing next to partially completed lego people<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="same-size-image-with-different-resolutions" tabindex="-1"><a class="header-anchor" href="#same-size-image-with-different-resolutions" aria-hidden="true">#</a> Same size image with different resolutions</h2><p>Same size different resolution refers to providing images for higher density displays. For example, a 4 inch display with a resolution of 480px by 480px is not the same as a 4 inch display with a resolution of 960px by 960px.</p><p>The physical size is the same but if we served a 480px image on the higher density display, it wouldn’t look very good so we need a way to adapt to higher resolutions. Consequently, the high res image on a low res display is wasteful.</p><p>The physical size constraints in the example above describes the problem in more concrete terms. In reality, the constraint is likely to be a <code>width</code> value set on an image or the viewport width.</p><p>To account for display density we can tweak the use of the <code>&lt;img&gt;</code> element and <code>srcset</code> attributes. This needs to work in conjunction with the presence of the viewport <code>&lt;meta&gt;</code>tag in the <code>&lt;head&gt;</code> of the document.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img/sizes/lego_320.png,
             img/sizes/lego_480.png 1.5x,
             img/sizes/lego_640.png 2x,
             img/sizes/lego_960.png 3x<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="full-example-1" tabindex="-1"><a class="header-anchor" href="#full-example-1" aria-hidden="true">#</a> Full Example</h4><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> 
     <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>img/sizes/lego_320.png,
             img/sizes/lego_480.png 1.5x,
             img/sizes/lego_640.png 2x,
             img/sizes/lego_960.png 3x<span class="token punctuation">&quot;</span></span>
     <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>“img/sizes/lego_640.png”</span>
     <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Life size person built from grey Lego bricks standing
          next to partially completed lego people<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="further-review" tabindex="-1"><a class="header-anchor" href="#further-review" aria-hidden="true">#</a> Further Review</h2>`,26),u={href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),s(" References")],-1),m={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes",target:"_blank",rel:"noopener noreferrer"};function v(b,k){const a=i("ExternalLinkIcon");return o(),l("div",null,[d,e("p",null,[e("a",u,[s("Responsive images - Learn web development | MDN"),n(a)])]),r(` ## Lesson File

[Responsive Image Lesson File](/docs/mtm6201/responsive-images.zip) `),h,e("ul",null,[e("li",null,[e("a",m,[s("srcset - Hypertext Markup Language | MDN"),n(a)])]),e("li",null,[e("a",g,[s("sizes - Hypertext Markup Language | MDN"),n(a)])])])])}const w=t(c,[["render",v],["__file","resolution.html.vue"]]);export{w as default};