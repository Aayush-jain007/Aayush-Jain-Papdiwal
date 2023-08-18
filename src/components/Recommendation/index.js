import { CustomCard, Title } from "../../styledComponents/styled";

const Recommendations = (props) => {
  const { each } = props;
  const { imageUrl, name } = each;
  return (
    <CustomCard backgroundImage={imageUrl}>
      <Title>{name}</Title>
    </CustomCard>
  );
};

export default Recommendations;
