export const getMockVerified = (
  seconds: number,
  apiCalls: number
): Promise<boolean> => {
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (apiCalls === 3) {
        console.log("beng");
        clearInterval(interval);
        resolve(true);
      } else {
        console.log(apiCalls);
        resolve(false);
      }
    }, seconds);
  });
};

//  if (data !== "noUserError" && typeof data !== "undefined") {
//       console.log(data.onfidoStatus);
