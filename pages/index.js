import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from '../public/animals.json'
import Animal from './src/Animal'

export default function Home() {
  const animalMaker = a => <Animal type={a.type} state={a.state} adoption_fee={a.adoption_fee} img={a.img}/>
  const dogsOnly = a => a.type == "dog"
  const dogAnimals = Animals.filter(dogsOnly)
  const dogAnimalsFormatted = dogAnimals.map(animalMaker)
  const sumTogether = (x,y) => x + y.adoption_fee
  const totalDogPrice = dogAnimals.reduce(sumTogether, 0)
  const animalTypes = Animals.map(animalMaker)


  return(
    <div className="bg-blue-200 h-full text-center">
      <h1 className="text-4xl font-bold">Welcome to Dog adoption!</h1>
      <p className="m-10 text-green-800 text-2xl">
        Total Price: {'\u20ac'}{totalDogPrice}
      </p>
      {dogAnimalsFormatted}
    </div>
  )
}
