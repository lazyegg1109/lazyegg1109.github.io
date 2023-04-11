(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{542:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"未使用lua脚本出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#未使用lua脚本出现的问题"}},[s._v("#")]),s._v(" 未使用Lua脚本出现的问题")]),s._v(" "),a("p",[s._v("当我们执行完逻辑，在判断锁是自己的，然后准备释放锁之前，锁过期了，然后第二个请求进来了，这样delete锁操作释放的就是第二个请求的锁，这样我们的锁机制就失效了。")]),s._v(" "),a("p",[s._v("问题代码：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//先判断是否是自己的锁，再进行解锁")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("StringUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("opsForValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" uuid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//在判断和删除之前，因为没有保证原子性，所以会出现误删情况")]),s._v("\n                redisTemplate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lock"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("问题分析：")]),s._v(" "),a("p",[s._v("虽然我们获取锁和添加锁时间有原子性操作的命令，但是我们判断锁和释放锁并没有一条原子性操作命令，所以问题会变的繁琐。")]),s._v(" "),a("p",[s._v("解决方案：")]),s._v(" "),a("p",[s._v("借助Lua脚本。")]),s._v(" "),a("h1",{attrs:{id:"lua脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua脚本"}},[s._v("#")]),s._v(" Lua脚本")]),s._v(" "),a("p",[s._v("菜鸟教程："),a("a",{attrs:{href:"https://www.runoob.com/lua/lua-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Lua介绍"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Redis天生支持Lua脚本语言，在Redis客户端内，执行Lua脚本命令如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("EVAL script numbers key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("script为Lua脚本字符串")]),s._v(" "),a("p",[s._v("numbers为key列表元素个数")])]),s._v(" "),a("p",[s._v("为什么Lua脚本能确保原子性？")]),s._v(" "),a("p",[s._v("因为Lua能一次性发送多条指令给Redis客户端，Redis是单线程的，执行指令遵循one by one规则，所以在执行指令期间是不允许其他指令插队。")]),s._v(" "),a("p",[s._v("实例：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"print('hello world')\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nil"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("输出值为nil，原因是Lua打印的是脚本内的返回值，而不是print的内容。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"return'hello world'\"")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"lua脚本变量类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua脚本变量类型"}},[s._v("#")]),s._v(" Lua脚本变量类型")]),s._v(" "),a("div",{staticClass:"language-c line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("lua 文件脚本\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 全局变量\nlocal b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 局部变量\n\nfunction "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("joke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    c "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 全局变量\n    local d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 局部变量\nend\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("joke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("          "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" nil\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    local a "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 局部变量\n    b "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 对局部变量重新赋值\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\nend\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("注意：在Redis里，是不支持我们创建全局变量的，创建全局变量会报错：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a=5 return a"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" ERR Error running script "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("call to f_5f2737ecdb3f8fa17d982773a2901a4015443ed7"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": @enable_strict_lua:8: user_script:1: Script attempted to create global variable "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("创建局部变量：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"local a=5 return a"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h1",{attrs:{id:"lua脚本循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua脚本循环"}},[s._v("#")]),s._v(" Lua脚本循环")]),s._v(" "),a("p",[s._v("for循环语法：")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" var"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("exp1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("exp2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("exp3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("执行体"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("blockquote",[a("p",[s._v("var 从 exp1 变化到 exp2，每次变化以 exp3 为步长递增 var，并执行一次 "),a("strong",[s._v('"执行体"')]),s._v("。exp3 是可选的，如果不指定，默认为1。")])]),s._v(" "),a("h1",{attrs:{id:"lua脚本流程控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua脚本流程控制"}},[s._v("#")]),s._v(" Lua脚本流程控制")]),s._v(" "),a("p",[s._v("if语句")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 0 为 true ]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0 为 true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("控制结构的条件表达式结果可以是任何值，Lua认为false和nil为假，true和非nil为真。")]),s._v(" "),a("p",[s._v("要注意的是Lua中 0 为 true")])]),s._v(" "),a("p",[s._v("if...else语句")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("布尔表达式"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 布尔表达式为 true 时执行该语句块 --]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 布尔表达式为 false 时执行该语句块 --]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("if...else if...else语句")]),s._v(" "),a("div",{staticClass:"language-lua line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-lua"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" 布尔表达式 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 在布尔表达式 1 为 true 时执行该语句块 --]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elseif")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" 布尔表达式 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 在布尔表达式 2 为 true 时执行该语句块 --]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elseif")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" 布尔表达式 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 在布尔表达式 3 为 true 时执行该语句块 --]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" \n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--[ 如果以上布尔表达式都不为 true 则执行该语句块 --]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h1",{attrs:{id:"lua动态传递参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lua动态传递参数"}},[s._v("#")]),s._v(" Lua动态传递参数")]),s._v(" "),a("p",[s._v("以我们上面的if..else为例：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"if 10>20 then return 10 else return 20 end"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("我们要做的就是将10和20这两个变量改为动态参数。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:637"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("9")]),s._v(">")]),s._v(" EVAL "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"if KEYS[1]>ARGV[1] then return KEYS[2] else return ARGV[2] end"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"40"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("blockquote",[a("p",[s._v("2为KEYS的个数，说明前两个为KEYS，10，20为KEYS[1]，KEYS[2]，30，40为ARGV[1]，ARGV[2]")])])])}),[],!1,null,null,null);a.default=e.exports}}]);