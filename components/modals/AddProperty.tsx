import { useMutation } from '@apollo/client'
import { useState } from 'react'
import propertyOperations from '../../graphql/operations/properties'



export default function AddProperty() {

    const [ propertyData, setPropertyData ] = useState({
        address: '',
        city: '',
        state: '',
        zip: ''
    })

    function handleChange(event: any) {
        setPropertyData(prevPropertyData => {
            return {
                ...prevPropertyData,
                [event.target.name]: event.target.value
            }
        })
    }

    const [createProperty, { data, loading, error }] = useMutation(propertyOperations.Mutations.CREATE_PROPERTY)

    console.log('HERE IS THE DATA', data, loading, error)

    const handleSubmit = async (e: any) => {
        try {
            await createProperty({ variables: {
                address: propertyData.address,
                city: propertyData.city,
                state: propertyData.state,
                zip: propertyData.zip
            } })

        } catch (error) {
            console.log("ISSUE manually logged by Chris P: Add property handleSubmit error", error);
        }
    }


    return (
        <>
            <h3>Add a Property</h3>
            <form>
                <label>Address</label>
                <input 
                    type="text"
                    placeholder="enter an addresss"
                    required
                    name="address"
                    onChange={handleChange}
                />
                <label>city</label>
                <input 
                    type="text"
                    placeholder="enter a city"
                    required
                    name="city"
                    onChange={handleChange}
                />
                <label>state</label>
                <input 
                    type="text"
                    placeholder="enter a state"
                    required
                    name="state"
                    onChange={handleChange}
                />
                <label>zip</label>
                <input 
                    type="text"
                    placeholder="enter a zip"
                    required
                    name="zip"
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Save</button>
            </form>
        </>
    )
}