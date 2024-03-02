import { GetServerSideProps } from "next"
import Head from "next/head";
import styles from './styles.module.css'

import { db } from "@/services/firebaseConnection";
import { doc, collection, query, where, getDoc, addDoc, getDocs, deleteDoc } from 'firebase/firestore'
import { Textarea } from "@/components/textarea";
import { useSession } from "next-auth/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { FaTrash } from 'react-icons/fa';

interface ITask {
    task: {
        id: string;
        created: string;
        isPublic: boolean;
        tarefa: string;
        user: string;
    };
    comments: IComment[]
}

interface IComment {
    id: string;
    comment: string;
    created: string;
    taskId: string;
    user: {
        email: string;
        name: string;
        image: string;
    }
}

export default function Task({ task, comments }: ITask) {

    const { data: session } = useSession();

    const [inputValue, setInputValue] = useState('')
    const [commentsList, setCommentsList] = useState<IComment[]>(comments)

    function formatDate(dateString: string): string {
        const date = new Date(dateString);

        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    async function handleDeleteComment(commentId: string) {
        try {
            await deleteDoc(doc(db, 'comments', commentId))

            const newCommentsList = commentsList.filter((comment) => comment.id !== commentId)

            setCommentsList(newCommentsList)
        } catch (error) {
            alert(`Erro ao deletar o comentário: ${error}`)
        }
    }

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
                taskId: task.id,
                created: new Date()
            });
    
            const newComment: IComment = {
                id: docRef.id,
                user: {
                    email: session?.user?.email || '',
                    name: session?.user?.name || '',
                    image: session?.user?.image || ''
                },
                comment: inputValue,
                taskId: task.id,
                created: new Date().toISOString()
            };
    
            setCommentsList((oldComments) => [...oldComments, newComment]);

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

            <section className={styles.commentsContainer}>
                <h2>Todos comentários</h2>

                {commentsList.length > 0 ? (
                    commentsList.map((comment) => (
                        <article key={comment.id} className={styles.comment}>
                            <div className={styles.commentContainer}>
                                <div>
                                    <img src={comment.user.image} alt={comment.user.name} />
                                    <div>
                                        <strong>{comment.user.name}</strong>
                                        <p>{formatDate(comment.created)}</p>
                                    </div>
                                </div>
                                <p className={styles.textComment}>{comment.comment}</p>
                            </div>
                            {comment.user.email === session?.user?.email && (
                                <button onClick={() => handleDeleteComment(comment.id)} className={styles.buttonTrash}>
                                    <FaTrash size={20} color="#ea3140" />
                                </button>
                            )}
                        </article>
                    ))
                ) : (
                    <p>Essa task não possui comentário, seja o primeiro a comentar.</p>
                )}
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id as string;

    const docRef = doc(db, "tarefas", id)

    const snapshot = await getDoc(docRef)

    const commentsQuery = query(collection(db, 'comments'), where('taskId', '==', id))
    const commentsSnapshot = await getDocs(commentsQuery)

    let comments: IComment[] = []
    commentsSnapshot.forEach((doc) => {
        comments.push({
            id: doc.id,
            comment: doc.data().comment,
            created: doc.data().created.toDate().toISOString(),
            taskId: doc.data().taskId,
            user: doc.data().user
        })
    })

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
            comments,
        },
    };
};