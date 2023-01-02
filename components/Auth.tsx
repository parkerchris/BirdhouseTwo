import { Session } from "next-auth"
import { signIn } from "next-auth/react"


interface AuthProps {
    session: Session | null;
    reloadSession: () => void;
}


const Auth: React.FunctionComponent<AuthProps> =({
    session,
    reloadSession,
}) => {

    const userType = "propertyInvestor"

    const onSubmit = async () => {
        try {

        } catch (error) {
            console.log('onSubmit error', error)
        }
    }

    return (
        <>
            <div>This is the auth page</div>
            {session ? (
                <h3>Sign in</h3>
            ) : (
                <>
                    <h3>MOSAIC</h3>
                    <button onClick={() => signIn('google')}>Sign in with Google</button>
                </>
            )}
        </>
    )
}

export default Auth