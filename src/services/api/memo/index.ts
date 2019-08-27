import query from './memo.query.service'
import show from './memo.show.service'
import create from './memo.create.service'
import update from './memo.update.service'
import destroy from './memo.destroy.service'

const memoService = {
    query,
    show,
    create,
    update,
    destroy
}

export default memoService