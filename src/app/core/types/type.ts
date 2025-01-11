export interface Airport {
    iata: string;
    name: string;
    state: string;
    city: string;
    code: string;
    country: string;
}

export interface Sale {
    id: number
    destination: string
    price: number
    image: string
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface Comment {
    id: number;
    text: string;
    author: string;
    avatar: string;
}

export interface PessoaUsuaria {
    nome: string;
    nascimento: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
    cidade: string;
    estado: UnidadeFederativa;
    genero: string;
}

export interface Resultado {
    paginaAtual: number;
    ultimaPagina: number;
    total: number;
    precoMin: number;
    precoMax: number;
    resultado: Passagem[];
}

export interface Passagem {
    tipo: string;
    precoIda: number;
    precoVolta: number;
    taxaEmbarque: number;
    conexoes: number;
    tempoVoo: number;
    origem: UnidadeFederativa;
    destino: UnidadeFederativa;
    companhia: Companhia;
    dataIda: Date;
    dataVolta: Date;
    total: number;
    orcamento: Orcamento[];
}

export interface Companhia {
    id: string;
    nome: string;
}

export interface Orcamento {
    descricao: string;
    preco: number;
    taxaEmbarque: number;
    total: number
}

export interface DadosBusca {
    somenteIda?: boolean;
    passageirosAdultos?: number;
    passageirosCriancas?: number;
    passageirosBebes?: number;
    tipo?: string;
    origemId?: number;
    destinoId?: number;
    precoMin?: number;
    precoMax?: number;
    conexoes?: number;
    tempoVoo?: number;
    dataIda: string;
    dataVolta?: string;
    companhiasId?: number[];
    pagina: number;
    porPagina: number;
}

export interface Destaques {
    maisRapida: Passagem;
    maisBarata: Passagem;
    sugerida: Passagem;
}

export interface QrCode {
  codigo: string;
  imagem: string;
}

export interface RadioOption {
  id: string,
  value: string,
  label: string,
  img?: { src: string, alt: string}
}

export interface Reserva {
  id?: number;
  destino: string;
  dataIda: string;
  dataVolta: string;
  origem: string;
  estadoOrigem: string;
  adultos: number;
  valorFinal: number;
}
