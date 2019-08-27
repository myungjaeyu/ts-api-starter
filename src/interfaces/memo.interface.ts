import memoService from '@services/api/memo'

export interface MemoQueryControllerProps {
    memoService: typeof memoService
}

export interface MemoShowControllerProps {
    memoService: typeof memoService
}

export interface MemoCreateControllerProps {
    memoService: typeof memoService
}

export interface MemoUpdateControllerProps {
    memoService: typeof memoService
}

export interface MemoDestroyControllerProps {
    memoService: typeof memoService
}