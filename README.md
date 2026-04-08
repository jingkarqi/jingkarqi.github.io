# Jingkarqi Homepage

基于 `Astro` 构建的个人主页与博客，部署到 `GitHub Pages`。

## 本地开发

```bash
npm install
npm run dev
```

默认本地地址：

```text
http://localhost:4321
```

## 常用命令

```bash
npm run check
npm run build
npm run preview
```

## 内容结构

- `src/content/blog/`：博客文章
- `src/content/projects/`：项目页
- `src/content/methods/`：方法页

## 部署

推送到 `main` 后，GitHub Actions 会自动执行：

1. 安装依赖
2. 运行 `npm run build`
3. 上传 `dist/`
4. 部署到 GitHub Pages

工作流文件在：

- `.github/workflows/deploy.yml`
