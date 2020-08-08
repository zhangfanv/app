module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('iview-loader')
            .loader('iview-loader')
            .options({ prefix: true })
            .end()
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true,
                },
            },
        },
    },
}