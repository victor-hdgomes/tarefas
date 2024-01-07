import { GetServerSideProps } from "next"
import styles from './styles.module.css'
import Head from 'next/head'
import { getSession } from "next-auth/react";
import { Textarea } from "@/components/textarea";
import { FiShare2 } from "react-icons/fi";
import { FaTrash } from "react-icons/fa";
import { ChangeEvent, FormEvent, useState } from "react";
import { db } from "@/services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

interface HomeProps {
    user: {
        email: string;
    }
}

export default function Dashboard({ user }: HomeProps) {
    const [input, setInput] = useState("")
    const [publicTask, setPublicTask] = useState(false)

    function handleChangePublic(event: ChangeEvent<HTMLInputElement>) {
        setPublicTask(event.target.checked)
    }

    async function handleRegisterTask(event: FormEvent) {
        event.preventDefault()

        if (input === '') {
            alert('Você precisa preencher qual é a tarefa!')
            return
        }

        try {
            await addDoc(collection(db, 'tarefas'), {
                tarefa: input,
                created: new Date(),
                user: user.email,
                isPublic: publicTask
            })

            setInput("")
            setPublicTask(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Meu painel de tarefas</title>
            </Head>

            <main className={styles.main}>
                <section className={styles.content}>
                    <div className={styles.contentForm}>
                        <h1 className={styles.title}>Qual sua tarefa?</h1>

                        <form onSubmit={handleRegisterTask}>
                            <Textarea
                                placeholder="Digite qual sua tarefa..."
                                value={input}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setInput(e.target.value)}
                            />
                            <div className={styles.checkboxArea}>
                                <input
                                    type="checkbox"
                                    name="checkbox"
                                    className={styles.checkbox}
                                    checked={publicTask}
                                    onChange={handleChangePublic}
                                />
                                <label htmlFor="checkbox">Deixar tarefa pública?</label>
                            </div>

                            <button className={styles.button} type="submit">
                                Registrar
                            </button>
                        </form>
                    </div>
                </section>

                <section className={styles.taskContainer}>
                    <h1>Minhas tarefas</h1>

                    <article className={styles.task}>
                        <div className={styles.tagContainer}>
                            <label className={styles.tag}>Público</label>
                            <button className={styles.shareButton}>
                                <FiShare2 size={22} color="#3183ff" />
                            </button>
                        </div>

                        <div className={styles.taskContent}>
                            <p>Minha primeira tarefa</p>
                            <button className={styles.trashButton}>
                                <FaTrash size={24} color="#ea3140" />
                            </button>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });

    if (!session?.user) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {
            user: {
                email: session.user.email
            }
        },
    };
};