import AvatarIdABI from './abi/AvatarId'
import Avatar721ABI from './abi/Avatar721ABI'
import Avatar1155ABI from './abi/Avatar1155ABI'
import ContractsAddr from './config'
import { getMyNFTList, getNftDetail } from './avatarApi'

export default class AvatarId {
    constructor(provider) {
        this.chainId = '';
        this.avatarIdContract = ''
        this.collectAddress = ''
        this.contract = ''
        this.provider = provider
        if (!this.chainId || this.avatarIdContract || !this.contract) {
            this.initialize()
        }
    }

    async initialize () {
        this.chainId = await this.provider.eth.getChainId();
        this.avatarIdContract = ContractsAddr[this.chainId]['AvatarId']
        if (this.chainId && this.avatarIdContract) {
            this.contract = new this.provider.eth.Contract(AvatarIdABI, this.avatarIdContract);
        }
    }

    /**
       * set AvatarId
       * @collect avatar's contract address
       * @tokenId avatar id
       * @addr owner address
       * */
    async setAvatar (collect, tokenId, addr) {
        await this.initialize()
        if (collect) {
            this.collectAddress = collect
        } else {
            this.collectAddress = ContractsAddr[this.chainId]['721']
        }
        return await this.contract.methods.setAvatar(this.collectAddress, tokenId).send({ from: addr });
    }

    /**
      * reset AvatarId
      * @addr owner address
      * @collect avatar's contract address
      * */
    async resetAvatar (addr, collect) {
        await this.initialize()
        if (collect) {
            this.collectAddress = collect
        } else {
            this.collectAddress = ContractsAddr[this.chainId]['721']
        }

        return await this.contract.methods.resetAvatar(this.collectAddress).send({ from: addr });
    }
    /**
      * get AvatarId details
      * @collect avatar's contract address
      * @addr owner address
      * */

    async getStakeAvatarDetails (collect, addr) {
        await this.initialize()

        if (collect) {
            this.collectAddress = collect
        } else {
            this.collectAddress = ContractsAddr[this.chainId]['721']
        }

       return  await this.contract.methods.getAvatarId(this.collectAddress, addr).call()
            .then((res) => {
                const tempParams = {
                    chain_id: this.chainId,
                    token_id: res,
                    contract: this.collectAddress,
                }
                getNftDetail(tempParams).then(res => {
                    return {
                        image: res.data.data.image,
                        token_id: res.data.data.token_id
                    }
                })
            })
            .catch(() => {
                const tempParams = {
                    page: 0,
                    size: 10,
                    chain_id: this.chainId,
                    sort: '-updated_at',
                    address: addr,
                    contract: this.collectAddress,

                }
                return getMyNFTList(tempParams).then(async res => {
                    const itemList = res.data.data.items
                    if (itemList?.length > 0) {

                        return {
                            image: itemList[0].image,
                            token_id: -1
                        }
                    }
                    return {
                        image: await this.contract.methods._defaultUrl().call(),
                        token_id: -1
                    }
                })
            })
    }


    /**
       * get avatar list
       * @collect avatar's contract address
       * @addr owner address
       * @page  select a page, start at 0
       * @size page size
       * */

    async getAvatarList (collect, addr, page, size) {
        await this.initialize()

        if (collect) {
            this.collectAddress = collect
        } else {
            this.collectAddress = ContractsAddr[this.chainId]['721']
        }
        const tempParams = {
            page: page,
            size: size,
            chain_id: this.chainId,
            sort: '-updated_at',
            address: addr,
            contract: this.collectAddress,

        }
          return  getMyNFTList(tempParams).then(res => {
                const itemList = res.data.data.items
                if (itemList?.length > 0) {
                    return itemList.map(item => { return { image: item.image, token_id: item.token_id } })
                }
                return []
            })
       

    }

    /**
      * approve avatar
      * @collect avatar's contract address
      * @addr owner address
      * @type collect type
      * */

    async approve (collect, addr, type) {
        await this.initialize()
        if (collect) {
            this.collectAddress = collect
        } else {
            this.collectAddress = ContractsAddr[this.chainId][type]
        }
        const collectContract = new this.provider.eth.Contract(type === '721' ? Avatar721ABI : Avatar1155ABI, this.collectAddress)
        await collectContract.methods.isApprovedForAll(addr, this.avatarIdContract).call()
            .then(async (allowance) => {
                if (!allowance) {
                    await collectContract.methods.setApprovalForAll(this.avatarIdContract, true).send({ from: addr }).then(() => {
                        return true
                    })
                        .catch((err) => {
                            throw new Error("approve error" + err);
                        })
                } else {
                    return true
                }
            })
            .catch((err) => {
                throw new Error("approve error" + err);
            })
    }

}
