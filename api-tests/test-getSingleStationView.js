const chai = require('chai');
const axios = require('axios');
const Ajv = require('ajv');
const ajv = new Ajv();

const singleStationschemas = require('../schemas/singleStationschemas.json')

describe.only ('Get single station view Api request', async()=>{

    it('should give you the data for the single station called Mankkaanlaaksontie' , async()=>{
        const response = await axios.get('https://talented-visor-tick.cyclic.app/api/v1/stationList/Mankkaanlaaksontie')

        chai.expect(response.status).equals(200)
        chai.expect(response.data.status).equals("success")
 
        const validate = ajv.compile(singleStationschemas);
        const valid = validate(response.data);
       
        chai.expect(valid).to.be.true;
    })

  

  
})