
import {axios} from './axios'
const baseUrl = 'https://test-api.lifeform.cc/api/v1'

export async function getMyNFTList(params) {
  return axios({
    method: 'get',
    url: baseUrl+'/nft/nfts_online_paged',
    params,
  });
}
export async function getNftDetail(params) {
  return axios({
    method: 'get',
    url: baseUrl+'/nft/my_nft',
    params: {
      ...params
    }
  });
}