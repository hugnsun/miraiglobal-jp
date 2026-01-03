# Mirai Corporation - Premium Business Website

这是一个为未来株式会社（Mirai Corporation）全面升级的"Premium Business"风格官网。
设计在保持日式商务严谨感的同时，融入了现代网页设计的动态交互与创意布局，提升了品牌的国际化与高端形象。

## 🎨 升级亮点 (Redesign Highlights)

### 1. 视觉体系升级 (Premium Visuals)
*   **主色调**: 升级为 **Premium Business Blue (`#003B73`)**。相比之前的普通蓝，更深邃、更具权威感。
*   **辅助色**: **Champagne Gold (`#C5A059`)**。用于高光点缀，传递品质与优雅。
*   **背景**: 引入了 **渐变 (Gradients)** 和 **玻璃拟态 (Glassmorphism)** 效果，增加空间的通透感。

### 2. 创意布局 (Creative Layouts)
打破了传统的"豆腐块"排版，采用了更具呼吸感的布局形式：
*   **Zig-Zag Layout**: 图文交错排列（如首页公司介绍、业务详情页），打破视觉单调，引导视线流动。
*   **Feature Grid**: 使用图标与卡片结合的网格布局（如核心价值观、服务案例），信息呈现更结构化。
*   **Modern Hero**: 带有动态渐变背景和悬浮文字的首屏，不仅冲击力强，更显现代科技感。

### 3. 动态交互 (Micro-Interactions)
*   **Scroll Reveal**: 全站实装了滚动出现动画。元素会随着页面滚动优雅地向上浮现（Fade Up），避免生硬的展示。
*   **Hover Effects**: 按钮、卡片在鼠标悬停时会有细腻的位移和阴影加深效果，提升用户操作的愉悦感。

## 📂 文件结构

```text
guanwang/
├── index.html          # [首页] 现代Hero + 核心价值网格 + 创意公司介绍 + 业务概览
├── business.html       # [业务板块] 采用 Zig-Zag 布局展示两大核心业务
├── cases.html          # [服务案例] 网格卡片展示成功案例
├── guidelines.html     # [行动方针] 清晰的编号卡片布局
├── contact.html        # [联系我们] 左右分栏设计的现代化联系页面
├── styles-jp.css       # [样式表] 包含所有新版设计变量、布局类和动画关键帧
├── script.js           # [脚本] 实现滚动侦测动画 (IntersectionObserver) 和平滑滚动
└── README.md           # 项目说明
```

## 🚀 如何体验

1.  直接在浏览器中打开 `index.html`。
2.  向下滚动页面，体验元素随视线逐个浮现的动态效果。
3.  点击导航栏或按钮，体验平滑滚动跳转。

## 🛠️ 技术细节

*   **纯原生实现**: 不依赖 Bootstrap 或 Tailwind，使用原生 CSS Variables 和 Flexbox/Grid 布局，代码轻量且易于维护。
*   **响应式设计**: 完美适配桌面端和移动端。在手机上，Zig-Zag 布局会自动堆叠，Grid 会调整列数。
*   **性能优化**: 动画使用 `transform` 和 `opacity` 属性，确保 60fps 的流畅度。
