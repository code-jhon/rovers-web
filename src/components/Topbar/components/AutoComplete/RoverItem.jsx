import './styles.scss'

export const RoverItem = ({images, name, owner}) => {
  const image = images && images.find(img => img.type === "small")
  return (
    <div className='w100 landscape item'>
      <div><img style={{width: "100px"}} src={image.url} alt={name} /></div>
      <div>{name}</div>
      <div> <a href={owner.url}>{owner.name}</a> </div>
    </div>
  )
}

