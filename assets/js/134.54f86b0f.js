(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{482:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git工具-查看修订版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git工具-查看修订版本"}},[t._v("#")]),t._v(" Git工具-查看修订版本")]),t._v(" "),a("p",[t._v("Git 能够以多种方式来指定单个提交、一组提交、或者一定范围内的提交。 了解它们并不是必需的，但是了解一下总没坏处。")]),t._v(" "),a("p",[t._v("修订版本指的是："),a("strong",[t._v("提交")])]),t._v(" "),a("h2",{attrs:{id:"单个修订版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单个修订版本"}},[t._v("#")]),t._v(" 单个修订版本")]),t._v(" "),a("p",[t._v("你可以通过任意一个提交的 40 个字符的完整 SHA-1 散列值来指定它， 不过还有很多更人性化的方式来做同样的事情。本节将会介绍获取单个提交的多种方法。")]),t._v(" "),a("h2",{attrs:{id:"简短的-sha-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简短的-sha-1"}},[t._v("#")]),t._v(" 简短的 SHA-1")]),t._v(" "),a("p",[t._v("Git 十分智能，你只需要提供 SHA-1 的前几个字符就可以获得对应的那次提交， 当然你提供的 SHA-1 字符数量"),a("strong",[t._v("不得少于 4 个")]),t._v("，并且没有歧义——也就是说， 当前对象数据库中没有其它对象以这段 SHA-1 开头。")]),t._v(" "),a("p",[t._v("例如，要查看你知道其中添加了某个功能的提交，首先运行 "),a("code",[t._v("git log")]),t._v(" 命令来定位该提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\ncommit 734713bc047d87bf7eac9674765ae793478c50d3\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Fri Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":32:33 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2009")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    fixed refs handling, added gc auto, updated tests\n\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nMerge: 1c002dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". 35cfb2b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Thu Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":08:43 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    Merge commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phedders/rdocs'")]),t._v("\n\ncommit 1c002dd4b536e7479fe34593e72e6c6c1819e53b\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Thu Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":58:32 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    added some blame and merge stuff\n")])])]),a("h3",{attrs:{id:"查看给定sha-1值的提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看给定sha-1值的提交"}},[t._v("#")]),t._v(" 查看给定SHA-1值的提交")]),t._v(" "),a("p",[t._v("在本例中，假设你想要的提交其 SHA-1 以 "),a("code",[t._v("1c002dd....")]),t._v(" 开头， 那么你可以用如下几种 "),a("code",[t._v("git show")]),t._v(" 的变体来检视该提交（假设简短的版本没有歧义）：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show 1c002dd4b536e7479fe34593e72e6c6c1819e53b\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show 1c002dd4b536e7479f\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show 1c002d\n")])])]),a("p",[t._v("Git 可以为 SHA-1 值生成出简短且唯一的缩写。 如果你在 "),a("code",[t._v("git log")]),t._v(" 后加上 "),a("code",[t._v("--abbrev-commit")]),t._v(" 参数，输出结果里就会显示简短且唯一的值； 默认使用七个字符，不过有时为了避免 SHA-1 的歧义，会增加字符数：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --abbrev-commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\nca82a6d changed the version number\n085bb3b removed unnecessary "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" code\na11bef0 first commit\n")])])]),a("p",[t._v("通常 8 到 10 个字符就已经足够在一个项目中避免 SHA-1 的歧义。 例如，到 2019 年 2 月为止，Linux 内核这个相当大的 Git 项目， 其对象数据库中有超过 875,000 个提交，包含七百万个对象，也只需要前 12 个字符就能保证唯一性。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Note")]),t._v(" "),a("th",[t._v("关于 SHA-1 的简短说明许多人觉得他们的仓库里有可能出现两个不同的对象其 SHA-1 值相同。 然后呢？如果你真的向仓库里提交了一个对象，它跟之前的某个 "),a("strong",[t._v("不同")]),t._v(" 对象的 SHA-1 值相同， Git 会发现该对象的散列值已经存在于仓库里了，于是就会认为该对象被写入，然后直接使用它。 如果之后你想检出那个对象时，你将得到先前那个对象的数据。但是这种情况发生的概率十分渺小。 SHA-1 摘要长度是 20 字节，也就是 160 位。 2^80 个随机哈希对象才有 50% 的概率出现一次冲突 （计算冲突机率的公式是 "),a("code",[t._v("p = (n(n-1)/2) * (1/2^160))")]),t._v(" ）。 2^80 是 1.2 x 10^24，也就是一亿亿亿，这是地球上沙粒总数的 1200 倍。举例说一下怎样才能产生一次 SHA-1 冲突。 如果地球上 65 亿个人类都在编程，每人每秒都在产生等价于整个 Linux 内核历史（650 万个 Git 对象）的代码， 并将之提交到一个巨大的 Git 仓库里面，这样持续两年的时间才会产生足够的对象， 使其拥有 50% 的概率产生一次 SHA-1 对象冲突， 这比你编程团队的成员同一个晚上在互不相干的意外中被狼袭击并杀死的机率还要小。")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"分支引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支引用"}},[t._v("#")]),t._v(" 分支引用")]),t._v(" "),a("p",[t._v("引用特定提交的一种直接方法是，若它是一个分支的顶端的提交， 那么可以在任何需要引用该提交的 Git 命令中直接使用该分支的名称。")]),t._v(" "),a("h3",{attrs:{id:"查看最后一次提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看最后一次提交"}},[t._v("#")]),t._v(" 查看最后一次提交")]),t._v(" "),a("p",[t._v("例如，你想要查看一个分支的最后一次提交的对象，假设 "),a("code",[t._v("topic1")]),t._v(" 分支指向提交 "),a("code",[t._v("ca82a6d...")]),t._v(" ， 那么以下的命令是等价的：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show ca82a6dff817ec66f44342007202690a93763949\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show topic1  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# topic1是分支名")]),t._v("\n")])])]),a("p",[t._v("如果你想知道某个分支指向哪个特定的 SHA-1，或者想看任何一个例子中被简写的 SHA-1， 你可以使用一个叫做 "),a("code",[t._v("rev-parse")]),t._v(" 的 Git 探测工具。 你可以在 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch10-git-internals",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 内部原理"),a("OutboundLink")],1),t._v(" 中查看更多关于探测工具的信息。 简单来说，"),a("code",[t._v("rev-parse")]),t._v(" 是为了底层操作而不是日常操作设计的。 不过，有时你想看 Git 现在到底处于什么状态时，它可能会很有用。 你可以在你的分支上执行 "),a("code",[t._v("rev-parse")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rev-parse topic1\nca82a6dff817ec66f44342007202690a93763949\n")])])]),a("h2",{attrs:{id:"引用日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用日志"}},[t._v("#")]),t._v(" 引用日志")]),t._v(" "),a("h3",{attrs:{id:"head的指向历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#head的指向历史"}},[t._v("#")]),t._v(" HEAD的指向历史")]),t._v(" "),a("p",[t._v("当你在工作时， Git 会在后台保存一个引用日志（reflog）， 引用日志记录了最近几个月你的 HEAD 和分支引用所指向的历史。")]),t._v(" "),a("p",[t._v("你可以使用 "),a("code",[t._v("git reflog")]),t._v(" 来查看引用日志")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n734713b HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: fixed refs handling, added gc auto, updated\nd921970 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": merge phedders/rdocs: Merge made by the "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'recursive'")]),t._v(" strategy.\n1c002dd HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: added some blame and merge stuff\n1c36188 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("squash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": updating HEAD\n95df984 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": commit: "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is a combination of two commits.")]),t._v("\n1c36188 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("squash"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": updating HEAD\n7e05da5 HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(": rebase "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pick"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(": updating HEAD\n")])])]),a("p",[t._v("每当你的 HEAD 所指向的位置发生了变化，Git 就会将这个信息存储到引用日志这个历史记录里。 你也可以通过 reflog 数据来获取之前的提交历史。 如果你想查看仓库中 HEAD 在五次前的所指向的提交，你可以使用 "),a("code",[t._v("@{n}")]),t._v(" 来引用 reflog 中输出的提交记录。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show HEAD@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("你同样可以使用这个语法来查看某个分支在一定时间前的位置。 例如，查看你的 "),a("code",[t._v("master")]),t._v(" 分支在昨天的时候指向了哪个提交，你可以输入")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show master@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("yesterday"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("就会显示昨天 "),a("code",[t._v("master")]),t._v(" 分支的顶端指向了哪个提交。 这个方法只对还在你引用日志里的数据有用，所以不能用来查好几个月之前的提交。")]),t._v(" "),a("p",[t._v("可以运行 "),a("code",[t._v("git log -g")]),t._v(" 来查看类似于 "),a("code",[t._v("git log")]),t._v(" 输出格式的引用日志信息：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" master\ncommit 734713bc047d87bf7eac9674765ae793478c50d3\nReflog: master@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nReflog message: commit: fixed refs handling, added gc auto, updated\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Fri Jan "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(":32:33 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2009")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    fixed refs handling, added gc auto, updated tests\n\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nReflog: master@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nReflog message: merge phedders/rdocs: Merge made by recursive.\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Thu Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":08:43 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    Merge commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phedders/rdocs'")]),t._v("\n")])])]),a("p",[t._v("值得注意的是，"),a("strong",[t._v("引用日志只存在于本地仓库，它只是一个记录你在 自己 的仓库里做过什么的日志")]),t._v("。 其他人拷贝的仓库里的引用日志不会和你的相同，而你新克隆一个仓库的时候，引用日志是空的，因为你在仓库里还没有操作。 "),a("code",[t._v("git show HEAD@{2.months.ago}")]),t._v(" 这条命令只有在你克隆了一个项目至少两个月时才会显示匹配的提交—— 如果你刚刚克隆了仓库，那么它将不会有任何结果返回。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Tip")]),t._v(" "),a("th",[t._v("将引用日志想作 Git 版的 shell 历史记录如果你有 UNIX 或者 Linux 的背景，不妨将引用日志想作 Git 版的 shell 历史记录， 重点在于仅与你和你的会话相关，而与他人无关。")])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"祖先引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#祖先引用"}},[t._v("#")]),t._v(" 祖先引用")]),t._v(" "),a("p",[t._v("祖先引用是另一种指明一个提交的方式。 如果你在引用的尾部加上一个 "),a("code",[t._v("^")]),t._v("（脱字符）， Git 会将其解析为该引用的上一个提交。 假设你的提交历史是：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--pretty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%h %s'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--graph")]),t._v("\n* 734713b fixed refs handling, added gc auto, updated tests\n*   d921970 Merge commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phedders/rdocs'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 35cfb2b Some rdoc changes\n* "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 1c002dd added some blame and merge stuff\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/\n* 1c36188 ignore *.gem\n* 9b29157 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" open3_detach to gemspec "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" list\n")])])]),a("p",[t._v("你可以使用 "),a("code",[t._v("HEAD^")]),t._v(" 来查看上一个提交，也就是 “"),a("strong",[t._v("HEAD 的父提交")]),t._v("”：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show HEAD^\ncommit d921970aadf03b3cf0e71becdaab3147ba71cdef\nMerge: 1c002dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(". 35cfb2b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Thu Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v(":08:43 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    Merge commit "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'phedders/rdocs'")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",[t._v("Note")]),t._v(" "),a("th",[t._v("在 Windows 上转义脱字符在 Windows 的 "),a("code",[t._v("cmd.exe")]),t._v(" 中，"),a("code",[t._v("^")]),t._v(" 是一个特殊字符，因此需要区别对待。 你可以双写它或者将提交引用放在引号中："),a("code",[t._v('$ git show HEAD^ # 在 Windows 上无法工作 $ git show HEAD^^ # 可以 $ git show "HEAD^" # 可以')])])])]),t._v(" "),a("tbody",[a("tr",[a("td"),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("你也可以在 "),a("code",[t._v("^")]),t._v(" 后面添加一个数字来指明想要 "),a("strong",[t._v("哪一个")]),t._v(" 父提交——例如 "),a("code",[t._v("d921970^2")]),t._v(" 代表 “d921970 的第二父提交” 这个语法只适用于合并的提交，因为合并提交会有多个父提交。 合并提交的第一父提交是你合并时所在分支（通常为 "),a("code",[t._v("master")]),t._v("），而第二父提交是你所合并的分支（例如 "),a("code",[t._v("topic")]),t._v("）：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show d921970^\ncommit 1c002dd4b536e7479fe34593e72e6c6c1819e53b\nAuthor: Scott Chacon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("schacon@gmail.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Thu Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":58:32 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0800")]),t._v("\n\n    added some blame and merge stuff\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show d921970^2\ncommit 35cfb2b795a55793d7cc56a6cc2060b4bb732548\nAuthor: Paul Hedderly "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("paul+git@mjr.org"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Wed Dec "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),t._v(":22:03 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" +0000\n\n    Some rdoc changes\n")])])]),a("p",[t._v("另一种指明祖先提交的方法是 "),a("code",[t._v("~")]),t._v("（波浪号）。 同样是指向第一父提交，因此 "),a("code",[t._v("HEAD~")]),t._v(" 和 "),a("code",[t._v("HEAD^")]),t._v(" 是等价的。 而区别在于你在后面加数字的时候。 "),a("code",[t._v("HEAD~2")]),t._v(" 代表“第一父提交的第一父提交”，也就是“祖父提交”——Git 会根据你指定的次数获取对应的第一父提交。 例如，在之前的列出的提交历史中，"),a("code",[t._v("HEAD~3")]),t._v(" 就是")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show HEAD~3\ncommit 1c3618887afb5fbcbea25b7c013f4e2114448b8d\nAuthor: Tom Preston-Werner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tom@mojombo.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Fri Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":47:59 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0500")]),t._v("\n\n    ignore *.gem\n")])])]),a("p",[t._v("也可以写成 "),a("code",[t._v("HEAD~~~")]),t._v("，也是第一父提交的第一父提交的第一父提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show HEAD~~~\ncommit 1c3618887afb5fbcbea25b7c013f4e2114448b8d\nAuthor: Tom Preston-Werner "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tom@mojombo.com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\nDate:   Fri Nov "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(":47:59 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2008")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-0500")]),t._v("\n\n    ignore *.gem\n")])])]),a("p",[t._v("你也可以组合使用这两个语法——你可以通过 "),a("code",[t._v("HEAD~3^2")]),t._v(" 来取得之前引用的第二父提交（假设它是一个合并提交）。")]),t._v(" "),a("h2",{attrs:{id:"提交区间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交区间"}},[t._v("#")]),t._v(" 提交区间")]),t._v(" "),a("p",[t._v("你已经学会如何单次的提交，现在来看看如何指明一定区间的提交。 当你有很多分支时，这对管理你的分支时十分有用， 你可以用提交区间来解决“这个分支还有哪些提交尚未合并到主分支？”的问题")]),t._v(" "),a("h3",{attrs:{id:"双点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双点"}},[t._v("#")]),t._v(" 双点")]),t._v(" "),a("p",[t._v("最常用的指明提交区间语法是双点。 这种语法可以让 Git 选出在一个分支中而不在另一个分支中的提交。 例如，你有如下的提交历史 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/double_dot",target:"_blank",rel:"noopener noreferrer"}},[t._v("Example history for range selection."),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/double-dot.png",alt:"Example history for range selection."}})]),t._v(" "),a("p",[t._v("Figure 137. Example history for range selection.")]),t._v(" "),a("p",[t._v("你想要查看 experiment 分支中还有哪些提交尚未被合并入 master 分支。 你可以使用 "),a("code",[t._v("master..experiment")]),t._v(" 来让 Git 显示这些提交。也就是“在 experiment 分支中而不在 master 分支中的提交”。 为了使例子简单明了，我使用了示意图中提交对象的字母来代替真实日志的输出，所以会显示：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("experiment\nD\nC\n")])])]),a("p",[t._v("反过来，如果你想查看在 "),a("code",[t._v("master")]),t._v(" 分支中而不在 "),a("code",[t._v("experiment")]),t._v(" 分支中的提交，你只要交换分支名即可。 "),a("code",[t._v("experiment..master")]),t._v(" 会显示在 "),a("code",[t._v("master")]),t._v(" 分支中而不在 "),a("code",[t._v("experiment")]),t._v(" 分支中的提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log experiment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("master\nF\nE\n")])])]),a("h4",{attrs:{id:"查看即将推送到远端的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看即将推送到远端的内容"}},[t._v("#")]),t._v(" 查看即将推送到远端的内容")]),t._v(" "),a("p",[t._v("这可以让你保持 "),a("code",[t._v("experiment")]),t._v(" 分支跟随最新的进度以及查看你即将合并的内容。 另一个常用的场景是查看你即将推送到远端的内容：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log origin/master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("HEAD\n")])])]),a("p",[t._v("这个命令会输出在你当前分支中而不在远程 "),a("code",[t._v("origin")]),t._v(" 中的提交。 如果你执行 "),a("code",[t._v("git push")]),t._v(" 并且你的当前分支正在跟踪 "),a("code",[t._v("origin/master")]),t._v("，由 "),a("code",[t._v("git log origin/master..HEAD")]),t._v(" 所输出的提交就是会被传输到远端服务器的提交。如果你留空了其中的一边， Git 会默认为 "),a("code",[t._v("HEAD")]),t._v("。 例如， "),a("code",[t._v("git log origin/master..")]),t._v(" 将会输出与之前例子相同的结果 —— Git 使用 HEAD 来代替留空的一边。")]),t._v(" "),a("h3",{attrs:{id:"多点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多点"}},[t._v("#")]),t._v(" 多点")]),t._v(" "),a("p",[t._v("双点语法很好用，但有时候你可能需要两个以上的分支才能确定你所需要的修订， 比如查看哪些提交是被包含在某些分支中的一个，但是不在你当前的分支上。 Git 允许你在任意引用前加上 "),a("code",[t._v("^")]),t._v(" 字符或者 "),a("code",[t._v("--not")]),t._v(" 来指明你不希望提交被包含其中的分支。 因此下列三个命令是等价的：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log refA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("refB\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log ^refA refB\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log refB "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--not")]),t._v(" refA\n")])])]),a("p",[t._v("这个语法很好用，因为你可以在查询中指定超过两个的引用，这是双点语法无法实现的。 比如，你想查看所有被 "),a("code",[t._v("refA")]),t._v(" 或 "),a("code",[t._v("refB")]),t._v(" 包含的但是不被 "),a("code",[t._v("refC")]),t._v(" 包含的提交，你可以使用以下任意一个命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log refA refB ^refC\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log refA refB "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--not")]),t._v(" refC\n")])])]),a("p",[t._v("这就构成了一个十分强大的修订查询系统，你可以通过它来查看你的分支里包含了哪些东西。")]),t._v(" "),a("h3",{attrs:{id:"三点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三点"}},[t._v("#")]),t._v(" 三点")]),t._v(" "),a("p",[t._v("最后一种主要的区间选择语法是三点，这个语法可以选择出被两个引用 "),a("strong",[t._v("之一")]),t._v(" 包含但又不被两者同时包含的提交。 再看看之前双点例子中的提交历史。 如果你想看 "),a("code",[t._v("master")]),t._v(" 或者 "),a("code",[t._v("experiment")]),t._v(" 中包含的但不是两者共有的提交，你可以执行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".experiment\nF\nE\nD\nC\n")])])]),a("p",[t._v("这和通常 "),a("code",[t._v("log")]),t._v(" 按日期排序的输出一样，仅仅给出了4个提交的信息。")]),t._v(" "),a("p",[t._v("这种情形下，"),a("code",[t._v("log")]),t._v(" 命令的一个常用参数是 "),a("code",[t._v("--left-right")]),t._v("，它会显示每个提交到底处于哪一侧的分支。 这会让输出数据更加清晰。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --left-right master"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".experiment\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" F\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" E\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" D\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" C\n")])])]),a("p",[t._v("有了这些工具，你就可以十分方便地查看你 Git 仓库中的提交。")])])}),[],!1,null,null,null);a.default=r.exports}}]);