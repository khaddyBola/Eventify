// require("@nomicfoundation/hardhat-toolbox");

// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     hardhat: {},
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//   },
//   solidity: {
//     version: '0.8.17',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   mocha: {
//     timeout: 40000,
//   },
// }

// require('@nomicfoundation/hardhat-toolbox');
// require('dotenv').config();

// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     hardhat: {},
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//     celoTestnet: {
//       url: 'https://alfajores-forno.celo-testnet.org',
//       accounts: [process.env.WALLET_KEY ],
//       chainId: 44787,
//     },
//   },
//   solidity: {
//     version: '0.8.17',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   mocha: {
//     timeout: 40000,
//   },
// };

// require('@nomicfoundation/hardhat-toolbox');
// require('dotenv').config();
// module.exports = {
//   defaultNetwork: 'localhost',
//   networks: {
//     hardhat: {},
//     localhost: {
//       url: 'http://127.0.0.1:8545',
//     },
//     alfajores: {
//       url: 'https://alfajores-forno.celo-testnet.org',
//       accounts: [`0x${process.env.PRIVATE_KEY}`],
//       chainId: 44787,
//     },
//   },
//   solidity: {
//     version: '0.8.17',
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200,
//       },
//     },
//   },
//   mocha: {
//     timeout: 40000,
//   },
// };
require('@nomicfoundation/hardhat-ethers');
require('dotenv').config();

module.exports = {
  defaultNetwork: 'hardhat', // or 'hardhat'
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    arbitrumSepolia: {
      url: process.env.ARB_URL,
      accounts: [process.env.PRIVATE_KEY],
      chainId: 421614,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
};
