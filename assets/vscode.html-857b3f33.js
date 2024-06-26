import{_ as n,M as s,p as a,q as c,R as o,t as e,N as i,a3 as r}from"./framework-dd056dd6.js";const l="/images/git-vscode-source-control-icon.png",h="/images/git-vscode-source-control-view.png",p="/images/git-vscode-init-repo.png",d="/images/git-vscode-select-directory.png",g="/images/git-vscode-repo-status.png",m="/images/github-copy-url.jpg",u="/images/git-vscode-clone-command.jpg",f="/images/git-vscode-paste-url.jpg",y="/images/git-vscode-staging-change.png",w="/images/git-vscode-staging-area.png",_="/images/git-vscode-committing-change.png",v="/images/git-vscode-after-commit.png",b="/images/git-vscode-pull.png",C="/images/git-vscode-push.jpg",S={},V=o("h1",{id:"working-with-git-on-vs-code",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#working-with-git-on-vs-code","aria-hidden":"true"},"#"),e(" Working with Git on VS Code")],-1),k={href:"https://code.visualstudio.com/docs/editor/versioncontrol",target:"_blank",rel:"noopener noreferrer"},x=r('<h2 id="accessing-source-control" tabindex="-1"><a class="header-anchor" href="#accessing-source-control" aria-hidden="true">#</a> Accessing Source Control</h2><p>We can access the Source Control view by clicking on the Source Control icon in the Activity Bar.</p><p><img src="'+l+'" alt="VSCode Source Control Icon"></p><p>Once in the Source Control view, the repository status will appear in the Side Bar. If the current directory has no repository, a message will appear instead.</p><p><img src="'+h+'" alt="VSCode Source Control View"></p><h2 id="initializing-a-repository-only-once-per-folder" tabindex="-1"><a class="header-anchor" href="#initializing-a-repository-only-once-per-folder" aria-hidden="true">#</a> Initializing a repository - only once per folder</h2><p>To initialize a new repository in Visual Studio Code, enter the Source Control view and click on the heavy_plus_sign: sign at the Side Bar&#39;s top right corner.</p><p><img src="'+p+'" alt="VSCode Initialize Repository"></p><p>You will be asked to select the folder where the repository should reside.</p><p><img src="'+d+'" alt="VSCode Select Directory"></p><p>Visual Studio Code will create the repository and update the Side Bar with the current status.</p><p><img src="'+g+'" alt="VSCode repository status"></p><h2 id="cloning-only-once-per-repository" tabindex="-1"><a class="header-anchor" href="#cloning-only-once-per-repository" aria-hidden="true">#</a> Cloning - only once per repository</h2><p>In this course, we will most often be following a different workflow that revolves around a remote repository. Instead of initializing local repositories, we will usually begin by creating a remote repository on GitHub and then clone it to our computers.</p><ol><li>Copy the repository URL from GitHub.</li></ol><p><img src="'+m+'" alt="VSCode repository status"></p><ol start="2"><li>In VS Code, open the Command Palette (<code>ctrl+shift+p</code> - Windows, <code>cmd+shift+p</code> - macOS), and type &quot;Clone&quot;. Select the <code>Git: Clone</code> command.</li></ol><p><img src="'+u+'" alt="VSCode repository status"></p><ol start="3"><li>When prompted, paste the copied repository URL in the text box and hit <code>Enter</code>.</li></ol><p><img src="'+f+'" alt="VSCode repository status"></p><ol start="4"><li>A dialog box will appear to select the location for the repository.</li></ol>',21),I={href:"https://code.visualstudio.com/docs/editor/versioncontrol#_cloning-a-repository",target:"_blank",rel:"noopener noreferrer"},G=r('<h2 id="adding-to-the-staging-area" tabindex="-1"><a class="header-anchor" href="#adding-to-the-staging-area" aria-hidden="true">#</a> Adding to the staging area</h2><p>After making any changes to the files or adding new files we need to stage them for committing.</p><p>To add a file to the staging area, hover the mouse over the file and click the ➕ sign that appears.</p><p><img src="'+y+'" alt="VSCode staging a file"></p><p>Visual Studio Code will visually show that the file has been moved to the staging area.</p><p><img src="'+w+'" alt="VSCode staging area"></p><p>All files can be moved to the staging area by hovering the mouse over the <strong>CHANGES</strong> header and clicking the ➕ sign.</p><h2 id="committing-the-changes" tabindex="-1"><a class="header-anchor" href="#committing-the-changes" aria-hidden="true">#</a> Committing the changes</h2><p>After staging the changes we have made to our folder we need to commit these changes to our repository.</p><p>To commit files in the staging area, we enter a message in the Message text box and hit enter or click on the ✔️.</p><p><img src="'+_+'" alt="VSCode committing a file"></p><p>Once committed, the repository status will be updated.</p><p><img src="'+v+'" alt="VSCode after committing a file"></p><h2 id="pulling-the-changes" tabindex="-1"><a class="header-anchor" href="#pulling-the-changes" aria-hidden="true">#</a> Pulling the changes</h2><p>Pull process is helpful and must when we are working in teams. By pulling any changes from time to time we make sure that we are not going to overwrite other user&#39;s changes by directly pushing our code.</p><p>Even if we are the only developer working on a repository we should get in the habit of pulling the code first. This will also save us from errors in case we are using switching computers.</p><p>In the Source Control tab, open the triple dot menu, and select &quot;Pull&quot;.</p><p><img src="'+b+'" alt="VSCode after committing a file pull"></p><p>You can now verify that your commits have been pushed by checking the remote repository on GitHub.</p><p>Note that if there are multiple new commits in your local repository, they will all be published remotely when you push.</p><h2 id="pushing-the-changes" tabindex="-1"><a class="header-anchor" href="#pushing-the-changes" aria-hidden="true">#</a> Pushing the changes</h2><p>To publish your local commits to the remote repository (and submit your assignment), you will need to push the changes.</p><p>In the Source Control tab, open the triple dot menu, and select &quot;Push&quot;.</p><p><img src="'+C+'" alt="VSCode after committing a file push"></p><p>You can now verify that your commits have been pushed by checking the remote repository on GitHub.</p><p>Note that if there are multiple new commits in your local repository, they will all be published remotely when you push.</p>',26);function A(B,N){const t=s("ExternalLinkIcon");return a(),c("div",null,[V,o("p",null,[e("Visual Studio Code has an integrated source control tool, making it easier to work with Git repositories. The following documentation shows the basic workflow for using Git with VS Code. For full documentation, review "),o("a",k,[e("Using Version Control in VS Code"),i(t)]),e(".")]),x,o("p",null,[e("For more information, refer to the "),o("a",I,[e("Official Documentation"),i(t)]),e(".")]),G])}const T=n(S,[["render",A],["__file","vscode.html.vue"]]);export{T as default};
