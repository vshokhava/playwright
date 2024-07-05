import { test, expect  } from '@playwright/test';
test("New user registration via API", async({request})=>{
    const req = await request.post('https://demoqa.com/Account/v1/User', {data: {
    password: "1046512@Kliu",
    userName: 'kuzulkins12345',
    }
 
})
const resp = await req.json();
console.log(resp);
 expect(req.status()).toBe(201);
 expect(resp.username).toBe('kuzulkins12345');
})