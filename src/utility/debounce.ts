function debounce<T>(
  func: (...args: T[]) => void,
  delay: number
) {
  let debounceTimer: NodeJS.Timeout;
  return function (...args: T[]) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func(...args), delay);
  };
}

export default debounce;
