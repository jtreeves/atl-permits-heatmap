import { useState } from 'react'

function App(): JSX.Element {
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            Hello, world! {count}{' '}
            <button
                onClick={() => {
                    setCount(count+3)
                }}
            >
                Increase Count
            </button>{' '}
        </div>
    )
}

export default App
