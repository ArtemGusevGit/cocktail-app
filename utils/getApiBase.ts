export const getApiBase = () => {
  const runtimeConfig = useRuntimeConfig()
  const { apiBase } = runtimeConfig.public
  return apiBase
}
