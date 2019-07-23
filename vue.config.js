module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/online/' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind } 
  devServer: {
    port: 8888, // 端口号
    host: '0.0.0.0',
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/api': {
        target: 'http://www.bangche.net/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      },
    }
  },
}
