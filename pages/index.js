import Link from 'next/link'
import Header from '../components/Header'
import Layout from "../components/MyLayout";
export default () => (
  <div>
    {/*<Link href="/about" >*/}
      {/*/!*<a style={{fontSize: 20}}>About Page</a>*!/*/}
      {/*<button>Go to About Page</button>*/}
    {/*</Link>*/}
    {/*<Header/>*/}
    <Layout>
    <p>Hello Next.js</p>
    </Layout>
  </div>
)
// export default Index;
