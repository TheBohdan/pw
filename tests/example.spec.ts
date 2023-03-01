import { test, expect } from '@playwright/test';

const baseURL = 'https://swapi.dev/api'

test.describe('Simple API tests', () => {
  test('should get all SWAPI resources', async ({ request }) => {
    const swapiResponse = await request.get(`${baseURL}/`);
    expect(swapiResponse.ok()).toBeTruthy();
  });
  
  test('should get Obi-Wan Kenobi data', async ({ request }) => {
    const obiWanData = await request.get(`${baseURL}/people/10`);
    expect(obiWanData.ok()).toBeTruthy();
    const obiWanDataJSON = await obiWanData.json();
    // console.log(obiWanDataJSON);
    expect(obiWanDataJSON.name).toEqual('Obi-Wan Kenobi');
  });
});