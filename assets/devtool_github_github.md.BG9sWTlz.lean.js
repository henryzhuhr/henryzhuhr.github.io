import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.C681U02K.js";const F=JSON.parse('{"title":"Github","description":"","frontmatter":{"outline":"deep","tags":["软件开发"]},"headers":[],"relativePath":"devtool/github/github.md","filePath":"devtool/github/github.md","lastUpdated":1744684887000}'),h={name:"devtool/github/github.md"};function p(l,s,e,k,r,g){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="github" tabindex="-1">Github <a class="header-anchor" href="#github" aria-label="Permalink to &quot;Github&quot;">​</a></h1><h2 id="tong-bu-shang-you-fen-zhi" tabindex="-1">同步上游分支 <a class="header-anchor" href="#tong-bu-shang-you-fen-zhi" aria-label="Permalink to &quot;同步上游分支&quot;">​</a></h2><p>参考 <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork" target="_blank" rel="noreferrer"><em>Syncing a fork - GitHub Docs</em></a></p><p>列出当前仓库中当前配置的远程仓库</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin  https://github.com/YOUR-USERNAME/YOUR-FORK.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>为你的 fork 的仓库指定一个新的上游远程仓库以进行同步</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git</span></span></code></pre></div><p>验证你指定的新上游仓库</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>从上游仓库获取分支及其相应的提交。对 <code>BRANCH-NAME</code> 的提交将存储在本地分支 <code>upstream/BRANCH-NAME</code> 中。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fetch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remote: Counting objects: 75, done.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remote: Compressing objects: 100% (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">53/53</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), done.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remote: Total 62 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 27</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), reused 44 (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">delta</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Unpacking objects: 100% (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">62/62</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), done.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> From https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [new branch]      main     -</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> upstream/main</span></span></code></pre></div><p>Check out 你 fork 的仓库的本地默认分支 (这里是 <code>main</code>)</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkout</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Switched to branch </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;main&#39;</span></span></code></pre></div><p>合并上游默认分支的更改到你的本地默认分支（这里的上游分支为 <code>upstream/main</code> ）。这会将您的分支默认分支与上游仓库同步，而不会丢失您的本地更改。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream/main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Updating a422352..5fdff0f</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fast-forward</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  README                    </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -------</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  README.md                 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ++++++</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  2 files changed, 7 insertions(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), 9 deletions(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  delete mode 100644 README</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  create mode 100644 README.md</span></span></code></pre></div><p>如果本地分支没有任何唯一提交，Git 将基于 fast-forward 策略合并。参考 <a href="https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging" target="_blank" rel="noreferrer"><em>Basic Branching and Merging</em></a></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upstream/main</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Updating 34e91da..16c56ad</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Fast-forward</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  README.md                 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    5</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +++--</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  1 file changed, 3 insertions(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), 2 deletions(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> local</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> had</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unique</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commits,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> need</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> resolve</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conflicts.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> information,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> see</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Addressing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> merge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conflicts.</span></span></code></pre></div><p>这样就可以将上游仓库 <code>main</code> 分支的修改同步到本地 <code>main</code> 分支上。</p><h2 id="github-cang-ku-de-rong-zai-bei-fen-fang-an" tabindex="-1">Github 仓库的容灾备份方案 <a class="header-anchor" href="#github-cang-ku-de-rong-zai-bei-fen-fang-an" aria-label="Permalink to &quot;Github 仓库的容灾备份方案&quot;">​</a></h2><p>2025年4月2日，特朗普在白宫签署两项关于所谓“对等关税”的行政令，宣布美国对所有贸易伙伴设立10%的“最低基准关税”，并对某些贸易伙伴征收更高关税。其中，对中国输美商品加征34%的“对等关税”。</p><p>随后的4月13日，部分中国网友发现无法从中国访问 Github，次日4月14日，Github官方发布声明：<a href="https://www.githubstatus.com/incidents/jfvgcls9swln" target="_blank" rel="noreferrer"><em>[Retroactive] Access from China temporarily blocked for users that were not logged in - Incident Report for GitHub</em></a>，宣称此次事件是由于配置文件变更导致的。</p><blockquote><p><em>Due to a configuration change with unintended impact</em></p></blockquote><p>无论出于何种原因，都需要考虑一套本地备份方案，以应对这种情况。</p><blockquote><p>你当然可以使用 gitee 作为备份，但是下面的方案是一种本地备份的方案，如果你不想使用 gitee，那么可以参考下面的方案。</p></blockquote><p>可以选择一个仓库集成仓库(<code>integrated-repo</code>)，然后通过在集成仓库下管理子模块的方式，将多个仓库集成到一起。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your_github_user_name&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">project_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;your_project_name&gt;&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 建议使用 ssh，因为可能有 private 仓库</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repository_url</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;git@github.com:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">user_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">project_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.git&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">submodule_path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;project/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">project_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${repository_url} \${submodule_path}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从主项目更新所有子模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --recursive</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --remote</span></span></code></pre></div><p>子模块添加后建议修改子模块的配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># .gitmodules</span></span>
<span class="line"><span>[submodule &quot;project/&lt;your_project_name&gt;&quot;]</span></span>
<span class="line"><span>	path = project/&lt;your_project_name&gt;</span></span>
<span class="line"><span>	url = git@github.com:&lt;your_github_user_name&gt;/&lt;your_project_name&gt;.git</span></span>
<span class="line"><span>  # 添加默认集成的分支</span></span>
<span class="line"><span>	branch = main</span></span>
<span class="line"><span>  # 添加子模块更新方式</span></span>
<span class="line"><span>	update = rebase</span></span></code></pre></div><blockquote><p>采用 <code>rebase</code> 方式进行更新，这样当子模块有冲突时，可以手动解决冲突，然后进行提交。</p></blockquote><p>通过上面的脚本，将子仓库添加到 <code>integrated-repo/project</code> 目录下进行统一管理，让定期同步子模块的分支，例如通过下面脚本，将子模块中所有的分支进行同步，这样就可以在本地有一个备份</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Processing submodules...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> foreach</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    process_repository() {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        echo &quot;Processing repository: $(pwd)&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        git fetch --all</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        for branch in $(git branch -r | grep -v &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;\\-&gt;&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;); do</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            branch_name=\${branch#origin/}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            if git show-ref --quiet refs/heads/$branch_name; then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                echo &quot;Updating local branch: $branch_name&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                git checkout $branch_name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                git pull origin $branch_name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            else</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                echo &quot;Creating local branch for remote branch: $branch_name&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                git checkout -b $branch_name origin/$branch_name</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            fi</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        done</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        default_branch=$(git symbolic-ref refs/remotes/origin/HEAD | sed &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;s@^refs/remotes/origin/@@&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        echo &quot;Switching back to default branch: $default_branch&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        git checkout $default_branch</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    process_repository</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span></code></pre></div>`,31)]))}const o=i(h,[["render",p]]);export{F as __pageData,o as default};
