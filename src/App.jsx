import { Header } from './components/header';
import {Post} from './post';
import './components/global.css'
import styles from './App.module.css'
import {Sidebar} from './components/Sidebar'
export function App() {
  return (
    <div>

    <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>
        <Post
        author = 'Guilherme Cordeiro Silva'
        content = 'Quisque tincidunt aliquet eros nec scelerisque. Sed a molestie felis. Etiam pellentesque feugiat nibh, quis rutrum tortor. Quisque vel lectus sodales, interdum ex at, molestie nibh. Nam vitae mattis massa. Vestibulum mattis metus tellus, eget molestie nunc bibendum in. Fusce non elit et ligula malesuada gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quam nulla, tempus sed porttitor et, consectetur nec risus. Proin ex lorem, pharetra ac lacinia eu, mattis quis mauris.'
      />

      <Post
        author = 'Victor Mayworm'
        content = 'Quisque tincidunt aliquet eros nec scelerisque. Sed a molestie felis. Etiam pellentesque feugiat nibh, quis rutrum tortor. Quisque vel lectus sodales, interdum ex at, molestie nibh. Nam vitae mattis massa. Vestibulum mattis metus tellus, eget molestie nunc bibendum in. Fusce non elit et ligula malesuada gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quam nulla, tempus sed porttitor et, consectetur nec risus. Proin ex lorem, pharetra ac lacinia eu, mattis quis mauris.'
      />

      <Post
        author = 'Luiz Paulo'
        content = 'Quisque tincidunt aliquet eros nec scelerisque. Sed a molestie felis. Etiam pellentesque feugiat nibh, quis rutrum tortor. Quisque vel lectus sodales, interdum ex at, molestie nibh. Nam vitae mattis massa. Vestibulum mattis metus tellus, eget molestie nunc bibendum in. Fusce non elit et ligula malesuada gravida. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In quam nulla, tempus sed porttitor et, consectetur nec risus. Proin ex lorem, pharetra ac lacinia eu, mattis quis mauris.'
      />
        </main>
      </div>

    </div>
  )
}
