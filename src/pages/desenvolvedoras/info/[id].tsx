import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, Col, Row } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

const Info = () => {

    interface Info {
        id: number;
        nome: string;
        logo: string;
        pais: string;
        fundacao: string;
    }

    const [desenvolvedoras, setDesenvolvedoras] = useState<Info[]>([])
    const [jogos, setJogos] = useState<Info[]>([])

    const router = useRouter() // Crie uma instância do useRouter
    const { id } = router.query // Extraia o id da query

    useEffect(() => {
        async function getAll() { // Transforme a função em assíncrona
            try {
                const resultado = await axios.get(`/api/desenvolvedoras/${id}`) // Use o id na URL da API e aguarde a resposta
                setDesenvolvedoras(resultado.data)
            } catch (error) {
                console.error(error) // Trate os possíveis erros
            }
        }

        if (id) { // Verifique se o id existe
            getAll() // Chame a função getAll
        }
    }, [id]) // Use o id como dependência do useEffect

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {

        axios.get('/api/jogos').then(resultado => {
            setJogos(resultado.data)

        })
    }

    return (
        <>
            <Header />
            <div className='container text-slate-50'>
                <Row>

                    <Col md={4}>
                        <Card>
                            <Card.Img variant="top" src={desenvolvedoras.logo} />
                            <Card.Body className='bg-gradient-to-r from-indigo-600 to-cyan-500 text-white'>
                                <Card.Title className='h5'>{desenvolvedoras.nome}</Card.Title>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col md={8}>
                        <Card>
                            <Card.Body className='bg-gradient-to-r from-indigo-600 to-cyan-500 text-white'>
                                <p className='text-xl'><strong>País:</strong> {desenvolvedoras.pais} </p>
                                <p className='text-xl'><strong>Fundação:</strong> {desenvolvedoras.fundacao} </p>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Row>
                        <div className='pt-5'>
                            <p className='text-3xl'><strong>Jogos</strong></p>
                        </div>
                        {jogos.filter(item => item.desenvolvedora === desenvolvedoras.nome).map((item: any) => (
                            <div>
                                <Image src={item.capa} width={300} height={300} alt={item.titulo} />
                                {item.titulo}
                            </div>
                        ))}
                    </Row>


                </Row>
                <div className="d-flex flex-column align-items-start pt-1">
                    <Link href={'/'} className='btn btn-primary text-white'>Voltar</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Info