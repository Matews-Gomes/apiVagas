interface VagasProps{
    id: string
    titulo: string
    descricao: string
    empresaId: string
    situacao: boolean
    empresa: {
         empresa: string
         telefone: string
         imageUrl: string
    }
}

export default VagasProps