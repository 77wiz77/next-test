const plain = () => null;

export const getServerSideProps = async ({ res }) => {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('author', '77wiz77');
  res.end('77wiz77');
  return { props: {} };
};

export default plain;
