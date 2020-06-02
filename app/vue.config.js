module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                // 这里的选项会传递给 postcss-loader
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 100 // 1rem等于多少px
                    })
                ]
            }
        }
    },
    lintOnSave: false, //关闭eslint语法检查
    devServer: {
        proxy: {
            // c处理api开头地址
            "/topic": {
                target: "https://m.you.163.com",
                changeOrigin: true, //是否跨域
                ws: true
            }
        }
    }
}