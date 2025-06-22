// Examples
export const useFoo = () => {
  return useState('foo', () => 'bar')
}

export const capitalize = (str) =>  {
  return str.charAt(0).toUpperCase() + str.slice(1)
}