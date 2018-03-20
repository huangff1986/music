import pxtorem from 'postcss-px2rem'

export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd-mobile", style: true }]
  ],
  extraPostCSSPlugins: [
    pxtorem({
      rootValue: 75,
      propWhiteList: [],
    }),
  ],
  theme: {
    hd: '2px'
  },
  alias: {
  	components: `${__dirname}/src/components`,
  	utils: `${__dirname}/src/utils`,
  	services: `${__dirname}/src/services`,
  	models: `${__dirname}/src/models`,
  	routes: `${__dirname}/src/routes`,
  	layout: `${__dirname}/src/layout`
  }
}
