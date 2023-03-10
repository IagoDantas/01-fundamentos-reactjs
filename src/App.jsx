
import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/IagoDantas.png',
      name: 'Iago Dantas',
      role: 'Full Stack Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 👋🏽👋🏽'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio, É um projeto que fiz no NLW Return, evento da Rocketseat'},
      {type: 'link', content: 'iago.design/doctorcare'},

    ],
    publishedAt: new Date('2023-02-12 08:13:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala 👋🤙'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio, É um projeto que fiz no NLW Return, evento da Rocketseat'},
      {type: 'link', content: 'diego.design/doctorcare'},

    ],
    publishedAt: new Date('2023-02-10 08:13:00'),
  },
]


export function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
                <Post 
                key={post.id} 
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}
                />
            )
          })}
        </main>
      </div>
    </>
    
  )
}

