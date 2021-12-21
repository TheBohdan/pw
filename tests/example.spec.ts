import { test, expect } from '@playwright/test';

const URL = 'https://swapi.dev/api/people'

test.describe.parallel(`api ${URL}` , async() => {
  
  test('get one persone', async ({ request }) => {
    const response = await request.get(`${URL}/1`);
    await expect(response.status()).toBe(200);
    await expect(response.ok()).toBeTruthy();
    
    const res = await response.json();
    
    expect(res).toMatchObject({
      name: 'Luke Skywalker',
      gender: 'male'
    });
  });
  
  test('get people', async ({ request }) => {
    const response = await request.get(URL, {
      params: {
        page: '2'
      }
    });
    await expect(response.status()).toBe(200);
    await expect(response.ok()).toBeTruthy();
    
    const res = await response.json();

    expect(res).toMatchObject({
      count: 82,
      previous: `${URL}/?page=1`,
      next: `${URL}/?page=3`,
    });
  });
  
})
