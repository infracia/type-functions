# Example

```ts
import { PromiseWrap } from "@infracia/type-functions";

// promise function
async function testMe() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("I failed");
    }, 3000);
  });
}

// test function
async function func() {
  const [error, pass] = await PromiseWrap(testMe());
  if (error) console.log("function returned error");
  else console.log("function passsed", pass);
}

func();
```
