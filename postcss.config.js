import postcssPxToRem from "postcss-pxtorem"

export default ({ env }) => {
  const isProd = env === "production"
  const plugins = []

  if (isProd) {
    plugins.push(
      postcssPxToRem({
        rootValue: 16,
        propList: ["*"],
        mediaQuery: true,
      })
    )
  }

  return {
    plugins,
  }
}
