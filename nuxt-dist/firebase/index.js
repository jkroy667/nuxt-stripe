import createApp from './app.js'

import authService from './service.auth.js'
import firestoreService from './service.firestore.js'

const appConfig = {"apiKey":"AIzaSyAGvYkqFCr-WtLQdl77l8bnkyJa6yLCYQ8","authDomain":"nuxt-stripe.firebaseapp.com","projectId":"nuxt-stripe","storageBucket":"nuxt-stripe.appspot.com","messagingSenderId":"232386956287","appId":"1:232386956287:web:804378931f8aa88dd675ca","measurementId":"G-37NE0L0YTV"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
    firestoreService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),
      firestoreService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth,
    firestore
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth,
    firestore: firestore
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}