
import { useQuery } from "@apollo/client"
import Layout from "../components/reusable/Layout"
import PropertyOperations from '../graphql/operations/properties'
import { useState } from 'react'



export default function Test() {
    return (
            <div></div>
    )
}

export async function getStaticProps() {

    const [ properties, setProperties ] = useState()

    const { loading, error, data } = useQuery(PropertyOperations.Queries.GET_PROPERTIES)



}