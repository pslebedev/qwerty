import {token, email,empty, notValid, notSupplied, witoutApiKey} from '../framework/config/index.js'
import api from '../framework/services/index.js'

describe('Validates and verifies an email address ', () => {
    test('measuring deliverability and quality /GET 200', async () => {
      const response = await api().Email().get(token, email);
      expect(response.status).toEqual(200);
      });
    
    test.each`
    email                       | expected
      ${''}                        | ${empty}
      ${'qwerty@'}                     | ${notValid}
      ${'#'}                       | ${notSupplied}
    `('$email = $expected', async ({email, expected}) => {
      const response = await api().Email().get(token, email);
      let data = await response.json();
      expect(data).toEqual(expected);
      expect(response.status).toEqual(200);
    });  

    test('measuring deliverability without apikey /GET 200', async () => {
    const response = await api().Email().get('', email);
    expect(response.status).toEqual(401);
    let data = await response.json();
    expect(data).toEqual(witoutApiKey);
        });
    })