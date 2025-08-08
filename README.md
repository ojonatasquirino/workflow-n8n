# Automação de Atendimento via WhatsApp com n8n + LLMs

Fluxos de automação prontos em JSON para criação de **agentes autônomos** no n8n, usando **OpenAI (GPT)**, **WhatsApp via Z-API** e integrações com **Google Workspace**. Ideal para clínicas, consultórios e operações de atendimento inteligente.

---

## 📦 Conteúdo

Este repositório contém 6 fluxos de automação:

| Nº  | Nome do Fluxo                     | Descrição                                                                                                                                |
| --- | --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1️  | `fluxo-triagem-openai.json`       | Assistente virtual que entende a intenção do paciente via LLM (agendar, cancelar, dúvida etc).                                           |
| 2️  | `fluxo-agendamento-calendar.json` | Agendamento automático em agendas do Google Calendar.                                                                                    |
| 3️  | `fluxo-faq-openai.json`           | Chatbot médico inteligente para dúvidas frequentes via GPT.                                                                              |
| 4️  | `fluxo-envio-documentos.json`     | Envio de PDFs e listas de preparo por WhatsApp via links do Google Drive.                                                                |
| 5️  | `fluxo-lembrete-consulta.json`    | Lembrete automático de consulta 24h antes com nome, horário e médico.                                                                    |
| 6️  | `fluxo-agente-completo.json`      | Agente autônomo completo que integra triagem, agendamento, respostas inteligentes, envio de documentos e lembretes. Ideal para produção. |

---

## ⚙️ Requisitos

- [n8n](https://n8n.io) (self-hosted ou cloud).
- Conta OpenAI ou outra LLM com API compatível.
- Integração com [Z-API](https://www.z-api.io/) ou outra API de WhatsApp.
- Conta Google (para Calendar, Drive, Sheets).

---

## Como Utilizar

1. **Importe os arquivos JSON** diretamente no editor do n8n.
2. **Configure as credenciais**:
   - OpenAI → `openai-api-key`
   - Z-API → Substitua `YOUR_INSTANCE` e `YOUR_TOKEN` nas URLs dos nodes HTTP
   - Google → Ative credenciais OAuth2 para Google Calendar, Drive, Sheets
3. **Ajuste os Webhooks**:
   - Conecte o webhook de triagem no webhook da Z-API (mensagem recebida).
4. **Ative os fluxos** e teste.

---

## Personalização

### ✅ Usar Outra LLM (Ex: Claude, Mistral, Ollama)

- Substitua o nó `ChatGPT` por um `HTTP Request` apontando para o endpoint da nova LLM.
- Estrutura da requisição:
  - Entrada: `mensagem do usuário`
  - Saída: conteúdo da resposta + classificação da intenção
- Mantenha o formato de resposta:  
  `"Sua mensagem... [AGENDAMENTO]"` para facilitar parsing posterior.

### ✅ Usar Outra API de WhatsApp (Ex: Twilio, UltraMsg)

- Substitua os nodes HTTP que usam Z-API pelas URLs e parâmetros exigidos pela nova API.
- Mantenha a estrutura de:
  ```json
  {
    "phone": "numero",
    "message": "texto"
  }
  ```

## 🧩 Integrações Usadas

- 🔗 Z-API (WhatsApp)

- 🧠 OpenAI GPT-5

- 📅 Google Calendar

- 📄 Google Sheets

- 📁 Google Drive

---

### Por que os fluxos estão separados por etapas?

Cada fluxo neste repositório foi projetado de forma **modular**, para facilitar:

- Manutenção e evolução individual de cada parte do atendimento.
- Reutilização em diferentes projetos ou clientes.
- Testes e debugging mais simples.
- Redução do risco de falhas que afetem o atendimento completo.

No entanto, também incluímos o fluxo `fluxo-agente-completo.json`, que integra todos os módulos em um único agente, ideal para produção se você já estiver confiante com o sistema.

Sinta-se livre para usar os módulos separadamente ou unificar conforme seu cenário.

Contribuições são bem-vindas! Novos fluxos ou melhorias podem ser feitas via **Issues** ou **Pull Requests** :)
