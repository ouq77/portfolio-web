export const delay = (duration: number): Promise<() => void> =>
  new Promise((resolve) => setTimeout(resolve, duration));

export const cancelableDelay = (duration: number, callback: () => void): number =>
  setTimeout(callback, duration);
