const _import = require('./_import')
export default [
    {
        path: '/movie',
        component: _import('movie/index', 'views'),
        redirect: '/movie/nowplaying',
        children: [
            {
                path: 'city',
                component: _import('city/index', 'components')
            },
            {
                path: 'comingsoon',
                component: _import('comingsoon/index', 'components')
            },
            {
                path: 'nowplaying',
                component: _import('nowplaying/index', 'components')
            },
            {
                path: 'search',
                component: _import('search/index', 'components')
            }
        ]
    },
    {
        path: '/mine',
        component: _import('mine/index', 'views')
    },
    {
        path: '/cinema',
        component: _import('cinema/index', 'views')
    }
]