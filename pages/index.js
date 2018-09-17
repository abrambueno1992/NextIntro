import Link from 'next/link'
import Layout from "../components/MyLayout";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
    {  console.log(props)}
  </li>
)
export default () => (
  <div>
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js"/>
        <PostLink title="Learn Next.js is awesome"/>
        <PostLink title="Deploy apps with Zeit"/>
      </ul>
    </Layout>
  </div>
)
// export default Index;
