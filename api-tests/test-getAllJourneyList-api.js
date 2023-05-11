const chai = require('chai');
const axios = require('axios');
const Ajv = require('ajv');
const ajv = new Ajv();

describe('Get journey list Api request', async()=>{

    it('should get the journey list' , async()=>{
        const response = await axios.get('https://talented-visor-tick.cyclic.app/api/v1/journeys?page=1')
        chai.expect(response.status).equals(200)
        chai.expect(response.data.status).equals("success")
        chai.expect(response.data.results).equals(15)
        chai.expect(response.data.data.totalPages).equal(51375)
      
    })

    it('should be searched for by the name Kaleva in the journey list' , async()=>{
        const response = await axios.get('https://talented-visor-tick.cyclic.app/api/v1/journeys?search=Kaleva')
        chai.expect(response.status).equals(200)
        chai.expect(response.data.status).equals("success")
        chai.expect(response.data.results).equals(15)
        chai.expect(response.data.data.totalPages).equal(322)
      
    })

  
})