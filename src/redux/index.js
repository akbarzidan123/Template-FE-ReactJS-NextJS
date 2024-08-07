// Mengimpor fungsi createStore dan applyMiddleware dari library Redux untuk membuat store Redux dan menerapkan middleware.
import { createStore, applyMiddleware } from 'redux'
// Mengimpor middleware redux-thunk untuk mengizinkan action creators Redux mengembalikan fungsi objek.
import thunk from 'redux-thunk'
// Mengimpor fungsi createWrapper dari next-redux-wrapper untuk mempermudah integrasi Redux dengan Next.js.
import { createWrapper } from 'next-redux-wrapper'
// Mengimpor reducer dan initialState dari direktori 'src/redux/reducers'. Ini adalah reducer yang telah digabungkan ( combine reducer )dan initialState dari aplikasi Redux.
import reducer, { initialState } from 'src/redux/reducers'
//Mengimpor middleware tambahan (apiMiddleware) dari direktori 'src/redux/thunk/middleware'. Middleware ini dapat digunakan untuk menangani logika asinkron di aplikasi Redux.
import apiMiddleware from 'src/redux/thunk/middleware'

const DEV = process.browser && process.env.NEXT_ENV === 'development'

//function bindMiddleware digunakan untuk menerapkan middleware ke store Redux. Jika dalam mode pengembangan (DEV), akan menambahkan middleware logger Redux.
const bindMiddleware = (middleware) => {
  if (DEV) {
    const { createLogger } = require('redux-logger')

    const logger = createLogger({
      collapsed: (getState, action, logEntry) => !logEntry.error,
      // predicate: (getState, action) => !['@@redux-form/CHANGE', '@@redux-form/REGISTER_FIELD'].includes(action.type),
    })

    return applyMiddleware(...middleware, logger)
  }

  return applyMiddleware(...middleware)
}
// function makeStore untuk membuat dan mengonfigurasi store Redux. Ini mencakup penggunaan reducer, initialState, dan middleware yang telah diatur.
const makeStore = () => {
  const store = createStore(
    reducer,
    initialState,
    bindMiddleware([apiMiddleware, thunk])
  )
  return store
}

// Melakukan eksport default dari hasil createWrapper yang digunakan untuk mengintegrasikan store Redux dengan Next.js menggunakan next-redux-wrapper. Opsi debug diatur berdasarkan environment untuk membantu debugging di mode pengembangan.
export default createWrapper(makeStore, {
  debug: process.env.NEXT_ENV === 'development',
})
