import React, { useState } from 'react'
import logo from '../../public/logo.png'
import { IoSearch, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import { Offcanvas } from 'react-bootstrap'
import Link from 'next/link'
import User from './User'


const Header = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <header className='sticky top-0 left-0 right-0 px-3 z-10 font-bold flex justify-between items-center bg-gradient-to-r from-black via-sky-950 to-sky-900'>

                <div className='flex items-center gap-6'>
                    <IoMenu className='text-7xl sm:text-5xl cursor-pointer text-white' onClick={handleShow} />
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton className='bg-slate-800'>
                            <Offcanvas.Title><p className='no-underline text-white'>Editar Campos</p></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className='bg-gray-700'>
                            <p><Link href='/usuarios' className='no-underline text-lg font-semibold font-serif text-slate-200 text-current hover:text-gray-400'>Usuários</Link></p>
                            <p><Link href='/jogos' className='no-underline text-lg font-semibold font-serif text-slate-200 text-current hover:text-gray-400'>Jogos</Link></p>
                            <p><Link href='/reviews' className='no-underline text-lg font-semibold font-serif text-slate-200 text-current hover:text-gray-400'>Reviews</Link></p>
                            <p><Link href='/desenvolvedoras' className='no-underline text-lg font-semibold font-serif text-slate-200 text-current hover:text-gray-400'>Desenvolvedoras</Link></p>
                            <p><Link href='/generos' className='no-underline text-lg font-semibold font-serif text-slate-200 text-current hover:text-gray-400'>Gêneros</Link></p>
                        </Offcanvas.Body>
                    </Offcanvas>
                    <Link href={"/home"}><Image className='-ms-5 sm:ms-0' src={logo} height={100} width={100} alt='Logo Site' /> </Link>
                </div>
                <div
                    className='items-center hidden'
                    
                >

                    <IoSearch className="absolute text-slate-400 -ms-5 sm:ms-0 text-2xl sm:text-3xl" />

                    <input
                        className="rounded-3xl bg-gray-200 -ms-5 sm:ms-0 sm:py-1 sm:px-10 py-2 px-[0px] text-xs sm:text-lg"
                        type="text"
                        placeholder="Procurar"
                    />
                </div>
                <div className='me-5'>
                    <User />
                </div>

            </header>
        </>
    )
}

export default Header