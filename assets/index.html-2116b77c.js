import{_ as s,M as r,p as d,q as t,R as e,t as n,N as o,a3 as a}from"./framework-dd056dd6.js";const l={},c=e("h1",{id:"pseudocode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pseudocode","aria-hidden":"true"},"#"),n(" Pseudocode")],-1),v={class:"watch"},u={href:"https://www.linkedin.com/learning/programming-foundations-fundamentals-2011/writing-pseudocode",target:"_blank",rel:"noopener noreferrer"},m=a(`<p>When we think about programming, we often focus on languages, syntax, and the code. But these are just tools that used to complete the purpose of a program, which is to solve a problem. Problem solving is a crucial part of the programming process, and can be a pain point for some developers. We may know what we want to do, but what are the steps to get it done. Well, one way to overcome this hurdle, is to use pseudocode.</p><h2 id="what-is-pseudocode" tabindex="-1"><a class="header-anchor" href="#what-is-pseudocode" aria-hidden="true">#</a> What is Pseudocode</h2><p>Pseudocode is an informal high-level description of a program, written in plain English. Pseudocode is much like creating an outline before writing a paper. It serves as a guideline for how to write the program.</p><p>There is no standards for writing pseudocode, but well written pseudocode should be understood by any one with even a basic understanding of programming. By writing pseudocode, we can ignore all the restrictions of the code and focus only on the problem. We can walk through the program defining the structure and identifying problems without ever writing a single line of code.</p><h2 id="writing-pseudocode" tabindex="-1"><a class="header-anchor" href="#writing-pseudocode" aria-hidden="true">#</a> Writing Pseudocode</h2><p>Let&#39;s assume we are creating a blacksmith game where the player will use wood and ore to make weapons, which in turn can be sold for gold. The player will be able to execute a <code>buy</code> action to buy wood and ore, and a <code>make</code> action to make different weapons. However, the player must meet certain requirements to successfully complete these actions. For example, the player must have enough gold to buy wood or enough ore to make the sword.</p><p>So, we can see that even this relatively simple game is beginning to have a lot of requirements, and we can use pseudocode to map it all out. So, we will start by laying out the basic structure of the problem.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create inventory object
create requirements object

create buy action

create make action 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now we can list what items will be in inventory and what requirements need to be tracked.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create inventory object
  gold
  wood
  ore
  axes
  swords

create requirements object
  gold for wood
  gold for ore
  wood for axes
  ore for axes
  wood for swords
  ore for swords

create buy action

create make action 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next we will add the logic for the <code>buy</code> action. The player will be able to provide which item they wish to buy, from there we must check if the player has enough gold and provide the appropriate response.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create inventory object
  gold
  wood
  ore
  axes
  swords

create requirements object
  gold for wood
  gold for ore
  wood for axes
  ore for axes
  wood for swords
  ore for swords

create buy action (item)
  if gold in inventory is greater than the item&#39;s requirement of gold
      subtract the item&#39;s requirement of gold from the gold in inventory
      increase the number of item in the inventory
      respond that the player has bought the item
  else 
      respond that the player does not have enough gold

create make action 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let&#39;s do the same for the <code>make</code> action.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create inventory object
  gold
  wood
  ore
  axes
  swords

create requirements object
  gold for wood
  gold for ore
  wood for axes
  ore for axes
  wood for swords
  ore for swords

create buy action (item)
  if gold in inventory is greater than the item&#39;s requirement of gold
      subtract the item&#39;s requirement of gold from the gold in inventory
      increase the number of item in the inventory
      respond that the player has bought the item
  else 
      respond that the player does not have enough gold

create make action (item)
  if wood in inventory is greater than the item&#39;s requirement of wood AND
    ore in inventory is greater than the item&#39;s requirement of ore
      subtract the item&#39;s requirement of wood from the wood in inventory
      subtract the item&#39;s requirement of ore from the ore in inventory
      increase the number of item in the inventory 
      respond that the player has made the item
  else
      respond that player does not have enough resources to make the item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this point, we may have noticed a problem with our actions. For example, the player may try to buy a sword or make wood. This is a logic problem in our structure, but we can still fix it in pseudocode.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>create inventory object
  gold
  wood
  ore
  axes
  swords

create requirements object
  gold for wood
  gold for ore
  wood for axes
  ore for axes
  wood for swords
  ore for swords

create buy action (item)
  if item is an item that can be bought
      if gold in inventory is greater than the item&#39;s requirement of gold
          subtract the item&#39;s requirement of gold from the gold in inventory
          increase the number of item in the inventory
          respond that the player has bought the item
      else 
          respond that the player does not have enough gold
  else 
      respond that the player cannot buy that item

create make action (item)
  if item is an item that can be made
      if wood in inventory is greater than the item&#39;s requirement of wood AND
        ore in inventory is greater than the item&#39;s requirement of ore
          subtract the item&#39;s requirement of wood from the wood in inventory
          subtract the item&#39;s requirement of ore from the ore in inventory
          increase the number of item in the inventory 
          respond that the player has made the item
      else
          respond that player does not have enough resources to make the item
  else
      respond that the player cannot make that item
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now, we have a blue print to logical structure of our game, and we can start programming.</p>`,17);function b(h,p){const i=r("ExternalLinkIcon");return d(),t("div",null,[c,e("div",v,[e("p",null,[e("a",u,[n('Watch "Writing pseudocode" on LinkedIn Learning'),o(i)])])]),m])}const w=s(l,[["render",b],["__file","index.html.vue"]]);export{w as default};
