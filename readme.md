# 📱 Push Fit - App React Native - Clean Code Architecture

Este é o aplicativo mobile desenvolvido com **React Native**, seguindo os princípios de Clean Code e utilizando diversas tecnologias modernas para uma experiência fluida e segura.

---

## 🖼️ Screenshots

### Páginas do app tema Light e Dark
<p align="center">
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/home.jpeg" alt="home" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/allActivities.jpeg" alt="activities" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/modalActivity.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/chat.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/chat2.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/profile.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/modalDeleleOrEdit.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/toastSucess.jpeg" alt="Chat" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/chatDark.jpeg" alt="home" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/profileDark.jpeg" alt="activities" width="100" />
  <img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/ThemeDark.jpeg" alt="Chat" width="100" />
</p>


### QR Code para testar o app no Android e IOs
<img src="https://raw.githubusercontent.com/LailtonXavier/mobile-push-fit/refs/heads/master/assets/projectPhotos/qr-code-app.jpeg" alt="Chat" width="200" />

## 🚀 Começando

### Pré-requisitos

* Node.js (versão 18 ou superior)
* Android Studio ou Xcode configurado para emuladores (ou dispositivo físico)
* `npm` ou `pnpm` instalado

### Configuração do Ambiente de Desenvolvimento

1. **Clonar o projeto**:

   ```bash
   git@github.com:LailtonXavier/mobile-push-fit.git
   cd mobile-push-fit
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

