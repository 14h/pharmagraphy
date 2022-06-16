import { init } from 'next-firebase-auth'
import "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const initAuth = () => {
    init({
        authPageURL: '/demo',
        appPageURL: '/',
        loginAPIEndpoint: '/api/login', // required
        logoutAPIEndpoint: '/api/logout', // required
        onLoginRequestError: (err) => {
            console.error(err)
        },
        onLogoutRequestError: (err) => {
            console.error(err)
        },
        // firebaseAuthEmulatorHost: 'localhost:9099',
        // firebaseAdminInitConfig: {
        //     credential: {
        //         projectId: 'pharmagraphy-app',
        //         clientEmail: 'firebase-adminsdk-b0fi2@pharmagraphy-app.iam.gserviceaccount.com',
        //         // The private key must not be accessible on the client side.
        //         privateKey: process.env.FIREBASE_PRIVATE_KEY || '',
        //     },
        //     databaseURL: 'https://pharmagraphy-app.firebaseio.com',
        // },
        // Use application default credentials (takes precedence over firebaseAdminInitConfig if set)
        // useFirebaseAdminDefaultCredential: true,
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyDlrFCmj0EHdSdV15dE_V6skcOw_IkMeDQ', // required
            authDomain: 'pharmagraphy-app.firebaseapp.com',
            databaseURL: 'https://pharmagraphy-app.firebaseio.com',
            projectId: 'pharmagraphy-app',
        },
        cookies: {
            name: 'pharmagraphy', // required
            // Keys are required unless you set `signed` to `false`.
            // The keys cannot be accessible on the client side.
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true, // set this to false in local (non-HTTPS) development
            signed: true,
        },
        onVerifyTokenError: (err) => {
            console.error(err)
        },
        onTokenRefreshError: (err) => {
            console.error(err)
        },
    })
}

export default initAuth
