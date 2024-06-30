import React from 'react'
import ImgPoupapClose from '../../assets/icons/close.png'
import Botao from '../Button'
import Tag from '../Tag'
import {
  CloseImg,
  ContainerPoupap,
  ModalImage,
  Poupap,
  SectionImgModal
} from './styles'

interface ModalPoupapProps {
  onClose: () => void
  foto: string
  descricao: string
  preco: number
}

const ModalPoupap: React.FC<ModalPoupapProps> = ({
  onClose,
  foto,
  descricao,
  preco
}) => {
  const formatPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <div className="container">
      <ContainerPoupap className="overlay">
        <Poupap>
          <CloseImg onClick={onClose}>
            <img src={ImgPoupapClose} alt="Fechar modal" />
          </CloseImg>
          <SectionImgModal>
            <ModalImage src={foto} alt="Produto" />
          </SectionImgModal>
          <div>
            <p>{descricao}</p>
            <Tag size="big">
              <Botao
                type="button"
                title={'Adicionar ao carrinho'}
                background="dark"
              >
                Adicionar ao carrinho - {formatPreco(preco)}
              </Botao>
            </Tag>
          </div>
        </Poupap>
      </ContainerPoupap>
    </div>
  )
}

export default ModalPoupap
