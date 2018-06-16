let Token = artifacts.require("TokenERC20");
let InitialSupply = 100
let TokenName = 'Mikancoin'
let TokenSymbol = '🍊'

module.exports = function(deployer) {
    deployer.deploy(Token, InitialSupply, TokenName, TokenSymbol);
};
