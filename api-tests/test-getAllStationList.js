const chai = require('chai');
const axios = require('axios');
const Ajv = require('ajv');
const ajv = new Ajv();

const stationListschemas = require('../schemas/stationListschemas.json')

describe('Get all station list Api request', async()=>{

    it('should get the station list' , async()=>{
        const response = await axios.get('https://talented-visor-tick.cyclic.app/api/v1/stationList?page=1')

        chai.expect(response.status).equals(200)
        chai.expect(response.data.status).equals("success")
        chai.expect(response.data.results).equals(10)
        chai.expect(response.data.data.totalPages).equal(10)
        const validate = ajv.compile(stationListschemas);
        const valid = validate(response.data);
        chai.expect(valid).to.be.true;
    })

    it('should be searched for by the name Keilalahti in the station list' , async()=>{
        const response = await axios.get('https://talented-visor-tick.cyclic.app/api/v1/stationList?search=Keilalahti')

        chai.expect(response.status).equals(200)
        chai.expect(response.data.status).equals("success")
        chai.expect(response.data.results).equals(1)
        chai.expect(response.data.data.totalPages).equal(0)
        const validate = ajv.compile(stationListschemas);
        const valid = validate(response.data);
        chai.expect(valid).to.be.true;
      
    })

  
})