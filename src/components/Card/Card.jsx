import React, { useState } from "react";
import './Card.css'
import Axios from "axios";
import Modal from 'react-modal'
import ModalConteudo from "../ModalConteudo/ModalConteudo";

const Card = (props) => {

    const [abrir, setAbrir] = useState(false)

    const abrirModal = () => {
        setAbrir(true)
    }
    const fecharModal = () => {
        setAbrir(false)
    }

    const [editarValores, setEditarValores] = useState({
        id: props.id,
        nome: props.nome,
        preco: props.preco,
        categoria: props.categoria,
        imagem: props.imagem,
    })

    const atualizarItem = () => {
        Axios.put('http://localhost:7000/atualizar', {
            id: editarValores.id,
            nome: editarValores.nome,
            preco: editarValores.preco,
            categoria: editarValores.categoria,
        }).then(() => {
            alert('Atualizado com sucesso')
        })
        document.location.reload()
    }

    const deletarItem = () => {
        if(window.confirm('Tem certeza que deseja excluir este item?')){
            Axios.delete(`http://localhost:7000/delete/${editarValores.id}`)
            .then(() => alert('Item excluído com sucesso'))
        }
        document.location.reload()
    }

    const verificaMudancaValor = (e) => {
        setEditarValores( valorAnterior => ({
            ...valorAnterior, [e.target.name]: e.target.value
        }))
    }

    const styleModal ={
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        }
    }

    return(
        <>
        <Modal
            isOpen={abrir}
            onRequestClose={fecharModal}
            style={styleModal}
        >
            <ModalConteudo
                onChange={verificaMudancaValor}
                atualizarItem={atualizarItem}
                cancelar={fecharModal}
                nome={editarValores.nome}
                preco={editarValores.preco}
                categoria={editarValores.categoria}
                imagem={editarValores.imagem}
            />
        </Modal>
        <li className="Card">
            <div className="cardBody">
                <div className="cardImg">
                    <img src={props.imagem} alt={`Imagem do produto ${props.nome}`} />
                </div>
                <div className="cardTitle">
                    <h5>{props.nome}</h5>
                </div>
                <div className="cardInfo">
                    <h3>R$ {props.preco}</h3>
                    <p>Categoria: {props.categoria}</p>
                    <small>Código: {props.id}</small>
                </div>
            </div>
            <div className="cardFooter">
                <button onClick={abrirModal}>Editar</button>
                <button onClick={deletarItem}>Excluir</button>
            </div>
        </li>
        </>
    )

}

export default Card
