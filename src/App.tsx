import { useState } from 'react'

function App(): JSX.Element {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <p>Hello, world! {count}</p>
            
            <button
                onClick={(): void => {
                    setCount(count + 3)
                }}
            >
                Increase Count
            </button>
        </div>
    )
}

export default App
