//Mengimpor HYDRATE dari next-redux-wrapper. Ini digunakan untuk menangani hydrate (penyusupan) state dari server-side rendering (SSR) ke state Redux di sisi klien.
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux'
import auth, { initialState as authInitial } from './auth'
import data, { initialState as dataInitial } from './data'
import categorySelector, {
  initialState as categorySelectorInitial,
} from './categorySelector'

//Mendefinisikan initialState yang merupakan objek yang berisi state awal dari semua reducer yang digabungkan. Setiap properti objek mewakili state awal dari masing-masing reducer.
export const initialState = {
  auth: authInitial,
  data: dataInitial,
  categorySelector: categorySelectorInitial,
}
//Menggabungkan semua reducer individu (auth, data, categorySelector) menjadi satu appReducer menggunakan fungsi combineReducers dari Redux.
const appReducer = combineReducers({
  auth,
  data,
  categorySelector,
})
//Mendefinisikan fungsi reducers sebagai root reducer untuk aplikasi Redux.
const reducers = (state, action) => {
  //Menggunakan kondisi if untuk menangani aksi dengan tipe HYDRATE. Jika tipe aksi adalah HYDRATE, maka state akan diganti dengan objek yang berisi state sebelumnya (...state) dan delta perubahan dari data yang dihydrate (...action.payload).
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
  }
  //Jika tipe aksi adalah "LOGOUT_SUCCESS", maka state akan direset ke initialState.
  // Jika bukan keduanya, maka fungsi appReducer akan dipanggil dengan state saat ini dan aksi yang diterima.
  return appReducer(
    action.type === 'LOGOUT_SUCCESS' ? initialState : state,
    action
  )
}
//Mengeskpor fungsi reducers sebagai default eksport dari berkas ini. Ini memungkinkan reducers untuk digunakan sebagai root reducer dalam konfigurasi store Redux.
export default reducers
