import IAttribute, { IGroupAttribute } from '../../struct/interfaces/IAttribute'
import IShape, { IGroup } from '../../struct/interfaces/IShape'
import StringUtils from '../../utils/StringUtils'
import Shape from './Shape'

class Group<T> extends Shape<T> implements IGroup<IGroupAttribute> {
    id: string = ''

    constructor() {
        super()
        this.id = StringUtils.idGenerator(8)
    }

    add(shape: IShape<IAttribute>) {
        shape.setGroupId(this.id)
    }

    remove(id: string): boolean {
        return false
    }

    getImage() {
        return null
    }
}

export default Group
