import { test, expect  } from '@playwright/test';
// test.beforeEach(async ({ request }) => {
//     const req = await request.post('https://demoqa.com/Account/v1/Authorized', {data: {
//         userName: 'kuzulkins12345',
//         password: "1046512@Kliu",
//         }
           
//         }
//      )
//     const resp = await req.json();
//     console.log(resp);
//   });
// test("Get books", async({request})=>{
//     const req = await request.get('https://demoqa.com/BookStore/v1/Books', {
       
//     }
//  )
// const resp = await req.json();
// console.log(resp);
//  expect(req.status()).toBe(200);

// });

test("Create a new book", async({request})=>{
    const req = await request.post('https://demoqa.com/Account/v1/Authorized', {data: {
        userName: 'kuzulkins12345',
        password: "1046512@Kliu",
        }
           
        }
     )
    await req.json();
    expect(req.status()).toBe(200);


    const req1 = await request.post('https://demoqa.com/BookStore/v1/Books', {data: {
        
            "userId": "02e07d8a-6eed-48cd-ae1e-322f01bff2f3",
            "collectionOfIsbns": [
              {
                "isbn": "9781449325862"
              }
            ]
          }
    }
 )
const resp1 = await req1.json();
console.log(resp1);
 expect(req1.status()).toBe(200);

})