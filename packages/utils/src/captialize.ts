function capitalize<T = string>(str: string): T | string {
  if (!str || typeof str !== 'string') {
    console.log(
      '[@realsystem/utils/capitalize]: capitalize requires a string argument'
    );
    return '';
  }
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export { capitalize };
