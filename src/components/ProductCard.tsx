import Image,{StaticImageData} from 'next/image'
import Link from 'next/link';
function ProductCard(props: {title : string, price : number, img : StaticImageData, category : string, id :number; }) {
  return (
    <Link href={`products/${props.id}`}>
    <div className=' py-5'>
    <Image src={props.img} alt="Product-1" />
    <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
    <p className='font-bold text-lg'>${props.price}</p>
    <p className='font-bold text-lg'>Category {""} <span className=' text-base font-normal capitalize'>{props.category} </span> </p>
</div>
</Link>
  )
}

export default ProductCard 