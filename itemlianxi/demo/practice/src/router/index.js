import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/home',
      name: 'Home',
      component: () => import('../pages/Home.vue'),
      children: [{
        path: "/home/watch",
        name: "Watch",
        component: () => import('../pages/Watch.vue')
      }]
    }, {
      path: '/detail',
      name: 'Detail',
      component: () => import('../pages/Detail.vue')
    },{
      path:"/login",
      name:"Login",
      component:()=>import('../pages/Login.vue'),
      meta:true
    }
  ]
})
// router.beforeEach((to, from, next) => {
//   console.log(to,from,next)
//   // ${//to and from are Route Object,next() must be called to resolve the hook}
// })



// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })
// routes: [
//   {
//     path: '/foo',
//     component: Foo,
//     children: [
//       {
//         path: 'bar',
//         component: Bar,
//         // a meta field
//         meta: { requiresAuth: true }
//       }
//     ]
//   }
// ]
// })
