import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

const BioPage = () => {
  const currentAge = new Date().getFullYear() - 2003;

  return (
    <div className='w-5/6 mx-auto'>
      <h1 className='text-xl text-center p-5'>Artist Passionate in Architecture & Nature Artworks</h1>
      <div className='flex item-center justify-center'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image src="/images/profile.jpg" alt="" className='w-96' width={150} height={150} />
          </figure>
          <div className="card-body text-justify">
            <h2 className="card-title">About Me</h2>
            <p>Hello! My name is Lori Gavia and I am a technical artist based in Los Angeles, CA. I am currently {currentAge} and studied Liberal Arts and Engineering at
              Cal Poly San Luis Obispo with concentations in Computer Graphics and Animation. A lot of the projects I have worked on in college revolve around game development 
              game engine optimization, and 3d asset creation. Passionate about both art and technology, I strive to provide efficient technical support to creative teams.
            </p>
            <Link href="/Contact">
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Get In Touch</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BioPage