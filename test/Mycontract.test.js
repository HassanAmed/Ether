const Mycontract = artifacts.require("./Mycontract.sol");
contract('Mycontract', (accounts) => {
    let mycontract

    before(async ()=> {
        contract = await Mycontract.deployed()
    }
    )

    describe('deployment success',async()=>{
        it('is deployed', async ()=>{
            const address = await contract.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })
    })



}) 