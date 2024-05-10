import { useState, useRef, useEffect } from "react"

function UseRef() {
    const [count, setCount] = useState(60)

    let timerId = useRef()

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export function UseRefGetPreCount() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop -> ', timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div style={{ padding: 20 }}>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export function UseRefGetDomElement() {
    const [count, setCount] = useState(60)

    const timerId = useRef()
    const prevCount = useRef()
    const h1ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1ref.current.getBoundingClientRect()

        console.log(rect);
    })

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)

        console.log('Start -> ', timerId.current);
    }

    const handleStop = () => {
        clearInterval(timerId.current)

        console.log('Stop -> ', timerId.current);
    }

    console.log(count, prevCount.current);

    return (
        <div style={{ padding: 20 }}>
            <h1 ref={h1ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRef
