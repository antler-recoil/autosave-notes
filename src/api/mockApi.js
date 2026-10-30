export const mockSaveApi = (text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("API CALLED: Payload saved", text);
      resolve({ ok: true });
    }, 500);
  });
