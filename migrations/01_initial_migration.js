//const NgoldTest = artifacts.require('NgoldTest')
const NgoldTestSale = artifacts.require('NgoldTestSale')

module.exports = function (deployer) {
    //deployer.deploy(NgoldTest);
    deployer.deploy(NgoldTestSale, '0x7e5E3ba30d17b740242822F41a3CF8c56192aaf1');
}