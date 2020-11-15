import React, { useEffect, useState } from 'react';

const PostsList = () => {

    const [posts, setPosts] = useState([]);
    const [pageStart, setPageStart] = useState(0);
    //const pages = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95]
    let paginationList = [];
  

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${pageStart}&_limit=5`)
            .then(response => response.json())
            .then(postsArray => {
                console.log(postsArray)
                setPosts(postsArray)
            })
    },[pageStart]);

    let postsList = posts.map(post=>{
        return (
            <div className="post" key={post.id}>
                <h2>{post.id}. {post.title}</h2>
                <p>{post.body}</p>
            </div>
        )
    });

    /* let paginationList = pages.map((page, index)=>{
        return <span onClick={()=>setPageStart(page)}>{index + 1}</span>
    }) */


    for(let i = 0; i<20; i++) {
        let span = <span onClick={()=>setPageStart(i*5)} key={i}>{i+1}</span>;
        paginationList.push(span);
    }
    

    return (
        <div className="posts-list">
           {postsList}
           {/* <button onClick={()=>setPageStart(pageStart+5)}>Get next 5</button> */}
           {paginationList}
        </div>
    )

}

export default PostsList;