'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'


export default function NewPost() {
  const { data: session } = useSession()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!session) {
      alert('You must be logged in to create a post')
      return
    }
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content })
      })
      if (res.ok) {
        router.push('/')
      } else {
        const errorData = await res.json()
        throw new Error(errorData.error || 'Failed to submit post')
      }
    } catch (error) {
      console.error('Error submitting post:', error)
    }
  }

  return (
    <div>
      <h1>Nuevo Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Contenido"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="submit">Publicar</button>
      </form>
    </div>
  )
}
