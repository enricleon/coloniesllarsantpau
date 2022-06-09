/**
 * Retrieve a fixed number of elements from an array, evenly distributed but
 * always including the first and last elements.
 *
 * @param   {Array} items - The array to operate on.
 * @param   {number} n - The number of elements to extract.
 * @returns {Array}
 */
export const distributedCopy = (items, n) => {
  if (!items || n < 2 || items.length < 3 || items.length < n) {
    return items;
  }

  const elements = [items[0]];
  const totalItems = items.length - 2;
  const interval = Math.floor(totalItems / (n - 2));
  for (let i = 1; i < n - 1; i++) {
    elements.push(items[i * interval]);
  }
  elements.push(items[items.length - 1]);
  return elements;
};

export const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};
