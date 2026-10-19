# AI 公益项目影响计划

这是一个面向 iPolloWork 的 Skill，可将 AI 公益项目想法整理为可评审、可衡量、可治理的计划。它会区分事实与假设，梳理受益者和风险承担者，定义衡量指标、治理责任、资金护栏，以及试点、暂停、停止和退出条件。

## 功能

- 绘制受益者和利益相关方地图，并明确参与和申诉权利。
- 串联资源、活动、产出、结果和公共利益。
- 生成证据台账与精简的衡量记分卡。
- 补充资金用途控制、利益冲突披露、投诉机制和独立评审。
- 显式标记未知项；证据不足时优先建议可逆试点。

## 在 iPolloWork 中使用

1. 从最新 Release 下载 `ai-public-benefit-planner-1.0.0.ipollowork-plugin`。
2. 在 iPolloWork 中打开“扩展”，选择“文件导入”，选中该安装包。
3. 检查预览信息，安装后确认“AI Public Benefit Planner”已启用。
4. 新建任务并输入：`使用 AI Public Benefit Planner 评审这个项目：……`
5. 尽量提供目标受益者、地区、合作方、预算或资源、周期和已有证据。

如果只需要纯 Skill，可通过本地 Skill 导入流程安装 `ai-public-benefit-planner-1.0.0-skill.zip`。

本 Skill 支持在 [iPolloWork](https://github.com/Devin-AXIS/iPolloWork) 中使用。安装包已在 iPolloWork 0.50.12 插件引擎中测试，不包含权限声明或可执行钩子。

## 示例

参见 [输入示例](examples/initiative-brief.md) 与 [预期输出](examples/expected-plan.md)。

## 开发与打包

```sh
npm test
npm run package
cd dist && shasum -a 256 -c SHA256SUMS.txt
```

[English](README.md) · MIT License
