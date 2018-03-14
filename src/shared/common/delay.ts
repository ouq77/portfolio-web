export const delay = (duration: number): Promise<Function> =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const cancelableDelay = (duration: number, callback: Function): number => setTimeout(callback, duration);
