import { Header } from './components/header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar'
import './components/global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>

    <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
        <Post/>
        <Post/>

        </main>
      </div>

    </div>
  )
}
