import styles from './page.module.css'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { PageProps } from '../../.next/types/app/page'

const getData = async () => {
  const res = await fetch(`http://localhost:3000/api/hotpicks`, {
    cache: "no-store",
  });


  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json()
};


export default async function Home({searchParams}:PageProps) {

  const page = parseInt(searchParams.page) || 1
  const cat = searchParams.cat

  const {hotPicks} = await getData();


  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
        <CardList page={page} cat={cat}/>
        <Menu posts={hotPicks}/>
      </div>
    </div>
  )
}
