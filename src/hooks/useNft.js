import { ethers } from 'ethers'
import meishu from '../constants/abis/meishuJetNfts'
import meishuStaking from '../constants/abis/meishuStaking'

import { getContract } from '@wagmi/core'

export default function useNft() {
  const searcById = async (id) => {
    // console.log('id: ' + id)
    const contract =  getContract(meishu.address, meishu.abi)
    const uri = await contract.tokenURI(id)
    console.log('uri: ' + uri)
    try {
      const data = await (
        await fetch('https://meishu.mypinata.cloud/ipfs/' + uri.slice(7, uri.length))
      ).json()
      return data
    } catch (err) {
      console.error(err)
    }
  }

  const balanceOf = async (address) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const balance = await contract.balanceOf(address)
    return balance
  }

  const getTokenIds = async (address) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const list = await contract.walletOfOwner(address)
    return list
  }

  const isOwner = async (id, address) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const data = await getAllPoolsData(address)
    for (let i = 0; i < data.length; i++) {
      if (data[i].data._nft_id == id) {
        return 'STAKED'
      }
    }
    const owner = await contract.ownerOf(id)

    if (owner == address) return true
    else return false
  }

  const isApproved = async (address) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const bool = await contract.isApprovedForAll(address, meishuStaking.address)
    return bool
  }

  const getPools = async (address) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const pools = await contract.get_all_pools(address)
    const length = pools[0]
    const closed = pools[1]
    return {
      length: length / 1,
      closed: closed,
    }
  }

  const getPoolById = async (address, id) => {
    const contract =  getContract(meishu.address, meishu.abi)
    const pool = await contract.get_stakeholder_single_pool(address, id)
    return pool
  }

  const getCalculationProps = async () => {
    const contract =  getContract(meishu.address, meishu.abi)
    const props = await contract.get_calculation_props()
    return props
  }

  const getAllPoolsData = async (address) => {
    const { length, closed } = await getPools(address)
    if (length == 0) return []
    else {
      let pools = []
      let closedAsInt = []

      closed.forEach(el => closedAsInt.push(ethers.BigNumber.from(el).toNumber()))

      //POOLs start from 1
      for (let i = 1; i < length + 1; i++) {
        if (!closedAsInt.includes(i)) {
          const data = await getPoolById(address, i)
          pools.push({ index: i, data: data })
        }
      }
      return pools
    }
  }

  const getRewards = async (address, id) => {
    const provider = new ethers.providers.JsonRpcProvider(url)
    const contract = new ethers.Contract(meishuStaking.address, meishuStaking.abi, provider)
    const rewards = await contract.get_rewards_on(address, id)
    return rewards
  }

  return {
    searcById,
    balanceOf,
    getTokenIds,
    isOwner,
    isApproved,
    getCalculationProps,
    getAllPoolsData,
    getPoolById,
    getPools,
    getRewards,
  }
}
