import dotenv from 'dotenv';
import server from './models/server.js';

dotenv.config();

const servidor = new server();
servidor.listen(); 