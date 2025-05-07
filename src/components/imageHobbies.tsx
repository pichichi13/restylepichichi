interface Props {
  name: string;
  description: string;
  path: string;
}

const ImageHobbies: React.FC<Props> = ({ name, description, path }) => {
  
  return (
    <>
      <div className="image-container" style={{ position: 'relative' }}>
        <img
          src={path}
          alt={name}
         />
        <div className="description">
          {description}
        </div>
      </div>
    </>
  );
};

export default ImageHobbies;
