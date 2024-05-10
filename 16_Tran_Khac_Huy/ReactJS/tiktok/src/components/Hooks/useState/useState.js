import { useState } from 'react'

const orders = [100, 200, 300]

function UseState() {
    // Đếm số
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        console.log(total);
        return total
    })

    const handleIncrease = () => {
        setCounter(counter + 1)
        setCounter(counter + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
    }

    return (
        <div className="UseState" style={{ padding: 50 }}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export function UseStateInfo() {
    // Thay đổi thông tin người dùng
    const [info, setInfo] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'HCM, VN'    
    })

    const handleUpdate = () => {
        setInfo({
            ...info,
            bio: 'Yêu màu hồng ^^'
        })

        // setInfo(prev => {

        //   // logic...

        //   return {
        //     ...prev,
        //     bio: 'Yêu màu hồng ^^'
        //   }
        // })
    }

    return (
        <div className="UseState" style={{ padding: 50 }}>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default UseState