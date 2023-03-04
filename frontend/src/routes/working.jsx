import Container from "../components/Container";
import React from 'react';
const developers = [
  {
    name: 'Rudransh Bansal',
    image: 'path/to/image1.png',
    bio: 'ML Developer',
    skills: 'Skills of developer 1'
  },
  {
    name: 'Kartik Srivastava',
    image: 'path/to/image2.png',
    bio: 'ML Developer',
    skills: 'Skills of developer 2'
  },
  {
    name: 'Chayan Sinha',
    image: 'path/to/image3.png',
    bio: 'Frontend Developer',
    skills: 'Skills of developer 3'
  },
  {
    name: 'Developer 4',
    image: 'path/to/image4.png',
    bio: 'Bio of developer 4',
    skills: 'Skills of developer 4'
  }
];




const Working = () => {
  return (
    <main className="max-w-7xl mx-auto my-20">
      <h1 className="text-center text-3xl font-bold">TEAM BITLOCK</h1>
      <Container>
      <h1>About Us</h1>
      <div className="developer-container">
        {developers.map((developer, index) => (
          <div key={index} className="developer-card">
            <img src={developer.image} alt={developer.name} className="developer-image" />
            <h2>{developer.name}</h2>
            <p>{developer.bio}</p>
            <p>Skills: {developer.skills}</p>
          </div>
        ))}
      </div>
      </Container>
    </main>
  );
};

export default Working;
