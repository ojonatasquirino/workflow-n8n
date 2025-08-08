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

// Configuração da OpenAI
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// Configuração da Google Workspace
const authGoogle = new google.auth.GoogleAuth({
  keyFile: "credenciais-google.json", // Chave de serviço baixada do Google Cloud
  scopes: ["https://www.googleapis.com/auth/gmail.readonly"],
});

// Configuração da Z-API (WhatsApp)
const ZAPI_INSTANCE = process.env.ZAPI_INSTANCE;
const ZAPI_TOKEN = process.env.ZAPI_TOKEN;
