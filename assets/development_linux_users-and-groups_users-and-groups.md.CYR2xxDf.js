import{_ as o,c as a,o as e,a4 as t}from"./chunks/framework.CUJjVNbl.js";const b=JSON.parse('{"title":"用户和用户组","description":"","frontmatter":{},"headers":[],"relativePath":"development/linux/users-and-groups/users-and-groups.md","filePath":"development/linux/users-and-groups/users-and-groups.md","lastUpdated":1724588569000}'),n={name:"development/linux/users-and-groups/users-and-groups.md"},u=t('<h1 id="yong-hu-he-yong-hu-zu" tabindex="-1">用户和用户组 <a class="header-anchor" href="#yong-hu-he-yong-hu-zu" aria-label="Permalink to &quot;用户和用户组&quot;">​</a></h1><h2 id="linux-xia-yong-hu-he-yong-hu-zu-de-ji-ben-gai-nian" tabindex="-1">Linux 下用户和用户组的基本概念 <a class="header-anchor" href="#linux-xia-yong-hu-he-yong-hu-zu-de-ji-ben-gai-nian" aria-label="Permalink to &quot;Linux 下用户和用户组的基本概念&quot;">​</a></h2><p>在服务器环境中，「用户」的概念是明确的：服务器的管理员可以为不同的使用者创建用户，分配不同的权限，保障系统的正常运行；也可以为网络服务创建用户，通过权限限制，以减小服务被攻击时对系统安全的破坏。</p><p>在 Linux 系统中，用户的信息存储在 <code>/etc/passwd</code> 文件中，用户的密码存储在 <code>/etc/shadow</code> 文件中，用户组的信息存储在 <code>/etc/group</code> 文件中。</p><h2 id="yong-hu" tabindex="-1">用户 <a class="header-anchor" href="#yong-hu" aria-label="Permalink to &quot;用户&quot;">​</a></h2><h3 id="root-yong-hu" tabindex="-1">root 用户 <a class="header-anchor" href="#root-yong-hu" aria-label="Permalink to &quot;root 用户&quot;">​</a></h3><div class="caution custom-block github-alert"><p class="custom-block-title">CAUTION</p><p>我们知道，root 用户可以对系统做极其危险的操作。当使用 root 权限执行命令时（如使用 sudo），一定要小心、谨慎，理解命令的含义之后再按下回车。请不要复制网络上所谓的「Linux 优化命令」等，以 root 权限执行，否则可能会带来灾难性的后果。 以下是一些会对系统带来毁灭性破坏的例子。 再重复一遍，不要执行下面的命令！</p><ul><li><code>rm -rf /</code> 删除系统中的所有可以删除的文件，包括被挂载的其他分区。即使不以 root 权限执行，也可以删掉自己的所有文件。</li><li><code>mkfs.ext4 /dev/sda</code> 将系统的第一块硬盘直接格式化为 ext4 文件系统。这会破坏其上所有的文件。</li><li><code>dd if=/dev/urandom of=/dev/sda</code> 对系统的第一块硬盘直接写入伪随机数。这会破坏其上所有的文件，并且找回文件的可能性降低。</li><li><code>:(){ :|: &amp; };:</code> 被称为「Fork 炸弹」，会消耗系统所有的资源。在未对进程资源作限制的情况下，只能通过重启系统解决，所有未保存的数据会丢失。</li></ul></div><h3 id="xi-tong-yong-hu" tabindex="-1">系统用户 <a class="header-anchor" href="#xi-tong-yong-hu" aria-label="Permalink to &quot;系统用户&quot;">​</a></h3><p>除了你、root 和其他在用你的电脑/服务器的人（如果有）以外，剩下还有很多用户，如 <code>nobody</code>, <code>www-data</code> 等。它们由系统或相关程序创建，用于执行服务等系统任务。不要随意删除这些用户，以免系统运行出现问题。</p><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p>一般地，在 Linux 中，系统用户的 UID 有一个指定范围，而这段范围在各个发行版中可能不同。如 Debian 使用了 100-999, 60000-64999 等区间分配给系统用户。 此外，由于系统用户的特殊性，它们一般默认禁止使用密码登录。</p></div><h3 id="pu-tong-yong-hu" tabindex="-1">普通用户 <a class="header-anchor" href="#pu-tong-yong-hu" aria-label="Permalink to &quot;普通用户&quot;">​</a></h3><h2 id="qie-huan-yong-hushi-yong-su-he-sudo" tabindex="-1">切换用户：使用 su 和 sudo <a class="header-anchor" href="#qie-huan-yong-hushi-yong-su-he-sudo" aria-label="Permalink to &quot;切换用户：使用 su 和 sudo&quot;">​</a></h2><div class="tip custom-block github-alert"><p class="custom-block-title">TIP</p><p><code>sudo !!</code> 是一个非常有用的技巧。当你在执行一个命令时，发现自己忘记加 <code>sudo</code>，可以直接输入 <code>sudo !!</code>，这样就会以 root 权限重新执行上一条命令。</p></div><h2 id="yong-hu-zu" tabindex="-1">用户组 <a class="header-anchor" href="#yong-hu-zu" aria-label="Permalink to &quot;用户组&quot;">​</a></h2><h3 id="yong-hu-zu-de-ji-ben-gai-nian" tabindex="-1">用户组的基本概念 <a class="header-anchor" href="#yong-hu-zu-de-ji-ben-gai-nian" aria-label="Permalink to &quot;用户组的基本概念&quot;">​</a></h3><h3 id="yong-hu-zu-1" tabindex="-1">用户组 <a class="header-anchor" href="#yong-hu-zu-1" aria-label="Permalink to &quot;用户组&quot;">​</a></h3>',16),d=[u];function i(r,s,h,l,c,p){return e(),a("div",null,d)}const m=o(n,[["render",i]]);export{b as __pageData,m as default};
