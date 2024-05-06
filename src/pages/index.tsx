import Head from 'next/head'
import Dashboard from './dashboard'
import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import styles from './Home.module.scss'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Data DashBoard</title>
        <meta name="description" content="Data DashBoard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  )
}

export default Home
