
import { Header } from "./Components/Header"
import { Sidebar } from "./Components/Sidebar";
import { Post } from "./Components/Post";

import './global.css';
import styles from './App.module.css';


const post = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/njeronimo1.png',
      name: 'Nicolas Jerônimo',
      role: 'Co-founder SwiF'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' , content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-31 16:46')
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/njeronimo1.png',
      name: 'Sócios',
      role: 'Co-founder SwiF'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph' , content: ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-07-31 15:00')
  }
];

function App() {

  return (
    <div>
      <Header />   
      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {post.map(post => {
            return(
              <Post 
                key={post.id}
                author={post.author}
                content= {post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
          
        </main>
        
      </div>
    </div>
  )
}

export default App
