import { useState } from 'react'

function useClicker(initialCount) {
    
    if(!initialCount){
        initialCount = 0;
    }

    const [count, setCount] = useState(initialCount);

    const countPlus = () => {
        setCount(prevValue => prevValue + 1)
    }

    const countReset = () => {
        setCount(initialCount)
    }

    const countMinus = () => {
        if (count !== 0) {
            setCount(prevValue => prevValue - 1)
        }
    }

    return [initialCount, count, countPlus, countMinus, countReset]
}

export default useClicker;