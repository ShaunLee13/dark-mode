import {useLocalStorage} from './useLocalStorage'
import {useEffect} from 'react'

export const useDarkMode = () => {
    const [toggle, setToggle] = useLocalStorage('key')

    useEffect(() => {
        const body = document.querySelector('body')
        if(toggle){
            body.className = 'dark-mode'
        } else {
            body.className = ''
        }
    }, [toggle])

    return [toggle, setToggle]
}