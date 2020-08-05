import Head from 'next/head'
const Layout = (props) => (
    <div>
        <Head>
            <title>SpaceXT</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
        </Head>
        <div className="container">
            {props.children}
        </div>
    </div>
)

export default Layout;