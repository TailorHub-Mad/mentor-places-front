import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    ['https://directus.mentorplaces.com/graphql']: {
      headers: {
        Authorization: `Bearer KY94GlKXf3U6jouUkevEsHNutI_El9jS`
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
