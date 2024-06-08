
export const getSelectOptions = (map) => {
  const selectiOptions = []
  for(const item in map) {
    selectiOptions.push({
      label: map[item],
      value: +item
    })
  }
  return selectiOptions
}

export * from './user'