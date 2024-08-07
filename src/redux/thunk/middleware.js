// import async from 'neo-async';
import fetchAPI from 'src/utils/fetch-api'

import {
  SINGLE_API /* , CHAIN_API, PARALLEL_API, REQUEST_ERROR */,
} from 'src/redux/actions/types'

const mandatory = () => {
  throw new Error('Missing parameter!')
}

// function singleApi adalah function asinkron yang digunakan untuk menangani pemanggilan API.
const singleApi = async (dataApi = mandatory(), dispatch) => {
  const {
    url = mandatory(),
    options,
    payload = {},
    beforeCallType,
    successType,
    errorType,
    next = (f) => f,
  } = dataApi

  try {
    // Memanggil fetchAPI untuk melakukan permintaan API sebenarnya dengan parameter yang diteruskan.
    const response = await fetchAPI({
      url,
      options,
      payload,
      dispatch,
    })
    // Jika berhasil, memanggil next dengan null dan response API, serta mengirimkan aksi successType ke Redux store jika didefinisikan.
    next(null, response)

    if (successType) {
      dispatch({ type: successType, payload: response })
    }
    return response
    // Jika terjadi kesalahan, menangani error dengan memanggil next dengan error, mengirimkan aksi errorType ke Redux store jika didefinisikan, dan melemparkan error untuk penanganan lebih lanjut.
  } catch (error) {
    next(error)

    if (errorType) {
      dispatch({ type: errorType, payload: error })
    }
    throw error
  }
}

const middleware =
  ({ dispatch /* , getState */ }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      //Jika tipe aksi adalah SINGLE_API, memanggil fungsi singleApi dengan action.payload dan dispatch.
      case SINGLE_API:
        return singleApi(action.payload, dispatch)
      //Jika tidak, meneruskan aksi ke middleware atau Redux selanjutnya dengan memanggil next(action).
      default:
        return next(action)
    }
  }
//Mengeskpor middleware yang telah didefinisikan sehingga dapat digunakan dalam konfigurasi store Redux atau di middleware lainnya jika diperlukan.
export default middleware
