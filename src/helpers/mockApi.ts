export const mockApi = {
  signup: (data: string) => {
    return new Promise<{ data: string; isError: boolean }>((resolve) => {
      setTimeout(() => {
        resolve({
          data,
          isError: false,
        });
      }, 1000);
    });
  },
};