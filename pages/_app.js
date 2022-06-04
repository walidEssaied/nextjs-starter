import "../styles/globals.css";

function MyApp({Component, pageProps, children}) {


    return (
        <>
            <Component {...pageProps}/>
        </>
    );
}

export default MyApp;
