import Image from 'next/image';
import Button from './Button'

const Animal = props => {
    return (
        <div className="flex flex-row items-center p-8 m-10 border-yellow-600 border-2">
            <Image className="hover:animate-spin" height={100} width={100} src={`/photos/${props.img}`}></Image>
            <div className="p-16">
                <h2 className="animate-bounce font-serif text-2xl text-bold">{props.type}</h2>
                <h2 className="italic text-sm">{props.state}</h2>
            </div>
            <Button>{'\u20ac'}{props.adoption_fee}</Button>
        </div>
    )
}
export default Animal