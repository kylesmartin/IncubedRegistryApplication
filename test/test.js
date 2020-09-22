// imports
var expect  = require("chai").expect;
var request = require("request");

// sample contract values (obtained from etherscan.io)
var currentNodeCount = '24';
var nodeIndex = 0;
var node = {
    '0': 'https://in3-v2.slock.it/mainnet/nd-1',
    '1': '1010000000000000000',
    '2': '1576224418',
    '3': '25769804253',
    '4': '2000',
    '5': '0x45d45e6Ff99E6c34A235d263965910298985fcFe',
    '6': '0x2d52cf40e376d0c501b301647a7b79778e66b32a34ba27355053c342bf0ff225',
    url: 'https://in3-v2.slock.it/mainnet/nd-1',
    deposit: '1010000000000000000',
    registerTime: '1576224418',
    props: '25769804253',
    weight: '2000',
    signer: '0x45d45e6Ff99E6c34A235d263965910298985fcFe',
    proofHash: '0x2d52cf40e376d0c501b301647a7b79778e66b32a34ba27355053c342bf0ff225'
};
var signerAddress = '0xbcdF4E3e90cc7288b578329efd7bcC90655148d2';
var signer = ['0', '0x85eD0E04a1878439Cf2159767476bEDA4AceECF8', '1', '0', '4'];

// testing backend
describe("Incubed Registry API", function() {
    //test nodecount endpoint
    describe("Get node count", function() {
        // request url
        var url = "http://localhost:3000/nodecount";
        // check status
        it("Returns 200 status", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        // check response
        it("Returns the node count", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal(currentNodeCount);
                done();
            });
        });
    });
    // test node endpoint
    describe("Get node", function() {
        // request url and payload
        var url = "http://localhost:3000/node";
        var header = {
            method: 'post',
            body: {index: nodeIndex},
            json: true,
            url: url
        }
        // check status
        it("Returns 200 status", function(done) {
            request(header, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        // check response
        it("Returns the node", function(done) {
            request(header, function(error, response, body) {
                expect(JSON.stringify(body)).to.equal(JSON.stringify(node));
                done();
            });
        });
    });
    // test signer endpoint
    describe("Get signer", function() {
        // good request url and payload
        var url = "http://localhost:3000/signer";
        var header = {
            method: 'post',
            body: {signer: signerAddress},
            json: true,
            url: url
        }
        // check status
        it("Returns 200 status", function(done) {
            request(header, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });
        // check response
        it("Returns the signer", function(done) {
            request(header, function(error, response, body) {
                expect(JSON.stringify(body)).to.equal(JSON.stringify(signer));
                done();
            });
        });
    });  
});