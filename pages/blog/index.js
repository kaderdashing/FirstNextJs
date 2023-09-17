import SimpleCard from "@/components/Card/SimpleCard";
import Header from "@/components/Header";
import React from "react";

export default function blog({ posts }) {
  return (
    <>
      <Header title="Bienvenu sur blog" body="voici les articles" />
      <div className="grid grid-cols-3 gap-4  w-3/5 mx-auto">
        {posts.map((post)=>( <>
          <SimpleCard titel={post.title} content={post.userId} secondecontent={post.id} namedLink="lire l'article" links={"/blog/" + post.id}/>
          </>
        ))}
        
      </div>
    </>

  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()
 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
