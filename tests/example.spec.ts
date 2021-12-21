import { test, expect } from '@playwright/test';

test.describe.parallel('api' , async() => {
  
  test('get one persone', async ({ request }) => {
    const response = await request.get('https://swapi.dev/api/people/1');
    await expect(response.status()).toBe(200);
    await expect(response.ok()).toBeTruthy();
    
    const res = await response.json();
    
    expect(res).toMatchObject({
      name: 'Luke Skywalker',
      gender: 'male'
    });
  });
  
  test('get people', async ({ request }) => {
    const response = await request.get('https://swapi.dev/api/people', {
      params: {
        page: '2'
      }
    });
    await expect(response.status()).toBe(200);
    await expect(response.ok()).toBeTruthy();
    
    const res = await response.json();

    expect(res).toMatchObject({
      count: 82,
      previous: 'https://swapi.dev/api/people/?page=1',
      next: 'https://swapi.dev/api/people/?page=3',
    });
  });
  
})
