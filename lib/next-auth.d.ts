//created manually
//usertype can currently be null. Once it is determined how and where this will be added to a user then come back and make it not nullable


import 'next-auth';

declare module 'next-auth' {

    interface Session {
        user: User;
    }

    interface User {
        id: string;
        userType: string | null
    }

}