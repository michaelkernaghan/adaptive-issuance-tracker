# Tezos Adaptive Issuance Script

## Description
This repository contains the `adaptive_issuance.sh` script, designed to monitor and manage various Tezos blockchain parameters including cycle information, balances, and staking data. It provides a comprehensive set of outputs that include balances, staking statuses, and detailed cycle progression statistics for the Tezos blockchain.

## Features
- **Cycle Tracking**: Displays current cycle, level, and time until the next cycle.
- **Balance Management**: Retrieves and displays liquid, staked, and full balances for predefined Tezos addresses.
- **Staking Overview**: Manages staking information including staking parameters and requests for both regular addresses and bakers.
- **Adaptive Issuance Tracking**: Monitors parameters related to the adaptive issuance mechanism of the Tezos blockchain.
- **Color-coded Outputs**: Enhances readability and clarity by utilizing color-coded outputs for different types of data.

## Prerequisites
- **Tezos Client**: The script requires `octez-client` and `octez-admin-client` to be installed on your machine.
- **jq**: A lightweight and flexible command-line JSON processor.

## Installation
Clone this repository to your local machine using:
```sh
git clone <repository-url>
```
## Usage
Navigate to the script directory and run the script with:
```
./adaptive_issuance.sh
```
## Configuration
The script uses predefined Tezos addresses and a baker address which can be modified as needed:

- Staker Addresses: Modify the staker_addresses array with the desired Tezos addresses.
- Baker Address: Set the baker_address variable to the baker's Tezos address.

## Dependencies
Ensure you have jq installed:
```
sudo apt-get install jq
```

## Contributing
Contributions are welcome. Please fork the repository and submit pull requests with your changes.

## License
Distributed under the MIT License. See LICENSE file for more information.

## Author
Michael Kernaghan

## Acknowledgements
Tezos community for continuous support and guidance.
Grimoire LLM
