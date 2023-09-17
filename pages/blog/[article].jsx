import { useRouter } from 'next/router';

export default function Article({ post }) {
  const router = useRouter();

  // Vérifiez si les données post existent
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700 mb-4">Content: {post.body}</p>
      <p className="text-gray-700">User ID: {post.userId}</p>
      <p className="text-gray-700">ID: {post.id}</p>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
}


export async function getStaticProps({ params }) {
  const { article } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${article}`);
  const post = await res.json();

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { article: `${post.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}
