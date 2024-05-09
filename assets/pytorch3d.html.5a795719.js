import{_ as e,o as r,c as a,a as o}from"./app.e2a6bb87.js";var c="/assets/architecture_renderer.b1ff497f.jpg",d="/assets/transforms_overview.337a1843.jpg",t="/assets/world_camera_image.66f2b80b.jpg",s="/assets/camera_coordinate_systems.3b7b4f13.png";const i={},n=o('<h1 id="pytorch3d-\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#pytorch3d-\u5B66\u4E60" aria-hidden="true">#</a> Pytorch3D \u5B66\u4E60</h1><h2 id="\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6E32\u67D3" aria-hidden="true">#</a> \u6E32\u67D3</h2><p>\u6E32\u67D3\u6D41\u7A0B\u662F\u6A21\u5757\u5316\u7684\u8BBE\u8BA1</p><p><img src="'+c+'" alt="architecture renderer"></p><h3 id="\u5149\u6805\u5316" tabindex="-1"><a class="header-anchor" href="#\u5149\u6805\u5316" aria-hidden="true">#</a> \u5149\u6805\u5316</h3><p>\u5149\u6805\u5668</p><h2 id="\u5750\u6807\u8F6C\u6362\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5750\u6807\u8F6C\u6362\u7EA6\u5B9A" aria-hidden="true">#</a> \u5750\u6807\u8F6C\u6362\u7EA6\u5B9A</h2><p>\u6E32\u67D3\u9700\u8981\u5728\u51E0\u4E2A\u4E0D\u540C\u7684\u5750\u6807\u7CFB\u4E4B\u95F4\u8FDB\u884C\u8F6C\u6362\uFF1A\u300C<strong>\u4E16\u754C\u7A7A\u95F4</strong>\u300D\u3001\u300C<strong>\u89C6\u56FE/\u76F8\u673A\u7A7A\u95F4</strong>\u300D\u3001\u300C<strong>NDC(Normalized Device Coordinates)\u7A7A\u95F4</strong>\u300D\u548C\u300C<strong>\u5C4F\u5E55\u7A7A\u95F4</strong>\u300D\u3002</p><p>\u5728\u6BCF\u4E00\u6B21\u8F6C\u6362\u4E2D\u4E86\u89E3\u300C\u76F8\u673A\u7684\u4F4D\u7F6E\u300D\u3001\u300C+X\u3001+Y\u3001+Z\u8F74\u7684\u5BF9\u9F50\u65B9\u5F0F\u300D\u4EE5\u53CA\u300C\u503C\u7684\u8303\u56F4\u300D\u90FD\u5F88\u91CD\u8981\u3002\u4E0B\u56FE\u6982\u8FF0\u4E86PyTorch3D\u4F7F\u7528\u7684\u7EA6\u5B9A\u3002</p><p><img src="'+d+'" alt="Coordinate transformation conventions"></p><p>\u4F8B\u5982\uFF0C\u7ED9\u5B9A\u4E00\u4E2A\u8336\u58F6\u7F51\u683C\uFF0C\u4E16\u754C\u5750\u6807\u7CFB\u3001\u76F8\u673A\u5750\u6807\u7CFB\u548C\u56FE\u50CF\u5982\u4E0B\u56FE\u6240\u793A\u3002\u6CE8\u610F\uFF0C\u4E16\u754C\u548C\u76F8\u673A\u5750\u6807\u7CFB\u7684+z\u65B9\u5411\u6307\u5411\u9875\u9762\u3002</p><p><img src="'+t+'" alt=""></p><p>\u867D\u7136\u6211\u4EEC\u8BD5\u56FE\u6A21\u62DFOpenGL\u7684\u51E0\u4E2A\u65B9\u9762\uFF0C\u4F46\u5750\u6807\u7CFB\u7EA6\u5B9A\u5B58\u5728\u5DEE\u5F02\u3002</p><ul><li>PyTorch3D\u4E2D\u7684\u9ED8\u8BA4\u4E16\u754C\u5750\u6807\u7CFB\u5177\u6709\u6307\u5411\u5C4F\u5E55\u7684+Z\uFF0C\u800C\u5728OpenGL\u4E2D\uFF0C+Z\u6307\u5411\u5C4F\u5E55\u4E4B\u5916\u3002\u4E24\u4EBA\u90FD\u662F\u53F3\u624B\u3002</li><li>PyTorch3D\u4E2D\u7684NDC\u5750\u6807\u7CFB\u4E0EOpenGL\u4E2D\u7684\u5DE6\u624BNDC\u5750\u6807\u7CFB\u7EDF\u76F8\u6BD4\u662F\u53F3\u624B\u7684\uFF08\u6295\u5F71\u77E9\u9635\u5207\u6362\u60EF\u7528\u624B\uFF09\u3002</li></ul><h2 id="\u76F8\u673A" tabindex="-1"><a class="header-anchor" href="#\u76F8\u673A" aria-hidden="true">#</a> \u76F8\u673A</h2><h3 id="\u76F8\u673A\u5750\u6807\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u76F8\u673A\u5750\u6807\u7CFB\u7EDF" aria-hidden="true">#</a> \u76F8\u673A\u5750\u6807\u7CFB\u7EDF</h3><p><img src="'+s+'" alt="camera_coordinate_systems"></p><p>\u6709 4 \u4E2A\u5750\u6807\u7CFB\u7EDF\uFF1A</p><ul><li><p>\u300C<strong>\u4E16\u754C\u5750\u6807\u7CFB</strong>\u300D\uFF1A\u5BF9\u8C61/\u573A\u666F\u6240\u751F\u6D3B\u7684\u7CFB\u7EDF</p></li><li><p>\u300C<strong>\u76F8\u673A\u5750\u6807\u7CFB</strong>\u300D\uFF1A\u539F\u70B9\u5728\u50CF\u5E73\u9762\u4E0A\uFF0CZ\u8F74\u5782\u76F4\u4E8E\u50CF\u5E73\u9762\u3002\u5728 PyTorch3D \u4E2D\uFF0C\u5047\u5B9A <code>+X</code> \u6307\u5411\u5DE6\u4FA7\uFF0C<code>+Y</code> \u6307\u5411\u4E0A\u65B9\uFF0C<code>+Z</code> \u6307\u5411\u5C4F\u5E55\u5916\u3002\u901A\u8FC7\u65CB\u8F6C\u77E9\u9635\uFF08<code>R</code>\uFF09\u548C\u5E73\u79FB\u77E9\u9635\uFF08<code>T</code>\uFF09\uFF0C\u5C06\u89C6\u89D2\u4ECE\u4E16\u754C\u5750\u6807\u7CFB\u8F6C\u5316\u81F3\u76F8\u673A\u5750\u6807\u7CFB</p></li><li><p>\u300C<strong>NDC</strong>\u300D\uFF1A\u8FD9\u662F\u5C06\u5BF9\u8C61/\u573A\u666F\u7684\u6E32\u67D3\u90E8\u5206\u9650\u5236\u5728\u4F53\u4E2D\u7684\u6807\u51C6\u5316\u5750\u6807\u7CFB\u3002\u4E5F\u79F0\u4E3A\u89C6\u56FE\u4F53\u79EF\u3002\u5BF9\u4E8E\u6B63\u65B9\u5F62\u56FE\u50CF\uFF0C\u6839\u636EPyTorch3D\u7EA6\u5B9A\uFF0C<code>(+1, +1, znear)</code> \u662F\u4F53\u7684\u5DE6\u4E0A\u89D2(\u8FD1\u89D2)\uFF0C<code>(-1, -1, zfar)</code> \u662F\u4F53\u7684\u53F3\u4E0B\u89D2(\u8FDC\u89D2)\u3002\u5BF9\u4E8E\u975E\u6B63\u65B9\u5F62\u56FE\u50CF\uFF0CXY\u4E2D\u4F53\u79EF\u957F\u5EA6\u6700\u5C0F\u7684\u8FB9\u5728 <code>[-1, 1]</code> \u7684\u8303\u56F4\u5185\uFF0C\u800C\u8F83\u5927\u7684\u8FB9\u5728 <code>[s, s]</code> \u7684\u8303\u56F4\u5185\u3002\u5176\u4E2Ds\u662F\u7EB5\u6A2A\u6BD4\uFF0Cs&gt;1\uFF08\u8F83\u5927\u7684\u8FB9\u9664\u4EE5\u8F83\u5C0F\u7684\u8FB9\uFF09\u3002\u4ECE\u89C6\u56FE\u5230NDC\u7684\u8F6C\u6362\u53D1\u751F\u5728\u5E94\u7528\u76F8\u673A\u6295\u5F71\u77E9\u9635\uFF08P\uFF09\u4E4B\u540E\u3002</p></li><li><p>\u300C<strong>\u5C4F\u5E55\u5750\u6807\u7CFB</strong>\u300D\uFF1A\u8FD9\u662F\u89C6\u56FE\u4F53\u79EF\u7684\u53E6\u4E00\u79CD\u8868\u793A\u65B9\u5F0F\uFF0CXY\u5750\u6807\u5728\u50CF\u7D20\u7A7A\u95F4\u800C\u4E0D\u662F\u6807\u51C6\u5316\u7A7A\u95F4\u4E2D\u5B9A\u4E49\u3002<code>(0, 0)</code>\u662F\u5DE6\u4E0A\u50CF\u7D20\u7684\u5DE6\u4E0A\u89D2\uFF0C<code>(W, H)</code>\u662F\u53F3\u4E0B\u50CF\u7D20\u7684\u53F3\u4E0B\u89D2\u3002</p></li></ul><h3 id="\u5B9A\u4E49\u76F8\u673A" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u76F8\u673A" aria-hidden="true">#</a> \u5B9A\u4E49\u76F8\u673A</h3><p>PyTorch3D \u4E2D\u7684\u76F8\u673A\u5C06\u5BF9\u8C61/\u573A\u666F\u4ECE\u4E16\u754C\u8F6C\u6362\u4E3A\u89C6\u56FE\uFF0C\u65B9\u6CD5\u662F\u9996\u5148\u5C06\u5BF9\u8C61/\u573A\u666F\u8F6C\u6362\u4E3A\u89C6\u56FE\uFF08\u901A\u8FC7\u8F6C\u6362 <code>R</code> \u548C <code>T</code> \uFF09\uFF0C\u7136\u540E\u901A\u8FC7\u6295\u5F71\u77E9\u9635 <code>P = K[R | T]</code> \u5C063D\u5BF9\u8C61/\u573A\u666F\u6295\u5F71\u5230\u6807\u51C6\u5316\u7A7A\u95F4\uFF0C\u5176\u4E2D <code>K</code> \u662F\u5185\u53C2\u77E9\u9635\u3002</p><blockquote><p><code>K</code> \u4E2D\u7684\u76F8\u673A\u53C2\u6570\u5B9A\u4E49\u5F52\u4E00\u5316\u7A7A\u95F4\u3002\u5982\u679C\u7528\u6237\u5728 ND C\u7A7A\u95F4\u4E2D\u5B9A\u4E49\u76F8\u673A\u53C2\u6570\uFF0C\u5219\u53D8\u6362\u9879\u76EE\u6307\u5411 NDC \u3002\u5982\u679C\u76F8\u673A\u53C2\u6570\u5728\u5C4F\u5E55\u7A7A\u95F4\u4E2D\u5B9A\u4E49\uFF0C\u5219\u53D8\u6362\u540E\u7684\u70B9\u5728\u5C4F\u5E55\u7A7A\u95F4\u4E2D\u3002</p></blockquote><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li><a href="https://zhuanlan.zhihu.com/p/585346760" target="_blank" rel="noopener noreferrer">\u7406\u89E3\u53EF\u5FAE\u6E32\u67D3 (\u4E8C) \uFF1ASoft Rasterizer - Riser\u7684\u6587\u7AE0 - \u77E5\u4E4E</a></li></ul>',24),h=[n];function p(l,_){return r(),a("div",null,h)}var f=e(i,[["render",p],["__file","pytorch3d.html.vue"]]);export{f as default};