import Head from 'next/head'
const Layout = (props) => (
    <div style={{backgroundColor: '#ededed', padding: '1em', minHeight: '100vh'}}>
        <Head>
            <title>SpaceXT</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content="SpaceXT" key="title" />
            <meta property="og:desctiption" content="A web application which helps users list and browse all launches by SpaceX program." key="description" />
        </Head>
        <div>
            {props.children}
        </div>
        <style jsx global>{`
            body {
                padding: 0;
                margin: 0
            }
        `}</style>
    </div>
    
)

export default Layout;