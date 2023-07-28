export default function CategoryCard({image, text}) {
  return (
    <div className="categoryCard">
      <img width='85%' height='85%'  src={image}/>
      <p className="title">{text} </p>
    </div>
  )
}