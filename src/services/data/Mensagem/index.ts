import api from "../../api";
import { ITopico } from "../../../interfaces/Topico.interface"
import {IResponse } from "../../../interfaces/Response.Interface";
import { IMensagemResponse, IMensagem } from "../../../interfaces/Mensagem.interface";


class MensagemData {
    index() {
        return api.get<IMensagemResponse>('/mensagem')
    }
    store(data: IMensagem) {
        return api.post<IResponse>('/mensagem', data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export default new MensagemData();