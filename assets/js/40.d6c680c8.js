(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{497:function(v,t,a){"use strict";a.r(t);var _=a(14),e=Object(_.a)({},(function(){var v=this,t=v.$createElement,a=v._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"java-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-内存模型"}},[v._v("#")]),v._v(" Java 内存模型")]),v._v(" "),a("blockquote",[a("p",[a("strong",[v._v("📦 本文以及示例源码已归档在 "),a("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[v._v("javacore"),a("OutboundLink")],1)])]),v._v(" "),a("p",[v._v("Java 内存模型（Java Memory Model），简称 "),a("strong",[v._v("JMM")]),v._v("。")]),v._v(" "),a("p",[v._v("JVM 中试图定义一种 JMM 来"),a("strong",[v._v("屏蔽各种硬件和操作系统的内存访问差异，以实现让 Java 程序在各种平台下都能达到一致的内存访问效果")]),v._v("。")])]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E7%89%A9%E7%90%86%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B"}},[v._v("1. 物理内存模型")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-%E7%A1%AC%E4%BB%B6%E5%A4%84%E7%90%86%E6%95%88%E7%8E%87"}},[v._v("1.1. 硬件处理效率")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#12-%E7%BC%93%E5%AD%98%E4%B8%80%E8%87%B4%E6%80%A7"}},[v._v("1.2. 缓存一致性")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#13-%E4%BB%A3%E7%A0%81%E4%B9%B1%E5%BA%8F%E6%89%A7%E8%A1%8C%E4%BC%98%E5%8C%96"}},[v._v("1.3. 代码乱序执行优化")])])])]),v._v(" "),a("li",[a("a",{attrs:{href:"#2-java-%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B"}},[v._v("2. Java 内存模型")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-%E4%B8%BB%E5%86%85%E5%AD%98%E5%92%8C%E5%B7%A5%E4%BD%9C%E5%86%85%E5%AD%98"}},[v._v("2.1. 主内存和工作内存")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#22-jmm-%E5%86%85%E5%AD%98%E6%93%8D%E4%BD%9C%E7%9A%84%E9%97%AE%E9%A2%98"}},[v._v("2.2. JMM 内存操作的问题")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#23-%E5%86%85%E5%AD%98%E9%97%B4%E4%BA%A4%E4%BA%92%E6%93%8D%E4%BD%9C"}},[v._v("2.3. 内存间交互操作")])])])]),v._v(" "),a("li",[a("a",{attrs:{href:"#3-java-%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B%E8%A7%84%E5%88%99"}},[v._v("3. Java 内存模型规则")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-%E5%B9%B6%E5%8F%91%E5%AE%89%E5%85%A8%E7%89%B9%E6%80%A7"}},[v._v("3.1. 并发安全特性")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#32-happens-before"}},[v._v("3.2. Happens-Before")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#33-%E5%86%85%E5%AD%98%E5%B1%8F%E9%9A%9C"}},[v._v("3.3. 内存屏障")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#34-volatile-%E5%8F%98%E9%87%8F%E7%9A%84%E7%89%B9%E6%AE%8A%E8%A7%84%E5%88%99"}},[v._v("3.4. volatile 变量的特殊规则")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#35-long-%E5%92%8C-double-%E5%8F%98%E9%87%8F%E7%9A%84%E7%89%B9%E6%AE%8A%E8%A7%84%E5%88%99"}},[v._v("3.5. long 和 double 变量的特殊规则")])]),v._v(" "),a("li",[a("a",{attrs:{href:"#36-final-%E5%9E%8B%E9%87%8F%E7%9A%84%E7%89%B9%E6%AE%8A%E8%A7%84%E5%88%99"}},[v._v("3.6. final 型量的特殊规则")])])])]),v._v(" "),a("li",[a("a",{attrs:{href:"#4-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[v._v("4. 参考资料")])])]),v._v(" "),a("h2",{attrs:{id:"_1-物理内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-物理内存模型"}},[v._v("#")]),v._v(" 1. 物理内存模型")]),v._v(" "),a("p",[v._v("物理机遇到的并发问题与虚拟机中的情况有不少相似之处，物理机对并发的处理方案对于虚拟机的实现也有相当大的参考意义。")]),v._v(" "),a("h3",{attrs:{id:"_1-1-硬件处理效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-硬件处理效率"}},[v._v("#")]),v._v(" 1.1. 硬件处理效率")]),v._v(" "),a("p",[v._v("物理内存的第一个问题是：硬件处理效率。")]),v._v(" "),a("ul",[a("li",[v._v("绝大多数的运算任务都不可能只靠处理器“计算”就能完成，处理器至少需要与"),a("strong",[v._v("内存交互")]),v._v("，如读取运算数据、存储运算结果，这个 I/O 操作是很难消除的（无法仅靠寄存器完成所有运算任务）。")]),v._v(" "),a("li",[a("strong",[v._v("由于计算机的存储设备与处理器的运算速度有几个数量级的差距")]),v._v(" ，这种速度上的矛盾，会降低硬件的处理效率。所以，现代计算机都不得不 "),a("strong",[v._v("加入高速缓存（Cache） 来作为内存和处理器之间的缓冲")]),v._v("。将需要用到的数据复制到缓存中，让运算能快速进行，当运算结束后再从缓存同步会内存中，这样处理器就无需等待缓慢的内存读写了。")])]),v._v(" "),a("h3",{attrs:{id:"_1-2-缓存一致性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-缓存一致性"}},[v._v("#")]),v._v(" 1.2. 缓存一致性")]),v._v(" "),a("p",[v._v("高速缓存解决了 "),a("strong",[v._v("硬件效率问题")]),v._v("，但是引入了一个新的问题："),a("strong",[v._v("缓存一致性（Cache Coherence）")]),v._v("。")]),v._v(" "),a("p",[v._v("在多处理器系统中，每个处理器都有自己的高速缓存，而它们又共享同一主内存。当多个处理器的运算任务都涉及同一块主内存区域时，将可能导致各自的缓存数据不一致。")]),v._v(" "),a("p",[v._v("为了解决缓存一致性问题，"),a("strong",[v._v("需要各个处理器访问缓存时都遵循一些协议，在读写时要根据协议来进行操作")]),v._v("。")]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/cpu-memory-model.png",alt:"img"}})]),v._v(" "),a("h3",{attrs:{id:"_1-3-代码乱序执行优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-代码乱序执行优化"}},[v._v("#")]),v._v(" 1.3. 代码乱序执行优化")]),v._v(" "),a("p",[a("strong",[v._v("除了高速缓存以外，为了使得处理器内部的运算单元尽量被充分利用")]),v._v("，处理器可能会对输入代码进行乱序执行（Out-Of-Order Execution）优化。处理器会在计算之后将乱序执行的结果重组，"),a("strong",[v._v("保证该结果与顺序执行的结果是一致的")]),v._v("，但不保证程序中各个语句计算的先后顺序与输入代码中的顺序一致。")]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/java-memory-model_1.png",alt:"img"}})]),v._v(" "),a("p",[v._v("乱序执行技术是处理器为提高运算速度而做出违背代码原有顺序的优化。")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("单核")]),v._v("环境下，处理器保证做出的优化不会导致执行结果远离预期目标，但在多核环境下却并非如此。")]),v._v(" "),a("li",[a("strong",[v._v("多核")]),v._v("环境下， 如果存在一个核的计算任务依赖另一个核的计算任务的中间结果，而且对相关数据读写没做任何防护措施，那么其顺序性并不能靠代码的先后顺序来保证。")])]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/java-memory-model_2.png",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_2-java-内存模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-java-内存模型"}},[v._v("#")]),v._v(" 2. Java 内存模型")]),v._v(" "),a("p",[a("strong",[a("code",[v._v("内存模型")])]),v._v(" 这个概念。我们可以理解为："),a("strong",[v._v("在特定的操作协议下，对特定的内存或高速缓存进行读写访问的过程抽象")]),v._v("。不同架构的物理计算机可以有不一样的内存模型，JVM 也有自己的内存模型。")]),v._v(" "),a("p",[v._v("JVM 中试图定义一种 Java 内存模型（Java Memory Model, JMM）来"),a("strong",[v._v("屏蔽各种硬件和操作系统的内存访问差异")]),v._v("，以实现让 Java 程序 "),a("strong",[v._v("在各种平台下都能达到一致的内存访问效果")]),v._v("。")]),v._v(" "),a("p",[v._v("在 "),a("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/concurrent/java-concurrent-introduction.md",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 并发简介"),a("OutboundLink")],1),v._v(" 中已经介绍了，并发安全需要满足可见性、有序性、原子性。其中，导致可见性的原因是缓存，导致有序性的原因是编译优化。那解决可见性、有序性最直接的办法就是"),a("strong",[v._v("禁用缓存和编译优化")]),v._v(" 。但这么做，性能就堪忧了。")]),v._v(" "),a("p",[v._v("合理的方案应该是"),a("strong",[v._v("按需禁用缓存以及编译优化")]),v._v("。那么，如何做到呢？，Java 内存模型规范了 JVM 如何提供按需禁用缓存和编译优化的方法。具体来说，这些方法包括 "),a("strong",[v._v("volatile")]),v._v("、"),a("strong",[v._v("synchronized")]),v._v(" 和 "),a("strong",[v._v("final")]),v._v(" 三个关键字，以及 "),a("strong",[v._v("Happens-Before 规则")]),v._v("。")]),v._v(" "),a("h3",{attrs:{id:"_2-1-主内存和工作内存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主内存和工作内存"}},[v._v("#")]),v._v(" 2.1. 主内存和工作内存")]),v._v(" "),a("p",[v._v("JMM 的主要目标是 "),a("strong",[v._v("定义程序中各个变量的访问规则，即在虚拟机中将变量存储到内存和从内存中取出变量这样的底层细节")]),v._v("。此处的变量（Variables）与 Java 编程中所说的变量有所区别，它包括了实例字段、静态字段和构成数值对象的元素，但不包括局部变量与方法参数，因为后者是线程私有的，不会被共享，自然就不会存在竞争问题。为了获得较好的执行效能，JMM 并没有限制执行引擎使用处理器的特定寄存器或缓存来和主存进行交互，也没有限制即使编译器进行调整代码执行顺序这类优化措施。")]),v._v(" "),a("p",[v._v("JMM 规定了"),a("strong",[v._v("所有的变量都存储在主内存（Main Memory）中")]),v._v("。")]),v._v(" "),a("p",[v._v("每条线程还有自己的工作内存（Working Memory），"),a("strong",[v._v("工作内存中保留了该线程使用到的变量的主内存的副本")]),v._v("。工作内存是 JMM 的一个抽象概念，并不真实存在，它涵盖了缓存，写缓冲区，寄存器以及其他的硬件和编译器优化。")]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/java-memory-model_3.png",alt:"img"}})]),v._v(" "),a("p",[v._v("线程对变量的所有操作都必须在工作内存中进行，而不能直接读写主内存中的变量。不同的线程间也无法直接访问对方工作内存中的变量，"),a("strong",[v._v("线程间变量值的传递均需要通过主内存来完成")]),v._v("。")]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/java-memory-model_4.png",alt:"img"}})]),v._v(" "),a("blockquote",[a("p",[v._v("说明：")]),v._v(" "),a("p",[v._v("这里说的主内存、工作内存与 Java 内存区域中的堆、栈、方法区等不是同一个层次的内存划分。")])]),v._v(" "),a("h3",{attrs:{id:"_2-2-jmm-内存操作的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-jmm-内存操作的问题"}},[v._v("#")]),v._v(" 2.2. JMM 内存操作的问题")]),v._v(" "),a("p",[v._v("类似于物理内存模型面临的问题，JMM 存在以下两个问题：")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("工作内存数据一致性")]),v._v(" - 各个线程操作数据时会保存使用到的主内存中的共享变量副本，当多个线程的运算任务都涉及同一个共享变量时，将导致各自的的共享变量副本不一致。如果真的发生这种情况，数据同步回主内存以谁的副本数据为准？ Java 内存模型主要通过一系列的数据同步协议、规则来保证数据的一致性。")]),v._v(" "),a("li",[a("strong",[v._v("指令重排序优化")]),v._v(" - Java 中重排序通常是编译器或运行时环境为了优化程序性能而采取的对指令进行重新排序执行的一种手段。重排序分为两类："),a("strong",[v._v("编译期重排序和运行期重排序")]),v._v("，分别对应编译时和运行时环境。 同样的，指令重排序不是随意重排序，它需要满足以下两个条件：\n"),a("ul",[a("li",[v._v("在单线程环境下不能改变程序运行的结果。即时编译器（和处理器）需要保证程序能够遵守 "),a("code",[v._v("as-if-serial")]),v._v(" 属性。通俗地说，就是在单线程情况下，要给程序一个顺序执行的假象。即经过重排序的执行结果要与顺序执行的结果保持一致。")]),v._v(" "),a("li",[v._v("存在数据依赖关系的不允许重排序。")]),v._v(" "),a("li",[v._v("多线程环境下，如果线程处理逻辑之间存在依赖关系，有可能因为指令重排序导致运行结果与预期不同。")])])])]),v._v(" "),a("h3",{attrs:{id:"_2-3-内存间交互操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-内存间交互操作"}},[v._v("#")]),v._v(" 2.3. 内存间交互操作")]),v._v(" "),a("p",[v._v("JMM 定义了 8 个操作来完成主内存和工作内存之间的交互操作。JVM 实现时必须保证下面介绍的每种操作都是 "),a("strong",[v._v("原子的")]),v._v("（对于 double 和 long 型的变量来说，load、store、read、和 write 操作在某些平台上允许有例外 ）。")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("lock")]),v._v(" (锁定) - 作用于"),a("strong",[v._v("主内存")]),v._v("的变量，它把一个变量标识为一条线程独占的状态。")]),v._v(" "),a("li",[a("code",[v._v("unlock")]),v._v(" (解锁) - 作用于"),a("strong",[v._v("主内存")]),v._v("的变量，它把一个处于锁定状态的变量释放出来，释放后的变量才可以被其他线程锁定。")]),v._v(" "),a("li",[a("code",[v._v("read")]),v._v(" (读取) - 作用于"),a("strong",[v._v("主内存")]),v._v("的变量，它把一个变量的值从主内存"),a("strong",[v._v("传输")]),v._v("到线程的工作内存中，以便随后的 "),a("code",[v._v("load")]),v._v(" 动作使用。")]),v._v(" "),a("li",[a("code",[v._v("write")]),v._v(" (写入) - 作用于"),a("strong",[v._v("主内存")]),v._v("的变量，它把 store 操作从工作内存中得到的变量的值放入主内存的变量中。")]),v._v(" "),a("li",[a("code",[v._v("load")]),v._v(" (载入) - 作用于"),a("strong",[v._v("工作内存")]),v._v("的变量，它把 read 操作从主内存中得到的变量值放入工作内存的变量副本中。")]),v._v(" "),a("li",[a("code",[v._v("use")]),v._v(" (使用) - 作用于"),a("strong",[v._v("工作内存")]),v._v("的变量，它把工作内存中一个变量的值传递给执行引擎，每当虚拟机遇到一个需要使用到变量的值得字节码指令时就会执行这个操作。")]),v._v(" "),a("li",[a("code",[v._v("assign")]),v._v(" (赋值) - 作用于"),a("strong",[v._v("工作内存")]),v._v("的变量，它把一个从执行引擎接收到的值赋给工作内存的变量，每当虚拟机遇到一个给变量赋值的字节码指令时执行这个操作。")]),v._v(" "),a("li",[a("code",[v._v("store")]),v._v(" (存储) - 作用于"),a("strong",[v._v("工作内存")]),v._v("的变量，它把工作内存中一个变量的值传送到主内存中，以便随后 "),a("code",[v._v("write")]),v._v(" 操作使用。")])]),v._v(" "),a("p",[v._v("如果要把一个变量从主内存中复制到工作内存，就"),a("strong",[v._v("需要按序执行 "),a("code",[v._v("read")]),v._v(" 和 "),a("code",[v._v("load")]),v._v(" 操作")]),v._v("；如果把变量从工作内存中同步回主内存中，就"),a("strong",[v._v("需要按序执行 "),a("code",[v._v("store")]),v._v(" 和 "),a("code",[v._v("write")]),v._v(" 操作")]),v._v("。但 Java 内存模型只要求上述操作必须按顺序执行，而没有保证必须是连续执行。")]),v._v(" "),a("p",[v._v("JMM 还规定了上述 8 种基本操作，需要满足以下规则：")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("read 和 load 必须成对出现")]),v._v("；"),a("strong",[v._v("store 和 write 必须成对出现")]),v._v("。即不允许一个变量从主内存读取了但工作内存不接受，或从工作内存发起回写了但主内存不接受的情况出现。")]),v._v(" "),a("li",[a("strong",[v._v("不允许一个线程丢弃它的最近 assign 的操作")]),v._v("，即变量在工作内存中改变了之后必须把变化同步到主内存中。")]),v._v(" "),a("li",[a("strong",[v._v("不允许一个线程无原因的（没有发生过任何 assign 操作）把数据从工作内存同步回主内存中")]),v._v("。")]),v._v(" "),a("li",[v._v("一个新的变量只能在主内存中诞生，不允许在工作内存中直接使用一个未被初始化（load 或 assign ）的变量。换句话说，就是对一个变量实施 use 和 store 操作之前，必须先执行过了 load 或 assign 操作。")]),v._v(" "),a("li",[v._v("一个变量在同一个时刻只允许一条线程对其进行 lock 操作，但 lock 操作可以被同一条线程重复执行多次，多次执行 lock 后，只有执行相同次数的 unlock 操作，变量才会被解锁。所以 "),a("strong",[v._v("lock 和 unlock 必须成对出现")]),v._v("。")]),v._v(" "),a("li",[v._v("如果对一个变量执行 lock 操作，将会清空工作内存中此变量的值，在执行引擎使用这个变量前，需要重新执行 load 或 assign 操作初始化变量的值。")]),v._v(" "),a("li",[v._v("如果一个变量事先没有被 lock 操作锁定，则不允许对它执行 unlock 操作，也不允许去 unlock 一个被其他线程锁定的变量。")]),v._v(" "),a("li",[v._v("对一个变量执行 unlock 操作之前，必须先把此变量同步到主内存中（执行 store 和 write 操作）")])]),v._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/concurrent/java-memory-operator.png",alt:"img"}})]),v._v(" "),a("h2",{attrs:{id:"_3-java-内存模型规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-java-内存模型规则"}},[v._v("#")]),v._v(" 3. Java 内存模型规则")]),v._v(" "),a("h3",{attrs:{id:"_3-1-并发安全特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-并发安全特性"}},[v._v("#")]),v._v(" 3.1. 并发安全特性")]),v._v(" "),a("p",[v._v("上文介绍了 Java 内存交互的 8 种基本操作，它们遵循 Java 内存三大特性：原子性、可见性、有序性。")]),v._v(" "),a("p",[v._v("而这三大特性，归根结底，是为了实现多线程的 "),a("strong",[v._v("数据一致性")]),v._v("，使得程序在多线程并发，指令重排序优化的环境中能如预期运行。")]),v._v(" "),a("h4",{attrs:{id:"原子性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[v._v("#")]),v._v(" 原子性")]),v._v(" "),a("p",[a("strong",[v._v("原子性即一个操作或者多个操作，要么全部执行（执行的过程不会被任何因素打断），要么就都不执行")]),v._v("。即使在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程所干扰。")]),v._v(" "),a("p",[v._v("在 Java 中，为了保证原子性，提供了两个高级的字节码指令 "),a("code",[v._v("monitorenter")]),v._v(" 和 "),a("code",[v._v("monitorexit")]),v._v("。这两个字节码，在 Java 中对应的关键字就是 "),a("code",[v._v("synchronized")]),v._v("。")]),v._v(" "),a("p",[v._v("因此，在 Java 中可以使用 "),a("code",[v._v("synchronized")]),v._v(" 来保证方法和代码块内的操作是原子性的。")]),v._v(" "),a("h4",{attrs:{id:"可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可见性"}},[v._v("#")]),v._v(" 可见性")]),v._v(" "),a("p",[a("strong",[v._v("可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够立即看得到修改的值")]),v._v("。")]),v._v(" "),a("p",[v._v("JMM 是通过 "),a("strong",[v._v('"变量修改后将新值同步回主内存')]),v._v("， "),a("strong",[v._v('变量读取前从主内存刷新变量值"')]),v._v(" 这种依赖主内存作为传递媒介的方式来实现的。")]),v._v(" "),a("p",[v._v("Java 实现多线程可见性的方式有：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("volatile")])]),v._v(" "),a("li",[a("code",[v._v("synchronized")])]),v._v(" "),a("li",[a("code",[v._v("final")])])]),v._v(" "),a("h4",{attrs:{id:"有序性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有序性"}},[v._v("#")]),v._v(" 有序性")]),v._v(" "),a("p",[v._v("有序性规则表现在以下两种场景: 线程内和线程间")]),v._v(" "),a("ul",[a("li",[v._v("线程内 - 从某个线程的角度看方法的执行，指令会按照一种叫“串行”（"),a("code",[v._v("as-if-serial")]),v._v("）的方式执行，此种方式已经应用于顺序编程语言。")]),v._v(" "),a("li",[v._v("线程间 - 这个线程“观察”到其他线程并发地执行非同步的代码时，由于指令重排序优化，任何代码都有可能交叉执行。唯一起作用的约束是：对于同步方法，同步块（"),a("code",[v._v("synchronized")]),v._v(" 关键字修饰）以及 "),a("code",[v._v("volatile")]),v._v(" 字段的操作仍维持相对有序。")])]),v._v(" "),a("p",[v._v("在 Java 中，可以使用 "),a("code",[v._v("synchronized")]),v._v(" 和 "),a("code",[v._v("volatile")]),v._v(" 来保证多线程之间操作的有序性。实现方式有所区别：")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("volatile")]),v._v(" 关键字会禁止指令重排序。")]),v._v(" "),a("li",[a("code",[v._v("synchronized")]),v._v(" 关键字通过互斥保证同一时刻只允许一条线程操作。")])]),v._v(" "),a("h3",{attrs:{id:"_3-2-happens-before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-happens-before"}},[v._v("#")]),v._v(" 3.2. Happens-Before")]),v._v(" "),a("p",[v._v("JMM 为程序中所有的操作定义了一个偏序关系，称之为 "),a("strong",[a("code",[v._v("先行发生原则（Happens-Before）")])]),v._v("。")]),v._v(" "),a("p",[a("strong",[v._v("Happens-Before")]),v._v(" 是指 "),a("strong",[v._v("前面一个操作的结果对后续操作是可见的")]),v._v("。")]),v._v(" "),a("p",[a("strong",[v._v("Happens-Before")]),v._v(" 非常重要，它是判断数据是否存在竞争、线程是否安全的主要依据，依靠这个原则，我们可以通过几条规则一揽子地解决并发环境下两个操作间是否可能存在冲突的所有问题。")]),v._v(" "),a("ul",[a("li",[a("strong",[v._v("程序次序规则")]),v._v(" - 一个线程内，按照代码顺序，书写在前面的操作先行发生于书写在后面的操作。")]),v._v(" "),a("li",[a("strong",[v._v("锁定规则")]),v._v(" - 一个 "),a("code",[v._v("unLock")]),v._v(" 操作先行发生于后面对同一个锁的 "),a("code",[v._v("lock")]),v._v(" 操作。")]),v._v(" "),a("li",[a("strong",[v._v("volatile 变量规则")]),v._v(" - 对一个 "),a("code",[v._v("volatile")]),v._v(" 变量的写操作先行发生于后面对这个变量的读操作。")]),v._v(" "),a("li",[a("strong",[v._v("线程启动规则")]),v._v(" - "),a("code",[v._v("Thread")]),v._v(" 对象的 "),a("code",[v._v("start()")]),v._v(" 方法先行发生于此线程的每个一个动作。")]),v._v(" "),a("li",[a("strong",[v._v("线程终止规则")]),v._v(" - 线程中所有的操作都先行发生于线程的终止检测，我们可以通过 "),a("code",[v._v("Thread.join()")]),v._v(" 方法结束、Thread.isAlive() 的返回值手段检测到线程已经终止执行。")]),v._v(" "),a("li",[a("strong",[v._v("线程中断规则")]),v._v(" - 对线程 "),a("code",[v._v("interrupt()")]),v._v(" 方法的调用先行发生于被中断线程的代码检测到中断事件的发生，可以通过 "),a("code",[v._v("Thread.interrupted()")]),v._v(" 方法检测到是否有中断发生。")]),v._v(" "),a("li",[a("strong",[v._v("对象终结规则")]),v._v(" - 一个对象的初始化完成先行发生于它的 "),a("code",[v._v("finalize()")]),v._v(" 方法的开始。")]),v._v(" "),a("li",[a("strong",[v._v("传递性")]),v._v(" - 如果操作 A 先行发生于 操作 B，而操作 B 又 先行发生于 操作 C，则可以得出操作 A 先行发生于 操作 C。")])]),v._v(" "),a("h3",{attrs:{id:"_3-3-内存屏障"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-内存屏障"}},[v._v("#")]),v._v(" 3.3. 内存屏障")]),v._v(" "),a("p",[v._v("Java 中如何保证底层操作的有序性和可见性？可以通过内存屏障。")]),v._v(" "),a("p",[v._v("内存屏障是被插入两个 CPU 指令之间的一种指令，用来禁止处理器指令发生重排序（像屏障一样），从而保障"),a("strong",[v._v("有序性")]),v._v("的。另外，为了达到屏障的效果，它也会使处理器写入、读取值之前，将主内存的值写入高速缓存，清空无效队列，从而保障"),a("strong",[v._v("可见性")]),v._v("。")]),v._v(" "),a("p",[v._v("举个例子：")]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("Store1;\nStore2;\nLoad1;\nStoreLoad;  //内存屏障\nStore3;\nLoad2;\nLoad3;\n复制代码\n")])])]),a("p",[v._v("对于上面的一组 CPU 指令（Store 表示写入指令，Load 表示读取指令），StoreLoad 屏障之前的 Store 指令无法与 StoreLoad 屏障之后的 Load 指令进行交换位置，即"),a("strong",[v._v("重排序")]),v._v("。但是 StoreLoad 屏障之前和之后的指令是可以互换位置的，即 Store1 可以和 Store2 互换，Load2 可以和 Load3 互换。")]),v._v(" "),a("p",[v._v("常见有 4 种屏障")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("LoadLoad")]),v._v(" 屏障 - 对于这样的语句 "),a("code",[v._v("Load1; LoadLoad; Load2")]),v._v("，在 Load2 及后续读取操作要读取的数据被访问前，保证 Load1 要读取的数据被读取完毕。")]),v._v(" "),a("li",[a("code",[v._v("StoreStore")]),v._v(" 屏障 - 对于这样的语句 "),a("code",[v._v("Store1; StoreStore; Store2")]),v._v("，在 Store2 及后续写入操作执行前，保证 Store1 的写入操作对其它处理器可见。")]),v._v(" "),a("li",[a("code",[v._v("LoadStore")]),v._v(" 屏障 - 对于这样的语句 "),a("code",[v._v("Load1; LoadStore; Store2")]),v._v("，在 Store2 及后续写入操作被执行前，保证 Load1 要读取的数据被读取完毕。")]),v._v(" "),a("li",[a("code",[v._v("StoreLoad")]),v._v(" 屏障 - 对于这样的语句 "),a("code",[v._v("Store1; StoreLoad; Load2")]),v._v("，在 Load2 及后续所有读取操作执行前，保证 Store1 的写入对所有处理器可见。它的开销是四种屏障中最大的（冲刷写缓冲器，清空无效化队列）。在大多数处理器的实现中，这个屏障是个万能屏障，兼具其它三种内存屏障的功能。")])]),v._v(" "),a("p",[v._v("Java 中对内存屏障的使用在一般的代码中不太容易见到，常见的有 "),a("code",[v._v("volatile")]),v._v(" 和 "),a("code",[v._v("synchronized")]),v._v(" 关键字修饰的代码块(后面再展开介绍)，还可以通过 "),a("code",[v._v("Unsafe")]),v._v(" 这个类来使用内存屏障。")]),v._v(" "),a("h3",{attrs:{id:"_3-4-volatile-变量的特殊规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-volatile-变量的特殊规则"}},[v._v("#")]),v._v(" 3.4. volatile 变量的特殊规则")]),v._v(" "),a("p",[a("code",[v._v("volatile")]),v._v(" 是 JVM 提供的 "),a("strong",[v._v("最轻量级的同步机制")]),v._v("。")]),v._v(" "),a("p",[a("code",[v._v("volatile")]),v._v(" 的中文意思是不稳定的，易变的，用 "),a("code",[v._v("volatile")]),v._v(" 修饰变量是为了保证变量在多线程中的可见性。")]),v._v(" "),a("h4",{attrs:{id:"volatile-变量的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-变量的特性"}},[v._v("#")]),v._v(" volatile 变量的特性")]),v._v(" "),a("p",[a("code",[v._v("volatile")]),v._v(" 变量具有两种特性：")]),v._v(" "),a("ul",[a("li",[v._v("保证变量对所有线程的可见性。")]),v._v(" "),a("li",[v._v("禁止进行指令重排序")])]),v._v(" "),a("h5",{attrs:{id:"保证变量对所有线程的可见性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#保证变量对所有线程的可见性"}},[v._v("#")]),v._v(" 保证变量对所有线程的可见性")]),v._v(" "),a("p",[v._v("这里的可见性是指当一条线程修改了 volatile 变量的值，新值对于其他线程来说是可以立即得知的。而普通变量不能做到这一点，普通变量的值在线程间传递均需要通过主内存来完成。")]),v._v(" "),a("p",[a("strong",[v._v("线程写 volatile 变量的过程：")])]),v._v(" "),a("ol",[a("li",[v._v("改变线程工作内存中 volatile 变量副本的值")]),v._v(" "),a("li",[v._v("将改变后的副本的值从工作内存刷新到主内存")])]),v._v(" "),a("p",[a("strong",[v._v("线程读 volatile 变量的过程：")])]),v._v(" "),a("ol",[a("li",[v._v("从主内存中读取 volatile 变量的最新值到线程的工作内存中")]),v._v(" "),a("li",[v._v("从工作内存中读取 volatile 变量的副本")])]),v._v(" "),a("blockquote",[a("p",[v._v("注意："),a("strong",[v._v("保证可见性不等同于 volatile 变量保证并发操作的安全性")])]),v._v(" "),a("p",[v._v("在不符合以下两点的场景中，仍然要通过枷锁来保证原子性：")]),v._v(" "),a("ul",[a("li",[v._v("运算结果并不依赖变量的当前值，或者能够确保只有单一的线程修改变量的值。")]),v._v(" "),a("li",[v._v("变量不需要与其他状态变量共同参与不变约束。")])])]),v._v(" "),a("p",[v._v("但是如果多个线程同时把更新后的变量值同时刷新回主内存，可能导致得到的值不是预期结果：")]),v._v(" "),a("p",[v._v("举个例子： 定义 "),a("code",[v._v("volatile int count = 0")]),v._v("，2 个线程同时执行 count++ 操作，每个线程都执行 500 次，最终结果小于 1000，原因是每个线程执行 count++ 需要以下 3 个步骤：")]),v._v(" "),a("ol",[a("li",[v._v("线程从主内存读取最新的 count 的值")]),v._v(" "),a("li",[v._v("执行引擎把 count 值加 1，并赋值给线程工作内存")]),v._v(" "),a("li",[v._v("线程工作内存把 count 值保存到主内存 有可能某一时刻 2 个线程在步骤 1 读取到的值都是 100，执行完步骤 2 得到的值都是 101，最后刷新了 2 次 101 保存到主内存。")])]),v._v(" "),a("h5",{attrs:{id:"语义-2-禁止进行指令重排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语义-2-禁止进行指令重排序"}},[v._v("#")]),v._v(" 语义 2 禁止进行指令重排序")]),v._v(" "),a("p",[v._v("具体一点解释，禁止重排序的规则如下：")]),v._v(" "),a("ul",[a("li",[v._v("当程序执行到 "),a("code",[v._v("volatile")]),v._v(" 变量的读操作或者写操作时，在其前面的操作的更改肯定全部已经进行，且结果已经对后面的操作可见；在其后面的操作肯定还没有进行；")]),v._v(" "),a("li",[v._v("在进行指令优化时，不能将在对 "),a("code",[v._v("volatile")]),v._v(" 变量访问的语句放在其后面执行，也不能把 "),a("code",[v._v("volatile")]),v._v(" 变量后面的语句放到其前面执行。")])]),v._v(" "),a("p",[v._v("普通的变量仅仅会保证该方法的执行过程中所有依赖赋值结果的地方都能获取到正确的结果，而不能保证赋值操作的顺序与程序代码中的执行顺序一致。")]),v._v(" "),a("p",[v._v("举个例子：")]),v._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("volatile")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("boolean")]),v._v(" initialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[v._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 下面代码线程A中执行")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 读取配置信息，当读取完成后将initialized设置为true以通知其他线程配置可用")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("doSomethingReadConfg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\ninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[v._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 下面代码线程B中执行")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 等待initialized 为true，代表线程A已经把配置信息初始化完成")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("while")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("!")]),v._v("initialized"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("{")]),v._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("}")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 使用线程A初始化好的配置信息")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[v._v("doSomethingWithConfig")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(";")]),v._v("\n复制代码\n")])])]),a("p",[v._v('上面代码中如果定义 initialized 变量时没有使用 volatile 修饰，就有可能会由于指令重排序的优化，导致线程 A 中最后一句代码 "initialized = true" 在 “doSomethingReadConfg()” 之前被执行，这样会导致线程 B 中使用配置信息的代码就可能出现错误，而 volatile 关键字就禁止重排序的语义可以避免此类情况发生。')]),v._v(" "),a("h4",{attrs:{id:"volatile-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的原理"}},[v._v("#")]),v._v(" volatile 的原理")]),v._v(" "),a("p",[v._v("具体实现方式是在编译期生成字节码时，会在指令序列中增加内存屏障来保证，下面是基于保守策略的 JMM 内存屏障插入策略：")]),v._v(" "),a("ul",[a("li",[v._v("在每个 volatile 写操作的前面插入一个 StoreStore 屏障。 该屏障除了保证了屏障之前的写操作和该屏障之后的写操作不能重排序，还会保证了 volatile 写操作之前，任何的读写操作都会先于 volatile 被提交。")]),v._v(" "),a("li",[v._v("在每个 volatile 写操作的后面插入一个 StoreLoad 屏障。 该屏障除了使 volatile 写操作不会与之后的读操作重排序外，还会刷新处理器缓存，使 volatile 变量的写更新对其他线程可见。")]),v._v(" "),a("li",[v._v("在每个 volatile 读操作的后面插入一个 LoadLoad 屏障。 该屏障除了使 volatile 读操作不会与之前的写操作发生重排序外，还会刷新处理器缓存，使 volatile 变量读取的为最新值。")]),v._v(" "),a("li",[v._v("在每个 volatile 读操作的后面插入一个 LoadStore 屏障。 该屏障除了禁止了 volatile 读操作与其之后的任何写操作进行重排序，还会刷新处理器缓存，使其他线程 volatile 变量的写更新对 volatile 读操作的线程可见。")])]),v._v(" "),a("h4",{attrs:{id:"volatile-的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的使用场景"}},[v._v("#")]),v._v(" volatile 的使用场景")]),v._v(" "),a("p",[v._v("总结起来，就是“一次写入，到处读取”，某一线程负责更新变量，其他线程只读取变量(不更新变量)，并根据变量的新值执行相应逻辑。例如状态标志位更新，观察者模型变量值发布。")]),v._v(" "),a("h3",{attrs:{id:"_3-5-long-和-double-变量的特殊规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-long-和-double-变量的特殊规则"}},[v._v("#")]),v._v(" 3.5. long 和 double 变量的特殊规则")]),v._v(" "),a("p",[v._v("JMM 要求 lock、unlock、read、load、assign、use、store、write 这 8 种操作都具有原子性，但是对于 64 位的数据类型（long 和 double），在模型中特别定义相对宽松的规定：允许虚拟机将没有被 "),a("code",[v._v("volatile")]),v._v(" 修饰的 64 位数据的读写操作分为 2 次 32 位的操作来进行，即允许虚拟机可选择不保证 64 位数据类型的 load、store、read 和 write 这 4 个操作的原子性。由于这种非原子性，有可能导致其他线程读到同步未完成的“32 位的半个变量”的值。")]),v._v(" "),a("p",[v._v("不过实际开发中，Java 内存模型强烈建议虚拟机把 64 位数据的读写实现为具有原子性，目前各种平台下的商用虚拟机都选择把 64 位数据的读写操作作为原子操作来对待，因此我们在编写代码时一般不需要把用到的 long 和 double 变量专门声明为 volatile。")]),v._v(" "),a("h3",{attrs:{id:"_3-6-final-型量的特殊规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-final-型量的特殊规则"}},[v._v("#")]),v._v(" 3.6. final 型量的特殊规则")]),v._v(" "),a("p",[v._v("我们知道，final 成员变量必须在声明的时候初始化或者在构造器中初始化，否则就会报编译错误。 final 关键字的可见性是指：被 final 修饰的字段在声明时或者构造器中，一旦初始化完成，那么在其他线程无须同步就能正确看见 final 字段的值。这是因为一旦初始化完成，final 变量的值立刻回写到主内存。")]),v._v(" "),a("h2",{attrs:{id:"_4-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[v._v("#")]),v._v(" 4. 参考资料")]),v._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://item.jd.com/10922250.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Java 并发编程实战》"),a("OutboundLink")],1)]),v._v(" "),a("li",[a("a",{attrs:{href:"https://item.jd.com/11740734.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《Java 并发编程的艺术》"),a("OutboundLink")],1)]),v._v(" "),a("li",[a("a",{attrs:{href:"https://item.jd.com/11252778.html",target:"_blank",rel:"noopener noreferrer"}},[v._v("《深入理解 Java 虚拟机》"),a("OutboundLink")],1)]),v._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/5bf2977751882505d840321d",target:"_blank",rel:"noopener noreferrer"}},[v._v("理解 Java 内存模型"),a("OutboundLink")],1)]),v._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100023901",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java 并发编程实战"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=e.exports}}]);