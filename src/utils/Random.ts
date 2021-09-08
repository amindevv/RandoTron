export const generateRandomArray = () => {
  return [0, 0, 0].map(() => Math.floor(Math.random() * 100) + 1)
}