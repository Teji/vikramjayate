import { useEffect, useState } from "react";
import SectionHeading from "../components/common/SectionHeading";
import BlogCard from "../components/blog/BlogCard";
import Seo from "../components/Seo";
import { getBlogPosts } from "../services/blogs";

export default function Blog() {
  const [posts,setPosts]=useState([]),[loading,setLoading]=useState(true),[error,setError]=useState("");
  useEffect(()=>{getBlogPosts().then(setPosts).catch(()=>setError("Unable to load articles right now.")).finally(()=>setLoading(false))},[]);
  return <div className="min-h-screen bg-[#07090c] text-white"><Seo title="Market Insights | Vikram Jayate" description="Price action education, market insights and structured stock-analysis articles from Vikram Jayate." path="/blog" />
    <section className="px-5 py-24 sm:px-8"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Jayate Insights" title="Market Knowledge That Matters" description="Explore market education, price action concepts and structured stock-analysis insights." />
    {loading&&<p className="mt-14 text-center text-gray-400">Loading insights...</p>}{error&&<p className="mt-14 text-center text-red-300">{error}</p>}
    {!loading&&!error&&<div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{posts.map(post=><BlogCard key={post.id} post={{...post,readTime:post.read_time,date:new Date(post.published_at||post.created_at).toLocaleDateString("en-IN")}} />)}</div>}
    {!loading&&!error&&!posts.length&&<p className="mt-14 text-center text-gray-500">No articles published yet.</p>}
    <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-5 text-gray-600">Content is for educational and informational purposes only and is not personalised investment advice.</p></div></section></div>;
}
