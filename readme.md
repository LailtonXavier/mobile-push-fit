# 📱 Push Fit - App React Native - Clean Code Architecture

Este é o aplicativo mobile desenvolvido com **React Native**, seguindo os princípios de Clean Code e utilizando diversas tecnologias modernas para uma experiência fluida e segura.

---

## 🚀 Começando

### Pré-requisitos

* Node.js (versão 18 ou superior)
* Android Studio ou Xcode configurado para emuladores (ou dispositivo físico)
* `npm` ou `pnpm` instalado

### Configuração do Ambiente de Desenvolvimento

1. **Clonar o projeto**:

   ```bash
   git clone https://github.com/seu-usuario/push-fit-app.git
   cd push-fit-app
   ```

2. **Instalar dependências**:

   ```bash
   npm install
   ```

3. **Configurar variáveis de ambiente**:

   Crie um arquivo `.env` na raiz do projeto:

   ```env
   API_URL=http://SEU_IP_LOCAL:3000
   ```

   > **⚠️ Importante**: Substitua `SEU_IP_LOCAL` pelo IP da sua máquina rodando a API NestJS.

4. **Rodar o projeto em modo de desenvolvimento**:

   ```bash
   npm start
   ```

   Siga as instruções do terminal para rodar no emulador ou dispositivo físico.

---

## 🛠 Tecnologias Utilizadas

* **Gerenciamento de estado**:

  * `zustand`

* **Gerenciamento de requisições**:

  * `@tanstack/react-query` (React Query)

* **Validação de formulários**:

  * `zod`
  * `@hookform/resolvers` e `react-hook-form`

* **Estilização**:

  * `tailwindcss` via NativeWind

* **Formatação e padronização**:

  * `eslint`
  * `prettier`

* **Autenticação**:

  * Armazenamento de token JWT usando `@react-native-async-storage/async-storage`

---

## 🔐 Autenticação

O app utiliza **JWT** para autenticação e **AsyncStorage** para persistência segura do token no dispositivo. A lógica de autenticação também segue o princípio de separação de responsabilidades, usando **Zustand** para gerenciamento do estado global de autenticação.

---

## 🧱 Estrutura do Projeto

Organizado com base nos princípios de **Clean Code**, separando responsabilidades de forma clara:

```
app/
├── (pages)
├── (tabs) 
├── core
├── features
├── hooks
├── shared
assets/
├── fonts
├── icons
├── images
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ por **Lailton Xavier**

