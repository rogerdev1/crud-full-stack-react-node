import React from "react";
import './ModalConteudo.css'

const ModalConteudo = props => {

    return(
        <>
        <div className='Modal'>
            <div className="modalBody">
                <div className="modalTitle">
                    <h4>Editar</h4>
                </div>
                <div className="modalContent">
                    <div className="inputGroup">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id='nome'
                        name='nome'
                        onChange={props.onChange}
                        value={props.nome} />
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="preco">Preço</label>
                    <input
                        type="text"
                        id='preco'
                        name='preco'
                        onChange={props.onChange}
                        value={props.preco} />
                    </div>

                    <div className="inputGroup">
                    <label htmlFor="categoria">Categoria</label>
                    <input
                        type="text"
                        id='categoria'
                        name='categoria'
                        onChange={props.onChange}
                        value={props.categoria} />
                    </div>
                </div>
                <div className="modalFooter">
                    <button onClick={props.cancelar}>Cancelar</button>
                    <button onClick={props.atualizarItem}>Atualizar</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default ModalConteudo
