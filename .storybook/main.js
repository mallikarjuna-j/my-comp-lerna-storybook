module.exports = {
  "stories": [
    // "../stories/**/*.stories.mdx",
    // "../stories/**/Button.stories.js"
    // "../packages/**/src/index.stories.mdx",
    "../packages/**/src/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    // "@storybook/addon-knobs/register",
    // "storybook-readme/register",
    "@storybook/addon-essentials"
  ]
}