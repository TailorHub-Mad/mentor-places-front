import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.NEXT_PUBLIC_URL_DIRECTUS as string]: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_DIRECTUS}`
      }
    }
  },
  documents: 'src/graphql/**/*.graphql',
  generates: {
    'src/graphql/generated/client.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        withHooks: true
      }
    },
    'src/graphql/fragmentTypes.json': {
      plugins: ['fragment-matcher'],
      config: {
        apolloClientVersion: 3
      }
    },
    'graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
