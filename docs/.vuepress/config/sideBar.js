module.exports = {
    '/FE/react/': [
        {
            title: 'react',
            collapsable: true,
            children: [
                ['test1', '1'], // 同 {path: 'react/test1', title: '1'}
                ['test2', '2']
            ]
        },
        {
            title: 'react hook',
            collapsable: true,
            children: [
                ['test4', 4]
            ]
        }
    ],
    '/FE/vue/': [
        {
            title: 'vue',
            collapsable: true,
            children: [
                ['test3', '3'],
            ]
        }
    ],
    '/BE/': [
        {
            title: 'spring',
            children: [
                ['spring/mvc', 'spring-mvc'], // 同 {path: 'react/test1', title: '1'}
                ['spring/boot', 'spring-boot']
            ]
        },
    ],
    '/OTHER/': [
        ['', 'other']
    ]
}