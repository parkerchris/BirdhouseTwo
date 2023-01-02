import { gql } from '@apollo/client'

export default {
    Queries: {
        GET_PROPERTIES: gql`
            query GetProperties {
                properties {
                    address
                    city
                    state
                    zip
                }
            }`
          
    },
    Mutations: {
        CREATE_PROPERTY: gql`
            mutation createProperty($address: String!, $city: String!, $state: String!, $zip: String!) {
                createProperty(address: $address, city: $city, state: $state, zip: $zip) {
                    success
                    error
                }
            }`
    }
}