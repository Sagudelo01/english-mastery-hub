"use client";
import Image from "next/image";
import AnimatedTitle from "@/components/animatedTitle";
export default function LoginForm() {

  return (
    <div className="flex shadow-2xl">
      <div className="flex flex-col items-center justify-center text-center p-20 gap-8 bg-[#f5f5f5ab] rounded-2xl xl:rounded-tr-none xl:rounded-br-none">
        
        <AnimatedTitle />

        <div className="flex flex-col text-2xl text-left gap-1 text-black">
          <span>Usuario</span>
          <input
            type="text"
            className="rounded-md p-1 border-2 outline-none focus:border-[#704e47] focus:bg-[#f5f5f56e]"
          />
        </div>

        <div className="flex flex-col text-2xl text-left gap-1 text-black">
          <span>Contraseña</span>
          <input
            type="password"
            className="rounded-md p-1 border-2 outline-none focus:border-[#704e47] focus:bg-[#f5f5f56e]"
          />
          <div className="flex gap-1 items-center">
            <input type="checkbox" />
            <span className="text-base text-black">Recordar contraseña</span>
          </div>
        </div>

        <button className="px-10 py-2 text-2xl rounded-md bg-linear-to-r from-[#796865] from-10% via-[#8c6c65] via-50% to-[#99695e] to-100% text-[#0f0a0ac7] hover:scale-105 transition-all">
          Inicia con Google
        </button>

        <p className="font-semibold text-black">
          ¿No tienes una cuenta?{" "}
          <a href="#" className="text-[#4b587c] hover:underline">
            Registrate
          </a>
        </p>
      </div>

      <Image
        src="/img/imagenLogin.jpg"
        alt="Login"
        width={450}
        height={450}
        className="object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden"
      />
    </div>
  );
}
