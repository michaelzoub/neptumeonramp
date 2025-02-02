import { atom } from "jotai";
import { Message } from "../interfaces/Message";

//messageAtom = new Message and messageAtom = existing messages object
export const messageAtom = atom("")
export const messagesAtom = atom<Message[]>([])