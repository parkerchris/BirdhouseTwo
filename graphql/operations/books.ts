import { gql } from '@apollo/client'

export default {
    Mutations: {
        CREATE_BOOK: gql`
            mutation createBook($title: String!, $author: String) {
                createBook(title: $title, author: $author) {
                    success
                    error
                }
            }`
    }
}