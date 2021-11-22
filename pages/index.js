import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from "../components/header"

export default function Home() {
  return (
    <>
      <Header/>
      <h1 className={styles["title-homepage"]}> Welcome Lukman</h1>
    </>
  )
}
