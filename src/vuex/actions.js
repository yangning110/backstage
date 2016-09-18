import * as types from './mutation-types'
import api from '../api'

export const login = ({
  commit,
  state
}, account, password) => {
  console.log(password)
  return new Promise((resolve, reject) => {
    api.login({
      account,
      password
    }).then((response) => {
      commit(types.AUTH_LOGIN, response.data)
      return resolve(response.data)
    }).catch((error) => {
      return reject(error)
    })
  })
}

export const logout = ({
  commit
}) => {
  commit(types.AUTH_LOGOUT)
}
