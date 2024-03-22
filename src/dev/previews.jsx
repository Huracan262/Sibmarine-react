import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Service from '../components/Service'

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/Service">
        <Service/>
      </ComponentPreview>
    </Previews>
  )
}

export default ComponentPreviews