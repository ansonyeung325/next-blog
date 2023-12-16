import styles from './page.module.css'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { PageProps } from '../../.next/types/app/page'

export default function Home({searchParams}:PageProps) {

  const page = parseInt(searchParams.page) || 1



  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page}/>
        <Menu/>
      </div>
    </div>
  )
}
