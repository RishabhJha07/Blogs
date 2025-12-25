import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs=()=>{

    const {posts,loading}=useContext(AppContext);

    return(
        <div className="w-11/12 max-w-[630px] py-3 flex flex-col gap-y-4 mt-[60px] mb-[70px] justify-center items-center">
        {
            loading?(<Spinner ></Spinner>):(
                posts.length===0 ?(<div><p>No Post Found</p></div>):(posts.map((post)=>(
                    <div key={post.id}>
                        <p className="font-bold text-md">{post.title}</p>
                        <p className="text-sm mt-[4px]"> By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span></p>
                        <p className="text-sm mt-[4px]">Posted on {post.date}</p>
                        <p className="text-md mt-[10px]">{post.content}</p>
                        <div className="flex gap-x-2">
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className="text-blue-500 underline font-bold text-sm mt-[5px]">#{tag}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
        </div>
    )
}
export default Blogs;