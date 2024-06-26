import { useState, useMemo, useRef } from "react";

function UseMemo() {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [products, setProducts] = useState([])

    const nameRef = useRef()

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            // price: Number(price)
            // price: parseInt(price)
            price: +price
        }])
        setName('')
        setPrice('')

        nameRef.current.focus()
    }

    const total = useMemo(() => {
        console.log('Tính toán lại...');
        const result = products.reduce((result, product) => {
            return result + product.price
        }, 0)

        return result
    }, [products])

    return (
        <div style={{ padding: '10px 32px' }}>
            <input
                ref={nameRef}
                value={name}
                placeholder="Enter name..."
                onChange={e => setName(e.target.value)}
            />
            <br />
            <input
                value={price}
                placeholder="Enter price..."
                onChange={e => setPrice(e.target.value)}
            />
            <br />
            <button onClick={handleSubmit}>Add</button>
            <br />
            Total: {total}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - {product.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo
