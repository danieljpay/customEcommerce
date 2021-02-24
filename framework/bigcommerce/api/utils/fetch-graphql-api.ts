import { FetcherError } from '../../../commerce/utils/errors'
import type { GraphQLFetcher } from '../../../commerce/api'
import { getConfig } from '..'
import fetch from './fetch'

const fetchGraphqlApi: GraphQLFetcher = async (
  query: string,
  { variables, preview } = {},
  fetchOptions
) => {
  console.log('llega hasta aquí')
  const config = getConfig()
  console.log('despues de getConfig en graphlql-api.ts')
  const res = await fetch(config.commerceUrl + (preview ? '/preview' : ''), {
    ...fetchOptions,
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.apiToken}`,
      ...fetchOptions?.headers,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  console.log('antes crear el json que recibe de res')
  const json = await res.json()
  if (json.errors) {
    throw new FetcherError({
      errors: json.errors ?? [{ message: 'Failed to fetch Bigcommerce API' }],
      status: res.status,
    })
  }

  return { data: json.data, res }
}

export default fetchGraphqlApi
