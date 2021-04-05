# Padrinhos do Bem
## Projeto do Time 6 para o Programa de Formação FCamara 01/2021

### Informações Gerais

Dentro deste repositório está o diretório frontend que contém a implementação da parte Web da aplicação utilizando <a href="https://pt-br.reactjs.org/" target="_blank">React</a>.

Para executar o frontend é necessário possuiro o <a target="_blank" href="https://nodejs.org/en/download/">Node</a> instalado.

Dentro do diretório frontend basta executar os comandos `npm install` seguido de `npm start` para que a aplicação esteja executando em ambiente <a target="_blank" href="http://localhost:3000">local</a>.

### Backend

Para o escopo do hackaton optamos por utilizar o <a target="_blank" href="https://firebase.google.com/">Firebase</a> como backend por meio da sua realtime database exposta por meio de uma camada REST.

### Funcionalidades

Estruturamos aplicação como um web portal com alguns links que levam às funcionalidades implementadas que são:


#### 1. Cadastrar pedido de doação

Ao clicar no botão "Receber Ajuda" que está na página inicial do portal, será acessado o componente que permite o cadastro de pedidos de doação por meio de um pai ou responsável por criança que precisa de material escolar.

Para gerar o ticket de pedido de doaçaão deve-se:

(a) Informar um CPF válido e clicar em "Nova solicitação";

(b) Informar os dados do formulário (as UFs DF e SP possuem escolas cadastradas de exemplo);

(c) Clicar em cadastrar.

Será exibido um número de pedido que permitirá associar uma doação a este pedido no futuro.


#### 2. Gerar tickets de doação

Ao clicar em "Como Doar" no menu superior é possível gerar um ticket de doação (funcionalidade a ser utilizada pelo doador), por meio dos seguintes passos:

(a) Clicar em "DOE AGORA" do card Kit;

(b) Selecionar Distrito Federal, por exemplo, como UF;

(c) Informar Taguatinga, por exemplo, como município;

(d) Informar a quantidade de tickets; e

(e) Clicar em "Gerar Tickets de Doação".


Serão exibidos os tickets de doação gerados e os parceiros credenciados. O doador deve procurar um dos parceiros da lista que possuirá uma chave de validação para validar o(s) ticket(s) gerado. A partir da validação por um parceiro credenciado, um responsável poderá retirar um kit em tal parceiro.


#### 3. Validação de ticket por parceiro


A funcionalidade de validação de ticket por um parceiro está disponível clicando em "Parceiros" no menu superior e em seguida em "Sou parceiro e quero validar uma doação".


Deverá ser informado um código de ticket e a chave de validação que o parceiro credenciado receberá.

Por exemplo, no município de Taguatinga - DF há a chave `-MX9bJl8Tl-bd4eutsoI` de um parceiro fictício que pode ser utilizada para validar tickets gerados para escolas deste município.

