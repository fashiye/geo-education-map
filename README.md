# Geo Education Map

## 项目简介
Geo Education Map 是一个基于高德API和Deep Seek API的高中地理教育地图应用。该项目旨在为用户提供一个交互式的地图体验，用户可以通过点击地图上的省市来获取相关的地理信息和介绍。

## 项目结构
```
geo-education-map
├── public
│   └── index.html          # 网页的主HTML文件，包含基本的结构和引入的脚本
├── src
│   ├── api
│   │   ├── amap.ts        # 封装高德API的调用，获取省市的地理信息和地图数据
│   │   └── deepseek.ts    # 封装Deep Seek API的调用，生成地理介绍文本
│   ├── components
│   │   ├── MapView.tsx    # 地图组件，负责渲染地图并处理点击事件
│   │   ├── Sidebar.tsx     # 侧边栏组件，显示省市的介绍信息
│   │   └── CityInfo.tsx    # 城市信息组件，展示选中城市的详细介绍
│   ├── data
│   │   └── provinces.json  # 各省的地理信息数据
│   ├── styles
│   │   └── main.css        # 项目的样式定义
│   ├── App.tsx             # 应用的入口组件，整合地图和侧边栏组件
│   └── types
│       └── index.ts        # 定义项目中使用的TypeScript类型和接口
├── package.json             # npm的配置文件，列出项目的依赖和脚本
├── tsconfig.json            # TypeScript的配置文件
└── README.md                # 项目的文档，介绍项目的功能和使用方法
```

## 功能
- 点击省份（如辽宁省）时，地图自动放大并高亮显示各个市，同时在侧边栏展示该省的简单介绍。
- 点击市（如鞍山市）时，地图进一步放大到市级，并在侧边栏展示该市的相关介绍。
- 支持通过高德API查询地理信息，并将结果发送到Deep Seek API生成详细的地理介绍文本。

## 使用说明
1. 克隆项目到本地：
   ```
   git clone <repository-url>
   ```
2. 安装依赖：
   ```
   npm install
   ```
3. 启动项目：
   ```
   npm start
   ```
4. 打开浏览器访问 `http://localhost:3000` 查看应用。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
本项目采用 MIT 许可证。