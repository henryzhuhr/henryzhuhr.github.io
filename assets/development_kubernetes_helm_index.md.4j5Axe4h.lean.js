import{_ as i,c as a,a3 as h,o as l}from"./chunks/framework.C681U02K.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"development/kubernetes/helm/index.md","filePath":"development/kubernetes/helm/index.md","lastUpdated":1744707085000}'),t={name:"development/kubernetes/helm/index.md"};function n(p,s,e,k,d,E){return l(),a("div",null,s[0]||(s[0]=[h('<h2 id="helm-bao-guan-li" tabindex="-1">Helm 包管理 <a class="header-anchor" href="#helm-bao-guan-li" aria-label="Permalink to &quot;Helm 包管理&quot;">​</a></h2><h2 id="liu-cheng" tabindex="-1">流程 <a class="header-anchor" href="#liu-cheng" aria-label="Permalink to &quot;流程&quot;">​</a></h2><h3 id="ye-wu-sheng-ji-liu-cheng" tabindex="-1">业务升级流程 <a class="header-anchor" href="#ye-wu-sheng-ji-liu-cheng" aria-label="Permalink to &quot;业务升级流程&quot;">​</a></h3><p>做一些环境变量</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NAMESPACE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 命名空间 `kubectl get ns` 获取</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> REPO_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 仓库名   `helm repo list` 获取</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CHART_NAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # chart 包名</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CHART_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # chart 版本</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> INFO</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;  - [INFO] \\033[00;32m${</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\\033[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; }</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INFO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;NAMESPACE:  ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NAMESPACE</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INFO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;REPO_NAME:  ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REPO_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">INFO</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;CHART_NAME: ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CHART_NAME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DEFAULT</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span></code></pre></div><p>获取 helm 包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${REPO_NAME} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">repo-ur</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 添加 helm 仓库</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                        # 查看 helm 仓库列表</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 更新 helm 仓库</span></span></code></pre></div><p>下载 helm 包（可指定版本）</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${REPO_NAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">${CHART_NAME} [--version ${CHART_VERSION} </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span></span></code></pre></div><p>解压并进入 helm 包目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.tgz</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span></span></code></pre></div><p>查看在线的 pod</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pods</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE}</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pods</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 记录下 pod 的 id</span></span></code></pre></div><p>获取在线 pod 的配置文件，保存在当前目录</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POD_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> values</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.values.yaml</span></span></code></pre></div><p>使用保存的配置文件，更新 helm 包</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># helm upgrade [RELEASE] [CHART] [VERSION] [flags]</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME} </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\</span></span>\n<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.values.yaml</span></span></code></pre></div><p>查看更新后的 pod</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pods</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span></span></code></pre></div><p>如果产生报错，需要根据日志信息进行排查，可以通过 <code>kubectl logs</code> 命令查看 pod 的日志信息</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">POD_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xxxx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # id 是新 pod 的 id</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kubectl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> logs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${CHART_NAME}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">${POD_ID} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${NAMESPACE}</span></span></code></pre></div>',22)]))}const F=i(t,[["render",n]]);export{g as __pageData,F as default};
