import type { NextPage } from 'next'
import styles from '../styles/Home.module.css' //eslint-disable-line
import Header from '../src/components/Header'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <Header />
        <div>Main component</div>
        <div>Footer</div>
    </div>
  )
}

export default Home
