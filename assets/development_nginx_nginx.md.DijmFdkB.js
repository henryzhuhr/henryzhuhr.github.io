import{_ as i,c as a,a3 as n,o as e}from"./chunks/framework.C681U02K.js";const c=JSON.parse('{"title":"Nginx","description":"","frontmatter":{"title":"Nginx","subtitle":"Web 服务器必备的好东西","author":"HenryZhu","date":"2024-08-11T00:00:00.000Z","tags":["web","软件开发"]},"headers":[],"relativePath":"development/nginx/nginx.md","filePath":"development/nginx/nginx.md","lastUpdated":1724588569000}'),l={name:"development/nginx/nginx.md"};function t(h,s,p,k,d,r){return e(),a("div",null,s[0]||(s[0]=[n(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-label="Permalink to &quot;Nginx&quot;">​</a></h1><p><a href="https://nginx.org" target="_blank" rel="noreferrer">Nginx</a> 是毛子出品的高性能 HTTP 和反向代理 web 服务器</p><h2 id="an-zhuang" tabindex="-1">安装 <a class="header-anchor" href="#an-zhuang" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>在 Linux(Ubuntu) 服务器上安装 Nginx</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><p>如果要安装最新版本的 Nginx，参考 <a href="https://www.nginx.com/resources/wiki/start/topics/tutorials/install/" target="_blank" rel="noreferrer">&quot;Official Debian/Ubuntu packages&quot;</a>，使用 <a href="https://launchpad.net/~nginx/+archive/ubuntu/stable" target="_blank" rel="noreferrer">PPA</a> 来安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add-apt-repository</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ppa:nginx/stable</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><h2 id="nginx-ming-ling" tabindex="-1">Nginx 命令 <a class="header-anchor" href="#nginx-ming-ling" aria-label="Permalink to &quot;Nginx 命令&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------------------------------</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo nginx -s stop    # 停止</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo nginx -s quit    # 优雅停止</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo nginx -s reload  # 重新加载配置文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo nginx -s reopen  # 重新打开日志文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo nginx -c /etc/nginx/nginx.conf # 指定配置文件</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ---------------------------------</span></span></code></pre></div><p>操作完成后，可能需要检查相应端口是否打开，否则服务仍然无法访问</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SSH_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">xxxx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # &lt;xxxx&gt; 是新的端口号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --permanent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --zone=public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --add-port=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SSH_PORT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}/tcp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 添加新端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --reload</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 更新防火墙规则</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --list-ports</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看已开放的端口</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># sudo firewall-cmd --permanent --zone=public \\</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   --remove-port=\${SSH_PORT}/tcp # 移除端口</span></span></code></pre></div><h2 id="zhu-pei-zhi-wen-jian" tabindex="-1">主配置文件 <a class="header-anchor" href="#zhu-pei-zhi-wen-jian" aria-label="Permalink to &quot;主配置文件&quot;">​</a></h2><h3 id="ji-ben-pei-zhi" tabindex="-1">基本配置 <a class="header-anchor" href="#ji-ben-pei-zhi" aria-label="Permalink to &quot;基本配置&quot;">​</a></h3><p>Nginx 的配置文件 <code>nginx.conf</code> 可能会在这几个地方: <code>/usr/local/nginx/conf</code>, <code>/etc/nginx</code>, <code>/usr/local/etc/nginx</code></p><blockquote><p>ubuntu apt 默认安装位置为 <code>/etc/nginx/nginx.conf</code></p></blockquote><p>配置文件 <code>nginx.conf</code> 的结构</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> www-data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">worker_processes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /run/nginx.pid</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/modules-enabled/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.conf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">	worker_connections</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 768</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# multi_accept on;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    ...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#mail {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#	...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#}</span></span></code></pre></div><p>其中需要修改的是 <code>user</code> 和 <code>worker_processes</code>，<code>user</code> 是运行 Nginx 的用户，<code>worker_processes</code> 是 Nginx 的工作进程数，一般设置为 <code>auto</code>，表示根据 CPU 核数自动设置</p><p>如果不设置用户，Nginx 默认使用 <code>nobody</code> 用户，这个用户没有权限访问文件系统，所以需要修改为 <code>www-data</code> 用户</p><h3 id="nginx-yong-hu-quan-xian" tabindex="-1">Nginx 用户权限 <a class="header-anchor" href="#nginx-yong-hu-quan-xian" aria-label="Permalink to &quot;Nginx 用户权限&quot;">​</a></h3><p>Nginx 默认使用 <code>nobody</code> 用户，这个用户没有权限访问文件系统，所以可以建立一个 nginx 用户，然后修改配置文件中的 <code>user</code> 为 <code>nginx</code> 用户</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span></code></pre></div><h2 id="chang-yong-pei-zhi" tabindex="-1">常用配置 <a class="header-anchor" href="#chang-yong-pei-zhi" aria-label="Permalink to &quot;常用配置&quot;">​</a></h2><h3 id="http-duan-kou-zhuan-fa" tabindex="-1">HTTP 端口转发 <a class="header-anchor" href="#http-duan-kou-zhuan-fa" aria-label="Permalink to &quot;HTTP 端口转发&quot;">​</a></h3><p>以 http 常用的 80 端口为例，基本配置文件为</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> localhost</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    access_log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/ubuntu/nginx/logs/access.log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> combined</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    error_log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/ubuntu/nginx/logs/error.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><code>listen</code> 监听端口，<code>http</code> 一般是 <code>80</code></li><li><code>server_name</code> 监听ip。换成服务器 <strong>公网IP</strong> 或者 <strong>域名</strong></li><li><code>access_log</code> 和 <code>error_log</code> 是日志文件，需要保证目录存在 <code>/home/ubuntu/nginx/logs/</code> ，否则就无法生存日志文件</li></ul><p>这时候重新加载数据文件 <code>sudo nginx -s reload</code></p><h3 id="jing-tai-zhan-dian" tabindex="-1">静态站点 <a class="header-anchor" href="#jing-tai-zhan-dian" aria-label="Permalink to &quot;静态站点&quot;">​</a></h3><h3 id="wen-jian-fu-wu-qi" tabindex="-1">文件服务器 <a class="header-anchor" href="#wen-jian-fu-wu-qi" aria-label="Permalink to &quot;文件服务器&quot;">​</a></h3><h2 id="can-kao" tabindex="-1">参考 <a class="header-anchor" href="#can-kao" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/hanease/p/15890509.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/hanease/p/15890509.html</a></li><li>nginx用户权限 <a href="https://www.cnblogs.com/kenshinobiy/p/7134120.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/kenshinobiy/p/7134120.html</a></li><li><a href="https://cloud.tencent.com/developer/article/1835556" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1835556</a></li></ul>`,32)]))}const g=i(l,[["render",t]]);export{c as __pageData,g as default};