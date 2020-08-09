import Head from 'next/head'
const Layout = (props) => (
    <div style={{backgroundColor: '#ededed', padding: '1em', minHeight: '100vh'}}>
        <Head>
            <title>SpaceXT</title>
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