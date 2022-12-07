

# **Brief Introduction**

AvatarID is a decentralized set of custom avatar protocols provided by Lifeform, and it allows users to customize their unique WEB3 avatars by holding NFTs (either 721 or 1155).

# Contract Address

#### BSC Testnet

```plain
0xA4fC79e00BdD38722A7fA236d766B4f3f671bF09
```

**BSC Mainnet**

```plain
0x905De1Ac381b330c2C187cea0f1685E85a844390
```

### 

# Interface Descriptions

### 

### Set user-defined avatar

```plain
/**
  * set AvatarId
  * @collect avatar's contract address
  * @tokenId avatar id
  * @addr owner address
  * */
async setAvatar(collect, tokenId, addr)
```

#### Use case

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
// collect address ,default is ''
AvatarIdSDK.setAvatar('',token_id,owner_address)
```

#### 

### Reset user-defined avatar

```plain
/**
  * reset AvatarId
  * @addr owner address
  * @collect avatar's contract address
  * */
async resetAvatar(addr, collect)
```

#### Use case

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
// collect address ,default is ''
AvatarIdSDK.resetAvatar(owner_address,'')
```

#### 

### Get the user-defined avatar

```plain
/**
  * get the avatar nft list held by users
  * @collect avatar's contract address
  * @addr owner address
  * @page select a page, start at 0
  * @size page size
  * */
async getAvatarList(collect, addr, page, size)
```

#### Use case

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
// collect address ,default is ''
AvatarIdSDK.getAvatarList('',owner_address,page_num,page_size)
```

#### Return case

```plain
[
  {
    image:'xxx',  //the avatar image url
    token_id:'xxx'//if user has not set the avatar, token id is -1
  },
  {
    image:'xxx',
    token_id:'xxx'
  }
]
```

#### 

### Get the user-defined avatar

```plain
/**
  * get AvatarId details
  * @collect avatar's contract address
  * @addr owner address
  * */
async getStakeAvatarDetails(collect, addr)
```

#### Use case

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
// collect address ,default is ''
AvatarIdSDK.getStakeAvatarDetails('',owner_address)
```

#### Return case

```plain
{
  image:'xxx',   //the avatar image url
  token_id:'xxx' //if user has not set the avatar, token id is -1
}
```

#### 

### Approve avatar asset authorites

```plain
/**
  * approve avatar
  * @collect avatar's contract address
  * @addr owner address
  * @type collect type
  * */
async approve(collect, addr, type)
```

#### Use casae

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
// collect address ,default is ''
AvatarIdSDK.approve('',owner_address,collect_type)
```

### 

# How to Integration

install sdk

```plain
npm i avatarid-js
```

import api

```plain
import AvatarId from 'avatarid-js'
```

To initialize the API, you need to create the provider first, and then construct the avatarid instance.

```plain
const web3 = new Web3(ethereum)
const AvatarIdSDK = new AvatarId(web3)
```


# TIPS

1.From getStakeAvatarDetails, you can check the details of the current custom avatar, if the user has not set it, there will be a default avatar.

2.If it needs to support user-defined avatars, the approved interface of the asset contract is required for authorization operations. After the authorization is passed, set the avatar by calling setAvatar, or guide the user to the setting page of the Lifeform official website. [https://www.lifeform.cc/avatarid](https://www.lifeform.cc/avatarid)

3.For the case where the user wants to cancel this function, it needs to execute the resetAvatar interface to complete it and return the assets staked by the user.

4.If any project needs support to use their own NFT as a custom avatar, please send an email to: dev@lifeform.cc

