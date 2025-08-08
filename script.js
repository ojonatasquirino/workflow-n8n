/**
 * Exemplo didático de integrações com:
 * - OpenAI (IA)
 * - Google Workspace (Gmail, Drive, etc.)
 * - Z-API (WhatsApp)
 */

import axios from "axios"; // Requisições HTTP
import { google } from "googleapis"; // APIs do Google Workspace
import dotenv from "dotenv"; // Variáveis de ambiente
dotenv.config(); // Carrega o .env

// 1️⃣ Configuração da OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// 2️⃣ Configuração da Google Workspace
const authGoogle = new google.auth.GoogleAuth({
  keyFile: "credenciais-google.json", // Chave de serviço baixada do Google Cloud
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

// 3️⃣ Configuração da Z-API (WhatsApp)
const ZAPI_INSTANCE = process.env.ZAPI_INSTANCE;
const ZAPI_TOKEN = process.env.ZAPI_TOKEN;

/**
 * Função exemplo - Usando OpenAI para gerar resposta
 */
async function responderComIA(mensagem) {
  const resposta = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4",
      messages: [{ role: "user", content: mensagem }],
    },
    {
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
  return resposta.data.choices[0].message.content;
}

/**
 * Função exemplo - Listar emails do Gmail
 */
async function listarEmails() {
  const gmail = google.gmail({
    version: "v1",
    auth: await authGoogle.getClient(),
  });
  const res = await gmail.users.messages.list({ userId: "me", maxResults: 5 });
  console.log("Últimos emails:", res.data.messages);
}
