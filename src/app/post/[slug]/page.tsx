import styles from './styles.module.scss'

// slug sao os parenteses
export default function Page({ params: { slug } }: {
  params: { slug: string }
}){
  return(
    <div>
      <h1>PAGINA {slug}</h1>
    </div>
  )
}