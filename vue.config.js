module.exports = {
  configureWebpack:{
    resolve:{
      extensions:[],
          alias:{
           'assets':'@/assets',
           'common':'@/common',
           'components':'@/components',
           'views':'@/views',
           'network':'@/network'
            }
        }
    }
}