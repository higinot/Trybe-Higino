import React from 'react'

// Quando um componente passa a ser controlado por um evento React, ele é denominado Evento Controlado

class EstadoFavorito extends React.Component {
    render () {
        const {value, handleTextAreaChange } = this.props

        return(
            <label>
            Diga qual é o seu Estados?
            <br></br>
            <textarea name="estadoFavorito" value={value} onChange={handleTextAreaChange} />
            </label>
        )
    }
}

export default EstadoFavorito;