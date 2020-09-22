# Incubed Registry Application

The Incubed Registry Application provides an interface to view information about the nodes and signers registered to Incubed.

## Installation

Clone into this repository:

```bash
git clone https://github.com/kylesmartin/IncubedRegistryApplication.git
```

Install dependencies: 

```bash
npm install
```

Run server:

```bash
npm start
```

View web application at http://localhost:3000/

## Navigating the application

The website contains two sections, one for viewing node information and one for viewing signer information

The node table displays all the nodes registered to Incubed and their properties:
- URL of node
- Deposit (in Trillion ERC20 Tokens)
- Register time
- Request limit (requests/second)
- Signer address

Given a signer address, the signer search outputs the following about the signer:
- Node URL
- Owner contract
- Stage of node

## Running the test file

The test file can be found at /test/test.js. To run it, first run the server:

```bash
npm start
```

Then, open a new terminal and run the test:

```bash
npm test
```
