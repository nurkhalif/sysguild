
const API_BASE_URL = 'http://127.0.0.1:8000/api/v1'

export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.error || 'API request failed')
  }

  return result
}
