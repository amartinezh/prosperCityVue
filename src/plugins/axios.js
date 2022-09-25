import axios from 'axios';
import crypto from "crypto";
import { KEY, ENDPOINT } from "@/configs/marvelapp";

const PRIVATE_KEY = KEY.API_PRIVATE_KEY;
const PUBLIC_KEY = KEY.API_PUBLIC_KEY;
const ts = new Date().getTime();
const hash = crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest('hex');
export const AUTHORIZED = `?ts=${ts}&apikey=${PUBLIC_KEY}&hash=${hash}`;


export const characterClient = axios.create({
    baseURL: `${ENDPOINT.CHARACTER}${AUTHORIZED}`,
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
    }
});

export const comicClient = axios.create({
    baseURL: `${ENDPOINT.COMIC}`,
});