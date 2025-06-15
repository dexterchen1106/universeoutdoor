// server/api/posts.ts
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const type = query.type
  const days = Number(query.days)

  const posts = [
    {
      id: 1,
      title: 'Scuba in Bohol',
      date: '2024-06-01',
      excerpt: 'A diving trip in the Philippines.',
      image: '/images/diving.jpg',
      tags: ['diving'],
      type: 'diving',
      days: 1
    },
    {
      id: 2,
      title: 'Yushan Hike',
      date: '2024-05-01',
      excerpt: 'Climbing Taiwan’s highest peak.',
      image: '/images/hiking.jpg',
      tags: ['hiking'],
      type: 'mountain',
      days: 2
    },
    {
      id: 3,
      title: 'Freedive in El Nido',
      date: '2024-04-20',
      excerpt: 'Freediving and snorkeling adventure.',
      image: '/images/freedive.jpg',
      tags: ['diving'],
      type: 'diving',
      days: 3
    }
  ]

  // 過濾條件
  const filtered = posts.filter(post => {
    const matchType = type ? post.type === type : true
    const matchDays = !isNaN(days) ? post.days === days : true
    return matchType && matchDays
  })

  return filtered
})
