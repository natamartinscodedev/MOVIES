import NavBar from '@/Components/NavBar/Index'
import ContetMovies from '@/Components/ContentMovies/Index'
import CardFooter from '@/Components/CardFooter/Index'

export default function Home() {
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <ContetMovies subtitle="Tentencias do dia" />
        <ContetMovies subtitle="Filmes Recomendados" />
        <ContetMovies subtitle="Series do Dia" />
        <ContetMovies subtitle="Os mais assistidos" />
      </main>
      <CardFooter />
    </>
  );
}