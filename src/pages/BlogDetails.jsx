import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { getBlogPostBySlug } from "../services/blogs";
export default function BlogDetails(){
 const {slug}=useParams(); const [post,setPost]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{getBlogPostBySlug(slug).then(setPost).catch(()=>setPost(null)).finally(()=>setLoading(false))},[slug]);
 if(loading)return <main className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white">Loading article...</main>;
 if(!post)return <div className="min-h-screen bg-[#07090c] px-5 py-32 text-center text-white"><h1 className="text-3xl font-bold">Article Not Found</h1><Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-sm text-emerald-400"><ArrowLeft size={16}/>Back to Insights</Link></div>;
 const paragraphs=(post.content||"").split(/\n\s*\n/).filter(Boolean);
 return <article className="min-h-screen bg-[#07090c] px-5 py-24 text-white sm:px-8"><Seo title={`${post.title} | Vikram Jayate`} description={post.excerpt} path={`/blog/${post.slug}`} type="article"/><div className="mx-auto max-w-3xl"><Link to="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400"><ArrowLeft size={16}/>All Insights</Link><div className="mt-10"><span className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">{post.category}</span><h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1><p className="mt-5 text-sm text-gray-500">{new Date(post.published_at||post.created_at).toLocaleDateString("en-IN")} · {post.read_time}</p><div className="mt-10 border-t border-white/10 pt-10"><p className="text-lg leading-8 text-gray-300">{post.excerpt}</p><div className="mt-10 space-y-6 text-sm leading-7 text-gray-400">{paragraphs.map((p,i)=><p key={i}>{p}</p>)}</div></div><div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-xs leading-5 text-gray-500">This article is for educational purposes only. It does not constitute a guarantee of returns or personalised investment advice.</div></div></div></article>;
}
