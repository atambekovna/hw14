import { useEffect, useRef, useState} from 'react'
import styles from './Card.module.css'

export function Card () {

    const [time, setTime] = useState(false)
    const cardRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            setTime (!time)
        }, 1500)
    }, [time])
    
    return <div className={!time ? styles.red : styles.green} ref={cardRef}></div>
    
}
