import React from 'react';
import { useParams } from 'react-router';
import { data } from '../data/exercices';
import { AiFillGithub, AiOutlineDownload } from 'react-icons/ai';
import Description from '../assets/icons/Description.svg';
import Instruction from '../assets/icons/Instruction.svg';
import { ref, getDownloadURL } from 'firebase/storage';
import storage from '../firebase';
import axios from 'axios';
import fileDownload from 'js-file-download';

const Exercice = () => {
    const { id } = useParams();
    const exo = data[id - 1];
    const storageRef = ref(storage, `Exercices/${exo.zipName}.zip`);
    const download = () => {
        getDownloadURL(storageRef)
            .then((url) => {
                axios
                    .get(url, {
                        responseType: 'blob',
                    })
                    .then((res) => {
                        fileDownload(res.data, `${exo.zipName}.zip`);
                    });
            })
            .catch((error) => {
                console.log(error);
                alert('Erreur lors du téléchargement ');
            });
    };

    return (
        <section className="pt-20 md:pl-60 px-5 ">
            <h1 className="text-4xl font-bold my-6"> {exo.name} </h1>

            <div className="my-5">
                <div className="flex items-center gap-2 p-2">
                    <img src={Description} alt="" />
                    <h1 className="text-2xl font-bold"> Description </h1>
                </div>
                <p className="bg-blue-100 max-w-7xl rounded-md p-2">
                    {exo.description}
                </p>
            </div>
            <div className="my-5">
                <div className="flex items-center gap-2 p-2">
                    <img src={Instruction} alt="" />
                    <h1 className="text-2xl font-bold"> Instruction </h1>
                </div>
                <p className="bg-blue-100 max-w-7xl rounded-md p-2">
                    {exo.instruction}
                </p>
            </div>
            <div className="flex gap-2 flex-wrap">
                <div className="flex items-center space-x-2 bg-[#3490E4] p-2 rounded-md">
                    <AiFillGithub size={25} className="text-white" />
                    <a
                        href={exo.github}
                        target="_blank"
                        className="cursor-pointer text-white"
                    >
                        Repo de l'exo
                    </a>
                </div>
                <div className="flex items-center space-x-2 bg-[#BF2D85] p-2 rounded-md">
                    <AiOutlineDownload size={25} className="text-white" />
                    <a
                        href="#"
                        // target="_blank"
                        className="cursor-pointer text-white"
                        onClick={download}
                    >
                        Télécharger
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Exercice;
