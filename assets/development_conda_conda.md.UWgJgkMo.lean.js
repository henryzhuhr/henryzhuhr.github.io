import{_ as i,c as a,a3 as n,o as t}from"./chunks/framework.C681U02K.js";const e="/assets/miniconda-web.DPf0k1DO.png",l="/assets/miniconda_install-type.CDCITU4G.png",h="/assets/miniconda_install-location.dnlvRMos.png",p="/assets/miniconda_install-result.CtH60Ci8.png",d="/assets/miniconda_install-env1.AVl6uqrh.jpg",o="/assets/miniconda_install-env2.8KQ5Cz6-.png",c="/assets/miniconda_install-env3.CQHXTZPV.png",k="/assets/miniconda_install-env4.CkPmMZFE.png",r="/assets/miniconda_install-test.CcFgBV-Y.png",E=JSON.parse('{"title":"Python 虚拟环境管理工具","description":"","frontmatter":{"outline":"deep","date":"2024-05-09T00:00:00.000Z","tags":["软件开发","python"]},"headers":[],"relativePath":"development/conda/conda.md","filePath":"development/conda/conda.md","lastUpdated":1729950076000}'),g={name:"development/conda/conda.md"};function u(F,s,b,y,v,m){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="python-xu-ni-huan-jing-guan-li-gong-ju" tabindex="-1">Python 虚拟环境管理工具 <a class="header-anchor" href="#python-xu-ni-huan-jing-guan-li-gong-ju" aria-label="Permalink to &quot;Python 虚拟环境管理工具&quot;">​</a></h1><h2 id="overview" tabindex="-1">🔖 Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;🔖 Overview&quot;">​</a></h2><ul><li>Why 虚拟环境管理工具？</li></ul><p>在开发过程中，我们可能会使用到不同的 python 版本，或者不同的包，这时候我们就需要一个虚拟环境管理工具，来帮助我们管理这些环境，这样可以避免不同环境之间的冲突，也可以方便的切换环境</p><ul><li>Why Miniconda?</li></ul><p>anaconda 是一个完整的虚拟环境（几个G），但是有时候我们并不需要这么多的包，所以我们可以使用 miniconda，它只包含了 conda 和一些必要的包，因此占用的存储空间很小（大约600MB），我们可以根据自己的需求安装其他包，命令行的功能完全一致，并且在 VScode 和 Pycharm 中也很好地支持了 conda 创建和管理 python 虚拟环境</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>写代码一定要借助工具，无论是 VScode 还是 Pycharm ，根据个人习惯选择就行</p></div><h2 id="xuan-ze-yi-ge-lai-kai-qi-python-de-kai-fa-zhi-lu-ba" tabindex="-1">🎉 选择一个来开启 Python 的开发之旅吧！ <a class="header-anchor" href="#xuan-ze-yi-ge-lai-kai-qi-python-de-kai-fa-zhi-lu-ba" aria-label="Permalink to &quot;🎉 选择一个来开启 Python 的开发之旅吧！&quot;">​</a></h2><table tabindex="0"><thead><tr><th>虚拟环境管理工具</th><th>简介</th></tr></thead><tbody><tr><td>pip</td><td>python 自带的包管理工具，只能安装 python 包，不能安装其他软件</td></tr><tr><td>virtualenv</td><td>一个独立的 python 环境管理工具，可以创建多个独立的 python 环境，但是所有的</td></tr><tr><td><a href="https://www.anaconda.com/download/" target="_blank" rel="noreferrer">Anaconda</a></td><td>一个数据科学工具包，包含了很多数据科学相关的包。<br> ❗️如无必要，避免在如何情况下使用 Anaconda，因为占用空间实在是太大了</td></tr><tr><td><a href="https://docs.anaconda.com/free/miniconda/index.html" target="_blank" rel="noreferrer">Miniconda</a></td><td>Anaconda 的精简版，只包含了 conda 和一些必要的包，占用空间小</td></tr><tr><td><a href="https://github.com/conda-forge/miniforge" target="_blank" rel="noreferrer">Miniforge</a></td><td>Anaconda <a href="https://www.anaconda.com/blog/sustaining-our-stewardship-of-the-open-source-data-science-community" target="_blank" rel="noreferrer">商用收费</a>后，由社区赞助、领导的 miniforge 成为了替代品。 <br> ✅ miniforge 用 GitHub 托管所有的包，只使用 conda-forge 作为默认下载 channel，避开了 Anaconda 的 repository，以避免被追责。<br>✅ <strong>conda-forge</strong> 是一个非常好用的 channel <br> ✅ <strong>miniforge</strong> 对于不同架构的平台支持很好，一些 ARM 架构的硬件平台在无法安装 miniconda 时就完全依赖于 miniforge， 例如树莓派和早期 Apple Silicon 的 MacOS <br>✅ miniforge 和 miniconda 的安装和使用完全一致</td></tr><tr><td>Mamba</td><td></td></tr><tr><td>Mambaforge</td><td></td></tr></tbody></table><h2 id="conda-de-an-zhuang" tabindex="-1">📲 conda 的安装 <a class="header-anchor" href="#conda-de-an-zhuang" aria-label="Permalink to &quot;📲 conda 的安装&quot;">​</a></h2><h3 id="ruan-jian-an-zhuang-bao" tabindex="-1">软件安装包 <a class="header-anchor" href="#ruan-jian-an-zhuang-bao" aria-label="Permalink to &quot;软件安装包&quot;">​</a></h3><h3 id="linuxmacos-an-zhuang-minicondaminiforge" tabindex="-1">Linux/MacOS 安装 Miniconda/Miniforge <a class="header-anchor" href="#linuxmacos-an-zhuang-minicondaminiforge" aria-label="Permalink to &quot;Linux/MacOS 安装 Miniconda/Miniforge&quot;">​</a></h3><p>安装 Miniconda 或者 Miniforge 的过程是完全一致的</p><ul><li>从 <a href="https://docs.anaconda.com/free/miniconda/index.html" target="_blank" rel="noreferrer">Miniconda官网</a>下载对应的安装包（应该是一个脚本）</li></ul><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 进入临时目录获取安装包</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-yAtUQ" id="tab-iUnrDzy" checked><label data-title="x86_64" for="tab-iUnrDzy">x86_64</label><input type="radio" name="group-yAtUQ" id="tab-sIULXDm"><label data-title="aarch64" for="tab-sIULXDm">aarch64</label><input type="radio" name="group-yAtUQ" id="tab-xTLo31z"><label data-title="arm64(Apple Silicon)" for="tab-xTLo31z">arm64(Apple Silicon)</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://repo.anaconda.com/miniconda/Miniconda3-latest-MacOSX-arm64.sh</span></span></code></pre></div></div></div><ul><li>或者从 <a href="https://github.com/conda-forge/miniforge" target="_blank" rel="noreferrer">Miniforge</a> 仓库找到对应的安装包</li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-2skn9" id="tab-sCh8dVT" checked><label data-title="x86_6" for="tab-sCh8dVT">x86_6</label><input type="radio" name="group-2skn9" id="tab-xGnV7_4"><label data-title="aarch64" for="tab-xGnV7_4">aarch64</label><input type="radio" name="group-2skn9" id="tab-9t9EZDI"><label data-title="arm64(Apple Silicon)" for="tab-9t9EZDI">arm64(Apple Silicon)</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh</span></span></code></pre></div></div></div><p>根据下载的安装脚本，执行对应的安装，例如 Linux (x86_64) 版本的安装脚本为 <code>Miniconda3-latest-Linux-x86_64.sh</code>，执行如下命令安装</p><p>安装方式可以有两种，自动安装和手动安装</p><ul><li><strong>自动安装</strong>（推荐）</li></ul><p>执行命令，自动将 Miniconda 安装到 <code>~/miniconda3</code> 目录下， <code>-p</code> 参数指定安装路径</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda3-latest-Linux-x86_64.sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/miniconda3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MacOS 应该使用 zsh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># zsh Miniconda3-latest-MacOSX-arm64.sh -b -u -p ~/miniconda3</span></span></code></pre></div><p>随后激活 conda ，conda 会自动将环境变量添加到 <code>~/.bashrc</code> 中</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/miniconda3/bin/activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre></div><ul><li><strong>手动安装</strong></li></ul><p>执行命令，手动安装 Miniconda，这种方式需要回答一些问题，例如安装路径等</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Miniconda3-latest-Linux-x86_64.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># MacOS 应该使用 zsh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># zsh Miniconda3-latest-MacOSX-arm64.sh</span></span></code></pre></div><p>安装过程中有几个问题需要回答，分别是：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5xLcY" id="tab-3RsDBEd" checked><label data-title="1、接受协议" for="tab-3RsDBEd">1、接受协议</label><input type="radio" name="group-5xLcY" id="tab-fYURc3l"><label data-title="2、安装路径" for="tab-fYURc3l">2、安装路径</label><input type="radio" name="group-5xLcY" id="tab-QbedGap"><label data-title="3、初始化(重要❗️)" for="tab-QbedGap">3、初始化(重要❗️)</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 你需要接受 Miniconda/Miniforge 的许可协议，输入 yes</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Do</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> accept</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> license</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terms?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [yes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">no]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&gt;&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yes</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认即可</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[/home/ubuntu/miniconda3] &gt;&gt;&gt;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这一步会初始化 conda，环境变量到 \`~/.bashrc\` 中，输入 yes ，否则重来吧</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> undo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">--reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SHELL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [yes</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">no]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[no] &gt;&gt;&gt; yes</span></span></code></pre></div></div></div><blockquote><p>使用 Miniconda 或者 Miniforge 都是 conda 命令，所以在这里我们统一称之为 conda</p></blockquote><p>安装结束后，需要重启终端，或者执行 <code>source ~/.bashrc</code> 使环境变量生效</p><h3 id="windows-an-zhuang-miniconda" tabindex="-1">Windows 安装 Miniconda <a class="header-anchor" href="#windows-an-zhuang-miniconda" aria-label="Permalink to &quot;Windows 安装 Miniconda&quot;">​</a></h3><p>进入<a href="https://docs.anaconda.com/free/miniconda/index.html" target="_blank" rel="noreferrer">Miniconda官网</a>下载对应的安装包</p><p><img src="`+e+'" alt="miniconda"></p><p>win安装直接双击安装包，然后一路 next，有如下两个需要修改</p><ol><li><strong>选择安装类型</strong>，建议选择 <code>Just Me</code>，否则需要管理员权限，不方便</li></ol><p><img src="'+l+'" alt="miniconda"></p><ol start="2"><li><strong>选择安装路径</strong>，建议默认路径 <code>C:\\Users\\用户名\\miniconda3</code>。也可以设置自定义为其他路径，注意不要有英文路径，并且安装的目录最后要是 <code>miniconda3</code> 结尾</li></ol><p><img src="'+h+'" alt="miniconda"></p><p>安装完成后，可以查看安装目录是否存在</p><p><img src="'+p+'" alt="miniconda"></p><p>接下来是最重要的一步，将 conda 添加到环境变量中，这样我们就可以在任何地方使用 conda 命令了</p><p>按照下面步骤：</p><ol><li>搜索框输入「<strong>环境变量</strong>」，选择 「<strong>编辑账户的环境变量</strong>」打开</li></ol><p><img src="'+d+'" alt="miniconda"></p><ol start="2"><li>点击「<strong>环境变量</strong>」按钮</li></ol><p><img src="'+o+'" alt="miniconda"></p><ol><li>在 「<strong>用户变量</strong>」 （请一定不要添加到「<strong>系统变量</strong>」中）中找到 <code>Path</code>，点击编辑</li></ol><p><img src="'+c+'" alt="miniconda"></p><ol start="4"><li>点击新建，输入 <code>C:\\Users\\用户名\\miniconda3\\condabin</code>(或者刚才的安装路径加上 <code>\\condabin</code>)，然后点击确定，并一路确定返回</li></ol><p><img src="'+k+'" alt="miniconda"></p><p>然后打开 cmd 或者 powershell（推荐） 输入 <code>conda</code>，如果如下内容</p><p><img src="'+r+`" alt="miniconda"></p><p>随后需要执行初始化脚本，确保可以在终端中使用 conda 命令，<code>--all</code> 确保可以激活在全部终端的使用，例如可以在 git bash 中</p><div class="language-ps1 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">conda init </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">all</span></span></code></pre></div><p>win 系统默认是禁止运行脚本的，所以在 powershell 中运行脚本可能会报错，如下</p><div class="language-ps1 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : 无法加载文件 C:\\Users\\用户名\\Documents\\WindowsPowerShell\\profile.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">阅 https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">go.microsoft.com</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fwlink</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?LinkID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">135170</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 中的 about_Execution_Policies。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">所在位置 行:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 字符: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;C:\\Users\\用户名\\Documents\\WindowsPowerShell\\profile.ps1&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CategoryInfo          : SecurityError: (:) []，PSSecurityException</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FullyQualifiedErrorId : UnauthorizedAccess</span></span></code></pre></div><p>需要用管理员权限打开 powershell，然后输入 <code>set-executionpolicy remotesigned</code>，然后输入 <code>Y</code> 确认（运行完成脚本后，可以关闭权限，避免恶意脚本的运行；个人电脑的话，可以打开）</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-L7e1z" id="tab-Io_3gKo" checked><label data-title="开启脚本权限" for="tab-Io_3gKo">开启脚本权限</label><input type="radio" name="group-L7e1z" id="tab-_wlZEJe"><label data-title="关闭脚本权限" for="tab-_wlZEJe">关闭脚本权限</label></div><div class="blocks"><div class="language-ps1 vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-executionpolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> remotesigned</span></span></code></pre></div><div class="language-ps1 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ps1</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set-executionpolicy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> restricted</span></span></code></pre></div></div></div><h2 id="conda-ji-chu" tabindex="-1">🧱 conda 基础 <a class="header-anchor" href="#conda-ji-chu" aria-label="Permalink to &quot;🧱 conda 基础&quot;">​</a></h2><h3 id="qu-xiao-mo-ren-ji-huo" tabindex="-1">取消默认激活 <a class="header-anchor" href="#qu-xiao-mo-ren-ji-huo" aria-label="Permalink to &quot;取消默认激活&quot;">​</a></h3><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>需要注意的是，conda 不应该默认激活，这是因为有些软件安装的时候需要依赖于系统自带的 Python 而非虚拟环境的 Python ，否则当删除虚拟环境目录后某些软件失效。</p></div><p>（建议）关闭默认激活</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auto_activate_base</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span></code></pre></div><h3 id="chuang-jian-xu-ni-huan-jing" tabindex="-1">创建虚拟环境 <a class="header-anchor" href="#chuang-jian-xu-ni-huan-jing" aria-label="Permalink to &quot;创建虚拟环境&quot;">​</a></h3><p>创建一个名为 <code>conda_test</code> 的虚拟环境，并且指定 python 版本为 3.10，如果不使用python那么可以不指定python版本，而得到一个空环境</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZU_QJ" id="tab-UiokWcv" checked><label data-title="指定python版本" for="tab-UiokWcv">指定python版本</label><input type="radio" name="group-ZU_QJ" id="tab-3vDgnxh"><label data-title="不指定python版本" for="tab-3vDgnxh">不指定python版本</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda_test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div></div></div><ul><li><code>-n</code> 参数表示指定虚拟环境的名称</li><li><code>-y</code> 参数表示自动安装，不需要确认</li></ul><p>这种情况下，该虚拟环境的路径会在 <code>~/miniconda3/envs/conda_test</code></p><p>但是也可以将虚拟环境安装在项目内或者其他指定路径，例如在当前目录下创建一个名为 <code>conda_test</code> 的虚拟环境</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./.env/conda_test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.10</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><blockquote><p>这里推荐环境安装在 <code>.env</code> 目录下，这样可以避免环境文件污染项目目录，也便于 <code>.gitignore</code> 管理</p></blockquote><p>查看所有的虚拟环境，可以使用以下任意命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --envs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> info</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span></code></pre></div><h3 id="ji-huo-xu-ni-huan-jing" tabindex="-1">激活虚拟环境 <a class="header-anchor" href="#ji-huo-xu-ni-huan-jing" aria-label="Permalink to &quot;激活虚拟环境&quot;">​</a></h3><p>激活虚拟环境 <code>conda_test</code></p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-9PxpL" id="tab-6uOQWoT" checked><label data-title="默认路径" for="tab-6uOQWoT">默认路径</label><input type="radio" name="group-9PxpL" id="tab-n7QQTon"><label data-title="指定路径" for="tab-n7QQTon">指定路径</label></div><div class="blocks"><div class="language-shell vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda_test</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这种情况下建议在环境路径前添加 \`./\`，否则可能会从系统环境中查找</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./.env/conda_test</span></span></code></pre></div></div></div><p>在激活虚拟环境后，终端的提示符会变成 <code>(conda_test)</code>，表示当前环境为 <code>conda_test</code>，这时候安装的包都会安装在当前虚拟环境中</p><h3 id="zai-shell-zhong-shi-yong-xu-ni-huan-jing" tabindex="-1">在 shell 中使用虚拟环境 <a class="header-anchor" href="#zai-shell-zhong-shi-yong-xu-ni-huan-jing" aria-label="Permalink to &quot;在 shell 中使用虚拟环境&quot;">​</a></h3><p>在 shell 中使用虚拟环境，可以使用 <code>source</code> 命令，例如在 shell 中使用虚拟环境 <code>conda_test</code></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ENV_PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">conda_test</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # 默认路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ENV_PATH=./.env/conda_test  # 指定路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shell.$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">basename</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $SHELL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">) hook)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ENV_PATH</span></span></code></pre></div><h3 id="tui-chu-he-shan-chu-xu-ni-huan-jing" tabindex="-1">退出和删除虚拟环境 <a class="header-anchor" href="#tui-chu-he-shan-chu-xu-ni-huan-jing" aria-label="Permalink to &quot;退出和删除虚拟环境&quot;">​</a></h3><p>退出虚拟环境，可以使用以下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deactivate</span></span></code></pre></div><p>删除虚拟环境 <code>conda_test</code>，可以使用以下命令</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remove</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda_test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span></code></pre></div><h3 id="conda-de-channel" tabindex="-1">conda 的 channel <a class="header-anchor" href="#conda-de-channel" aria-label="Permalink to &quot;conda 的 channel&quot;">​</a></h3><p>conda 的 channel 是一个包的仓库，可以理解为一个软件源，我们可以从 channel 中下载软件包，conda 默认的 channel 是 <code>defaults</code>，查看当前的 channel</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --show</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span></span></code></pre></div><p>但是有时候我们需要从其他 channel 中下载包，例如 <code>conda-forge</code>，这时候我们可以添加 channel</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda-forge</span></span></code></pre></div><p>还原为默认 channel</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">conda</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --remove</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> channels</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> conda-forge</span></span></code></pre></div>`,94)]))}const B=i(g,[["render",u]]);export{E as __pageData,B as default};