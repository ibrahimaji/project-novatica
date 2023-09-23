const baseurl = 'https://eventmakers-api.vercel.app/api/'

export const http = async (endpoint, method, body = {}) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  }

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body)
  }

  const url = baseurl + endpoint

  try {
    const result = await fetch(url, options)
    const data = await result.json()
    return data
  } catch (error) {
    return error
  }
}
