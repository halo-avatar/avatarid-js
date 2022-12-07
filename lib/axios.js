import Axios from 'axios';

const apiAxios = Axios;

apiAxios.defaults.baseURL = 'https://pandora.lifeform.cc/web_avatar';

export const axios = function (config) {
  const configCom = {
    method: config.method || 'get',
    headers: {},
    ...config,
  };
  if (!('authorization' in config) || config.authorization) {
    const token = window.localStorage.getItem('wallet_auth');
    configCom.headers.Authorization = `${token || ''}`;
  }
  return new Promise((resolve, reject) => {
    apiAxios(configCom)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


