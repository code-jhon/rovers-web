import { useContext } from 'react'
import { RoversContext } from '../../providers/RoversProvider';
import { 
  UncontrolledCarousel
} from "reactstrap"


export function Gallery() {
  const { currentRover } = useContext(RoversContext);
  const { name, gallery } = currentRover

  const items = gallery?.images.map(image => (
    {
      altText: "",
      caption: "",
      key: image.id,
      src: image.url
    }
  ))
  return (
    <>
      <div>{name}'s Gallery</div>
      <UncontrolledCarousel
        items={items}
      />
    </>
  )
}
