import{_ as a,c as i,a3 as t,o as n}from"./chunks/framework.C681U02K.js";const e="/assets/install-2404-step-0-boot.0A9d_cgZ.png",l="/assets/install-2404-step-1-choose_language.CVD19i5v.png",p="/assets/install-2404-step-2-accessibility.CRJzawA5.png",r="/assets/install-2404-step-3-keyboard_layout.Db019NiP.png",h="/assets/install-2404-setp-4-connect_network.D43GlvuY.png",o="/assets/install-2404-setp-5-install_type.BNK_l-WK.png",d="/assets/install-2404-setp-6-app.BYLyNIIg.png",k="/assets/install-2404-setp-7-optimize_computer.Cusj4run.png",g="/assets/install-2404-setp-8-install_type.BImhHQ3R.png",u="/assets/install-2404-setp-9-manual_partition_1.VDMenHfN.png",c="/assets/install-2404-setp-9-manual_partition_2.CGJX8Qis.png",b="/assets/install-2404-setp-9-manual_partition_3.YXcsnvDq.png",F="/assets/install-2404-setp-10-setup_account.DwIA_1aO.png",m="/assets/install-2404-setp-11-time_zone.BQmix9hT.png",y="/assets/install-2404-setp-12-ready_to_install.DauwpPg9.png",E="/assets/install-2404-setp-13-installing.BfsjZI_1.png",_="/assets/install-2404-setp-14-finish.CkGRh25k.png",C="/assets/install-2204-step-1-choose_language.RYdKL1q-.png",f="/assets/install-2204-step-2-keyboard_layout.B2n5mNn1.png",B="/assets/install-2204-step-3-updates_and_other_software.BODc-T4J.png",v="/assets/install-2204-step-4-install_partition.D_Gdh9VI.png",D="/assets/install-2204-step-4-install_partition_1.Ca7q1wDr.png",A="/assets/install-2204-step-4-install_partition_2.MtrLP8x9.png",x="/assets/install-2204-step-4-install_partition_3.CZp2iT2x.png",q="/assets/install-2204-step-4-install_partition_4.Db7j_yGm.png",S="/assets/install-2204-step-4-install_partition_5.BaCJCOKv.png",z="/assets/install-2204-step-4-install_partition_6.BH85Pd3m.png",U="/assets/install-2204-step-5-time_zone.C1cL6w6m.png",P="/assets/install-2204-step-6-account.Df95Uisf.png",w="/assets/install-2204-step-7-installing.CPCccXmT.png",V=JSON.parse('{"title":"Ubuntu 系统安装和初始化","description":"","frontmatter":{"outline":"deep","tags":["linux","软件开发"]},"headers":[],"relativePath":"development/linux/ubuntu-install/ubuntu-install.md","filePath":"development/linux/ubuntu-install/ubuntu-install.md","lastUpdated":1729740400000}'),j={name:"development/linux/ubuntu-install/ubuntu-install.md"};function H(M,s,$,T,I,N){return n(),i("div",null,s[0]||(s[0]=[t('<h1 id="ubuntu-xi-tong-an-zhuang-he-chu-shi-hua" tabindex="-1">Ubuntu 系统安装和初始化 <a class="header-anchor" href="#ubuntu-xi-tong-an-zhuang-he-chu-shi-hua" aria-label="Permalink to &quot;Ubuntu 系统安装和初始化&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#huan-jing-zhun-bei">⛵️ 环境准备</a></li><li><a href="#xi-tong-an-zhuang">⛵️ 系统安装</a><ul><li><a href="#xi-tong-jia-zai-jing-xiang">系统加载镜像</a></li><li><a href="#ubuntu-2404-desktop-de-an-zhuang">Ubuntu 24.04 Desktop 的安装</a></li><li><a href="#ubuntu-2404-server-de-an-zhuang">Ubuntu 24.04 Server 的安装</a></li><li><a href="#ubuntu-2204-desktop-de-an-zhuang">Ubuntu 22.04 Desktop 的安装</a></li><li><a href="#shou-dong-fen-qu">手动分区</a></li></ul></li><li><a href="#chu-shi-hua-pei-zhi">🚀 初始化配置</a><ul><li><a href="#geng-huan-ruan-jian-yuan">更换软件源</a></li><li><a href="#geng-xin-ruan-jian-bao">更新软件包</a></li><li><a href="#an-zhuang-chang-yong-ruan-jian">安装常用软件</a></li><li><a href="#pei-zhi-ssh">配置 SSH</a></li></ul></li></ul></nav><h2 id="huan-jing-zhun-bei" tabindex="-1">⛵️ 环境准备 <a class="header-anchor" href="#huan-jing-zhun-bei" aria-label="Permalink to &quot;⛵️ 环境准备&quot;">​</a></h2><p>安装 Ubuntu 系统，可以在物理机上安装，也可以在虚拟机上安装</p><h4 id="wu-li-ji-an-zhuang" tabindex="-1">物理机安装 <a class="header-anchor" href="#wu-li-ji-an-zhuang" aria-label="Permalink to &quot;物理机安装&quot;">​</a></h4><p>物理机安装，需要准备一个 U 盘，将系统镜像写入 U 盘，然后通过 U 盘启动安装，烧写系统的工具推荐使用 <a href="https://etcher.balena.io" target="_blank" rel="noreferrer">balenaEtcher</a>，这是一个<a href="https://github.com/balena-io/etcher" target="_blank" rel="noreferrer">开源</a>、跨平台的烧写工具</p><p>将镜像烧写到 U 盘之后，重启电脑，（一般需要长按F10/F12或者其他，不同电脑不一样）进入 BIOS 设置，将 U 盘作为启动项进入，即可引导进入安装界面</p><h4 id="xu-ni-ji-an-zhuang" tabindex="-1">虚拟机安装 <a class="header-anchor" href="#xu-ni-ji-an-zhuang" aria-label="Permalink to &quot;虚拟机安装&quot;">​</a></h4><p>虚拟机安装，需要借助虚拟机软件，然后导入系统镜像进行安装，不同操作系统下的虚拟机软件有所不同</p><ul><li><strong>在 Windows 上安装</strong></li></ul><p>2024年5月14日，VMware 推出了桌面虚拟化平台的最新版本 Workstation Pro 17.5.2 和 Fusion Pro 13.5.2，并且宣布 <a href="https://blogs.vmware.com/china/2024/05/16/workstation-%E5%92%8C-fusion-%E5%AF%B9%E4%B8%AA%E4%BA%BA%E4%BD%BF%E7%94%A8%E5%AE%8C%E5%85%A8%E5%85%8D%E8%B4%B9%EF%BC%8C%E4%BC%81%E4%B8%9A%E8%AE%B8%E5%8F%AF%E8%BD%AC%E5%90%91%E8%AE%A2%E9%98%85/" target="_blank" rel="noreferrer">Workstation 和 Fusion 对个人使用完全免费，企业许可转向订阅</a> (博通收购了 VMware 后干的一大好事)</p><p>可以参考上述的连接下载 <a href="https://support.broadcom.com/group/ecx/productdownloads?subfamily=VMware%20Workstation%20Pro" target="_blank" rel="noreferrer">VMware Workstation Pro 17.5.2 及以上版本</a>的，需要注册一个 Broadcom 账号，下载时选择「VMware Workstation Pro for Personal Use (For Windows)」版本</p><ul><li><strong>在 macOS 上安装</strong></li></ul><p>在 Mac 上会推荐使用 UTM 虚拟机，可以在 App Store 上下载，也可以在 <a href="https://getutm.app/" target="_blank" rel="noreferrer">UTM 官网</a> 下载</p><h4 id="zai-docker-shang-an-zhuang" tabindex="-1">在 Docker 上安装 <a class="header-anchor" href="#zai-docker-shang-an-zhuang" aria-label="Permalink to &quot;在 Docker 上安装&quot;">​</a></h4><p>参考 <a href="https://hubgw.docker.com/_/ubuntu" target="_blank" rel="noreferrer">ubuntu - Official Image | Docker Hub</a>，<code>docker pull ubuntu</code> 即可下载最新的 Ubuntu 镜像</p><h2 id="xi-tong-an-zhuang" tabindex="-1">⛵️ 系统安装 <a class="header-anchor" href="#xi-tong-an-zhuang" aria-label="Permalink to &quot;⛵️ 系统安装&quot;">​</a></h2><p>Ubuntu 各版本的 <a href="https://ubuntu.com/about/release-cycle" target="_blank" rel="noreferrer">发布周期</a> 如下</p><table tabindex="0"><thead><tr><th>版本号 (代号)</th><th>发布</th><th>结束支持</th></tr></thead><tbody><tr><td><a href="https://releases.ubuntu.com/noble/" target="_blank" rel="noreferrer">24.04 LTS (Noble Numbat)</a></td><td>Apr 2024</td><td>Apr 2029</td></tr><tr><td>23.10 (Mantic Minotaur)</td><td>Oct 2023</td><td>Jul 2024</td></tr><tr><td><a href="https://releases.ubuntu.com/jammy/" target="_blank" rel="noreferrer">22.04.4 LTS (Jammy Jellyfish)</a></td><td>Apr 2022</td><td>Apr 2027</td></tr><tr><td><a href="https://releases.ubuntu.com/focal/" target="_blank" rel="noreferrer">20.04.6 LTS (Focal Fossa)</a></td><td>Apr 2020</td><td>Apr 2025</td></tr><tr><td><a href="https://releases.ubuntu.com/bionic/" target="_blank" rel="noreferrer">18.04.6 LTS (Bionic Beaver)</a></td><td>Apr 2018</td><td>Apr 2023</td></tr></tbody></table><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>Ubuntu 各架构的下载链接:</p><ul><li><strong>AMD64</strong>: <a href="https://releases.ubuntu.com" target="_blank" rel="noreferrer"><em>These releases of Ubuntu are available</em></a></li><li><strong>ARM</strong>: ARM 架构除了树莓派之外的不提供桌面版下载，在 <a href="https://ubuntu.com/download/server/arm" target="_blank" rel="noreferrer"><em>Ubuntu Server for ARM</em></a> -&gt; <a href="https://cdimage.ubuntu.com/releases/" target="_blank" rel="noreferrer">Alternative and previous releases ›</a></li><li><strong>树莓派</strong>: <a href="https://ubuntu.com/download/raspberry-pi" target="_blank" rel="noreferrer"><em>Install Ubuntu on a Raspberry Pi</em></a> | <a href="https://cn.ubuntu.com/download/raspberry-pi" target="_blank" rel="noreferrer">在树莓派上安装Ubuntu</a></li><li><strong>RISC-V</strong>: <a href="https://ubuntu.com/download/risc-v" target="_blank" rel="noreferrer"><em>Download Ubuntu for RISC-V Platforms</em></a></li></ul></div><h3 id="xi-tong-jia-zai-jing-xiang" tabindex="-1">系统加载镜像 <a class="header-anchor" href="#xi-tong-jia-zai-jing-xiang" aria-label="Permalink to &quot;系统加载镜像&quot;">​</a></h3><p><img src="'+e+'" alt="install-2404-step-0-boot.png"></p><h3 id="ubuntu-2404-desktop-de-an-zhuang" tabindex="-1">Ubuntu 24.04 Desktop 的安装 <a class="header-anchor" href="#ubuntu-2404-desktop-de-an-zhuang" aria-label="Permalink to &quot;Ubuntu 24.04 Desktop 的安装&quot;">​</a></h3><p>「<strong>选择语言</strong>」</p><p><img src="'+l+'" alt="install-2404-step-1-choose_language.png"></p><p>「<strong>可访问性</strong>」设置可以跳过</p><p><img src="'+p+'" alt="install-2404-step-2-accessibility.png"></p><p>「<strong>键盘布局</strong>」选择默认</p><p><img src="'+r+'" alt="install-2404-step-3-keyboard_layout.png"></p><p>在最后安装过程中，可能会从原始软件源更新软件，如果网络不好，会导致安装过程极慢，因此建议在「<strong>连接到互联网</strong>」设置中，（建议）暂时不连接互联网，等安装完成进入系统后，（如果有必要）换源后再进行更新</p><p><img src="'+h+'" alt="install-2404-setp-4-connect_network.png"></p><p>「<strong>安装类型</strong>」中，选择下「优化您的计算机」，「自动安装」应该是 Ubuntu24.04新加入的功能，可以通过配置文件自动安装</p><p><img src="'+o+'" alt="install-2404-setp-5-install_type.png"></p><p>「<strong>应用程序和更新</strong>」选择默认集合进行最小安装，需要的软件可以在安装完成后手动安装需求的软件</p><p><img src="'+d+'" alt="install-2404-setp-6-app.png"></p><p>「<strong>优化您的计算机</strong>」中勾选全部选项，</p><p><img src="'+k+'" alt="install-2404-setp-7-optimize_computer.png"></p><p>「<strong>安装类型</strong>」选择手动分区</p><p><img src="'+g+'" alt="install-2404-setp-8-install_type.png"></p><p>接下来，是非常重要的分区设置</p><ol><li>查看可用的安装空间，选择剩余空间中，点击左下角的「➕」键，新建分区</li></ol><p><img src="'+u+'" alt="install-2404-setp-9-manual_partition_1.png"></p><ol start="2"><li>分区的选择，需要根据电脑的存储配置进行分配</li></ol><p>一般有这几种情况：</p><ul><li>只有一个硬盘，假定为「SSD」</li><li>有两个硬盘「 SSD+ HDD」，如果是「SSD+SSD」，那么选择读写较快的硬盘为「SSD」，另一个慢速硬盘假定为「HDD」</li><li>三个硬盘「 SSD+ HDD1+HDD2」，其中还是将最快速的硬盘作为「SSD」</li></ul><p>根据上述的情况假设，可以安装如下情况进行分区（仅供参考）：</p><table tabindex="0"><thead><tr><th>分区</th><th>格式</th><th>分配盘</th><th>备注</th></tr></thead><tbody><tr><td><code>/boot</code></td><td><code>Ext4</code></td><td>SSD</td><td>内核及引导系统程序所需要的空间，一般预留 512/1024MB 即可</td></tr><tr><td><code>Swap</code></td><td>交换空间</td><td>SSD</td><td>根据需求配置，也可以不给。因为 swap 可以后续自己创建（创建在SSD上）</td></tr><tr><td><code>/</code></td><td><code>Ext4</code></td><td>SSD</td><td>剩余全部分配给根目录</td></tr><tr><td><code>/home</code></td><td><code>Ext4</code></td><td>HDD/HDD1</td><td>全部分配</td></tr><tr><td><code>/opt</code></td><td><code>Ext4</code></td><td>HDD2</td><td>全部分配，一般是第三方软件默认安装位置，也可以安装一些自己的软件</td></tr><tr><td><code>/opt/data</code></td><td><code>Ext4</code></td><td>HDD3</td><td>如果还有硬盘，一般就是用来存放训练数据集</td></tr></tbody></table><p><img src="'+c+'" alt="install-2404-setp-9-manual_partition_2.png"></p><ol start="3"><li>完成分区后，Ubuntu 24.04会自动设置 <code>/boot</code> 引导分区，相比于前代更加方便了</li></ol><p><img src="'+b+'" alt="install-2404-setp-9-manual_partition_3.png"></p><p>「<strong>设置您的账户</strong>」中，设置用户名</p><p><img src="'+F+'" alt="install-2404-setp-10-setup_account.png"></p><p>「<strong>选择时区</strong>」，默认即可</p><p><img src="'+m+'" alt="install-2404-setp-11-time_zone.png"></p><p>「<strong>准备安装</strong>」确认安装类型，点击安装进入下一步</p><p><img src="'+y+'" alt="install-2404-setp-12-ready_to_install.png"></p><p>「<strong>安装</strong>」比较久，建议断掉所有网络连接（有线），避免从互联网下载或更新软件，增加安装时间，安装或者更新软件都可以在安装完成后进行</p><p><img src="'+E+'" alt="install-2404-setp-13-installing.png"></p><p>「<strong>安装完成</strong>」，点击「立即启动」，按照提示「Please remove the installation medium, then press ENTER:」，移除安装介质，按下回车键重启</p><p><img src="'+_+`" alt="install-2404-setp-14-finish.png"></p><h3 id="ubuntu-2404-server-de-an-zhuang" tabindex="-1">Ubuntu 24.04 Server 的安装 <a class="header-anchor" href="#ubuntu-2404-server-de-an-zhuang" aria-label="Permalink to &quot;Ubuntu 24.04 Server 的安装&quot;">​</a></h3><p>安装桌面</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ubuntu-desktop-minimal</span></span></code></pre></div><p>安装locales</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> language-pack-zh-hans</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update-locale</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LANG=zh_CN.UTF-8</span></span></code></pre></div><p>重启 ，安装文字</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ttf-wqy-microhei</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ttf-wqy-zenhei</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfonts-intl-chinese</span></span></code></pre></div><h3 id="ubuntu-2204-desktop-de-an-zhuang" tabindex="-1">Ubuntu 22.04 Desktop 的安装 <a class="header-anchor" href="#ubuntu-2204-desktop-de-an-zhuang" aria-label="Permalink to &quot;Ubuntu 22.04 Desktop 的安装&quot;">​</a></h3><p>在系统加载镜像后，Ubuntu 22.04 会执行 <code>Checking disks</code>（检查完整性），然后进入安装流程</p><p>「<strong>选择语言</strong>」英文或者中文均可</p><p><img src="`+C+'" alt="install-2204-step-1-choose_language.png"></p><p>「<strong>键盘布局</strong>」选择默认</p><p><img src="'+f+'" alt="install-2204-step-2-keyboard_layout.png"></p><p>「<strong>更新和其他软件</strong>」选择「最小安装」避免过多无用软件，取消勾选「安装Ubuntu时下载更新」加快安装，勾选☑️「为图形或无线。。。」确保驱动自动安装</p><p><img src="'+B+'" alt="install-2204-step-3-updates_and_other_software.png"></p><p>「<strong>安装类型</strong>」（推荐）选择「其他选项」确保清楚如何分区，参考 <a href="#手动分区">手动分区</a> 进行分区</p><p><img src="'+v+'" alt="install-2204-step-4-install_partition.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+D+'" alt="install-2204-step-4-install_partition_1.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+A+'" alt="install-2204-step-4-install_partition_2.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+x+'" alt="install-2204-step-4-install_partition_3.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+q+'" alt="install-2204-step-4-install_partition_4.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+S+'" alt="install-2204-step-4-install_partition_5.png"></p><p>「<strong>手动分区</strong>」</p><p><img src="'+z+'" alt="install-2204-step-4-install_partition_6.png"></p><p>「<strong>选择时区</strong>」选择默认</p><p><img src="'+U+'" alt="install-2204-step-5-time_zone.png"></p><p>「<strong>设置您的账户</strong>」设置用户名</p><p><img src="'+P+'" alt="install-2204-step-6-account.png"></p><p>「<strong>准备安装</strong>」确认安装类型，点击安装进入下一步</p><p><img src="'+w+`" alt="install-2204-step-7-installing.png"></p><h3 id="shou-dong-fen-qu" tabindex="-1">手动分区 <a class="header-anchor" href="#shou-dong-fen-qu" aria-label="Permalink to &quot;手动分区&quot;">​</a></h3><span id="手动分区"></span><h2 id="chu-shi-hua-pei-zhi" tabindex="-1">🚀 初始化配置 <a class="header-anchor" href="#chu-shi-hua-pei-zhi" aria-label="Permalink to &quot;🚀 初始化配置&quot;">​</a></h2><h3 id="geng-huan-ruan-jian-yuan" tabindex="-1">更换软件源 <a class="header-anchor" href="#geng-huan-ruan-jian-yuan" aria-label="Permalink to &quot;更换软件源&quot;">​</a></h3><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>事实上，更换软件源不是必须的，如果能稳定地连接到原始默认的源，那么是没有必要换源的，可能会获取不到某些软件；但是，如果连接不稳定的情况，那么换源是有必要的。</p></div><p>在换源之前应该先测试一下原始源的连接情况，如果连接状况良好，不需要换源，可以跳转至步骤 <a href="#inner-link-geng-xin-ruan-jian-bao">“更新软件包”</a> 进行更新。</p><p>在更换软件源之前，需要先备份原始的软件源：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list.bak</span></span></code></pre></div><p>更换软件源应该按照对应源的手册进行操作：</p><table tabindex="0"><thead><tr><th>ubuntu 软件源</th><th>软件源使用帮助</th><th>ports 源使用帮助</th></tr></thead><tbody><tr><td>清华大学开源软件镜像站(<a href="https://mirrors.tuna.tsinghua.edu.cn" target="_blank" rel="noreferrer">TUNA</a>)</td><td><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/" target="_blank" rel="noreferrer">x86, x86_64</a></td><td><a href="https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/" target="_blank" rel="noreferrer">ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等</a></td></tr><tr><td>中国科学技术大学开源软件镜像(<a href="https://mirrors.ustc.edu.cn" target="_blank" rel="noreferrer">USTC</a>)</td><td><a href="https://mirrors.ustc.edu.cn/help/ubuntu.html" target="_blank" rel="noreferrer">AMD64(x86_64), Intel x86</a></td><td><a href="https://mirrors.ustc.edu.cn/help/ubuntu-ports.html" target="_blank" rel="noreferrer">arm64, armhf, PowerPC, ppc64el, s390x</a></td></tr><tr><td>上海交通大学 Linux 用户组 (<a href="https://mirrors.sjtug.sjtu.edu.cn" target="_blank" rel="noreferrer">SJTUG</a>)</td><td><a href="https://mirrors.sjtug.sjtu.edu.cn/docs/ubuntu" target="_blank" rel="noreferrer">ubuntu</a></td><td></td></tr></tbody></table><p>可以从上述软件源中选择一个并按照「使用帮助」进行换源，更换软件源完成后，按照 <a href="#inner-link-geng-xin-ruan-jian-bao">“更新软件包”</a> 步骤更新软件包。</p><h3 id="geng-xin-ruan-jian-bao" tabindex="-1">更新软件包 <a class="header-anchor" href="#geng-xin-ruan-jian-bao" aria-label="Permalink to &quot;更新软件包&quot;">​</a></h3><div id="inner-link-geng-xin-ruan-jian-bao"></div><p>从软件源获取最新的软件包列表</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><p>更新（全部）已安装的软件包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><h3 id="an-zhuang-chang-yong-ruan-jian" tabindex="-1">安装常用软件 <a class="header-anchor" href="#an-zhuang-chang-yong-ruan-jian" aria-label="Permalink to &quot;安装常用软件&quot;">​</a></h3><p>安装基本的软件</p><ul><li><code>net-tools</code>：网络工具，可以通过 <code>ifconfig</code> 查看网络信息</li><li><code>openssh-server</code>：SSH 服务端，安装后，可以通过 SSH 远程连接到该设备</li><li><code>git</code>：版本控制工具，获取项目</li><li><code>curl</code> 和 <code>wget</code>：网络工具，可以通过网络下载文件</li><li><code>vim</code> 和 <code>nano</code>：文本编辑器</li></ul><p>其中有一些软件已经默认安装了，安装命令如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    net-tools</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nano</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> btop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tree</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    python3-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-venv</span></span></code></pre></div><h3 id="pei-zhi-ssh" tabindex="-1">配置 SSH <a class="header-anchor" href="#pei-zhi-ssh" aria-label="Permalink to &quot;配置 SSH&quot;">​</a></h3><p>使用 SSH 登陆远程服务器前，需要确保远程服务器安装并且开启了 SSH 服务，一般来说 Linux 服务器会默认安装 <code>openssh-server</code> ，而一些桌面版的 Linux 系统可能没有安装 SSH 服务，需要手动安装。对于 Ubuntu ，可以如下安装</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openssh-server</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div><p>在登陆的时候，会自动将「本地私钥」和「服务器公钥」进行匹配，如果匹配成功，则可以免密登录。这在使用 VSCode 远程开发的时候非常有用，可以免去每次输入密码的麻烦。 (关于 VScode 远程开发可以参考 <a href="https://code.visualstudio.com/docs/remote/ssh" target="_blank" rel="noreferrer"><em>&quot;Remote Development using SSH&quot;</em></a>)</p><p>使用 <code>ssh-copy-id</code> 命令可以将「本地公钥」传输协议到远程服务器并存储在「公钥认证」文件中，例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-copy-id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">identity_fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">hostnam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><ul><li><code>-i</code> 指定「本地公钥」的路径，例如 <code>-i ~/.ssh/sshkey.pub</code></li><li><code>&lt;user&gt;@&lt;hostname&gt;</code> 远程服务器的用户名和主机名，例如 <code>ubuntu@192.168.1.1</code></li><li><code>-p</code> 如果远程服务器的 SSH 端口不是默认的 22 端口，可以通过 <code>-p &lt;port&gt;</code> 指定端口</li></ul><p>（对于 win 系统，没有 <code>ssh-copy-id</code> 命令，）也可以手动将「本地公钥」复制到远程服务器的 <code>~/.ssh/authorized_keys</code> 文件中 (如果不存在，需要手动创建) ，但是推荐使用 <code>ssh-copy-id</code> 命令（win 可以使用 git bash），因为该命令会自动创建文件，并自动设置权限</p><p>这里提供一个生成密钥并自动上传至服务器的脚本 <code>ssh-keygen-auto.sh</code> ，高亮部分需要自行修改：</p><details class="details custom-block"><summary>查看完整代码</summary><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark has-highlighted vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ========================================</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;server&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 生成的密钥名称</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">username</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ubuntu&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       # 服务器用户名，如果仅生成密钥，此项可忽略</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">server_ip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192.168.1.6&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 服务器 IP</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;22&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">               # 服务器端口，默认 22</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ========================================</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成密钥文件路径，密钥名称为 sshkey-&lt;key_name&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.ssh/sshkey-\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.ssh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $HOME</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/.ssh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成本地密钥</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${key_file} ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;密钥已存在: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${comment</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 comment 为空，则注释为 key_file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rsa</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${key_file} </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">-C</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">comment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上传公钥 至 服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh-copy-id</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${key_file}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.pub</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${port} \${username}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${server_ip} </span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot; SEE :\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">key_file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div></details>`,127)]))}const L=a(j,[["render",H]]);export{V as __pageData,L as default};