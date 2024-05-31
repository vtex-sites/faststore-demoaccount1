import { gql } from '@faststore/core/@generated/gql'

export const GetUserInformation = gql(`
  query GetUserInformation($id: String!) {
    GetUserInformation(id: $id)
  }
`)