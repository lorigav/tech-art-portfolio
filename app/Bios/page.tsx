import Link from 'next/link';
import React from 'react'
import Image from 'next/image'

const BioPage = () => {
  const currentAge = new Date().getFullYear() - 2003;

  return (
    <div className='w-5/6 mx-auto'>
      <h1 className='text-xl text-center p-5'>Technical Artist Passionate About Animation and 3d Modeling</h1>
      <div className='flex item-center justify-center'>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <Image src="/images/profile1.jpg" alt="" className='w-96' width={150} height={150} />
          </figure>
          <div className="card-body text-justify">
            <h2 className="card-title">About Me</h2>
            <p>Hello! My name is Lori Gavia and I am a {currentAge} year old recent grad from Cal Poly San Luis Obispo, where I studied Liberal Arts and Engineering with concentrations in Computer Graphics and Animation.
              I have worked on all aspects of the 3D pipeline, including modeling, texturing, rigging, and animation. While also working in cross-disciplinary teams in college, I have used these skills to create visually immersive
              and entertaining games and videos. Passionate about digital media and creative spaces in general, I love to see the work other people have done and am continuing to learn and grow as a technical artist.
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