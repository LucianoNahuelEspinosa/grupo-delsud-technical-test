'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import './page.scss';
import Header from "@/components/header/Header";

export default function Home() {
  const form = useRef();
  const hiddenFileInput = useRef(null);
  const [image, setImage] = useState(null);
  const [passVisible, setPassVisible] = useState(false);

  const fileButtonClick = () => {
    hiddenFileInput.current.click();
  };

  const fileInputChange = (event) => {
    const file = event.target.files[0];
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const imagePreviewURL = e.target.result;
      setImage(imagePreviewURL);
      console.log(imagePreviewURL);
    };
    reader.readAsDataURL(file);
  };

  const passwordHandle = () => {
    setPassVisible(!passVisible);
  }

  const submitHandle = (e) => {
    e.preventDefault();
  
    if (image) {
      alert(`Usuario registrado: ${e.target.name.value} con el mail ${e.target.email.value}`);
    } else {
      alert('Por favor, subí una imagen');
    }
  }

  return (
    <main className="signin-section-holder">
      <div className="signin-content">
        <Header />
        <section className="form-wrap">
          <div className="container">
            <h1>¡Bienvenido!</h1>
            <p>Convertite ahora en un agente Flexy.</p>

            <form ref={form} onSubmit={submitHandle}>
              <div className="file-input-holder">
                <button type="button" onClick={fileButtonClick}>
                  <Image src={image ? image : '/assets/gallery.svg'} alt="Gallery" width={47} height={47} priority />
                </button>
                <h4>Subí tu foto de perfil</h4>

                <input type="file" id="file" name="file" ref={hiddenFileInput} style={{ display: 'none' }} onChange={fileInputChange} accept="image/*" />
              </div>

              <input type="text" name="name" id="name" placeholder="Nombre y Apellido" required />
              <input type="tel" name="tel" id="tel" placeholder="+54 01 0200 000" required />
              <input type="email" name="email" id="email" placeholder="hola@tuemail.com" required />

              <div className="password-input">
                <div className="password-holder">
                  <input type={passVisible ? 'text' : 'password'} name="password" id="password" placeholder="Ingresá tu contraseña" minLength={8} required />
                  <button type="button" onClick={passwordHandle}>
                    <Image src="/assets/Outline.svg" alt="Outline" width={24} height={24} priority />
                  </button>
                </div>
                <p>Debe tener al menos 8 caracteres.</p>
              </div>

              <button type="submit" className="submit-btn">Registrate</button>

              <p>¿Ya tenés una cuenta? <a href="#">Iniciá sesión</a></p>
            </form>
          </div>
        </section>
      </div>
      <Image src="/assets/inicia-sesión-agente 2.webp" alt="Banner" className="signin-banner" width={950} height={950} priority />
    </main>
  );
}
