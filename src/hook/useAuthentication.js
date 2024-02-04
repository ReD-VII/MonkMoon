// Importando as funções e objetos necessários do Firebase
import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

// Importando hooks do React
import { useState, useEffect } from 'react'

// Definindo o hook personalizado 'useAuthentication'
export const useAuthentication = () => {
    // State para armazenar mensagens de erro
    const [error, setError] = useState(null)
    
    // State para indicar se a autenticação está em andamento
    const [loading, setLoading] = useState(false)
    
    // State para controlar o cancelamento da autenticação
    const [cancelled, setCancelled] = useState(false)

    
    const [ msgServer, setMsgServer ] = useState(null)
    const [ msgType, setMsgType ] = useState(null)
    
    // Obtenção da instância de autenticação do Firebase
    const auth = getAuth()





    // Função para verificar se o processo de autenticação foi cancelado
    function checkIfIsCanceled() {
        // Se o processo foi cancelado, não faz nada
        if (cancelled) {
            return;
        }
    }

    // Função assíncrona para criar um novo usuário
    const createUser = async (data) => {
        // Verifica se o processo foi cancelado
        checkIfIsCanceled()
        setMsgServer(null)
        setLoading(true)
        


        try {
            // Cria um novo usuário no Firebase Authentication
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            
            // Atualiza o perfil do usuário com o nome fornecido
            await updateProfile(user, {
                displayName: data.name
            })
            
            //MSG SERVER
            setMsgServer("Conta criada com sucesso! Bem vindo(a)")
            

            setLoading(false)

            // Retorna o usuário criado
            return user
        } catch (error) {
            // Em caso de erro, define o erro no state 'error'
            // setMsgServer(error)
        
            let messegeError

            if(error.message.includes("Password")){
                messegeError = "A senha precisa conter pelo menos 6 caracteres"
            }else if(error.message.includes("email-already")){
                messegeError = "E-mail ja cadastrado."
            }else{
                messegeError = "Ocorreu um erro, por favor tente mais tarde."
            }


            setMsgType('error')
            setMsgServer(messegeError)
        }
        
        // Marca o processo como concluído
        
        setLoading(false)
    }



















    

    // Efeito colateral que será executado quando o componente for desmontado
    useEffect(() => {
        // Define 'cancelled' como true para cancelar o processo de autenticação
        return () => setCancelled(true)
    }, [])

    
    // Retorna um objeto com os elementos necessários para a autenticação
    return {
        auth,
        createUser,
        // error,
        loading,


        msgServer,
        msgType
    }
}
