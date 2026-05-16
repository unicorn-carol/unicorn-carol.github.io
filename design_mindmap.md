个人网站产品/信息架构设计方案 (Personal Portfolio OS)

# 整体信息 (Global Overview)
网站定位：高质感的数字名片、作品集展示中心与深度思考的沉淀空间。
品牌关键词：专业 (Professional)、前沿 (Cutting-edge)、极简 (Minimalist)、有温度 (Human-centric)。
目标受众：潜在雇主、项目合作伙伴、行业同行、技术/艺术社区读者。
核心价值主张：通过精美的视觉表达与清晰的内容逻辑，建立个人品牌信任度。

# 页面结构 (Page Structure)
采用扁平化的树状结构，确保信息层级不超过 3 级。
## 首页 (Home)
1. Slogan与自我介绍: Carol  一个终身学习者
2. Value Props: 金融科技、产品经理、生活方式创业、科学搞玄。
3. Featured Works: 精选项目缩略图预览（2-3 个）。
4. Latest Insights: 最新博客/动态摘要。
## 作品集 (Projects)
1. Filter/Tabs: 类别筛选（如：产品设计、前端开发、研究报告）。
2. Project Grid: 作品卡片墙（标题、简介、标签、时间）。
3. Detail Page: 作品详情（背景、挑战、解决方案、成果展示、使用的工具）。
## 关于我 (About)
1. Bio: 故事化的个人简介。
2. Experience: 交互式时间轴（职业生涯/教育背景）。
3. Skill Stack: 技术栈/工具箱可视化展示。
##  博客/笔记 (Insights/Blog)
1. Search/Tags: 内容搜索与分类检索。
2. Reading List: 文章列表（日期、标题、阅读预计时间）。
3. Article View: 深度阅读模式（支持 Markdown 渲染、TOC 目录）。
##  联系 (Contact)
1. Quick Links: 社交媒体矩阵 (LinkedIn, GitHub, 小红书 等)。
2. Inquiry Form: 简洁的联系表单。

#导航与跳转 (Navigation & Logic)
## 主导航 (Header)：
左侧：Logo（点击回首页）。
右侧：Projects, About, Blog, Contact, [语言切换/深色模式切换]。
行为：滚动超过 50px 后背景高斯模糊（Glassmorphism）。
## 页脚 (Footer)：
版权信息、备案号、社交图标、快速回到顶部按钮。
## 跳转逻辑：
点击 Hero 区的 CTA 按钮 -> 跳转至 Projects。
点击作品卡片 -> 进入对应的 Detail Page。
点击博客列表 -> 进入 Article View。
外部链接（如 GitHub）-> 新窗口打开。

# 视觉风格 (Visual Direction)
为 Stitch 提供明确的美学指导。
##设计风格：
1. Botanical 
2. 空间感：大量留白 (Negative Space)，模块化间距，通过呼吸感提升高级感。
3. 元素形态：大圆角（16px-24px）、柔和的投影（Drop Shadow）、半透明材质。
##排版系统：
- 标题：无衬线字体 (如 Inter / SF Pro Display)，加粗，字间距略微收紧。
- 正文：易读性高的无衬线字体 (如 Roboto / PingFang SC)，行间距 1.6-1.8。

# 配色方案 (Color Palette)
采用经典的深浅主题切换方案（Dark/Light Mode）。
类别浅色模式 (Light Mode)深色模式 (Dark Mode)角色

# 交互效果 (Interaction & Micro-animations)
增强网站的“生命感”，提升 Stitch 生成原型的细节。
1. 入场动画：页面加载时，元素按层级自下而上淡入 (Fade-in Slide-up)。
2. 悬停反馈 (Hover)：
- 按钮：微幅放大 + 阴影加深 + 颜色渐变。
- 作品卡片：图片轻微缩放 (Zoom-in) + 标题上移。
- 导航链接：底部出现由中间向两边延伸的横线。
3. 滚动监听：
- 数字增长动画（如在 Skill 统计处）。
- 粘性侧边栏（博客详情页的 TOC 目录）。
4. 平滑滚动 (Smooth Scroll)：锚点跳转时保持丝滑过度。