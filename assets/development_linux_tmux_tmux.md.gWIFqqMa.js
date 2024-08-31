import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CUJjVNbl.js";const e="/assets/tmux-logo.-FDH2pve.png",t="/assets/create-default-session.JYNDvPkE.png",l="/assets/in-session-tmux-ls.DAR_8FmP.png",C=JSON.parse('{"title":"Tmux","description":"","frontmatter":{"outline":"deep","title":"Tmux","date":"2023-02-23T00:00:00.000Z","tags":["linux"]},"headers":[],"relativePath":"development/linux/tmux/tmux.md","filePath":"development/linux/tmux/tmux.md","lastUpdated":1724588569000}'),h={name:"development/linux/tmux/tmux.md"},p=n('<h1 id="tmux" tabindex="-1">tmux <a class="header-anchor" href="#tmux" aria-label="Permalink to &quot;tmux&quot;">​</a></h1><p><img src="'+e+`" alt="tmux"></p><h2 id="tmux-an-zhuang" tabindex="-1">tmux 安装 <a class="header-anchor" href="#tmux-an-zhuang" aria-label="Permalink to &quot;tmux 安装&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tmux</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         # Mac</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tmux</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ubuntu/Debian</span></span></code></pre></div><h2 id="tmux-zhong-de-ming-cheng-yu-qian-zhui-jian" tabindex="-1">tmux 中的名称与前缀键 <a class="header-anchor" href="#tmux-zhong-de-ming-cheng-yu-qian-zhui-jian" aria-label="Permalink to &quot;tmux 中的名称与前缀键&quot;">​</a></h2><p>在 tmux 中，有三个基本的概念</p><ul><li>session : 会话/任务</li><li>window : 窗口</li><li>pane ：窗格</li></ul><p>在 tmux 中，使用快捷键是使用 <code>ctrl+B</code> 去唤起快捷键的 (MacOS 中则是 <code>control+B</code>)，叫<strong>前缀键</strong> (网上可能缩写为 <code>C+B</code>)</p><blockquote><p>例如挂起 session 的快捷键是 <code>ctrl+B d</code> 。意思是，先按下前缀键 <code>ctrl+B</code> 唤起快捷键操作，然后接着按下 <code>d</code> 进行相应操作</p></blockquote><h2 id="tmux-de-hui-hua-guan-li" tabindex="-1">tmux 的会话管理 <a class="header-anchor" href="#tmux-de-hui-hua-guan-li" aria-label="Permalink to &quot;tmux 的会话管理&quot;">​</a></h2><h3 id="xin-jian-hui-hua" tabindex="-1">新建会话 <a class="header-anchor" href="#xin-jian-hui-hua" aria-label="Permalink to &quot;新建会话&quot;">​</a></h3><p>新建一个默认的 session</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span></span></code></pre></div><p>这时候新建一个默认的 session ，底部有一个状态栏。左侧 <code>[0] 0:zsh*</code> 是窗口编号、名称和终端信息，右侧是当前的系统信息。</p><p><img src="`+t+`" alt="tmux"></p><p>为了方便 session 的管理，在新建 session 时，（推荐）指定名称</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example : create a session to test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># [test] 0:zsh*</span></span></code></pre></div><p>这时候的 session 名称就是 <code>test</code> 了， <code>[test]0:zsh*</code></p><h3 id="gua-qi-hui-hua" tabindex="-1">挂起会话 <a class="header-anchor" href="#gua-qi-hui-hua" aria-label="Permalink to &quot;挂起会话&quot;">​</a></h3><p>当想要挂起一个 session 让其在后台继续工作而不是退出的时候</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> detach</span></span></code></pre></div><p>也可以使用快捷键 <code>ctrl+B d</code> 挂起当前 session</p><p>这时候该 session 会继续挂在后台运行继续执行任务 (显示为 <code>[detach (from seesion xxx)]</code>)，直到再次被唤起或被 kill 掉。</p><h3 id="cha-kan-hui-hua" tabindex="-1">查看会话 <a class="header-anchor" href="#cha-kan-hui-hua" aria-label="Permalink to &quot;查看会话&quot;">​</a></h3><p>我们想查看当前 tmux 挂在后台的 session 时，可以</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list-sessions</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 简写</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># test: 1 windows (created Sun Aug 25 19:49:08 2024)</span></span></code></pre></div><p>快捷键 <code>ctrl+B s</code></p><p>如果已经在某个 session 内的时候，可以通过快捷键 <code>ctrl+B s</code> 来查看，黄色高光部分就是当前正在运行的 session <img src="`+l+`" alt="tmux name"></p><h3 id="jin-ru-hui-hua" tabindex="-1">进入会话 <a class="header-anchor" href="#jin-ru-hui-hua" aria-label="Permalink to &quot;进入会话&quot;">​</a></h3><p>当我们想要进入一个 session 的时候，可以通过 session 的编号或者名字来进入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> attach</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 简写</span></span></code></pre></div><p>例如当前运行的两个 session 分别是<strong>编号为</strong> <code>0</code> 和<strong>名称为</strong> <code>test</code> 的 session</p><p>我们想要进入其中一个 session 的时候，可以通过编号进入，也可以通过名称进入</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><h3 id="tui-chu-hui-hua" tabindex="-1">退出会话 <a class="header-anchor" href="#tui-chu-hui-hua" aria-label="Permalink to &quot;退出会话&quot;">​</a></h3><p>当完成任务后，需要彻底退出 session 而不是挂在后台的时候，可以</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill-session</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example :</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill-session</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><p>这时候 session 就会被 kill 掉，并且出现 <code>[exited]</code> ，表示已经退出了。在 <code>tmux ls</code> 查看 session 的时候，也不会有该 session 了</p><p>退出当前 session 的快捷键是 <code>ctrl+d</code></p><h3 id="qie-huan-hui-hua" tabindex="-1">切换会话 <a class="header-anchor" href="#qie-huan-hui-hua" aria-label="Permalink to &quot;切换会话&quot;">​</a></h3><p>执行命令,可以从当前的 session 快速切换到另一个 session：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> switch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h3 id="chong-ming-ming-hui-hua" tabindex="-1">重命名会话 <a class="header-anchor" href="#chong-ming-ming-hui-hua" aria-label="Permalink to &quot;重命名会话&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rename-session</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">old_session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">new_session_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># example : rename test to run</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tmux</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rename-session</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre></div><p>快捷键 <code>ctrl+b $</code></p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>后续内容还没整理完成</p></div><h2 id="chuang-ge-guan-li" tabindex="-1">窗格管理 <a class="header-anchor" href="#chuang-ge-guan-li" aria-label="Permalink to &quot;窗格管理&quot;">​</a></h2><h3 id="hua-fen-chuang-ge" tabindex="-1">划分窗格 <a class="header-anchor" href="#hua-fen-chuang-ge" aria-label="Permalink to &quot;划分窗格&quot;">​</a></h3><ul><li><code>Ctrl+b %</code>：划分左右两个窗格。</li><li><code>Ctrl+b &quot;</code>：划分上下两个窗格。</li></ul><h3 id="qie-huan-chuang-ge" tabindex="-1">切换窗格 <a class="header-anchor" href="#qie-huan-chuang-ge" aria-label="Permalink to &quot;切换窗格&quot;">​</a></h3><ul><li><code>Ctrl+b &lt;arrow key&gt;</code>：光标切换到其他窗格。<code>&lt;arrow key&gt;</code>是指向要切换到的窗格的方向键，比如切换到下方窗格，就按方向键↓。</li><li><code>Ctrl+b ;</code>：光标切换到上一个窗格。</li><li><code>Ctrl+b o</code>：光标切换到下一个窗格。</li><li><code>Ctrl+b {</code>：当前窗格与上一个窗格交换位置。</li><li><code>Ctrl+b }</code>：当前窗格与下一个窗格交换位置。</li><li><code>Ctrl+b Ctrl+o</code>：所有窗格向前移动一个位置，第一个窗格变成最后一个窗格。</li><li><code>Ctrl+b Alt+o</code>：所有窗格向后移动一个位置，最后一个窗格变成第一个窗格。</li><li><code>Ctrl+b x</code>：关闭当前窗格。</li><li><code>Ctrl+b !</code>：将当前窗格拆分为一个独立窗口。</li><li><code>Ctrl+b z</code>：当前窗格全屏显示，再使用一次会变回原来大小。</li><li><code>Ctrl+b Ctrl+&lt;arrow key&gt;</code>：按箭头方向调整窗格大小。 prefix + （ctrl）+上下左右箭头 : 与上面命令不同的是，ctrl + b按完之后，不要松开ctrl，一直按着，然后再按箭头来调整。不过因为在mac下ctrl+箭头是切换屏幕，所以还得在偏好设置-&gt;键盘-&gt;快捷键-&gt;Mission Control里把对应的快捷键取消掉。</li><li><code>Ctrl+b q</code>：显示窗格编号。</li></ul><h2 id="chuang-kou-guan-li" tabindex="-1">窗口管理 <a class="header-anchor" href="#chuang-kou-guan-li" aria-label="Permalink to &quot;窗口管理&quot;">​</a></h2><p>新建窗口 <code>ctrl+b c</code> 重命名窗口 <code>ctrl+b ,</code> 关闭窗口 <code>ctrl+b x</code></p><h1 id="kuai-jie-jian" tabindex="-1">快捷键 <a class="header-anchor" href="#kuai-jie-jian" aria-label="Permalink to &quot;快捷键&quot;">​</a></h1><h2 id="she-zhi" tabindex="-1">设置 <a class="header-anchor" href="#she-zhi" aria-label="Permalink to &quot;设置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Use Alt-arrow keys to switch panes</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不用按prefix，直接用alt+箭头在pane之间switch。%%</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> M-Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select-pane</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> M-Right</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select-pane</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> M-Up</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select-pane</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -U</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> M-Down</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> select-pane</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Shift arrow to switch windows</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 不用按prefix，直接用shift+箭头在window之间switch。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S-Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> previous-window</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> S-Right</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> next-window</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Mouse mode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启鼠标模式。用鼠标就能切换window，pane，</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mouse</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set easier window split keys</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这一部分是用来更方便切分pane的。prefix + v 代表竖着切，prefix + h 代表横着切。比起默认的切割方法不仅直观而且方便。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> split-window</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> h</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> split-window</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Easy config reload</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># prefix+r 加载文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bind-key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> source-file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.tmux.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> display-message</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;tmux.conf reloaded&quot;</span></span></code></pre></div>`,56),k=[p];function d(o,r,c,F,g,u){return a(),i("div",null,k)}const m=s(h,[["render",d]]);export{C as __pageData,m as default};
