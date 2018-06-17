# initial-clippy-offering
Your helpful friend 📎for launching an ICO

Dependencies
  * https://github.com/trufflesuite/ganache-cli
  * https://github.com/ethereum/mist

Run `ganache-cli`

Then connect Mist with `/Applications/Mist.app/Contents/MacOS/Mist --rpc http://localhost:8545`

Now go to this repo, and run

`truffle compile`

and then

`truffle migrate`

Take note of the contract address generated. In Mist, go to "Watch Contract" and paste in that address. You'll also have to copy the ABI field of the generated JSON from under build/contracts/TokenERC20.json and paste that in. Give it a name like Mikancoin.

You'll be able to see the ICO token interface and run commands against it.

**Tips for cleaning up your Mist test environment:**

You can delete watched contracts by opening the Developer Tools from the contracts page in Mist.(You may actually have to open the console by right clicking on a contract page and choosing Developer tools.) Now in the console, type:

`CustomContracts.find().fetch().map(
   function(m) { CustomContracts.remove(m._id);}
)`
