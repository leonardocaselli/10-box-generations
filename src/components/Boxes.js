import React, { useState } from 'react'

const Boxes = () => {
    const [squares, setSquares] = useState([])
    const [colorConfig, setColorConfig] = useState({ color: "" })
    //const squares = ['#20a0ff', '#13ce66', '#f78723', '#151B8D']
    const onChangeHandler = ({ target: { name, value } }) => {

        // const obj = { [name]: value }        
        // const juntar = { ...colorConfig, ...obj }
        // setColorConfig({ juntar })

        const newObj = {}
        newObj[name] = value
        console.log(newObj)
        setColorConfig({ ...colorConfig, ...newObj })
        console.log("colorConfig : " + colorConfig)

    }

    const addSquare = e => {
        e.preventDefault()

        setSquares([...squares, colorConfig])
        setColorConfig({ color: "" })
    }

    return (
        <div>

            <h1>desde Boxes</h1>
            <form onSubmit={addSquare}>
                <label htmlFor="colores">Entre el color exadecimal  </label>
                <input type="text" name="color" value={colorConfig.color} onChange={onChangeHandler} />
                <input type="submit" />
            </form>

            {squares.map(({ color }, i) => (
                <div key={i} style={{ backgroundColor: color, height: 50, width: 50, margin: 15, }} />
            ))}
        </div>
    )
}
export default Boxes