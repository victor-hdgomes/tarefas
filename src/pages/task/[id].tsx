import { GetServerSideProps } from "next"
import Head from "next/head";
import styles from './styles.module.css'

import { db } from "@/services/firebaseConnection";
import { doc, collection, query, where, getDoc, addDoc } from 'firebase/firestore'
import { Textarea } from "@/components/textarea";
import { useSession } from "next-auth/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { set } from "firebase/database";

interface ITask {
    task: {
        id: string;
        created: string;
        isPublic: boolean;
        tarefa: string;
        user: string;
    }
}

export default function Task({ task }: ITask) {

    const { data: session } = useSession();

    const [inputValue, setInputValue] = useState('')

    async function handleComment(e: FormEvent) {
        e.preventDefault();

        if (inputValue.trim() === '') {
            alert('Digite um comentário')
        }

        if (!session?.user || !session?.user?.email) {
            alert('Você precisa estar logado para comentar')
        }

        try {
            const docRef = await addDoc(collection(db, 'comments'), {
                user: session?.user,
                comment: inputValue,
                task: task.id,
                created: new Date()
            })

            setInputValue('')
        } catch (error) {
            alert(`Erro ao adicionar um comentário: ${error}`)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Tarefa - Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>

                <article className={styles.task}>
                    <p>{task.tarefa}</p>
                </article>
            </main>

            <section className={styles.commentsContainer}>
                <h2>Deixar comentário</h2>

                <form onSubmit={handleComment}>
                    <Textarea
                        value={inputValue}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInputValue(e.target.value)}
                        placeholder="Digite seu comentário aqui..."
                    />
                    <button
                        disabled={!session?.user}
                        className={styles.button}>
                        Enviar comentário
                    </button>
                </form>
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;

    const docRef = doc(db, "tarefas", id)

    const snapshot = await getDoc(docRef)

    if (!snapshot.data() || !snapshot.data()?.isPublic) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const miliseconds = snapshot.data()?.created?.seconds * 1000

    const task = {
        id,
        created: new Date(miliseconds).toLocaleDateString(),
        isPublic: snapshot.data()?.isPublic,
        tarefa: snapshot.data()?.tarefa,
        user: snapshot.data()?.user,
    }

    return {
        props: {
            task,
        },
    };
};