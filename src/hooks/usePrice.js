
const endpoint = 'https://deep-index.moralis.io/api/v2/'
const header = {
  accept: 'application/json',
  'X-API-Key':
    process.env.REACT_APP_MORALIS_API_KEY,
}

export default function usePrice() {

  /**
   * Request the USD price for the specified token address.
   * 
   * @param {the token address to request the usd price; not null} address 
   * @returns The USD price
   */
  const getPriceByAddress = async (address) => {
    let req = await fetch(
      endpoint + 'erc20/' + address + '/price?chain=eth&exchange=uniswap-v2&a',
      { headers: header }
    )
    let res = await req.json()
    // console.log(res)
    return res.usdPrice
  }

  /**
   * Request the ETH price for the specified token address.
   * 
   * @param {the token address to request the eth price; not null} address 
   * @returns The ETH price
   */
  const getEthPriceByAddress = async (address) => {
    let req = await fetch(
      endpoint + 'erc20/' + address + '/price?chain=eth&exchange=uniswap-v2&a',
      { headers: header }
    )
    let res = await req.json()
    // console.log(res)
    return res.nativePrice.value
  }

  return {
    getPriceByAddress,
    getEthPriceByAddress,
  }
}
