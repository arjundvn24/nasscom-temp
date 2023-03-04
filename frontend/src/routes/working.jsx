<<<<<<< HEAD
import Container from "../components/Container";

const Working = () => {
  return (
    <main className="max-w-2xl mx-auto my-20">
      <h1 className="text-center text-3xl font-bold">How we did it?</h1>
      <Container>
        <p>
          The geometric relation among points expresses their spatial position
          concerning each other, further reflecting their underlying shape. KNN
          has demonstrated its abstraction capability for 2D images that are in
          the format of a regular grid. Aligning the point clouds is necessary
          as it will help us efficiently compute the similarity between two
          point clouds. This is done by Compute the centroids of both the source
          and target point clouds. Translate both point clouds so that their
          centroids coincide. Compute the covariance matrix of the two point
          clouds. Compute the Singular Value Decomposition (SVD) of the
          covariance matrix. Compute the rotation matrix and translation vector
          from the SVD. Apply the rotation matrix and translation vector to the
          source point cloud. Repeat the above steps until convergence. The
          following steps include scale{" "}
        </p>
      </Container>
    </main>
  );
};

export default Working;
=======
import Container from "../components/Container";
import React from 'react';
import rudransh from "../../images/Rudransh.PNG"
import kartik from "../../images/Kartik.png"
import chayan from "../../images/Chayan.PNG"
import arjun from "../../images/Arjun.png"
const developers = [
  {
    name: 'Rudransh Bansal',
    image: {rudransh},
    bio: 'ML Developer',
    skills: 'Skills of developer 1'
  },
  {
    name: 'Kartik Srivastava',
    image: {chayan},
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
>>>>>>> d84d01e62427c1819ba743f2bdfb148d0c032dbd
