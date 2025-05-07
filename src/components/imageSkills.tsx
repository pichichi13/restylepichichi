import { } from 'react';

interface Props {
  name: string;
  path: string;
}

const ImageSkills: React.FC<Props> = ({ name, path}) => {

  return (
    <>
      <img
        src={path}
        alt={name}
        className={`skills-image ${name}`}
      />
    </>
  );
};

export default ImageSkills;
