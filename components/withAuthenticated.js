import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Auth } from 'aws-amplify'

const withAuthenticated = (WrappedComponent) => (props) => {
    const[user, setUser] = useState();
    const router = useRouter();
    useEffect(() => {
        const getProfile = async () => {
            const userInfo = await Auth.currentUserInfo();
            if (userInfo) {
              setUser(userInfo);
            } else {
              await router.push('/sign-in');
            }
          };
          getProfile();
    }, [router])

    return (<>{user && <WrappedComponent /> } </>)
}

export default withAuthenticated