import { GetServerSideProps } from "next"
import Head from "next/head";
import styles from './styles.module.css'

import { db } from "@/services/firebaseConnection";
import { doc, collection, query, where, getDoc } from 'firebase/firestore'

export default function Task() {



    return (
        <div className={styles.container}>
            <Head>
                <title>Detalhes da tarefa</title>
            </Head>

            <main className={styles.main}>
                <h1>Tarefa</h1>
            </main>
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
        props: {},
    };
};