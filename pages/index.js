import styles from '../styles/Home.module.css'
import Nav from './nav'
import Footer from './footer'


export default function Home({data}) {
  return (
    <div>
      <Nav/>
      <p><a href="#" className={styles.back}>Back to all courses</a></p>
      <div className={styles.container}>
        <span><i>{data[0].courseCategory}</i></span>
        <h1>{data[0].courseName}</h1><br/>
        <p>{data[0].courseDescription}</p>
        <br/><br/>
        <h4>Watch the course video:</h4>
        <h6>{data[0].courseVideos[0].videoTitle}</h6>
        <iframe src={`${data[0].courseVideos[0].video}`}></iframe>
      </div>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/getCourse`) //fetch data from api
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}
