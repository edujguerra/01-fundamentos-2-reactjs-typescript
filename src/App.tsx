import { Header } from "./components/Header";
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export interface IAuthor {
  name: string;
  role: string;
  avatarURL: string;
}

export interface IContent {
  id: number;
  type: 'paragraph' | 'link';
  content: string;
}

export interface IPost{
  id: number
  author: IAuthor;
  publishedAt: Date;
  content: IContent[];
}

const posts: IPost[] = [
  {
    id: 1,
    author: {
      avatarURL: 'https://media-exp1.licdn.com/dms/image/C4E03AQGGZOo3Fg4aDQ/profile-displayphoto-shrink_800_800/0/1516509752581?e=1674691200&v=beta&t=x5kKe86BjnGl2gU4okqJne-kCPxftwwoTlm1ajJj700',
      name: 'Eduardo Jacobsen Guerra',
      role: 'MBA,CNPI-T'
    },
    content: [
        {id: 0,type: 'paragraph', content: '🛑 Atenção Desenvolvedor(a) 🛑'},
        {id: 1,type: 'paragraph', content: 'Você é desenvolvedor (a) e quer aprender na prática como desenvolver as principais habilidades exigidas pelas empresas no mercado para que você seja capaz de trabalhar em projetos de grande porte com total confiança e desenvolvendo do jeito certo?'},
        {id: 2,type: 'paragraph', content: 'A imersão Full Cycle 10.0 começa em breve e é um evento 100% online e gratuito focado para quem quer:'},
        {id: 3,type: 'paragraph', content: '✔️ Se manter atualizado das novas tecnologias;'},
        {id: 4,type: 'paragraph', content: '✔️ Trabalhar em grandes empresas e projetos;'},
        {id: 5,type: 'paragraph', content: '✔️ Ser mais valorizado;'},
        {id: 6,type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date("2022-05-10 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://media-exp1.licdn.com/dms/image/C4E03AQGGZOo3Fg4aDQ/profile-displayphoto-shrink_800_800/0/1516509752581?e=1674691200&v=beta&t=x5kKe86BjnGl2gU4okqJne-kCPxftwwoTlm1ajJj700',
      name: 'Eduardo J. Guerra',
      role: 'Developer'
    },
    content: [
        {id: 0, type: 'paragraph', content: '🛑 Atenção Desenvolvedor(a) 🛑'},
        {id: 1, type: 'paragraph', content: 'Você é desenvolvedor (a) e quer aprender na prática como desenvolver as principais habilidades exigidas pelas empresas no mercado para que você seja capaz de trabalhar em projetos de grande porte com total confiança e desenvolvendo do jeito certo?'},
        {id: 2, type: 'paragraph', content: 'A imersão Full Cycle 10.0 começa em breve e é um evento 100% online e gratuito focado para quem quer:'},
        {id: 3, type: 'paragraph', content: '✔️ Se manter atualizado das novas tecnologias;'},
        {id: 4, type: 'paragraph', content: '✔️ Trabalhar em grandes empresas e projetos;'},
        {id: 5, type: 'paragraph', content: '✔️ Ser mais valorizado;'},
        {id: 6, type: 'link', content: 'guerra.java/doctorcare'},
    ],
    publishedAt: new Date("2022-06-22 20:00:00"),
  },  
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main> 
          {posts.map(post =>{
            return (
            <Post 
              key={post.id}
              {... post}
            />)
          })}
        </main>

      </div>
    </div>
  )
}
export default App
