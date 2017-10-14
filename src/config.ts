export let config = (options?: any) =>
  (property: String, defaultValue?: string): any => {
    let normalizedProp = property.toUpperCase().replace(/\./g, '_')

    if (process.env[normalizedProp])
      return process.env[normalizedProp];

    if (defaultValue)
      return defaultValue

    return property;
  }
