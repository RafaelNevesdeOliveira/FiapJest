# Jest App

Este projeto é um exemplo de como configurar um aplicativo React Native com Expo, utilizando o Jest para testes unitários e integração. O projeto está configurado para utilizar as bibliotecas `@testing-library/react-native` e `jest-expo`.

## Pré-requisitos

Antes de iniciar, certifique-se de ter o Node.js instalado em sua máquina. Além disso, é recomendado ter o Expo CLI instalado globalmente.

## Passos para Configuração

1. **Criação do Projeto**

    Para criar um novo projeto Expo, execute o seguinte comando:
    ```bash
    npx create-expo-app Jest --template
    ```

2. **Instalar Dependências**

    As dependências listadas no projeto incluem:
    ```json
    {
      "dependencies": {
        "expo": "~51.0.28",
        "expo-status-bar": "~1.12.1",
        "jest": "^29.4.0",
        "jest-expo": "~51.0.4",
        "react": "18.2.0",
        "react-native": "0.74.5"
      },
      "devDependencies": {
        "@babel/core": "^7.20.0",
        "@testing-library/jest-native": "^5.4.3",
        "@testing-library/react-native": "^12.6.0",
        "@types/jest": "^29.5.12",
        "@types/react": "~18.2.45",
        "typescript": "^5.1.3"
      }
    }
    ```
    Execute o seguinte comando para instalar todas as dependências:
    ```bash
    npm install
    ```

3. **Iniciar o Projeto**

    Para iniciar o servidor de desenvolvimento do Expo, use:
    ```bash
    npm start
    ```

4. **Executar o Projeto em Diferentes Plataformas**

    Para executar o projeto em um dispositivo Android, iOS ou na Web, utilize os seguintes comandos:

    - Android:
      ```bash
      npm run android
      ```

    - iOS:
      ```bash
      npm run ios
      ```

    - Web:
      ```bash
      npm run web
      ```

5. **Executar Testes**

    O projeto está configurado para utilizar o Jest como framework de testes. Para rodar os testes, utilize o comando:
    ```bash
    npm test
    ```

    A configuração do Jest inclui um preset específico para projetos Expo e um padrão de transformação para ignorar alguns módulos durante os testes:
    ```json
    "jest": {
      "preset": "jest-expo",
      "transformIgnorePatterns": [
        "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)"
      ],
      "setupFilesAfterEnv": [
        "@testing-library/jest-native/extend-expect"
      ]
    }
    ```

## Estrutura do Projeto

- **`App.js`**: Arquivo principal onde a lógica da aplicação é implementada.
- **`package.json`**: Contém todas as dependências, scripts e configuração do Jest.
- **`node_modules/`**: Diretório que contém todas as bibliotecas instaladas.
- **`ios/` e `android/`**: Diretórios gerados após o prebuild, contendo os arquivos de configuração nativa para iOS e Android.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um `Pull Request` ou relatar um `Issue`.

## Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo `LICENSE` para obter mais informações.
