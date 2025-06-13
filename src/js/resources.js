import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    Player: new ImageSource('images/player-sprite.png'),
    Bubble: new ImageSource('images/bubble.png'),
    Mine: new ImageSource('images/mine.png'),
    LabBackground: new ImageSource('images/lab/labvloerbasic.png'),
    LabTable2: new ImageSource('images/lab/labtable2.png'),
    LabTableLong: new ImageSource('images/lab/labtablelong.png'),
    LabTableMiddle: new ImageSource('images/lab/labtablemiddle.png'),

}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }