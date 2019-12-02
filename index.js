const ca = require("@aztec/contract-addresses")
const voltaAddresses = require(__dirname + '/volta.json')

const getContractAddressesForNetwork = (networkId) => {
    if (parseInt(networkId, 10) == 73799) {
        return voltaAddresses
    }
    return ca.getContractAddressesForNetwork(networkId)
}

module.exports = {
    "getContractAddressesForNetwork": getContractAddressesForNetwork,
    "NetworkId": {
        ...ca.NetworkId,
        "Volta": '73799'
    }
}
