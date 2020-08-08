import Head from 'next/head'
const Layout = (props) => (
    <div style={{backgroundColor: '#ededed', padding: '1em', minHeight: '100vh'}}>
        <Head>
            <title>SpaceXT</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout;