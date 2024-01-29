//const NgoldTest = artifacts.require('NgoldTest')
//const NgoldTestSale = artifacts.require('NgoldTestSale')
const GoldenElf = artifacts.require('GoldenElf')

module.exports = function (deployer) {
    deployer.deploy(GoldenElf);
    //deployer.deploy(NgoldTest);
    //deployer.deploy(NgoldTestSale, '0x7e5E3ba30d17b740242822F41a3CF8c56192aaf1');
}