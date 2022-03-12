export const fakeAuth = (email, password) =>
  new Promise((resolve, reject) => {
    if (email === "admin@gmail.com" && password === "admin") {
      resolve({
        token: "asdbasdiabdquwduqwdbwbduq27381673617wq77d",
        payload: {
            name:"shahzaib",
          role: "ADMIN",
        },
      });
    } else if (email === "supplier@gmail.com" && password === "supplier") {
      resolve({
        token: "asdbasdiabdquwduqwdbwbduq27381673617wq77d",
        payload: {
            name:"jumshaid",
          role: "SUPPLIER",
        },
      });
    } else if (email === "customer@gmail.com" && password === "customer") {
      resolve({
        token: "asdbasdiabdquwduqwdbwbduq27381673617wq77d",
        payload: {
            name:"Ibtsam",
          role: "CUSTOMER",
        },
      });
    } else {
      reject("wrong email and password");
    }
  });
