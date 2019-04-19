import Layout from '@/views/layout'
import navConfig from './nav.config.json'
const language = 'zh-cn'

let routes = []
Object.keys(navConfig).forEach(lang => {
  let nav = navConfig[lang]
  nav.map(v => {
    routes.push({
      id: Math.random(),
      name: v.name,
      path: `/${lang}${v.path}`,
      component: () => import(`../docs/${lang}${v.path}.md`)
    })
    if (v.children) {
      v.children.forEach(item =>
        routes.push({
          id: Math.random(),
          name: item.name,
          path: `/${lang}${v.path}${item.path}`,
          component: () => import(`../docs/${lang}${item.path}.md`)
        })
      )
    }
  })
});
export default {
  routes: [
    {
      id: '2',
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: `/${language}/index`,
      children: routes
    }
  ]
}
