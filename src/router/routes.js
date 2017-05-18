import Hello from 'components/Hello'
import About from 'components/About'
import GitHub from 'components/GitHub'
import NotFound from 'components/NotFound'

export default [
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/github',
    name: 'github',
    component: GitHub
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]
