import UpdateItem from "../components/UpdateItem";

const UpdatePage = props => {
  return (
    <div>
      <UpdateItem id={props.query.id} />
    </div>
  );
};

export default UpdatePage;
