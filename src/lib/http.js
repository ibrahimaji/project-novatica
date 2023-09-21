const baseurl = 'https://eventmakers-api.vercel.app/api/'

export const http = async (endpoint, method, body = {}) => {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  if (Object.keys(body).length > 0) {
    options.body = body
  }

  const url = baseurl + endpoint
  const result = await fetch(url, options)

  try {
    const data = await result.json()
    return data
  } catch (error) {
    return error
  }
}
