import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { Obstacle1 } from './lab/obstacle1'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Player: new ImageSource('images/player-sprite.png'),
    Bubble: new ImageSource('images/bubble.png'),
    Mine: new ImageSource('images/mine.png'),
    LabBackground: new ImageSource('images/lab/labvloerbasic.png'),
    Obstacle1: new ImageSource('images/lab/labtable1.png'),
    Obstacle2: new ImageSource('images/lab/labtable2.png'),
    Obstacle3: new ImageSource('images/lab/labtableB.png'),
    Obstacle4: new ImageSource('images/lab/labtablelong.png'),
    Obstacle5: new ImageSource('images/lab/labtablemiddle.png'),
    Bones: new ImageSource('images/bones.png')
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }