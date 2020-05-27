# ownui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 自动化测试
- 每次写完代码提交后可以实现自动测试,测试代码是否能通过测试
- 测试编写会浪费大浪的时间 测试代码会比源代码更多一些 1（源代码）:2（测试代码）
- 编写类库（开发类库 组件库 框架 别人提交代码影响了核心逻辑） 

> 好处
- 快速定位bug
- 有测试的代码吗 一般代码质量比较高（你要测试自己的代码-> 肯定写的代码容易测试）
- 增强代码的维护性 （测试就可以认为是一个潜在的文档），提升代码的阅读

## 测试分类

- 黑盒测试（功能测试 主要验证功能是否OK） 白盒测试（了解代码的具体逻辑）
- 单元测试（已最小的单元来实现测试功能 针对小的单元进行测试 一个组件 一个方法 一个模块） 集成测试（放在一起进行测试）
Todo => TodoInput TodoList TodoItem
-TDD (工具包 添加 删除 测试驱动开发“献血测试在写代码”)
- BDD（行为驱动开发）根据用户行为测试

## 常见的测试框架

- karma 可以把测试跑在真正的浏览器上，可以测试ui组件
- mocha 提供了一个测试环境 断言库chai sinon mock一些方法
- Jest facebook出的 基于jsdom的 用js对象来模拟浏览器环境（缺陷不能测试样式相关的）不需要集成的 默认具备断言库 0配置 覆盖率
- jest= karma+mocha +chai

## 测试覆盖率
- 覆盖率 是一个衡量的标准 但是不是越高越好 单元测试的覆盖率比较高
- 集成测试 覆盖率比较低

