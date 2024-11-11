Aqui está um README atualizado, incluindo a configuração do Chart.js com Angular para gráficos.

---

# ChartjsWithAngular

Este projeto é uma aplicação Angular que integra gráficos do [Chart.js](https://www.chartjs.org/) para visualização de dados interativa.

## Descrição

O projeto demonstra como integrar o Chart.js com Angular, permitindo a criação de diferentes tipos de gráficos, como gráficos de rosca (`doughnut`), linha, barra, entre outros. Usamos componentes Angular para organizar cada gráfico individualmente, e o Bootstrap é utilizado para estilizar e controlar o layout responsivo.

## Tecnologias Utilizadas

- **Angular CLI** versão 18.2.11
- **Chart.js** para visualização de dados
- **Bootstrap** para estilização e layout responsivo

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/ChartjsWithAngular.git
   cd ChartjsWithAngular
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Instale o Chart.js:
   ```bash
   npm install chart.js
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   ng serve
   ```

   A aplicação estará disponível em `http://localhost:4200/`.

## Estrutura de Componentes

- `AppComponent`: Componente principal que controla a navegação entre os gráficos.
- `DoughnutChartComponent`: Componente que exibe um gráfico de rosca.
- Outros componentes podem ser adicionados para diferentes tipos de gráficos, como linha e barra.

### Exemplo de Uso de Gráficos

No `AppComponent`, os gráficos são chamados dinamicamente usando `ngSwitch`. Cada gráfico é exibido em seu próprio componente, que utiliza o Chart.js para renderizar os dados no formato escolhido.

## Configuração de Layout com Bootstrap

Utilizamos o Bootstrap para estilizar os gráficos, tornando-os menores e responsivos. A configuração básica de layout do gráfico é:

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-8 chart-container">
      <canvas id="doughnut"></canvas>
    </div>
  </div>
</div>
```

E, no CSS, limitamos o tamanho dos gráficos para que se ajustem bem ao layout:

```css
.chart-container {
  max-width: 400px;
  max-height: 400px;
  margin: 0 auto;
}
```

## Comandos Úteis

### Servidor de Desenvolvimento

Execute `ng serve` para iniciar o servidor de desenvolvimento. A aplicação recarregará automaticamente ao detectar alterações no código.

### Gerar Componentes

Use `ng generate component component-name` para criar novos componentes. Componentes de gráficos adicionais podem ser gerados desta forma para expandir as visualizações.

### Compilar o Projeto

Execute `ng build` para compilar o projeto. Os arquivos de build serão gerados no diretório `dist/`.

### Testes Unitários e e2e

- **Testes Unitários**: Execute `ng test` para rodar os testes unitários com [Karma](https://karma-runner.github.io).
- **Testes e2e**: Execute `ng e2e` para testes end-to-end.

## Ajuda Adicional

Para mais ajuda sobre Angular CLI, utilize `ng help` ou consulte a [documentação do Angular CLI](https://angular.dev/tools/cli).

--- 

Este README agora cobre o essencial para configurar, entender e expandir o projeto com Chart.js em uma aplicação Angular.