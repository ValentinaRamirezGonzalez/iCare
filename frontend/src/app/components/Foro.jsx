'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Foro() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/posts')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }

  return (
    <div>
      <h1>Foro</h1>
     
      <div>
        {posts.map(post => (
          <p key={post.id}>
              {post.title}
              <span>{post.content}</span>
          </p>
           
           
        ))}
      </div>
    </div>
  )
}
