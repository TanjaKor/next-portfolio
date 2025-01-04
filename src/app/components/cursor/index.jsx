'use client';

import { useEffect } from 'react';
import style from './style.module.scss';
import {motion, useMotionValue, useSpring } from "framer-motion";

export default function index() {
    //tallennetaan cursorin koko, jotta pisteen sijainti on helpompi määrittää sopivaksi
    const cursorSize = 20;
    //tallennetaan hiiren paikkaa
    const mouse = {
        x: useMotionValue(0), 
        y: useMotionValue(0)
    }

    //muokataan seuraamisefektin fysiikasta hiukan jäykempi, mutta niin että jousto säilyy
    const smoothOptions = {damping: 7, stiffness: 150, mass: 0.4}
    //luodaan seuraamisefektistä pehmeämpi
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    //rikotaan hiiren sijainnin koordinaatit ja päivitetään ne x&y-koordinaateiksi
    const manageMouseMove = (e) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX - cursorSize /2 -3 );
        mouse.y.set(clientY -cursorSize /2 -3);
    }
    //kiinnitetään managemousemove hiiren liikkeisiin
    useEffect( () => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])
    return(
        <motion.div className={style.cursor}
        style={{left: smoothMouse.x, top: smoothMouse.y}}
        >

        </motion.div>
    )
}